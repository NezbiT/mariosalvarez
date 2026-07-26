import fs from 'node:fs'
import path from 'node:path'

function walk(dir) {
  if (!fs.existsSync(dir)) return
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name)
    if (f.isDirectory()) walk(p)
    else if (/\.(vue|ts)$/.test(f.name)) {
      let s = fs.readFileSync(p, 'utf8')
      const n = s
        .replace(/from ['"]~\/types['"]/g, "from '#shared/types'")
        .replace(/from ['"]~~\/types['"]/g, "from '#shared/types'")
        .replace(/children:\s*JSON\.stringify/g, 'textContent: JSON.stringify')
        .replace(
          /children:\s*`(\(function\(\)\{try\{var t=localStorage)/,
          'textContent: `$1',
        )
      if (n !== s) {
        fs.writeFileSync(p, n)
        console.log('fixed', p)
      }
    }
  }
}

walk('app')
walk('shared')
