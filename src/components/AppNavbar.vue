<!--
  Navbar con scroll spy, sombra dinámica y menú móvil animado.
-->
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useScrollTo, useScrollDetection } from '../composables/useScrollTo'
import { useScrollSpy } from '../composables/useScrollSpy'

const { t_ui, toggleLocale } = useI18n()
const { scrollAndClose } = useScrollTo()
const { isScrolled } = useScrollDetection()
const { activeSection } = useScrollSpy(['hero', 'projects', 'technologies', 'contact'])

const isMenuOpen = ref(false)

const navLinks = [
  { id: 'hero', key: 'home' as const },
  { id: 'projects', key: 'projects' as const },
  { id: 'technologies', key: 'technologies' as const },
  { id: 'contact', key: 'contact' as const },
]

function closeMenu(): void {
  isMenuOpen.value = false
}

function navigate(sectionId: string): void {
  scrollAndClose(sectionId, closeMenu)
}

function isActive(sectionId: string): boolean {
  return activeSection.value === sectionId
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="
      isScrolled
        ? 'bg-white/95 shadow-md backdrop-blur-sm py-0'
        : 'bg-transparent'
    "
  >
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 transition-all duration-300"
      :class="isScrolled ? 'py-3' : 'py-4'"
      aria-label="Navegación principal"
    >
      <button
        type="button"
        class="text-lg font-bold text-industrial-800 hover:text-accent-600 transition-all duration-200 hover:scale-105"
        @click="navigate('hero')"
      >
        MA
      </button>

      <ul class="hidden items-center gap-2 md:flex">
        <li v-for="link in navLinks" :key="link.id">
          <button
            type="button"
            class="relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200"
            :class="
              isActive(link.id)
                ? 'text-accent-600 bg-accent-50'
                : 'text-industrial-600 hover:text-accent-600 hover:bg-industrial-50'
            "
            @click="navigate(link.id)"
          >
            {{ t_ui.nav[link.key] }}
            <span
              v-if="isActive(link.id)"
              class="absolute bottom-0 left-1/2 h-0.5 w-4/5 -translate-x-1/2 rounded-full bg-accent-500 transition-all duration-300"
            />
          </button>
        </li>
        <li class="ml-4">
          <button
            type="button"
            class="btn-interactive rounded-md border border-industrial-300 px-3 py-1.5 text-sm font-medium text-industrial-700 hover:border-accent-500 hover:text-accent-600 hover:bg-accent-50"
            :aria-label="`Cambiar idioma a ${t_ui.nav.language}`"
            @click="toggleLocale"
          >
            {{ t_ui.nav.language }}
          </button>
        </li>
      </ul>

      <div class="flex items-center gap-3 md:hidden">
        <button
          type="button"
          class="btn-interactive rounded-md border border-industrial-300 px-2.5 py-1 text-sm font-medium"
          @click="toggleLocale"
        >
          {{ t_ui.nav.language }}
        </button>
        <button
          type="button"
          class="rounded-md p-2 text-industrial-700 hover:bg-industrial-100 transition-colors"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="sr-only">Menú</span>
          <svg class="h-6 w-6 transition-transform duration-200" :class="{ 'rotate-90': isMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <Transition name="menu-slide">
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="border-t border-industrial-200 bg-white md:hidden"
      >
        <ul class="flex flex-col px-4 py-3">
          <li v-for="link in navLinks" :key="link.id">
            <button
              type="button"
              class="block w-full rounded-lg py-3 px-2 text-left transition-colors duration-200"
              :class="
                isActive(link.id)
                  ? 'text-accent-600 bg-accent-50 font-medium'
                  : 'text-industrial-700 hover:text-accent-600 hover:bg-industrial-50'
              "
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

<!--
### Cómo ejecutar este archivo
Importado en App.vue; scroll spy resalta sección activa automáticamente.

### Qué aprendí en este archivo
- useScrollSpy + clases condicionales dan feedback de navegación en tiempo real
-->