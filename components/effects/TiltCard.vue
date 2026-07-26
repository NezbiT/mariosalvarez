<script setup lang="ts">
/**
 * Tilt 3D solo en desktop capable; en mobile es un wrapper sin listeners.
 */
import { ref } from 'vue'
import { useDeviceCapability } from '~/composables/useDeviceCapability'

const { enableHeavyEffects } = useDeviceCapability()

const cardRef = ref<HTMLElement | null>(null)
const rotateX = ref(0)
const rotateY = ref(0)
const glowX = ref(50)
const glowY = ref(50)
let raf = 0

function onMove(e: MouseEvent): void {
  if (!enableHeavyEffects.value) return
  const el = cardRef.value
  if (!el) return

  const rect = el.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height

  const nextY = (x - 0.5) * 10
  const nextX = (0.5 - y) * 10
  const nextGx = x * 100
  const nextGy = y * 100

  if (raf) cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    rotateY.value = nextY
    rotateX.value = nextX
    glowX.value = nextGx
    glowY.value = nextGy
  })
}

function onLeave(): void {
  if (raf) cancelAnimationFrame(raf)
  rotateX.value = 0
  rotateY.value = 0
  glowX.value = 50
  glowY.value = 50
}
</script>

<template>
  <div
    v-if="!enableHeavyEffects"
    class="h-full"
  >
    <slot />
  </div>
  <div
    v-else
    ref="cardRef"
    class="tilt-card perspective-container h-full"
    :style="{
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      '--glow-x': `${glowX}%`,
      '--glow-y': `${glowY}%`,
    }"
    @mousemove="onMove"
    @mouseleave="onLeave"
  >
    <div class="tilt-card-inner relative h-full">
      <slot />
    </div>
  </div>
</template>
