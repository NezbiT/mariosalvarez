/**
 * Composable para gestión de proyectos: listado, filtros y modal de detalle.
 *
 * Qué hace:
 * - Carga proyectos ordenados por prioridad desde src/data/projects.ts
 * - Filtra por estado (todos, live, coming-soon)
 * - Controla qué proyecto está abierto en el modal
 *
 * Por qué existe:
 * - AppProjects y ProjectModal comparten estado de filtro y selección
 * - Centralizar lógica evita duplicar ordenamiento y filtros
 *
 * Cómo funciona:
 * 1. sortedProjects ordena por priority ascendente
 * 2. filteredProjects aplica filtro activo con computed reactivo
 * 3. openProject/closeProject manejan visibilidad del modal
 */
import { ref, computed } from 'vue'
import type { Project } from '../types'
import { projects } from '../data/projects'

export type ProjectFilter = 'all' | 'live' | 'coming-soon'

export function useProjects() {
  const activeFilter = ref<ProjectFilter>('all')
  const selectedProject = ref<Project | null>(null)
  const isModalOpen = ref(false)

  // Proyectos ordenados: menor priority = más arriba en la grilla
  const sortedProjects = computed(() =>
    [...projects].sort((a, b) => a.priority - b.priority),
  )

  // Aplica filtro de estado sin mutar el array original
  const filteredProjects = computed(() => {
    if (activeFilter.value === 'all') return sortedProjects.value
    return sortedProjects.value.filter((p) => p.status === activeFilter.value)
  })

  /** Cambia el filtro de la barra de pestañas */
  function setFilter(filter: ProjectFilter): void {
    activeFilter.value = filter
  }

  /** Abre modal con el proyecto seleccionado */
  function openProject(project: Project): void {
    selectedProject.value = project
    isModalOpen.value = true
    // Bloquear scroll del body mientras el modal está abierto
    document.body.style.overflow = 'hidden'
  }

  /** Cierra modal y restaura scroll */
  function closeProject(): void {
    isModalOpen.value = false
    selectedProject.value = null
    document.body.style.overflow = ''
  }

  return {
    activeFilter,
    selectedProject,
    isModalOpen,
    sortedProjects,
    filteredProjects,
    setFilter,
    openProject,
    closeProject,
  }
}

/**
 * ### Cómo ejecutar este archivo
 * Importar en AppProjects.vue: `const { filteredProjects, openProject } = useProjects()`
 *
 * ### Qué aprendí en este archivo
 * - computed para filtros mantiene la UI sincronizada sin watchers manuales
 * - Bloquear overflow del body mejora UX en modales fullscreen
 */