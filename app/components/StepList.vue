<script setup lang="ts">
/** Numbered "how it works" steps, shared by both sides of the site. */
defineProps<{
  steps: { title: string, body: string }[]
}>()
</script>

<template>
  <ol class="steps" role="list">
    <li v-for="(step, i) in steps" :key="step.title" class="steps__item">
      <span class="steps__num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
      <h3 class="steps__title">{{ step.title }}</h3>
      <p class="steps__body">{{ step.body }}</p>
    </li>
  </ol>
</template>
