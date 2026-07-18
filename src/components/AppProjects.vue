<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import { useProjects, type ProjectFilter } from '../composables/useProjects'
import ScrollReveal from './ScrollReveal.vue'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

const { t_ui } = useI18n()
const { activeFilter, selectedProject, isModalOpen, filteredProjects, setFilter, openProject, closeProject } = useProjects()

const filters: { value: ProjectFilter; labelKey: 'filterAll' | 'filterLive' | 'filterComingSoon' }[] = [
  { value: 'all', labelKey: 'filterAll' },
  { value: 'live', labelKey: 'filterLive' },
  { value: 'coming-soon', labelKey: 'filterComingSoon' },
]
</script>

<template>
  <section id="projects" class="relative py-20 sm:py-28 overflow-hidden">
    <div class="absolute inset-0 animated-grid opacity-30 pointer-events-none" aria-hidden="true" />
    <div class="site-container relative z-10">
      <ScrollReveal>
        <header class="mb-14 text-center">
          <p class="text-sm font-semibold uppercase tracking-widest text-accent-600 mb-3">Portfolio</p>
          <h2 class="display-lg font-bold text-theme-primary mb-4">
            {{ t_ui.projects.title }}
          </h2>
          <p class="text-lg xl:text-xl text-theme-muted max-w-3xl mx-auto">
            {{ t_ui.projects.subtitle }}
          </p>
        </header>
      </ScrollReveal>

      <ScrollReveal :delay="100">
        <div class="mb-12 flex flex-wrap justify-center gap-3" role="tablist">
          <button
            v-for="filter in filters"
            :key="filter.value"
            type="button"
            role="tab"
            :aria-selected="activeFilter === filter.value"
            class="btn-interactive rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-400"
            :class="
              activeFilter === filter.value
                ? 'bg-gradient-to-r from-accent-600 to-cyan-500 text-white shadow-lg shadow-accent-500/30 scale-105'
                : 'glass-card text-theme-muted hover:scale-[1.02]'
            "
            @click="setFilter(filter.value)"
          >
            {{ t_ui.projects[filter.labelKey] }}
          </button>
        </div>
      </ScrollReveal>

      <TransitionGroup
        v-if="filteredProjects.length > 0"
        name="project-list"
        tag="div"
        class="relative grid gap-6 sm:grid-cols-2 2xl:grid-cols-2 3xl:gap-10"
      >
        <ProjectCard
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :project="project"
          :index="index"
          @select="openProject"
        />
      </TransitionGroup>

      <p v-else class="text-center text-theme-muted">No hay proyectos en esta categoría.</p>
    </div>

    <ProjectModal :project="selectedProject" :open="isModalOpen" @close="closeProject" />
  </section>
</template>