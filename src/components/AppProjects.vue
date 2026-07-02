<!--
  Sección de proyectos con filtros y grilla de tarjetas.

  Qué hace:
  - Lista proyectos filtrados por estado (todos, live, coming-soon)
  - Abre ProjectModal al seleccionar una tarjeta

  Por qué existe:
  - Muestra el trabajo tangible de Mario en el corredor industrial de Houston

  Cómo funciona:
  - useProjects gestiona filtro y modal; ProjectCard emite select
-->
<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import { useProjects, type ProjectFilter } from '../composables/useProjects'
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
      <!-- Encabezado de sección -->
      <header class="mb-12 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-industrial-900 mb-4">
          {{ t_ui.projects.title }}
        </h2>
        <p class="text-lg text-industrial-600 max-w-2xl mx-auto">
          {{ t_ui.projects.subtitle }}
        </p>
      </header>

      <!-- Filtros por estado -->
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
          class="rounded-full px-4 py-2 text-sm font-medium transition-colors"
          :class="
            activeFilter === filter.value
              ? 'bg-accent-600 text-white'
              : 'bg-industrial-100 text-industrial-600 hover:bg-industrial-200'
          "
          @click="setFilter(filter.value)"
        >
          {{ t_ui.projects[filter.labelKey] }}
        </button>
      </div>

      <!-- Grilla de proyectos -->
      <div
        v-if="filteredProjects.length > 0"
        class="grid gap-6 sm:grid-cols-2"
      >
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          @select="openProject"
        />
      </div>

      <!-- Estado vacío (no debería ocurrir con datos actuales) -->
      <p v-else class="text-center text-industrial-500">
        No hay proyectos en esta categoría.
      </p>
    </div>

    <!-- Modal de detalle -->
    <ProjectModal
      :project="selectedProject"
      :open="isModalOpen"
      @close="closeProject"
    />
  </section>
</template>

<!--
  ### Cómo ejecutar este archivo
  Importado en App.vue; visible al hacer scroll o clic en "Proyectos".

  ### Qué aprendí en este archivo
  - role="tablist" en filtros comunica semántica correcta a lectores de pantalla
  - Separar Card y Modal mantiene cada componente enfocado en una responsabilidad
-->