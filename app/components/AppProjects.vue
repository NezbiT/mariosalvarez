<script setup lang="ts">
/**
 * Selected work: case studies from the ZeroDigitX work feed (`#zdx-work`),
 * the single source of truth for finished projects.
 *
 * Editorial grid (12 columns on desktop): the first item is a full-width
 * feature, the next two a 7/5 pair, then rows of three. A leftover pair is
 * mirrored (5/7); a single leftover becomes a feature, so no row has holes.
 */
import feed from '#zdx-work'
import type { WorkItem } from '#shared/types/work'
import ProjectCard from './ProjectCard.vue'

type Filter = 'all' | WorkItem['kind']
type Variant = 'feature' | 'large' | 'small'

interface Cell {
  item: WorkItem
  variant: Variant
  span: string
}

const FEATURE_SPAN = 'md:col-span-2 lg:col-span-12'

const { t_ui } = useI18n()

const active = ref<Filter>('all')
/** Cards animate in only after the visitor filters, never on first paint. */
const hasFiltered = ref(false)

const counts = {
  all: feed.items.length,
  client: feed.items.filter(i => i.kind === 'client').length,
  product: feed.items.filter(i => i.kind === 'product').length,
}
const showFilters = counts.client > 0 && counts.product > 0

const filters = computed(() => [
  { value: 'all' as const, label: t_ui.value.projects.filterAll, count: counts.all },
  { value: 'client' as const, label: t_ui.value.projects.filterClients, count: counts.client },
  { value: 'product' as const, label: t_ui.value.projects.filterProducts, count: counts.product },
])

const cells = computed(() =>
  layout(active.value === 'all' ? feed.items : feed.items.filter(i => i.kind === active.value)),
)

function cellFor(i: number, n: number): Omit<Cell, 'item'> {
  if (i === 0) return { variant: 'feature', span: FEATURE_SPAN }
  if (i <= 2) {
    if (n === 2) return { variant: 'feature', span: FEATURE_SPAN }
    return { variant: 'large', span: i === 1 ? 'lg:col-span-7' : 'lg:col-span-5' }
  }
  const k = i - 3
  const rest = n - 3
  const leftover = rest % 3
  if (k < rest - leftover) return { variant: 'small', span: 'lg:col-span-4' }
  if (leftover === 1) return { variant: 'feature', span: FEATURE_SPAN }
  return { variant: 'large', span: k === rest - 2 ? 'lg:col-span-5' : 'lg:col-span-7' }
}

function layout(items: WorkItem[]): Cell[] {
  const result = items.map((item, i) => ({ item, ...cellFor(i, items.length) }))
  // Tablet grid has two columns: a card left alone before a feature (or the
  // end) takes the full row.
  let column = 0
  result.forEach((cell, i) => {
    if (cell.variant === 'feature') {
      column = 0
      return
    }
    const next = result[i + 1]
    if (column === 0 && (!next || next.variant === 'feature')) cell.span += ' md:col-span-2'
    column = 1 - column
  })
  return result
}

function setFilter(value: Filter): void {
  active.value = value
  hasFiltered.value = true
}
</script>

<template>
  <section id="projects" class="section" aria-labelledby="projects-title">
    <div class="site-container">
      <div class="mb-10 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <header class="max-w-3xl">
          <p class="eyebrow">{{ t_ui.projects.eyebrow }}</p>
          <h2 id="projects-title" class="display-lg font-semibold text-theme-primary">
            {{ t_ui.projects.title }}
          </h2>
          <p class="section-lead">{{ t_ui.projects.subtitle }}</p>
        </header>

        <div
          v-if="showFilters"
          class="work-filter self-start lg:self-auto"
          role="group"
          :aria-label="t_ui.projects.filterLabel"
        >
          <button
            v-for="filter in filters"
            :key="filter.value"
            type="button"
            class="work-filter__btn"
            :aria-pressed="active === filter.value"
            @click="setFilter(filter.value)"
          >
            {{ filter.label }}
            <span class="work-filter__count">{{ filter.count }}</span>
          </button>
        </div>
      </div>

      <ul class="grid gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6" role="list">
        <li
          v-for="(cell, index) in cells"
          :key="cell.item.id"
          :class="[cell.span, { 'work-cell--enter': hasFiltered }]"
        >
          <ProjectCard :item="cell.item" :variant="cell.variant" :eager="index === 0" />
        </li>
      </ul>
    </div>
  </section>
</template>
