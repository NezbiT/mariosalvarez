<script setup lang="ts">
import { alternatesOf, sectionOf, type PageKey } from '~/i18n/routes'

defineProps<{
  showDevBadge?: boolean
}>()

const { t_ui, locale, localePath } = useI18n()
const route = useRoute()

const links: { key: Exclude<PageKey, 'home'>, side?: 'business' | 'finances' }[] = [
  { key: 'business', side: 'business' },
  { key: 'finances', side: 'finances' },
  { key: 'about' },
]

const otherLocale = computed(() => (locale.value === 'en' ? 'es' : 'en'))
const switchPath = computed(() => alternatesOf(route.path)[otherLocale.value])
const section = computed(() => sectionOf(route.path))

const isMenuOpen = ref(false)
watch(() => route.fullPath, () => { isMenuOpen.value = false })
</script>

<template>
  <header class="ms-nav glass-nav fixed inset-x-0 top-0 z-50" :class="{ 'ms-nav--open': isMenuOpen }">
    <nav
      class="site-container flex items-center justify-between py-3 sm:py-4"
      :aria-label="t_ui.nav.mainNav"
    >
      <div class="flex items-center gap-3">
        <NuxtLink :to="localePath('home')" class="ms-logo">
          <span class="ms-logo__word">Mario Alvarez</span>
          <span class="ms-logo__dock" aria-hidden="true">
            <XMark class="ms-logo__x" :depth="false" />
          </span>
        </NuxtLink>
        <span v-if="showDevBadge" class="dev-badge">DEV</span>
      </div>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in links" :key="link.key">
          <NuxtLink
            :to="localePath(link.key)"
            class="nav-link relative inline-flex min-h-11 items-center rounded-xl px-4 py-2 text-sm font-medium"
            :class="[{ 'nav-link--active': section === link.key }, link.side && `side-${link.side}`]"
            :aria-current="section === link.key ? 'page' : undefined"
          >
            {{ t_ui.nav[link.key] }}
            <span v-if="section === link.key" class="ms-nav__bar" aria-hidden="true" />
          </NuxtLink>
        </li>
        <li class="ml-1">
          <ThemeToggle />
        </li>
        <li>
          <NuxtLink
            :to="switchPath"
            :hreflang="otherLocale"
            :lang="otherLocale"
            class="ms-lang"
            :aria-label="t_ui.nav.languageAria"
          >
            {{ t_ui.nav.language }}
          </NuxtLink>
        </li>
      </ul>

      <div class="flex items-center gap-2 md:hidden">
        <NuxtLink
          :to="switchPath"
          :hreflang="otherLocale"
          :lang="otherLocale"
          class="ms-lang"
          :aria-label="t_ui.nav.languageAria"
        >
          {{ t_ui.nav.language }}
        </NuxtLink>
        <button
          type="button"
          class="flex min-h-11 min-w-11 items-center justify-center rounded p-2"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-nav-menu"
          :aria-label="isMenuOpen ? t_ui.nav.menuClose : t_ui.nav.menuOpen"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg class="h-6 w-6 transition-transform duration-300" :class="{ 'rotate-90': isMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <Transition name="menu-slide">
      <div v-if="isMenuOpen" id="mobile-nav-menu" class="ms-nav__panel md:hidden">
        <ul class="site-container flex flex-col py-3">
          <li v-for="link in links" :key="link.key">
            <NuxtLink
              :to="localePath(link.key)"
              class="nav-link block min-h-11 w-full rounded-xl px-3 py-3 text-left transition-colors"
              :class="[{ 'nav-link--active font-medium': section === link.key }, link.side && `side-${link.side}`]"
              :aria-current="section === link.key ? 'page' : undefined"
            >
              {{ t_ui.nav[link.key] }}
            </NuxtLink>
          </li>
          <li class="mt-2 border-t border-theme px-3 pt-4">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
