<!--
  Pie de página del portafolio.

  Qué hace:
  - Muestra copyright, stack tecnológico y slogan de marca
  - Enlaces rápidos a secciones y redes sociales

  Por qué existe:
  - Cierre profesional con información de contacto persistente

  Cómo funciona:
  - Año dinámico con new Date(); useI18n para textos bilingües
-->
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useScrollTo } from '../composables/useScrollTo'

const { t_ui } = useI18n()
const { scrollToSection } = useScrollTo()

const currentYear = computed(() => new Date().getFullYear())

const rightsText = computed(() =>
  t_ui.value.footer.rights.replace('{year}', String(currentYear.value)),
)

const LINKEDIN_URL = 'https://www.linkedin.com/in/mariosalv2/'
const GITHUB_URL = 'https://github.com/NezbiT'
const EMAIL = 'mario@mariosalvarez.com'
</script>

<template>
  <footer class="border-t border-industrial-200 bg-industrial-900 text-industrial-300 py-12 px-4 sm:px-6">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <!-- Marca -->
        <div>
          <p class="text-xl font-bold text-white mb-2">Mario Alvarez</p>
          <p class="text-sm text-industrial-400 italic">
            {{ t_ui.footer.tagline }}
          </p>
        </div>

        <!-- Enlaces rápidos -->
        <nav aria-label="Enlaces del pie">
          <ul class="space-y-2 text-sm">
            <li>
              <button
                type="button"
                class="hover:text-accent-400 transition-colors"
                @click="scrollToSection('projects')"
              >
                {{ t_ui.nav.projects }}
              </button>
            </li>
            <li>
              <button
                type="button"
                class="hover:text-accent-400 transition-colors"
                @click="scrollToSection('technologies')"
              >
                {{ t_ui.nav.technologies }}
              </button>
            </li>
            <li>
              <button
                type="button"
                class="hover:text-accent-400 transition-colors"
                @click="scrollToSection('contact')"
              >
                {{ t_ui.nav.contact }}
              </button>
            </li>
          </ul>
        </nav>

        <!-- Redes -->
        <div class="flex flex-col gap-2 text-sm">
          <a :href="`mailto:${EMAIL}`" class="hover:text-accent-400 transition-colors">
            {{ EMAIL }}
          </a>
          <a
            :href="LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-accent-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            :href="GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-accent-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      <div class="border-t border-industrial-700 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-sm text-industrial-500">
        <p>{{ rightsText }}</p>
        <p>{{ t_ui.footer.builtWith }}</p>
      </div>
    </div>
  </footer>
</template>

<!--
  ### Cómo ejecutar este archivo
  Último componente en App.vue, visible al final de la página.

  ### Qué aprendí en este archivo
  - Reemplazar {year} en traducciones evita strings hardcodeados en plantilla
  - Footer oscuro contrasta con secciones claras y ancla visualmente el sitio
-->