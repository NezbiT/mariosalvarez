<script setup lang="ts">
import { ref } from 'vue'

const cardRef = ref<HTMLElement | null>(null)
const rotateX = ref(0)
const rotateY = ref(0)
const glowX = ref(50)
const glowY = ref(50)

function onMove(e: MouseEvent): void {
  const el = cardRef.value
  if (!el || window.innerWidth < 768) return

  const rect = el.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height

  rotateY.value = (x - 0.5) * 14
  rotateX.value = (0.5 - y) * 14
  glowX.value = x * 100
  glowY.value = y * 100
}

function onLeave(): void {
  rotateX.value = 0
  rotateY.value = 0
  glowX.value = 50
  glowY.value = 50
}
</script>

<template>
  <div
    ref="cardRef"
    class="tilt-card perspective-container"
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