<!--
  Logo MA estático en canvas (1 paint). Sin rAF continuo.
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
let themeObs: MutationObserver | null = null

function getAccent(): string {
  if (typeof document === 'undefined') return '#0ea5e9'
  return document.documentElement.dataset.theme === 'dark' ? '#38bdf8' : '#0284c7'
}

function getFg(): string {
  if (typeof document === 'undefined') return '#102a43'
  return document.documentElement.dataset.theme === 'dark' ? '#f0f4f8' : '#102a43'
}

function paint(): void {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const size = props.size
  canvas.width = size * dpr
  canvas.height = size * dpr
  canvas.style.width = `${size}px`
  canvas.style.height = `${size}px`
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, size, size)

  const cx = size / 2
  const cy = size / 2
  const r = size * 0.42
  const accent = getAccent()
  const fg = getFg()

  const glow = ctx.createRadialGradient(cx, cy, r * 0.2, cx, cy, r * 1.1)
  glow.addColorStop(0, `${accent}40`)
  glow.addColorStop(1, `${accent}00`)
  ctx.fillStyle = glow
  ctx.beginPath()
  ctx.arc(cx, cy, r * 1.1, 0, Math.PI * 2)
  ctx.fill()

  ctx.strokeStyle = accent
  ctx.lineWidth = size * 0.06
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
  ctx.stroke()

  ctx.lineWidth = size * 0.09
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.arc(cx, cy, r, -0.4, 1.4)
  ctx.stroke()

  ctx.fillStyle = `${accent}22`
  ctx.beginPath()
  ctx.arc(cx, cy, r * 0.62, 0, Math.PI * 2)
  ctx.fill()

  ctx.fillStyle = fg
  ctx.font = `700 ${size * 0.32}px "Space Grotesk", "Inter", system-ui, sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('MA', cx, cy + size * 0.02)
}

onMounted(() => {
  paint()
  themeObs = new MutationObserver(paint)
  themeObs.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  })
})

onUnmounted(() => {
  themeObs?.disconnect()
  themeObs = null
})

watch(() => props.size, paint)
</script>

<template>
  <canvas
    ref="canvasRef"
    class="canvas-logo block"
    :width="size"
    :height="size"
    role="img"
    aria-label="Mario Alvarez, Mario S. Alvarez"
  />
</template>

<style scoped>
.canvas-logo {
  border-radius: 9999px;
}
</style>
