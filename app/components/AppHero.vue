<script setup lang="ts">
/**
 * Hero sin parallax multi-capa ni delays largos — contenido visible al primer paint.
 */
import heroImage from '~/assets/images/hero.png'
import zxMark from '~/assets/images/zx-mark-0x.png'
import { ZERODIGITX_URL } from '~/data/identity'

const { t_ui, locale } = useI18n()
const { scrollToSection } = useScrollTo()
</script>

<template>
  <section
    id="hero"
    class="hero-cinematic relative min-h-[100dvh] flex items-center overflow-hidden"
  >
    <div class="absolute inset-0 mesh-gradient animated-grid opacity-40" aria-hidden="true" />

    <div
      class="absolute -top-32 -right-32 h-[min(40vw,22rem)] w-[min(40vw,22rem)] rounded-full orb-cyan blur-3xl opacity-70"
      aria-hidden="true"
    />
    <div
      class="absolute -bottom-40 -left-32 h-[min(45vw,24rem)] w-[min(45vw,24rem)] rounded-full orb-accent blur-3xl opacity-60"
      aria-hidden="true"
    />

    <div class="site-container relative z-10 grid gap-10 py-28 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
      <div class="space-y-6 lg:space-y-8">
        <p class="stat-pill inline-block">
          {{ t_ui.hero.greeting }}
        </p>

        <h1 class="display-xl font-bold text-theme-primary">
          {{ t_ui.hero.name }}
        </h1>
        <p class="text-base sm:text-lg font-medium text-theme-muted">
          {{ t_ui.hero.legalName }}
        </p>

        <p class="text-lg sm:text-xl font-semibold text-accent-600 leading-snug">
          {{ t_ui.hero.role }}
        </p>

        <p class="display-lg font-semibold text-theme-secondary leading-snug">
          {{ t_ui.hero.slogan }}
        </p>

        <p class="text-base sm:text-lg lg:text-xl text-theme-muted max-w-2xl leading-relaxed">
          {{ t_ui.hero.subtitle }}
        </p>

        <div class="flex flex-wrap gap-3">
          <a
            href="https://zerodigitx.com"
            target="_blank"
            rel="noopener noreferrer"
            class="stat-pill"
          >ZeroDigitX</a>
          <span class="stat-pill">Nuxt</span>
          <span class="stat-pill">Python</span>
          <span class="stat-pill">15+ {{ locale === 'es' ? 'años web' : 'yrs web' }}</span>
          <span class="stat-pill">Houston, TX</span>
        </div>

        <p class="flex items-center gap-2 text-sm text-theme-muted">
          <svg class="h-4 w-4 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {{ t_ui.hero.location }}
        </p>

        <div class="flex flex-wrap gap-4 pt-2">
          <a
            href="#projects"
            class="btn-interactive min-h-11 inline-flex items-center rounded-xl bg-gradient-to-r from-accent-600 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-accent-600/25 hover:shadow-accent-500/40"
            @click.prevent="scrollToSection('projects')"
          >
            {{ t_ui.hero.ctaProjects }}
          </a>
          <a
            href="#contact"
            class="btn-interactive min-h-11 inline-flex items-center rounded-xl border border-theme glass-btn px-6 py-3.5 font-semibold text-theme-secondary hover:text-accent-600"
            @click.prevent="scrollToSection('contact')"
          >
            {{ t_ui.hero.ctaContact }}
          </a>
        </div>
      </div>

      <div class="relative flex justify-center lg:justify-end">
        <div class="relative">
          <div
            class="absolute -inset-3 rounded-3xl bg-gradient-to-r from-accent-500/30 to-cyan-400/30 blur-xl opacity-50"
            aria-hidden="true"
          />
          <div class="relative overflow-hidden rounded-2xl xl:rounded-3xl shadow-2xl ring-2 ring-accent-400/30 glass-card-dark">
            <img
              :src="heroImage"
              alt="Mario S. Alvarez (Mario Alvarez), founder, CEO, and owner of ZeroDigitX in Houston, Texas"
              class="h-auto w-full max-w-[min(100%,28rem)] xl:max-w-[min(100%,36rem)] 2xl:max-w-[min(100%,42rem)] object-cover"
              width="640"
              height="640"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-industrial-900/50 via-transparent to-accent-500/10 pointer-events-none" aria-hidden="true" />
            <a
              :href="ZERODIGITX_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="zx-mark absolute bottom-3 right-3 z-10 flex h-16 w-16 items-center justify-center sm:bottom-4 sm:right-4 sm:h-20 sm:w-20"
              :aria-label="t_ui.footer.agency"
            >
              <span class="zx-mark-glow" aria-hidden="true" />
              <img
                :src="zxMark"
                alt=""
                class="zx-mark-img relative z-10 h-[88%] w-[88%] object-contain"
                width="1024"
                height="1024"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
