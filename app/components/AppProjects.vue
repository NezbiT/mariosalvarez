<script setup lang="ts">
/**
 * "This is what the result looks like": client work from the ZeroDigitX
 * feed (`#zdx-work`), shown as live results rather than portfolio pieces.
 *
 * Editorial grid (12 columns on desktop): the first item is a full-width
 * feature, the next two a 7/5 pair, then rows of three. A leftover pair is
 * mirrored (5/7); a single leftover becomes a feature, so no row has holes.
 */
import feed from '#zdx-work'
import type { WorkItem } from '#shared/types/work'
import ProjectCard from './ProjectCard.vue'

type Variant = 'feature' | 'large' | 'small'

interface Cell {
  item: WorkItem
  variant: Variant
  span: string
}

const FEATURE_SPAN = 'md:col-span-2 lg:col-span-12'

const { t_ui } = useI18n()

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

const cells = layout(feed.items.filter(item => item.kind === 'client'))
</script>

<template>
  <section id="work" class="section" aria-labelledby="work-title">
    <div class="site-container">
      <header class="section-header">
        <p class="eyebrow">{{ t_ui.business.workEyebrow }}</p>
        <h2 id="work-title" class="display-lg">{{ t_ui.business.workTitle }}</h2>
        <p class="section-lead">{{ t_ui.business.workLead }}</p>
      </header>

      <ul class="grid gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6" role="list">
        <li v-for="(cell, index) in cells" :key="cell.item.id" :class="cell.span">
          <ProjectCard :item="cell.item" :variant="cell.variant" :eager="index === 0" />
        </li>
      </ul>
    </div>
  </section>
</template>
