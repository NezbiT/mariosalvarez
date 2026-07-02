<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useScrollTo } from '../composables/useScrollTo'
import { useMousePosition } from '../composables/useMousePosition'
import { useScrollProgress } from '../composables/useScrollProgress'
import MagneticButton from './effects/MagneticButton.vue'
import heroImage from '../assets/hero.png'

const { t_ui, locale } = useI18n()
const { scrollToSection } = useScrollTo()
const { mouseX, mouseY } = useMousePosition()
const { scrollY } = useScrollProgress()

const isLoaded = ref(false)

onMounted(() => {
  requestAnimationFrame(() => { isLoaded.value = true })
})

const textParallax = computed(() => ({
  transform: `translateY(${scrollY.value * 0.15}px) translate(${mouseX.value * -20}px, ${mouseY.value * -12}px)`,
}))

const imageParallax = computed(() => ({
  transform: `
    translateY(${scrollY.value * -0.08}px)
    translate(${mouseX.value * 28}px, ${mouseY.value * 20}px)
    rotateY(${mouseX.value * 8}deg)
    rotateX(${mouseY.value * -6}deg)
  `,
}))

const bgParallax = computed(() => ({
  transform: `translateY(${scrollY.value * 0.3}px)`,
}))
</script>

<template>
  <section
    id="hero"
    class="hero-cinematic relative min-h-[100dvh] flex items-center overflow-hidden"
  >
    <div class="absolute inset-0 mesh-gradient animated-grid opacity-50" :style="bgParallax" aria-hidden="true" />

    <div class="absolute -top-32 -right-32 h-[min(50vw,28rem)] w-[min(50vw,28rem)] rounded-full orb-cyan blur-3xl animate-float-slow" aria-hidden="true" />
    <div class="absolute -bottom-40 -left-32 h-[min(60vw,32rem)] w-[min(60vw,32rem)] rounded-full orb-accent blur-3xl animate-float-slower" aria-hidden="true" />

    <div class="site-container relative z-10 grid gap-10 py-28 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
      <div class="space-y-6 lg:space-y-8 parallax-layer" :style="textParallax">
        <p
          class="stat-pill inline-block hero-enter"
          :class="{ 'opacity-0': !isLoaded }"
          :style="{ animationDelay: '0.1s' }"
        >
          {{ t_ui.hero.greeting }}
        </p>

        <h1
          class="display-xl font-bold text-gradient-hero hero-enter"
          :class="{ 'opacity-0': !isLoaded }"
          :style="{ animationDelay: '0.2s' }"
        >
          {{ t_ui.hero.name }}
        </h1>

        <p
          class="display-lg font-semibold text-theme-secondary leading-snug hero-enter"
          :class="{ 'opacity-0': !isLoaded }"
          :style="{ animationDelay: '0.35s' }"
        >
          <span class="text-gradient-accent">{{ t_ui.hero.slogan }}</span>
        </p>

        <p
          class="text-base sm:text-lg lg:text-xl text-theme-muted max-w-2xl leading-relaxed hero-enter"
          :class="{ 'opacity-0': !isLoaded }"
          :style="{ animationDelay: '0.5s' }"
        >
          {{ t_ui.hero.subtitle }}
        </p>

        <div
          class="flex flex-wrap gap-3 hero-enter"
          :class="{ 'opacity-0': !isLoaded }"
          :style="{ animationDelay: '0.6s' }"
        >
          <span class="stat-pill">Vue 3</span>
          <span class="stat-pill">TypeScript</span>
          <span class="stat-pill">15+ {{ locale === 'es' ? 'años web' : 'yrs web' }}</span>
          <span class="stat-pill">Houston, TX</span>
        </div>

        <p
          class="flex items-center gap-2 text-sm text-theme-muted hero-enter"
          :class="{ 'opacity-0': !isLoaded }"
          :style="{ animationDelay: '0.7s' }"
        >
          <svg class="h-4 w-4 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {{ t_ui.hero.location }}
        </p>

        <div
          class="flex flex-wrap gap-4 pt-2 hero-enter"
          :class="{ 'opacity-0': !isLoaded }"
          :style="{ animationDelay: '0.85s' }"
        >
          <MagneticButton variant="primary" @click="scrollToSection('projects')">
            {{ t_ui.hero.ctaProjects }}
          </MagneticButton>
          <MagneticButton variant="ghost" @click="scrollToSection('contact')">
            {{ t_ui.hero.ctaContact }}
          </MagneticButton>
        </div>
      </div>

      <div
        class="relative flex justify-center lg:justify-end perspective-container hero-image-enter"
        :class="{ 'opacity-0': !isLoaded }"
        :style="{ animationDelay: '0.4s', ...imageParallax }"
      >
        <div class="relative">
          <div class="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent-500/40 to-cyan-400/40 blur-2xl opacity-60 animate-float-slow" aria-hidden="true" />
          <div class="relative overflow-hidden rounded-2xl xl:rounded-3xl shadow-2xl ring-2 ring-accent-400/30 glass-card-dark">
            <img
              :src="heroImage"
              alt="Mario Alvarez — Industrial Data Developer"
              class="h-auto w-full max-w-[min(100%,28rem)] xl:max-w-[min(100%,36rem)] 2xl:max-w-[min(100%,42rem)] object-cover"
              width="640"
              height="640"
              loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-industrial-900/30 via-transparent to-accent-500/10 pointer-events-none" aria-hidden="true" />
            <div class="absolute bottom-4 left-4 right-4 glass-card-dark rounded-xl px-4 py-3 text-sm text-theme-secondary">
              <span class="text-accent-500 font-mono text-xs">// developer</span>
              <p class="mt-1 font-medium text-theme-primary">Industrial Data · Web · Houston</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-theme-muted animate-float-slow" aria-hidden="true">
      <span class="text-xs uppercase tracking-widest">Scroll</span>
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>