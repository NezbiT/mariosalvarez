<!--
  Logo MA dibujado en canvas: monograma técnico con anillo y brillo animado.
-->
<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 36 },
)

const canvasRef = ref<HTMLCanvasElement | null>(null)
let rafId = 0
let start = 0

function getAccent(): string {
  if (typeof document === 'undefined') return '#0ea5e9'
  const theme = document.documentElement.dataset.theme
  return theme === 'dark' ? '#38bdf8' : '#0284c7'
}

function getFg(): string {
  if (typeof document === 'undefined') return '#102a43'
  const theme = document.documentElement.dataset.theme
  return theme === 'dark' ? '#f0f4f8' : '#102a43'
}

function draw(ts: number): void {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  if (!start) start = ts
  const t = (ts - start) / 1000

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const size = props.size
  const css = size
  if (canvas.width !== css * dpr || canvas.height !== css * dpr) {
    canvas.width = css * dpr
    canvas.height = css * dpr
    canvas.style.width = `${css}px`
    canvas.style.height = `${css}px`
  }

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, size, size)

  const cx = size / 2
  const cy = size / 2
  const r = size * 0.42
  const accent = getAccent()
  const fg = getFg()

  // Soft glow pulse
  const pulse = 0.35 + Math.sin(t * 1.8) * 0.12
  const glow = ctx.createRadialGradient(cx, cy, r * 0.2, cx, cy, r * 1.15)
  glow.addColorStop(0, `${accent}33`)
  glow.addColorStop(1, `${accent}00`)
  ctx.fillStyle = glow
  ctx.beginPath()
  ctx.arc(cx, cy, r * 1.15, 0, Math.PI * 2)
  ctx.fill()

  // Outer ring
  ctx.strokeStyle = accent
  ctx.lineWidth = size * 0.055
  ctx.globalAlpha = 0.85
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
  ctx.stroke()

  // Rotating arc segment
  ctx.globalAlpha = 1
  ctx.strokeStyle = accent
  ctx.lineWidth = size * 0.08
  ctx.lineCap = 'round'
  const arcStart = t * 1.2
  ctx.beginPath()
  ctx.arc(cx, cy, r, arcStart, arcStart + Math.PI * 0.55)
  ctx.stroke()

  // Second thin counter-arc
  ctx.lineWidth = size * 0.035
  ctx.globalAlpha = 0.55
  ctx.beginPath()
  ctx.arc(cx, cy, r * 0.78, -arcStart * 1.4, -arcStart * 1.4 + Math.PI * 0.7)
  ctx.stroke()
  ctx.globalAlpha = 1

  // Inner fill disc
  ctx.fillStyle = `${accent}${Math.round(pulse * 40).toString(16).padStart(2, '0')}`
  ctx.beginPath()
  ctx.arc(cx, cy, r * 0.62, 0, Math.PI * 2)
  ctx.fill()

  // Monogram MA
  ctx.fillStyle = fg
  ctx.font = `700 ${size * 0.32}px "Space Grotesk", "Inter", system-ui, sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('MA', cx, cy + size * 0.02)

  // Micro node dots (data/industrial feel)
  const nodes = 6
  for (let i = 0; i < nodes; i++) {
    const a = (i / nodes) * Math.PI * 2 + t * 0.4
    const nr = r * 0.92
    const nx = cx + Math.cos(a) * nr
    const ny = cy + Math.sin(a) * nr
    ctx.fillStyle = accent
    ctx.globalAlpha = 0.5 + 0.5 * Math.sin(t * 2 + i)
    ctx.beginPath()
    ctx.arc(nx, ny, size * 0.035, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.globalAlpha = 1

  rafId = requestAnimationFrame(draw)
}

let themeObserver: MutationObserver | null = null

onMounted(() => {
  rafId = requestAnimationFrame(draw)
  themeObserver = new MutationObserver(() => {
    // redraw picks new colors on next frame
  })
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  })
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  themeObserver?.disconnect()
})

watch(
  () => props.size,
  () => {
    start = 0
  },
)
</script>

<template>
  <canvas
    ref="canvasRef"
    class="canvas-logo block"
    :width="size"
    :height="size"
    role="img"
    aria-label="Mario Alvarez"
  />
</template>

<style scoped>
.canvas-logo {
  border-radius: 9999px;
}
</style>
