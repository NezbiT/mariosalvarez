<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import { useProjects, type ProjectFilter } from '../composables/useProjects'
import ScrollReveal from './ScrollReveal.vue'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

const { t_ui } = useI18n()
const {
  activeFilter,
  selectedProject,
  isModalOpen,
  filteredProjects,
  setFilter,
  openProject,
  closeProject,
} = useProjects()

const filters: { value: ProjectFilter; labelKey: 'filterAll' | 'filterLive' | 'filterComingSoon' }[] = [
  { value: 'all', labelKey: 'filterAll' },
  { value: 'live', labelKey: 'filterLive' },
  { value: 'coming-soon', labelKey: 'filterComingSoon' },
]
</script>

<template>
  <section id="projects" class="py-20 px-4 sm:px-6 bg-white">
    <div class="mx-auto max-w-6xl">
      <ScrollReveal>
        <header class="mb-12 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold text-industrial-900 mb-4">
            {{ t_ui.projects.title }}
          </h2>
          <p class="text-lg text-industrial-600 max-w-2xl mx-auto">
            {{ t_ui.projects.subtitle }}
          </p>
        </header>
      </ScrollReveal>

      <ScrollReveal :delay="100">
        <div
          class="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filtrar proyectos"
        >
          <button
            v-for="filter in filters"
            :key="filter.value"
            type="button"
            role="tab"
            :aria-selected="activeFilter === filter.value"
            class="btn-interactive rounded-full px-4 py-2 text-sm font-medium transition-all duration-300"
            :class="
              activeFilter === filter.value
                ? 'bg-accent-600 text-white shadow-md shadow-accent-600/30 scale-105'
                : 'bg-industrial-100 text-industrial-600 hover:bg-industrial-200 hover:scale-[1.02]'
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
        class="relative grid gap-6 sm:grid-cols-2"
      >
        <ProjectCard
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :project="project"
          :index="index"
          @select="openProject"
        />
      </TransitionGroup>

      <p v-else class="text-center text-industrial-500">
        No hay proyectos en esta categoría.
      </p>
    </div>

    <ProjectModal
      :project="selectedProject"
      :open="isModalOpen"
      @close="closeProject"
    />
  </section>
</template>