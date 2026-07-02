<!--
  Componente raíz del portafolio mariosalvarez.com.

  Qué hace:
  - Orquesta todas las secciones: navbar, hero, proyectos, tecnologías, contacto, footer
  - Actualiza título y meta description según idioma activo

  Por qué existe:
  - Punto de entrada único de la SPA; main.ts monta este componente en #app

  Cómo funciona:
  - Layout de página única con secciones por ancla (#hero, #projects, etc.)
-->
<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from './composables/useI18n'
import AppNavbar from './components/AppNavbar.vue'
import AppHero from './components/AppHero.vue'
import AppProjects from './components/AppProjects.vue'
import AppTechnologies from './components/AppTechnologies.vue'
import AppContact from './components/AppContact.vue'
import AppFooter from './components/AppFooter.vue'

const { t_ui, locale } = useI18n()

/** Sincroniza <title> y meta description con el idioma activo */
function updateMeta(): void {
  document.title = t_ui.value.meta.siteTitle

  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.setAttribute('name', 'description')
    document.head.appendChild(metaDesc)
  }
  metaDesc.setAttribute('content', t_ui.value.meta.siteDescription)
}

watch(locale, updateMeta, { immediate: true })
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar />
    <main class="flex-grow">
      <AppHero />
      <AppProjects />
      <AppTechnologies />
      <AppContact />
    </main>
    <AppFooter />
  </div>
</template>

<!--
  ### Cómo ejecutar este archivo
  Montado desde main.ts con createApp(App).mount('#app')

  ### Qué aprendí en este archivo
  - watch con immediate actualiza meta tags antes del primer render visible
  - flex flex-col + flex-grow empuja el footer al fondo en páginas cortas
-->