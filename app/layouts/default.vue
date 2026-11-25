<script setup lang="ts">
import ScrollProgressBar from '~/components/effects/ScrollProgressBar.vue'

const { t_ui, locale } = useI18n()
const { scrollToSection } = useScrollTo()
const route = useRoute()

const isDevHost = computed(() =>
  import.meta.client && window.location.hostname.startsWith('dev.'),
)

watch(
  locale,
  (val) => {
    useHead({
      htmlAttrs: { lang: val },
    })
  },
  { immediate: true },
)

function scrollToHash(): void {
  const hash = route.hash.replace('#', '')
  if (hash && (route.path === '/' || route.path === '')) {
    void nextTick(() => scrollToSection(hash))
  }
}

onMounted(scrollToHash)
watch(() => route.fullPath, scrollToHash)
</script>

<template>
  <div class="min-h-screen flex flex-col relative bg-theme-page text-theme-primary">
    <a href="#main-content" class="skip-link">
      {{ t_ui.nav.skipToContent }}
    </a>

    <ScrollProgressBar />

    <AppNavbar :show-dev-badge="isDevHost" />
    <main id="main-content" class="flex-grow relative z-0" tabindex="-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
