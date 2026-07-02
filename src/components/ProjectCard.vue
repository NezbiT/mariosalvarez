<!--
  Tarjeta individual de proyecto en la grilla.

  Qué hace:
  - Muestra título, descripción corta, badge de estado y tecnologías
  - Emite evento al hacer clic para abrir el modal de detalle

  Por qué existe:
  - Componente reutilizable; AppProjects itera sobre filteredProjects

  Cómo funciona:
  - Recibe Project como prop; useI18n resuelve textos bilingües
-->
<script setup lang="ts">
import type { Project } from '../types'
import { useI18n } from '../composables/useI18n'

const props = defineProps<{
  project: Project
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
    class="group flex flex-col rounded-xl border border-industrial-200 bg-white p-6 shadow-sm transition-all hover:border-accent-400 hover:shadow-lg cursor-pointer"
    role="button"
    tabindex="0"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <!-- Cabecera: título y estado -->
    <div class="mb-4 flex items-start justify-between gap-3">
      <h3 class="text-lg font-semibold text-industrial-900 group-hover:text-accent-600 transition-colors">
        {{ t(project.title) }}
      </h3>
      <span
        class="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium"
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

    <!-- Descripción corta -->
    <p class="mb-4 flex-grow text-sm text-industrial-600 leading-relaxed">
      {{ t(project.shortDescription) }}
    </p>

    <!-- Chips de tecnologías (máximo 4 visibles) -->
    <div class="mb-4 flex flex-wrap gap-1.5">
      <span
        v-for="tech in project.technologies.slice(0, 4)"
        :key="tech"
        class="rounded-md bg-industrial-100 px-2 py-0.5 text-xs text-industrial-600"
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

    <!-- Acción -->
    <span class="text-sm font-medium text-accent-600 group-hover:underline">
      {{ t_ui.projects.viewDetails }} →
    </span>
  </article>
</template>

<!--
  ### Cómo ejecutar este archivo
  Usado dentro de AppProjects.vue con v-for sobre filteredProjects.

  ### Qué aprendí en este archivo
  - role="button" + tabindex permite activar tarjeta con teclado
  - Limitar chips visibles mantiene altura uniforme en la grilla
-->