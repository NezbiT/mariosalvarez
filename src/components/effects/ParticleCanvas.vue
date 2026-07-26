<script setup lang="ts">
/**
 * Partículas ligeras: pocos puntos, ~30 FPS, sin líneas O(n²), pausa en tab oculta.
 */
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useDeviceCapability } from '../../composables/useDeviceCapability'
import { useTheme } from '../../composables/useTheme'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const { enableHeavyEffects } = useDeviceCapability()
const { theme } = useTheme()

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
}

let particles: Particle[] = []
let animationId = 0
let lastFrame = 0
let running = false
let rgb = '14, 165, 233'
const TARGET_MS = 1000 / 28

function readColors(): void {
  const root = document.documentElement
  rgb = getComputedStyle(root).getPropertyValue('--color-particle-rgb').trim() || '14, 165, 233'
}

function initParticles(w: number, h: number): void {
  // Keep count low — lines were the expensive part and are gone
  const count = 28
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    size: Math.random() * 1.6 + 0.4,
    alpha: Math.random() * 0.35 + 0.15,
  }))
}

function draw(ts: number): void {
  if (!running) return
  animationId = requestAnimationFrame(draw)

  if (ts - lastFrame < TARGET_MS) return
  lastFrame = ts

  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const w = canvas.clientWidth
  const h = canvas.clientHeight
  ctx.clearRect(0, 0, w, h)

  for (const p of particles) {
    p.x += p.vx
    p.y += p.vy
    if (p.x < 0 || p.x > w) p.vx *= -1
    if (p.y < 0 || p.y > h) p.vy *= -1

    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`
    ctx.fill()
  }
}

function resize(): void {
  const canvas = canvasRef.value
  if (!canvas) return
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
  const w = canvas.offsetWidth
  const h = canvas.offsetHeight
  canvas.width = Math.floor(w * dpr)
  canvas.height = Math.floor(h * dpr)
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
  initParticles(w, h)
}

function start(): void {
  if (running || !enableHeavyEffects.value) return
  running = true
  readColors()
  resize()
  lastFrame = 0
  animationId = requestAnimationFrame(draw)
}

function stop(): void {
  running = false
  cancelAnimationFrame(animationId)
  animationId = 0
}

function onVisibility(): void {
  if (document.hidden) stop()
  else if (enableHeavyEffects.value) start()
}

watch(theme, readColors)
watch(enableHeavyEffects, (on) => {
  if (on) start()
  else stop()
})

onMounted(() => {
  if (enableHeavyEffects.value) start()
  window.addEventListener('resize', resize, { passive: true })
  document.addEventListener('visibilitychange', onVisibility)
})

onUnmounted(() => {
  stop()
  window.removeEventListener('resize', resize)
  document.removeEventListener('visibilitychange', onVisibility)
})
</script>

<template>
  <canvas
    v-if="enableHeavyEffects"
    ref="canvasRef"
    class="particle-canvas absolute inset-0 h-full w-full pointer-events-none"
    aria-hidden="true"
  />
</template>
