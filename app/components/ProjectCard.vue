<script setup lang="ts">
/**
 * One case study in the Work grid. The whole card is a single link to
 * `/projects/<id>` (stretched link on the name), so it's one tab stop.
 */
import type { WorkItem } from '#shared/types/work'

const props = defineProps<{
  item: WorkItem
  variant: 'feature' | 'large' | 'small'
  /** First card on the page: load the screenshot eagerly. */
  eager?: boolean
}>()

const { t, t_ui } = useI18n()

/** First sentence of the problem statement: a one-line teaser. */
const teaser = computed(() => {
  const problem = t(props.item.problem)
  return problem.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? problem
})
</script>

<template>
  <article class="work-card surface surface--interactive" :class="`work-card--${variant}`">
    <div class="work-card__media">
      <img
        v-if="item.image"
        :src="item.image"
        :alt="t_ui.projects.screenshotAlt.replace('{name}', item.name)"
        width="1440"
        height="900"
        :loading="eager ? 'eager' : 'lazy'"
        decoding="async"
        class="work-card__img"
      >
      <div v-else class="work-poster" aria-hidden="true">
        <XMark class="work-poster__mark" :depth="false" />
        <span class="work-poster__category">{{ t(item.category) }}</span>
        <span class="work-poster__name">{{ item.name }}</span>
      </div>
    </div>

    <div class="work-card__body">
      <p class="label">
        {{ t(item.category) }}<template v-if="item.year"> · {{ item.year }}</template>
      </p>
      <h3 class="work-card__title">
        <NuxtLink :to="`/projects/${item.id}`" class="work-card__link">
          <span class="work-underline">{{ item.name }}</span><span class="sr-only">, {{ t_ui.projects.caseSuffix }}</span>
        </NuxtLink>
      </h3>
      <p class="work-card__teaser" :class="{ 'line-clamp-2': variant !== 'feature' }">
        {{ teaser }}
      </p>
      <ul class="work-card__stack" :aria-label="t_ui.projects.stackTitle">
        <li v-for="tech in item.stack.slice(0, 4)" :key="tech" class="tag">
          {{ tech }}
        </li>
      </ul>
    </div>
  </article>
</template>
