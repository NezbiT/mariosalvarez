<!--
  Barra de navegación fija del portafolio.

  Qué hace:
  - Enlaces a secciones (inicio, proyectos, tecnologías, contacto)
  - Toggle de idioma ES/EN y menú hamburguesa en móvil

  Por qué existe:
  - Navegación persistente en todas las secciones de la página única (SPA estática)

  Cómo funciona:
  - useScrollTo desplaza suavemente; useScrollDetection añade sombra al hacer scroll
-->
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useScrollTo, useScrollDetection } from '../composables/useScrollTo'

const { t_ui, toggleLocale } = useI18n()
const { scrollAndClose } = useScrollTo()
const { isScrolled } = useScrollDetection()

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
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
    :class="isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'"
  >
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
      aria-label="Navegación principal"
    >
      <!-- Logo / inicio -->
      <button
        type="button"
        class="text-lg font-bold text-industrial-800 hover:text-accent-600 transition-colors"
        @click="navigate('hero')"
      >
        MA
      </button>

      <!-- Enlaces desktop -->
      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in navLinks" :key="link.id">
          <button
            type="button"
            class="text-sm font-medium text-industrial-600 hover:text-accent-600 transition-colors"
            @click="navigate(link.id)"
          >
            {{ t_ui.nav[link.key] }}
          </button>
        </li>
        <li>
          <button
            type="button"
            class="rounded-md border border-industrial-300 px-3 py-1.5 text-sm font-medium text-industrial-700 hover:border-accent-500 hover:text-accent-600 transition-colors"
            :aria-label="`Cambiar idioma a ${t_ui.nav.language}`"
            @click="toggleLocale"
          >
            {{ t_ui.nav.language }}
          </button>
        </li>
      </ul>

      <!-- Controles móvil -->
      <div class="flex items-center gap-3 md:hidden">
        <button
          type="button"
          class="rounded-md border border-industrial-300 px-2.5 py-1 text-sm font-medium"
          @click="toggleLocale"
        >
          {{ t_ui.nav.language }}
        </button>
        <button
          type="button"
          class="rounded-md p-2 text-industrial-700 hover:bg-industrial-100"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="sr-only">Menú</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

    <!-- Menú móvil desplegable -->
    <div
      v-show="isMenuOpen"
      id="mobile-menu"
      class="border-t border-industrial-200 bg-white md:hidden"
    >
      <ul class="flex flex-col px-4 py-3">
        <li v-for="link in navLinks" :key="link.id">
          <button
            type="button"
            class="block w-full py-3 text-left text-industrial-700 hover:text-accent-600"
            @click="navigate(link.id)"
          >
            {{ t_ui.nav[link.key] }}
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<!--
  ### Cómo ejecutar este archivo
  Se importa en App.vue; se renderiza automáticamente al iniciar la app.

  ### Qué aprendí en este archivo
  - Navbar fijo con backdrop-blur mejora legibilidad sobre el hero
  - aria-expanded y aria-controls son esenciales para menú móvil accesible
-->