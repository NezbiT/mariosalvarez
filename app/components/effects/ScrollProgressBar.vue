<script setup lang="ts">
import { useScrollProgress } from '~/composables/useScrollProgress'

const { progress } = useScrollProgress()
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-[60] h-0.5 pointer-events-none" aria-hidden="true">
    <div
      class="h-full origin-left bg-crimson"
      :style="{ transform: `scaleX(${progress})` }"
    />
  </div>
</template>
