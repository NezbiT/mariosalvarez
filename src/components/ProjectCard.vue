<script setup lang="ts">
import type { Project } from '../types'
import { useI18n } from '../composables/useI18n'
import TiltCard from './effects/TiltCard.vue'

const props = defineProps<{
  project: Project
  index?: number
}>()

const emit = defineEmits<{ select: [project: Project] }>()
const { t, t_ui } = useI18n()

function handleClick(): void { emit('select', props.project) }
</script>

<template>
  <TiltCard>
    <article
      class="group relative flex h-full flex-col overflow-hidden rounded-2xl glass-card p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent-500/15 cursor-pointer"
      role="button"
      tabindex="0"
      @click="handleClick"
      @keydown.enter="handleClick"
      @keydown.space.prevent="handleClick"
    >
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-cyan-400 to-accent-600 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />

      <div class="mb-4 flex items-start justify-between gap-3">
        <h3 class="text-lg xl:text-xl font-semibold text-industrial-900 group-hover:text-accent-600 transition-colors duration-300">
          {{ t(project.title) }}
        </h3>
        <span
          class="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium transition-transform duration-300 group-hover:scale-110"
          :class="project.status === 'live' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'"
        >
          {{ project.status === 'live' ? t_ui.projects.statusLive : t_ui.projects.statusComingSoon }}
        </span>
      </div>

      <p class="mb-4 flex-grow text-sm xl:text-base text-industrial-600 leading-relaxed">
        {{ t(project.shortDescription) }}
      </p>

      <div class="mb-4 flex flex-wrap gap-1.5">
        <span
          v-for="tech in project.technologies.slice(0, 4)"
          :key="tech"
          class="rounded-lg bg-industrial-100 px-2.5 py-1 text-xs font-medium text-industrial-600 transition-all duration-300 group-hover:bg-accent-50 group-hover:text-accent-700"
        >
          {{ tech }}
        </span>
        <span v-if="project.technologies.length > 4" class="rounded-lg bg-industrial-100 px-2 py-0.5 text-xs text-industrial-500">
          +{{ project.technologies.length - 4 }}
        </span>
      </div>

      <span class="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition-all duration-300 group-hover:gap-3">
        {{ t_ui.projects.viewDetails }}
        <span class="transition-transform duration-300 group-hover:translate-x-2">→</span>
      </span>
    </article>
  </TiltCard>
</template>