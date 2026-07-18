<script setup lang="ts">
import { computed } from 'vue'
import { useMousePosition } from '../../composables/useMousePosition'
import { useDeviceCapability } from '../../composables/useDeviceCapability'

const { mouseX, mouseY, isInside } = useMousePosition()
const { enableHeavyEffects } = useDeviceCapability()

const style = computed(() => ({
  left: `${(mouseX.value + 0.5) * 100}%`,
  top: `${(mouseY.value + 0.5) * 100}%`,
  opacity: isInside.value && enableHeavyEffects.value ? 1 : 0,
}))
</script>

<template>
  <div
    v-if="enableHeavyEffects"
    class="cursor-glow pointer-events-none fixed z-[5] h-[min(50vw,32rem)] w-[min(50vw,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-500"
    :style="style"
    aria-hidden="true"
  />
</template>