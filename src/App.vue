<script setup lang="ts">
import { watch, computed } from 'vue'
import { useI18n } from './composables/useI18n'
import { useMousePosition } from './composables/useMousePosition'
import AppNavbar from './components/AppNavbar.vue'
import AppHero from './components/AppHero.vue'
import AppProjects from './components/AppProjects.vue'
import AppTechnologies from './components/AppTechnologies.vue'
import AppContact from './components/AppContact.vue'
import AppFooter from './components/AppFooter.vue'
import CursorGlow from './components/effects/CursorGlow.vue'
import ScrollProgressBar from './components/effects/ScrollProgressBar.vue'

const { t_ui, locale } = useI18n()
const { mouseX, mouseY } = useMousePosition()

const isDevHost = computed(() =>
  typeof window !== 'undefined' && window.location.hostname.startsWith('dev.'),
)

/** Parallax sutil global del fondo según mouse */
const globalParallax = computed(() => ({
  transform: `translate(${mouseX.value * -12}px, ${mouseY.value * -8}px)`,
}))

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
  <div class="min-h-screen flex flex-col relative">
    <ScrollProgressBar />
    <CursorGlow />

    <!-- Capa de parallax global muy sutil -->
    <div
      class="fixed inset-0 pointer-events-none -z-20 opacity-40 parallax-layer"
      :style="globalParallax"
      aria-hidden="true"
    >
      <div class="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl" />
      <div class="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
    </div>

    <AppNavbar :show-dev-badge="isDevHost" />
    <main class="flex-grow">
      <AppHero />
      <div class="section-wave -mt-1" aria-hidden="true" />
      <AppProjects />
      <AppTechnologies />
      <AppContact />
    </main>
    <AppFooter />
  </div>
</template>