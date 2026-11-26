<script setup lang="ts">
/** Accordion of questions on native <details>: keyboard and no-JS friendly. */
defineProps<{
  items: { q: string, a: string }[]
}>()
</script>

<template>
  <div class="faq">
    <details v-for="(item, i) in items" :key="item.q" class="faq__item" :open="i === 0">
      <summary class="faq__q">
        <span>{{ item.q }}</span>
        <span class="faq__icon" aria-hidden="true" />
      </summary>
      <p class="faq__a">{{ item.a }}</p>
    </details>
  </div>
</template>
