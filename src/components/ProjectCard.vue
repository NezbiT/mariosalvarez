<script setup lang="ts">
import type { Project } from '../types'
import { useI18n } from '../composables/useI18n'

const props = defineProps<{
  project: Project
  index?: number
}>()

const emit = defineEmits<{
  select: [project: Project]
}>()

const { t, t_ui } = useI18n()

function handleClick(): void {
  emit('select', props.project)
}
</script>

<template>
  <article
    class="group flex flex-col rounded-xl border border-industrial-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-400 hover:shadow-xl hover:shadow-accent-500/10 cursor-pointer"
    role="button"
    tabindex="0"
    :style="{ transitionDelay: `${(index ?? 0) * 50}ms` }"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <div class="mb-4 flex items-start justify-between gap-3">
      <h3 class="text-lg font-semibold text-industrial-900 group-hover:text-accent-600 transition-colors duration-200">
        {{ t(project.title) }}
      </h3>
      <span
        class="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium transition-transform duration-200 group-hover:scale-105"
        :class="
          project.status === 'live'
            ? 'bg-green-100 text-green-800'
            : 'bg-amber-100 text-amber-800'
        "
      >
        {{
          project.status === 'live'
            ? t_ui.projects.statusLive
            : t_ui.projects.statusComingSoon
        }}
      </span>
    </div>

    <p class="mb-4 flex-grow text-sm text-industrial-600 leading-relaxed">
      {{ t(project.shortDescription) }}
    </p>

    <div class="mb-4 flex flex-wrap gap-1.5">
      <span
        v-for="(tech, techIndex) in project.technologies.slice(0, 4)"
        :key="tech"
        class="rounded-md bg-industrial-100 px-2 py-0.5 text-xs text-industrial-600 transition-all duration-200 group-hover:bg-accent-50 group-hover:text-accent-700"
        :style="{ transitionDelay: `${techIndex * 30}ms` }"
      >
        {{ tech }}
      </span>
      <span
        v-if="project.technologies.length > 4"
        class="rounded-md bg-industrial-100 px-2 py-0.5 text-xs text-industrial-500"
      >
        +{{ project.technologies.length - 4 }}
      </span>
    </div>

    <span class="inline-flex items-center gap-1 text-sm font-medium text-accent-600 transition-all duration-200 group-hover:gap-2">
      {{ t_ui.projects.viewDetails }}
      <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
    </span>
  </article>
</template>