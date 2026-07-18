<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useDeviceCapability } from '../../composables/useDeviceCapability'
import { useTheme } from '../../composables/useTheme'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const { enableHeavyEffects, isHighRes } = useDeviceCapability()
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
let mouseX = 0
let mouseY = 0

function getParticleColors(): { rgb: string; lineAlpha: number } {
  const root = document.documentElement
  const rgb = getComputedStyle(root).getPropertyValue('--color-particle-rgb').trim() || '14, 165, 233'
  const lineAlpha = parseFloat(getComputedStyle(root).getPropertyValue('--color-particle-line')) || 0.1
  return { rgb, lineAlpha }
}

function initParticles(w: number, h: number): void {
  const base = isHighRes.value ? 120 : 70
  const count = enableHeavyEffects.value ? base : 35
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    size: Math.random() * 2 + 0.5,
    alpha: Math.random() * 0.5 + 0.2,
  }))
}

function draw(): void {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const w = canvas.width
  const h = canvas.height
  const { rgb, lineAlpha } = getParticleColors()
  ctx.clearRect(0, 0, w, h)

  particles.forEach((p, i) => {
    if (enableHeavyEffects.value) {
      const dx = mouseX - p.x
      const dy = mouseY - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 120) {
        p.vx -= dx * 0.00008
        p.vy -= dy * 0.00008
      }
    }

    p.x += p.vx
    p.y += p.vy
    if (p.x < 0 || p.x > w) p.vx *= -1
    if (p.y < 0 || p.y > h) p.vy *= -1

    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`
    ctx.fill()

    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j]
      const dx = p.x - p2.x
      const dy = p.y - p2.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 100) {
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.strokeStyle = `rgba(${rgb}, ${lineAlpha * (1 - dist / 100)})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }
  })

  animationId = requestAnimationFrame(draw)
}

function resize(): void {
  const canvas = canvasRef.value
  if (!canvas) return
  const dpr = Math.min(window.devicePixelRatio, 2)
  canvas.width = canvas.offsetWidth * dpr
  canvas.height = canvas.offsetHeight * dpr
  const ctx = canvas.getContext('2d')
  ctx?.scale(dpr, dpr)
  initParticles(canvas.offsetWidth, canvas.offsetHeight)
}

function onMouseMove(e: MouseEvent): void {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  mouseX = e.clientX - rect.left
  mouseY = e.clientY - rect.top
}

watch(theme, () => {
  /* colors read each frame from CSS vars */
})

onMounted(() => {
  resize()
  draw()
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', onMouseMove, { passive: true })
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="particle-canvas absolute inset-0 h-full w-full pointer-events-none"
    aria-hidden="true"
  />
</template>