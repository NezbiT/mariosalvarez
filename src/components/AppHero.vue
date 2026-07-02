<!--
  Sección hero con animaciones de entrada y parallax sutil en la imagen.
-->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useScrollTo } from '../composables/useScrollTo'
import heroImage from '../assets/hero.png'

const { t_ui } = useI18n()
const { scrollToSection } = useScrollTo()

/** Controla si las animaciones de entrada ya se dispararon */
const isLoaded = ref(false)

/** Offset parallax de la imagen según posición del mouse */
const parallaxX = ref(0)
const parallaxY = ref(0)

onMounted(() => {
  requestAnimationFrame(() => {
    isLoaded.value = true
  })
})

/**
 * Parallax suave en la foto — solo en desktop con mouse.
 */
function onHeroMouseMove(event: MouseEvent): void {
  if (window.innerWidth < 1024) return

  const { clientX, clientY, currentTarget } = event
  const rect = (currentTarget as HTMLElement).getBoundingClientRect()
  const x = (clientX - rect.left) / rect.width - 0.5
  const y = (clientY - rect.top) / rect.height - 0.5

  parallaxX.value = x * 10
  parallaxY.value = y * 10
}

function resetParallax(): void {
  parallaxX.value = 0
  parallaxY.value = 0
}

onUnmounted(() => {
  resetParallax()
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 overflow-hidden"
    @mousemove="onHeroMouseMove"
    @mouseleave="resetParallax"
  >
    <!-- Fondo con blobs animados -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-industrial-100 via-industrial-50 to-accent-400/10 -z-10"
      aria-hidden="true"
    />
    <div
      class="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl animate-float-slow -z-10"
      aria-hidden="true"
    />
    <div
      class="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-industrial-300/30 blur-3xl animate-float-slower -z-10"
      aria-hidden="true"
    />

    <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
      <!-- Texto principal con entrada escalonada -->
      <div class="space-y-6">
        <p
          class="text-accent-600 font-medium tracking-wide uppercase text-sm hero-enter"
          :class="{ 'opacity-0': !isLoaded }"
          :style="{ animationDelay: '0.1s' }"
        >
          {{ t_ui.hero.greeting }}
        </p>
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-industrial-900 leading-tight hero-enter"
          :class="{ 'opacity-0': !isLoaded }"
          :style="{ animationDelay: '0.2s' }"
        >
          {{ t_ui.hero.name }}
        </h1>
        <p
          class="text-xl sm:text-2xl font-semibold text-industrial-700 leading-snug hero-enter"
          :class="{ 'opacity-0': !isLoaded }"
          :style="{ animationDelay: '0.35s' }"
        >
          {{ t_ui.hero.slogan }}
        </p>
        <p
          class="text-lg text-industrial-600 max-w-xl leading-relaxed hero-enter"
          :class="{ 'opacity-0': !isLoaded }"
          :style="{ animationDelay: '0.5s' }"
        >
          {{ t_ui.hero.subtitle }}
        </p>
        <p
          class="flex items-center gap-2 text-sm text-industrial-500 hero-enter"
          :class="{ 'opacity-0': !isLoaded }"
          :style="{ animationDelay: '0.65s' }"
        >
          <svg class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {{ t_ui.hero.location }}
        </p>

        <div
          class="flex flex-wrap gap-4 pt-2 hero-enter"
          :class="{ 'opacity-0': !isLoaded }"
          :style="{ animationDelay: '0.8s' }"
        >
          <button
            type="button"
            class="btn-interactive rounded-lg bg-accent-600 px-6 py-3 text-white font-medium hover:bg-accent-500 shadow-lg shadow-accent-600/25 hover:shadow-accent-500/40"
            @click="scrollToSection('projects')"
          >
            {{ t_ui.hero.ctaProjects }}
          </button>
          <button
            type="button"
            class="btn-interactive rounded-lg border-2 border-industrial-300 px-6 py-3 text-industrial-700 font-medium hover:border-accent-500 hover:text-accent-600 hover:bg-white/60"
            @click="scrollToSection('contact')"
          >
            {{ t_ui.hero.ctaContact }}
          </button>
        </div>
      </div>

      <!-- Imagen con parallax y hover -->
      <div
        class="relative flex justify-center lg:justify-end hero-enter"
        :class="{ 'opacity-0': !isLoaded }"
        :style="{ animationDelay: '0.45s' }"
      >
        <div
          class="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-industrial-200 transition-transform duration-500 hover:scale-[1.02] hover:shadow-accent-500/20"
          :style="{
            transform: `translate(${parallaxX}px, ${parallaxY}px)`,
          }"
        >
          <img
            :src="heroImage"
            alt="Mario Alvarez — Industrial Data Developer"
            class="h-auto w-full max-w-md object-cover transition-transform duration-700 hover:scale-105"
            width="480"
            height="480"
            loading="eager"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-industrial-900/20 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<!--
### Cómo ejecutar este archivo
Importado en App.vue como primera sección.

### Qué aprendí en este archivo
- Animaciones escalonadas con animation-delay dan vida al hero sin librerías
- Parallax ligero con mouse mejora la sensación de profundidad en desktop
-->