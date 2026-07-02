<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'

const props = withDefaults(
  defineProps<{
    delay?: number
  }>(),
  { delay: 0 },
)

const { target, isVisible } = useScrollReveal()

/** Conecta el elemento DOM al observer del composable */
function setTarget(el: unknown): void {
  target.value = el instanceof HTMLElement ? el : null
}
</script>

<template>
  <div
    :ref="setTarget"
    class="reveal transition-all duration-700 ease-out"
    :class="isVisible ? 'reveal--visible' : 'reveal--hidden'"
    :style="{ transitionDelay: `${props.delay}ms` }"
  >
    <slot />
  </div>
</template>