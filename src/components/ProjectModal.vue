<!--
  Modal de detalle de proyecto con descripción completa y enlaces.

  Qué hace:
  - Muestra longDescription, realUse, tecnologías y links (sitio/GitHub)
  - Se cierra con botón, clic en overlay o tecla Escape

  Por qué existe:
  - Las tarjetas muestran resumen; el modal permite profundizar sin otra página

  Cómo funciona:
  - Props: project, open. Emite close al cerrar
-->
<script setup lang="ts">
import { watch, onMounted, onUnmounted } from 'vue'
import type { Project } from '../types'
import { useI18n } from '../composables/useI18n'

const props = defineProps<{
  project: Project | null
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const { t, t_ui } = useI18n()

/** Cierra modal y notifica al padre */
function close(): void {
  emit('close')
}

/** Listener de tecla Escape para cerrar */
function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape' && props.open) close()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))

// Enfocar el modal al abrir para accesibilidad
watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      requestAnimationFrame(() => {
        document.getElementById('project-modal')?.focus()
      })
    }
  },
)
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="open && project"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="'modal-title-' + project.id"
      >
        <div
          class="absolute inset-0 bg-industrial-900/60 backdrop-blur-sm transition-opacity duration-300"
          @click="close"
        />

        <div
          id="project-modal"
          tabindex="-1"
          class="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-2xl transition-all duration-300 modal-panel"
        >
        <!-- Botón cerrar -->
        <button
          type="button"
          class="absolute right-4 top-4 rounded-lg p-2 text-industrial-500 hover:bg-industrial-100 hover:text-industrial-800"
          :aria-label="t_ui.projects.closeModal"
          @click="close"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Contenido -->
        <header class="mb-6 pr-10">
          <div class="mb-2 flex items-center gap-3">
            <h2
              :id="'modal-title-' + project.id"
              class="text-2xl font-bold text-industrial-900"
            >
              {{ t(project.title) }}
            </h2>
            <span
              class="rounded-full px-2.5 py-0.5 text-xs font-medium"
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
          <p class="text-industrial-600 leading-relaxed">
            {{ t(project.longDescription) }}
          </p>
        </header>

        <!-- Uso real -->
        <section class="mb-6 rounded-lg bg-industrial-50 p-4">
          <h3 class="mb-2 text-sm font-semibold uppercase tracking-wide text-industrial-500">
            {{ t_ui.projects.realUseLabel }}
          </h3>
          <p class="text-industrial-700">{{ t(project.realUse) }}</p>
        </section>

        <!-- Tecnologías -->
        <section class="mb-6">
          <h3 class="mb-3 text-sm font-semibold uppercase tracking-wide text-industrial-500">
            {{ t_ui.projects.technologiesLabel }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="rounded-md bg-industrial-100 px-3 py-1 text-sm text-industrial-700"
            >
              {{ tech }}
            </span>
          </div>
        </section>

        <!-- Enlaces externos -->
        <footer class="flex flex-wrap gap-3">
          <a
            v-if="project.links.site"
            :href="project.links.site"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-4 py-2 text-sm font-medium text-white hover:bg-accent-500 transition-colors"
          >
            {{ t_ui.projects.visitSite }}
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            v-if="project.links.github"
            :href="project.links.github"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg border border-industrial-300 px-4 py-2 text-sm font-medium text-industrial-700 hover:border-accent-500 hover:text-accent-600 transition-colors"
          >
            {{ t_ui.projects.viewGithub }}
          </a>
        </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<!--
  ### Cómo ejecutar este archivo
  Montado en AppProjects.vue; controlado por isModalOpen y selectedProject.

  ### Qué aprendí en este archivo
  - Teleport a body evita problemas de z-index con navbar fijo
  - Trap de foco básico con tabindex="-1" mejora accesibilidad del diálogo
-->