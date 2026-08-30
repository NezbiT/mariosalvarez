<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from '~/composables/useI18n'
import { useScrollTo, useScrollDetection } from '~/composables/useScrollTo'
import { useScrollSpy } from '~/composables/useScrollSpy'
import ThemeToggle from './ThemeToggle.vue'
import CanvasLogo from './CanvasLogo.vue'

defineProps<{
  showDevBadge?: boolean
}>()

const { t_ui, toggleLocale } = useI18n()
const { scrollAndClose } = useScrollTo()
const { isScrolled } = useScrollDetection()
const { activeSection } = useScrollSpy(['hero', 'projects', 'lab', 'technologies', 'reviews', 'contact'])

const route = useRoute()
const isHome = computed(() => route.path === '/' || route.path === '')
const isMenuOpen = ref(false)
const onHero = computed(() => isHome.value && activeSection.value === 'hero' && !isScrolled.value)

const navLinks = [
  { id: 'hero', key: 'home' as const },
  { id: 'projects', key: 'projects' as const },
  { id: 'lab', key: 'lab' as const },
  { id: 'technologies', key: 'technologies' as const },
  { id: 'reviews', key: 'reviews' as const },
  { id: 'contact', key: 'contact' as const },
]

function closeMenu(): void { isMenuOpen.value = false }
function navigate(sectionId: string): void { scrollAndClose(sectionId, closeMenu) }
function isActive(sectionId: string): boolean { return isHome.value && activeSection.value === sectionId }

function onSectionClick(event: MouseEvent, sectionId: string): void {
  if (isHome.value) {
    event.preventDefault()
    navigate(sectionId)
    return
  }
  closeMenu()
}
</script>

<template>
  <header
    class="fixed top-1 left-0 right-0 z-50 transition-all duration-500"
    :class="onHero ? 'glass-nav mx-3 mt-2 rounded-2xl' : 'glass-nav shadow-lg'"
  >
    <nav
      class="site-container flex items-center justify-between py-3 sm:py-4"
      :aria-label="t_ui.nav.mainNav"
    >
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/"
          class="flex min-h-11 min-w-11 items-center justify-center rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/50"
          :aria-label="t_ui.nav.home"
          @click="onSectionClick($event, 'hero')"
        >
          <CanvasLogo :size="36" />
        </NuxtLink>
        <span v-if="showDevBadge" class="dev-badge">DEV</span>
      </div>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`/#${link.id}`"
            class="nav-link relative min-h-11 inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium"
            :class="isActive(link.id) ? 'nav-link--active' : ''"
            :aria-current="isActive(link.id) ? 'true' : undefined"
            @click="onSectionClick($event, link.id)"
          >
            {{ t_ui.nav[link.key] }}
            <span
              v-if="isActive(link.id)"
              class="absolute bottom-0.5 left-1/2 h-0.5 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-400 to-cyan-400"
              aria-hidden="true"
            />
          </a>
        </li>
        <li class="ml-1">
          <ThemeToggle />
        </li>
        <li>
          <button
            type="button"
            class="btn-interactive min-h-11 rounded-xl border border-theme px-3 py-1.5 text-sm font-medium text-theme-secondary hover:text-accent-500 transition-all duration-300"
            :aria-label="t_ui.nav.languageAria"
            @click="toggleLocale"
          >
            {{ t_ui.nav.language }}
          </button>
        </li>
      </ul>

      <div class="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button
          type="button"
          class="min-h-11 min-w-11 rounded-lg border border-theme px-2.5 text-sm text-theme-secondary"
          :aria-label="t_ui.nav.languageAria"
          @click="toggleLocale"
        >
          {{ t_ui.nav.language }}
        </button>
        <button
          type="button"
          class="flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 text-theme-primary"
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
      <div v-if="isMenuOpen" id="mobile-nav-menu" class="border-t border-theme glass-nav md:hidden">
        <ul class="site-container flex flex-col py-3">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`/#${link.id}`"
              class="block min-h-11 w-full rounded-xl py-3 px-3 text-left transition-colors nav-link"
              :class="isActive(link.id) ? 'nav-link--active font-medium' : ''"
              :aria-current="isActive(link.id) ? 'true' : undefined"
              @click="onSectionClick($event, link.id)"
            >
              {{ t_ui.nav[link.key] }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>