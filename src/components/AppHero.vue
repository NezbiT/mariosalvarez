<!--
  Sección hero: presentación principal de Mario Alvarez.

  Qué hace:
  - Muestra nombre, slogan bilingüe y CTAs hacia proyectos y contacto
  - Incluye imagen hero y ubicación (Houston, Texas)

  Por qué existe:
  - Primera impresión: comunica la transición rope access → desarrollador de datos

  Cómo funciona:
  - useI18n para textos; useScrollTo para botones de acción
-->
<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import { useScrollTo } from '../composables/useScrollTo'
import heroImage from '../assets/hero.png'

const { t_ui } = useI18n()
const { scrollToSection } = useScrollTo()
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6"
  >
    <!-- Fondo degradado industrial -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-industrial-100 via-industrial-50 to-accent-400/10 -z-10"
      aria-hidden="true"
    />

    <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
      <!-- Texto principal -->
      <div class="space-y-6">
        <p class="text-accent-600 font-medium tracking-wide uppercase text-sm">
          {{ t_ui.hero.greeting }}
        </p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-industrial-900 leading-tight">
          {{ t_ui.hero.name }}
        </h1>
        <p class="text-xl sm:text-2xl font-semibold text-industrial-700 leading-snug">
          {{ t_ui.hero.slogan }}
        </p>
        <p class="text-lg text-industrial-600 max-w-xl leading-relaxed">
          {{ t_ui.hero.subtitle }}
        </p>
        <p class="flex items-center gap-2 text-sm text-industrial-500">
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

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 pt-2">
          <button
            type="button"
            class="rounded-lg bg-accent-600 px-6 py-3 text-white font-medium hover:bg-accent-500 transition-colors shadow-lg shadow-accent-600/25"
            @click="scrollToSection('projects')"
          >
            {{ t_ui.hero.ctaProjects }}
          </button>
          <button
            type="button"
            class="rounded-lg border-2 border-industrial-300 px-6 py-3 text-industrial-700 font-medium hover:border-accent-500 hover:text-accent-600 transition-colors"
            @click="scrollToSection('contact')"
          >
            {{ t_ui.hero.ctaContact }}
          </button>
        </div>
      </div>

      <!-- Imagen -->
      <div class="relative flex justify-center lg:justify-end">
        <div
          class="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-industrial-200"
        >
          <img
            :src="heroImage"
            alt="Mario Alvarez — Industrial Data Developer"
            class="h-auto w-full max-w-md object-cover"
            width="480"
            height="480"
            loading="eager"
          />
          <!-- Overlay decorativo -->
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
  Se importa en App.vue como primer bloque de contenido tras el navbar.

  ### Qué aprendí en este archivo
  - min-h-screen + pt-20 compensa navbar fijo en la sección hero
  - CTAs con scroll programático evitan saltos bruscos de ancla
-->