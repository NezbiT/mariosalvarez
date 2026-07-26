<script setup lang="ts">
const { t_ui, locale } = useI18n()
const { enableHeavyEffects } = useDeviceCapability()

const isDevHost = computed(() =>
  import.meta.client && window.location.hostname.startsWith('dev.'),
)

// Keep <html lang> and title in sync with active locale
watch(
  locale,
  (val) => {
    useHead({
      htmlAttrs: { lang: val },
      title: t_ui.value.meta.siteTitle,
      meta: [
        { name: 'description', content: t_ui.value.meta.siteDescription },
      ],
    })
  },
  { immediate: true },
)
</script>

<template>
  <div class="min-h-screen flex flex-col relative bg-theme-page text-theme-primary">
    <a href="#main-content" class="skip-link">
      {{ t_ui.nav.skipToContent }}
    </a>

    <ScrollProgressBar />
    <ClientOnly>
      <CursorGlow v-if="enableHeavyEffects" />
    </ClientOnly>

    <div class="global-bg-layer" aria-hidden="true">
      <ClientOnly>
        <ParticleCanvas />
      </ClientOnly>
      <div class="absolute inset-0 animated-grid opacity-40" />
      <div class="absolute inset-0 mesh-gradient opacity-30" />
      <div class="absolute inset-0 opacity-50">
        <div class="absolute top-1/4 left-1/4 h-72 w-72 rounded-full parallax-orb-1 blur-3xl" />
        <div class="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full parallax-orb-2 blur-3xl" />
      </div>
    </div>

    <AppNavbar :show-dev-badge="isDevHost" />
    <main id="main-content" class="flex-grow relative z-0" tabindex="-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
