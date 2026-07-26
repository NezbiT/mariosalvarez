<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

const props = withDefaults(
  defineProps<{
    delay?: number
  }>(),
  { delay: 0 },
)

const { target, isVisible } = useScrollReveal()

function setTarget(el: unknown): void {
  target.value = el instanceof HTMLElement ? el : null
}
</script>

<template>
  <div
    :ref="setTarget"
    class="reveal"
    :class="isVisible ? 'reveal--visible' : 'reveal--hidden'"
    :style="{ transitionDelay: props.delay ? `${Math.min(props.delay, 120)}ms` : undefined }"
  >
    <slot />
  </div>
</template>
