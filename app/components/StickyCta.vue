<script setup lang="ts">
/**
 * Phone-only bar with the page's main action. Shows once the hero is out of
 * view and hides again while the form it points to is on screen.
 */
const props = defineProps<{
  label: string
  /** id of the section that holds the form */
  target: string
}>()

const visible = ref(false)
let observer: IntersectionObserver | undefined

onMounted(() => {
  const hero = document.querySelector('.page-hero')
  const form = document.getElementById(props.target)
  if (!hero || !form) return
  let heroVisible = true
  let formVisible = false
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === hero) heroVisible = entry.isIntersecting
      if (entry.target === form) formVisible = entry.isIntersecting
    }
    visible.value = !heroVisible && !formVisible
  })
  observer.observe(hero)
  observer.observe(form)
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <Transition name="sticky-cta">
    <div v-if="visible" class="sticky-cta md:hidden">
      <a :href="`#${target}`" class="btn btn-primary w-full">{{ label }} <span aria-hidden="true">→</span></a>
    </div>
  </Transition>
</template>
