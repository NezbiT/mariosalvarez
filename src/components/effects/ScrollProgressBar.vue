<script setup lang="ts">
import { useScrollProgress } from '../../composables/useScrollProgress'

const { progress } = useScrollProgress()
</script>

<template>
  <div class="scroll-progress-track fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent" aria-hidden="true">
    <div
      class="scroll-progress-fill h-full origin-left bg-gradient-to-r from-accent-500 via-accent-400 to-cyan-300 transition-transform duration-150 ease-out"
      :style="{ transform: `scaleX(${progress})` }"
    />
  </div>
</template>