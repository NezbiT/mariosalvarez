<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'ghost'
  }>(),
  { variant: 'primary' },
)

const emit = defineEmits<{
  click: []
}>()

const btnRef = ref<HTMLElement | null>(null)
const offsetX = ref(0)
const offsetY = ref(0)

function onMove(e: MouseEvent): void {
  const el = btnRef.value
  if (!el || window.innerWidth < 768) return
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  offsetX.value = x * 0.25
  offsetY.value = y * 0.35
}

function onLeave(): void {
  offsetX.value = 0
  offsetY.value = 0
}
</script>

<template>
  <button
    ref="btnRef"
    type="button"
    class="magnetic-btn relative overflow-hidden rounded-xl px-6 py-3.5 font-semibold transition-shadow duration-300"
    :class="
      variant === 'primary'
        ? 'bg-gradient-to-r from-accent-600 to-cyan-500 text-white shadow-lg shadow-accent-600/30 hover:shadow-accent-500/50'
        : 'glass-btn text-industrial-800 border border-white/40'
    "
    :style="{ transform: `translate(${offsetX}px, ${offsetY}px)` }"
    @mousemove="onMove"
    @mouseleave="onLeave"
    @click="emit('click')"
  >
    <span class="relative z-10 flex items-center justify-center gap-2">
      <slot />
    </span>
    <span
      v-if="variant === 'primary'"
      class="absolute inset-0 -z-0 bg-gradient-to-r from-cyan-400 to-accent-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 shimmer-overlay"
      aria-hidden="true"
    />
  </button>
</template>