<script setup lang="ts">
import { watch, computed } from 'vue'
import { useI18n } from './composables/useI18n'
import { useDeviceCapability } from './composables/useDeviceCapability'
import AppNavbar from './components/AppNavbar.vue'
import AppHero from './components/AppHero.vue'
import AppProjects from './components/AppProjects.vue'
import AppLab from './components/AppLab.vue'
import AppTechnologies from './components/AppTechnologies.vue'
import AppReviews from './components/AppReviews.vue'
import AppContact from './components/AppContact.vue'
import AppFooter from './components/AppFooter.vue'
import CursorGlow from './components/effects/CursorGlow.vue'
import ScrollProgressBar from './components/effects/ScrollProgressBar.vue'
import ParticleCanvas from './components/effects/ParticleCanvas.vue'

const { t_ui, locale } = useI18n()
const { enableHeavyEffects } = useDeviceCapability()

const isDevHost = computed(() =>
  typeof window !== 'undefined' && window.location.hostname.startsWith('dev.'),
)

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
  <div class="min-h-screen flex flex-col relative bg-theme-page text-theme-primary">
    <a href="#main-content" class="skip-link">
      {{ t_ui.nav.skipToContent }}
    </a>

    <ScrollProgressBar />
    <CursorGlow v-if="enableHeavyEffects" />

    <!-- Fondo: grid + mesh (baratos). Partículas solo en desktop capable -->
    <div class="global-bg-layer" aria-hidden="true">
      <ParticleCanvas />
      <div class="absolute inset-0 animated-grid opacity-40" />
      <div class="absolute inset-0 mesh-gradient opacity-30" />
      <div class="absolute inset-0 opacity-50">
        <div class="absolute top-1/4 left-1/4 h-72 w-72 rounded-full parallax-orb-1 blur-3xl" />
        <div class="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full parallax-orb-2 blur-3xl" />
      </div>
    </div>

    <AppNavbar :show-dev-badge="isDevHost" />
    <main id="main-content" class="flex-grow relative z-0" tabindex="-1">
      <AppHero />
      <div class="section-wave -mt-1" aria-hidden="true" />
      <AppProjects />
      <AppLab />
      <AppTechnologies />
      <AppReviews />
      <AppContact />
    </main>
    <AppFooter />
  </div>
</template>
