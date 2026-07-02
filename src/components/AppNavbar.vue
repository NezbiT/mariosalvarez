<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useScrollTo, useScrollDetection } from '../composables/useScrollTo'
import { useScrollSpy } from '../composables/useScrollSpy'
import ThemeToggle from './ThemeToggle.vue'

defineProps<{
  showDevBadge?: boolean
}>()

const { t_ui, toggleLocale } = useI18n()
const { scrollAndClose } = useScrollTo()
const { isScrolled } = useScrollDetection()
const { activeSection } = useScrollSpy(['hero', 'projects', 'technologies', 'contact'])

const isMenuOpen = ref(false)
const onHero = computed(() => activeSection.value === 'hero' && !isScrolled.value)

const navLinks = [
  { id: 'hero', key: 'home' as const },
  { id: 'projects', key: 'projects' as const },
  { id: 'technologies', key: 'technologies' as const },
  { id: 'contact', key: 'contact' as const },
]

function closeMenu(): void { isMenuOpen.value = false }
function navigate(sectionId: string): void { scrollAndClose(sectionId, closeMenu) }
function isActive(sectionId: string): boolean { return activeSection.value === sectionId }
</script>

<template>
  <header
    class="fixed top-1 left-0 right-0 z-50 transition-all duration-500"
    :class="onHero ? 'glass-nav mx-3 mt-2 rounded-2xl' : 'glass-nav shadow-lg'"
  >
    <nav
      class="site-container flex items-center justify-between py-3 sm:py-4"
      aria-label="Navegación principal"
    >
      <div class="flex items-center gap-3">
        <button
          type="button"
          class="font-display text-lg font-bold transition-all duration-300 hover:scale-105 text-theme-primary hover:text-accent-500"
          @click="navigate('hero')"
        >
          <span class="text-gradient-accent">MA</span>
        </button>
        <span v-if="showDevBadge" class="dev-badge">DEV</span>
      </div>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in navLinks" :key="link.id">
          <button
            type="button"
            class="nav-link relative rounded-xl px-4 py-2 text-sm font-medium"
            :class="isActive(link.id) ? 'nav-link--active' : ''"
            @click="navigate(link.id)"
          >
            {{ t_ui.nav[link.key] }}
            <span
              v-if="isActive(link.id)"
              class="absolute bottom-0.5 left-1/2 h-0.5 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-400 to-cyan-400"
            />
          </button>
        </li>
        <li class="ml-1">
          <ThemeToggle />
        </li>
        <li>
          <button
            type="button"
            class="btn-interactive rounded-xl border border-theme px-3 py-1.5 text-sm font-medium text-theme-secondary hover:text-accent-500 transition-all duration-300"
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
          class="rounded-lg border border-theme px-2.5 py-1 text-sm text-theme-secondary"
          @click="toggleLocale"
        >
          {{ t_ui.nav.language }}
        </button>
        <button
          type="button"
          class="rounded-lg p-2 text-theme-primary"
          :aria-expanded="isMenuOpen"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg class="h-6 w-6 transition-transform duration-300" :class="{ 'rotate-90': isMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <Transition name="menu-slide">
      <div v-if="isMenuOpen" class="border-t border-theme glass-nav md:hidden">
        <ul class="site-container flex flex-col py-3">
          <li v-for="link in navLinks" :key="link.id">
            <button
              type="button"
              class="block w-full rounded-xl py-3 px-3 text-left transition-colors nav-link"
              :class="isActive(link.id) ? 'nav-link--active font-medium' : ''"
              @click="navigate(link.id)"
            >
              {{ t_ui.nav[link.key] }}
            </button>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>