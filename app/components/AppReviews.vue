<!--
  Sección de reseñas profesionales + CTA a ZeroDigitX.
-->
<script setup lang="ts">
import {
  reviews,
  ZERODIGITX_CONTACT_URL,
  ZERODIGITX_URL,
  ZERODIGITX_PHONE,
  ZERODIGITX_PHONE_DISPLAY,
} from '~/data/reviews'
import { useI18n } from '~/composables/useI18n'
import ScrollReveal from './ScrollReveal.vue'
import TiltCard from './effects/TiltCard.vue'

const { t, t_ui } = useI18n()
</script>

<template>
  <section id="reviews" class="relative py-20 sm:py-28 overflow-hidden">
    <div class="absolute inset-0 mesh-gradient opacity-15 pointer-events-none" aria-hidden="true" />

    <div class="site-container relative z-10">
      <ScrollReveal>
        <header class="mb-14 text-center">
          <p class="text-sm font-semibold uppercase tracking-widest text-accent-600 mb-3">
            {{ t_ui.reviews.agencyLabel }}
          </p>
          <h2 class="display-lg font-bold text-theme-primary mb-4">
            {{ t_ui.reviews.title }}
          </h2>
          <p class="text-lg xl:text-xl text-theme-muted max-w-3xl mx-auto">
            {{ t_ui.reviews.subtitle }}
          </p>
        </header>
      </ScrollReveal>

      <div class="grid gap-6 md:grid-cols-3 mb-16">
        <ScrollReveal
          v-for="(review, index) in reviews"
          :key="review.id"
          :delay="index * 100"
        >
          <TiltCard>
            <article class="h-full rounded-2xl glass-card p-6 xl:p-7 shadow-md flex flex-col">
              <div class="mb-4 flex text-accent-500" aria-hidden="true">
                <svg
                  v-for="n in 5"
                  :key="n"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <blockquote class="flex-grow text-theme-secondary text-sm sm:text-base leading-relaxed mb-6">
                “{{ t(review.quote) }}”
              </blockquote>
              <footer class="flex items-center gap-3 border-t border-theme pt-4">
                <span
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-600/15 text-sm font-bold text-accent-600"
                  aria-hidden="true"
                >
                  {{ review.initials }}
                </span>
                <div class="min-w-0">
                  <p class="font-semibold text-theme-primary truncate">{{ review.author }}</p>
                  <p class="text-xs text-theme-muted truncate">
                    {{ t(review.role) }} · {{ review.company }}
                  </p>
                </div>
              </footer>
            </article>
          </TiltCard>
        </ScrollReveal>
      </div>

      <ScrollReveal :delay="200">
        <div
          class="relative overflow-hidden rounded-2xl glass-card p-8 sm:p-10 shadow-lg border border-theme text-center sm:text-left"
        >
          <div
            class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-500/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div class="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div class="max-w-xl space-y-2">
              <h3 class="text-xl sm:text-2xl font-bold text-theme-primary">
                {{ t_ui.reviews.ctaTitle }}
              </h3>
              <p class="text-theme-muted">
                {{ t_ui.reviews.ctaBody }}
              </p>
              <a
                :href="ZERODIGITX_PHONE"
                class="inline-block text-sm font-medium text-accent-600 hover:underline"
              >
                {{ ZERODIGITX_PHONE_DISPLAY }}
              </a>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                :href="ZERODIGITX_CONTACT_URL"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-interactive inline-flex items-center justify-center rounded-lg bg-accent-600 px-6 py-3 font-medium text-white hover:bg-accent-500 shadow-md shadow-accent-600/20"
              >
                {{ t_ui.reviews.ctaButton }}
              </a>
              <a
                :href="ZERODIGITX_URL"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-interactive inline-flex items-center justify-center rounded-lg border border-theme px-6 py-3 font-medium text-theme-secondary hover:text-accent-600 hover:border-accent-500 transition-colors"
              >
                {{ t_ui.reviews.ctaSecondary }}
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
