#!/usr/bin/env node
/**
 * Builds the hero's Texas county map from public-domain US Census geometry.
 *
 * Source: US Census Bureau, 2023 Cartographic Boundary File, counties, 1:5,000,000
 *   https://www2.census.gov/geo/tiger/GENZ2023/shp/cb_2023_us_county_5m.zip
 *   (catalog: https://www.census.gov/geographies/mapping-files/time-series/geo/cartographic-boundary.html)
 * US Government work, public domain.
 *
 * Steps: download the zip, read the .shp/.dbf straight out of it (no deps),
 * keep STATEFP 48, project with Texas Centric Albers Equal Area (EPSG:3083
 * parameters on a sphere), fit into a fixed viewBox, simplify shared borders
 * consistently (junction-preserving Douglas–Peucker, so neighbours keep
 * matching edges), round to integers and write relative SVG paths.
 *
 * Output: app/assets/data/texas-map.json
 *   { viewBox, outline: pathD, counties: { [fips5]: pathD }, houston: { x, y } }
 *
 * Run: node scripts/build-texas-map.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { inflateRawSync } from 'node:zlib'

const SOURCE = 'https://www2.census.gov/geo/tiger/GENZ2023/shp/cb_2023_us_county_5m.zip'
const OUT_FILE = resolve(dirname(fileURLToPath(import.meta.url)), '../app/assets/data/texas-map.json')
const WIDTH = 1000
const PAD = 4
/** Douglas–Peucker tolerance, in viewBox units. */
const TOLERANCE = 0.6
/** Houston City Hall (901 Bagby St), Harris County. */
const HOUSTON = { lon: -95.3698, lat: 29.7604 }

// ── zip ─────────────────────────────────────────────────────────────
function unzip(buf) {
  let eocd = buf.length - 22
  while (eocd >= 0 && buf.readUInt32LE(eocd) !== 0x06054b50) eocd--
  if (eocd < 0) throw new Error('zip: end of central directory not found')
  const count = buf.readUInt16LE(eocd + 10)
  let p = buf.readUInt32LE(eocd + 16)
  const files = new Map()
  for (let i = 0; i < count; i++) {
    const method = buf.readUInt16LE(p + 10)
    const size = buf.readUInt32LE(p + 20)
    const nameLen = buf.readUInt16LE(p + 28)
    const extraLen = buf.readUInt16LE(p + 30)
    const commentLen = buf.readUInt16LE(p + 32)
    const local = buf.readUInt32LE(p + 42)
    const name = buf.toString('utf8', p + 46, p + 46 + nameLen)
    const start = local + 30 + buf.readUInt16LE(local + 26) + buf.readUInt16LE(local + 28)
    const raw = buf.subarray(start, start + size)
    files.set(name, method === 0 ? raw : inflateRawSync(raw))
    p += 46 + nameLen + extraLen + commentLen
  }
  return files
}

// ── dbf ─────────────────────────────────────────────────────────────
function readDbf(buf) {
  const n = buf.readUInt32LE(4)
  const headerLen = buf.readUInt16LE(8)
  const recordLen = buf.readUInt16LE(10)
  const fields = []
  let offset = 1
  for (let p = 32; buf[p] !== 0x0d; p += 32) {
    const name = buf.toString('latin1', p, p + 11).replace(/\0.*$/, '')
    const len = buf[p + 16]
    fields.push({ name, offset, len })
    offset += len
  }
  const rows = []
  for (let i = 0; i < n; i++) {
    const base = headerLen + i * recordLen
    const row = {}
    for (const f of fields) row[f.name] = buf.toString('latin1', base + f.offset, base + f.offset + f.len).trim()
    rows.push(row)
  }
  return rows
}

// ── shp (polygons) ──────────────────────────────────────────────────
function readShp(buf) {
  const shapes = []
  let p = 100
  while (p < buf.length) {
    const len = buf.readInt32BE(p + 4) * 2
    const c = p + 8
    const type = buf.readInt32LE(c)
    const rings = []
    if (type === 5) {
      const numParts = buf.readInt32LE(c + 36)
      const numPoints = buf.readInt32LE(c + 40)
      const parts = []
      for (let i = 0; i < numParts; i++) parts.push(buf.readInt32LE(c + 44 + i * 4))
      const pts = c + 44 + numParts * 4
      for (let i = 0; i < numParts; i++) {
        const end = i + 1 < numParts ? parts[i + 1] : numPoints
        const ring = []
        for (let j = parts[i]; j < end; j++) ring.push([buf.readDoubleLE(pts + j * 16), buf.readDoubleLE(pts + j * 16 + 8)])
        rings.push(ring)
      }
    }
    shapes.push(rings)
    p = c + len
  }
  return shapes
}

// ── projection: Albers equal-area conic, Texas Centric (EPSG:3083) ──
const RAD = Math.PI / 180
const phi1 = 27.5 * RAD
const phi2 = 35 * RAD
const phi0 = 18 * RAD
const lam0 = -100 * RAD
const nAlb = (Math.sin(phi1) + Math.sin(phi2)) / 2
const C = Math.cos(phi1) ** 2 + 2 * nAlb * Math.sin(phi1)
const rho0 = Math.sqrt(C - 2 * nAlb * Math.sin(phi0)) / nAlb
function albers([lon, lat]) {
  const rho = Math.sqrt(C - 2 * nAlb * Math.sin(lat * RAD)) / nAlb
  const theta = nAlb * (lon * RAD - lam0)
  return [rho * Math.sin(theta), rho0 - rho * Math.cos(theta)]
}

// ── simplification ──────────────────────────────────────────────────
function douglasPeucker(pts, tol) {
  if (pts.length < 3) return pts
  const keep = new Uint8Array(pts.length)
  keep[0] = keep[pts.length - 1] = 1
  const stack = [[0, pts.length - 1]]
  while (stack.length) {
    const [a, b] = stack.pop()
    const [ax, ay] = pts[a]
    const [bx, by] = pts[b]
    const dx = bx - ax
    const dy = by - ay
    const len = Math.hypot(dx, dy)
    let max = -1
    let idx = -1
    for (let i = a + 1; i < b; i++) {
      const [px, py] = pts[i]
      const d = len === 0 ? Math.hypot(px - ax, py - ay) : Math.abs(dy * px - dx * py + bx * ay - by * ax) / len
      if (d > max) { max = d; idx = i }
    }
    if (max > tol) {
      keep[idx] = 1
      stack.push([a, idx], [idx, b])
    }
  }
  return pts.filter((_, i) => keep[i])
}

const key = ([x, y]) => `${x},${y}`

/**
 * Splits each closed ring at junctions (vertices whose set of owning counties
 * differs from a neighbour's) and simplifies each piece. Shared arcs carry
 * identical vertices in both counties, so both sides simplify the same way.
 */
function simplifyRings(rings, owners) {
  const sig = (p) => owners.get(key(p))
  return rings.map((ring) => {
    const pts = ring.slice(0, -1) // drop closing duplicate
    const n = pts.length
    const fixed = []
    for (let i = 0; i < n; i++) {
      const s = sig(pts[i])
      if (s !== sig(pts[(i - 1 + n) % n]) || s !== sig(pts[(i + 1) % n])) fixed.push(i)
    }
    if (fixed.length === 0) {
      // Island or a ring with no junctions: anchor at 0 and its farthest point.
      let far = 0
      let best = -1
      for (let i = 1; i < n; i++) {
        const d = Math.hypot(pts[i][0] - pts[0][0], pts[i][1] - pts[0][1])
        if (d > best) { best = d; far = i }
      }
      fixed.push(0, far)
    }
    const out = []
    for (let k = 0; k < fixed.length; k++) {
      const a = fixed[k]
      const b = fixed[(k + 1) % fixed.length]
      const piece = []
      for (let i = a; ; i = (i + 1) % n) {
        piece.push(pts[i])
        if (i === b && piece.length > 1) break
      }
      const simple = douglasPeucker(piece, TOLERANCE)
      out.push(...simple.slice(0, -1))
    }
    return out
  })
}

// ── path encoding ───────────────────────────────────────────────────
function num(v, first) {
  return v < 0 || first ? String(v) : ` ${v}`
}
function ringsToPath(rings) {
  let d = ''
  for (const ring of rings) {
    let [px, py] = ring[0]
    d += `M${px}${num(py)}l`
    let first = true
    for (let i = 1; i < ring.length; i++) {
      const [x, y] = ring[i]
      d += num(x - px, first) + num(y - py)
      first = false
      px = x
      py = y
    }
    d += 'z'
  }
  return d
}

/** Rounds, removes consecutive duplicates and degenerate rings. */
function cleanRings(rings, toView) {
  const out = []
  for (const ring of rings) {
    const pts = []
    for (const p of ring) {
      const q = toView(p)
      const last = pts[pts.length - 1]
      if (!last || last[0] !== q[0] || last[1] !== q[1]) pts.push(q)
    }
    while (pts.length > 1 && key(pts[0]) === key(pts[pts.length - 1])) pts.pop()
    if (pts.length >= 3) out.push(pts)
  }
  return out
}

/** Edges used by exactly one county form the state outline. */
function outlineFrom(countyRings) {
  const edges = new Map()
  for (const rings of countyRings) {
    for (const ring of rings) {
      for (let i = 0; i < ring.length; i++) {
        const a = key(ring[i])
        const b = key(ring[(i + 1) % ring.length])
        const undirected = a < b ? `${a}|${b}` : `${b}|${a}`
        const e = edges.get(undirected)
        if (e) e.count++
        else edges.set(undirected, { a, b, count: 1 })
      }
    }
  }
  const next = new Map()
  for (const e of edges.values()) {
    if (e.count !== 1) continue
    if (!next.has(e.a)) next.set(e.a, [])
    next.get(e.a).push(e.b)
  }
  const rings = []
  for (const start of [...next.keys()]) {
    while (next.get(start)?.length) {
      const ring = [start]
      let cur = next.get(start).pop()
      while (cur !== start) {
        ring.push(cur)
        const outs = next.get(cur)
        if (!outs?.length) throw new Error(`outline: open chain at ${cur}`)
        cur = outs.pop()
      }
      rings.push(ring.map(s => s.split(',').map(Number)))
    }
  }
  return rings
}

// ── main ────────────────────────────────────────────────────────────
console.log(`Downloading ${SOURCE}`)
const res = await fetch(SOURCE)
if (!res.ok) throw new Error(`${SOURCE} responded ${res.status}`)
const files = unzip(Buffer.from(await res.arrayBuffer()))
const shpName = [...files.keys()].find(n => n.endsWith('.shp'))
const dbfName = [...files.keys()].find(n => n.endsWith('.dbf'))
if (!shpName || !dbfName) throw new Error('zip is missing .shp/.dbf')
const rows = readDbf(files.get(dbfName))
const shapes = readShp(files.get(shpName))

const counties = []
rows.forEach((row, i) => {
  if (row.STATEFP === '48') counties.push({ fips: row.GEOID, rings: shapes[i].map(r => r.map(albers)) })
})
if (counties.length !== 254) throw new Error(`expected 254 Texas counties, got ${counties.length}`)

// Fit the projected bounds into WIDTH (height follows the aspect ratio).
let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
for (const c of counties) for (const r of c.rings) for (const [x, y] of r) {
  minX = Math.min(minX, x); maxX = Math.max(maxX, x)
  minY = Math.min(minY, y); maxY = Math.max(maxY, y)
}
const scale = (WIDTH - PAD * 2) / (maxX - minX)
const HEIGHT = Math.ceil((maxY - minY) * scale + PAD * 2)
const toView = ([x, y]) => [(x - minX) * scale + PAD, (maxY - y) * scale + PAD]
const toInt = ([x, y]) => [Math.round(x), Math.round(y)]

// Project to view space first so the tolerance is in viewBox units.
for (const c of counties) c.rings = c.rings.map(r => r.map(toView))
const owners = new Map()
for (const c of counties) for (const r of c.rings) for (const p of r) {
  const k = key(p)
  owners.set(k, owners.has(k) ? `${owners.get(k)} ${c.fips}` : c.fips)
}
for (const [k, v] of owners) owners.set(k, [...new Set(v.split(' '))].sort().join(' '))

const countyPaths = {}
const roundedRings = []
for (const c of counties.sort((a, b) => a.fips.localeCompare(b.fips))) {
  const rings = cleanRings(simplifyRings(c.rings, owners), toInt)
  roundedRings.push(rings)
  countyPaths[c.fips] = ringsToPath(rings)
}

// The outline keeps every county junction; drop the collinear ones.
function dropCollinear(ring) {
  return ring.filter((p, i) => {
    const a = ring[(i - 1 + ring.length) % ring.length]
    const b = ring[(i + 1) % ring.length]
    return (p[0] - a[0]) * (b[1] - p[1]) - (p[1] - a[1]) * (b[0] - p[0]) !== 0
  })
}
const outline = ringsToPath(outlineFrom(roundedRings).map(dropCollinear).filter(r => r.length >= 3))
const [hx, hy] = toView(albers([HOUSTON.lon, HOUSTON.lat]))
const map = {
  viewBox: `0 0 ${WIDTH} ${HEIGHT}`,
  outline,
  counties: countyPaths,
  houston: { x: Math.round(hx * 10) / 10, y: Math.round(hy * 10) / 10 },
}

await mkdir(dirname(OUT_FILE), { recursive: true })
const json = JSON.stringify(map)
await writeFile(OUT_FILE, `${json}\n`)
console.log(`${OUT_FILE}: ${(json.length / 1024).toFixed(1)} KB, viewBox ${map.viewBox}, ${Object.keys(countyPaths).length} counties, outline ${(outline.length / 1024).toFixed(1)} KB, houston ${map.houston.x},${map.houston.y}`)
