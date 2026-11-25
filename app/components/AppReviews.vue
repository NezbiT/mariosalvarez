<!--
  Client reviews (from the ZeroDigitX feed) + CTA to ZeroDigitX.
  With no published reviews only the CTA band renders, without the
  #reviews anchor, so nav links to it are hidden too (see hasReviews).
-->
<script setup lang="ts">
import {
  reviews,
  hasReviews,
  ZERODIGITX_CONTACT_URL,
  ZERODIGITX_URL,
  ZERODIGITX_PHONE,
  ZERODIGITX_PHONE_DISPLAY,
} from '~/data/reviews'
import { useI18n } from '~/composables/useI18n'
import ScrollReveal from './ScrollReveal.vue'

const { t, t_ui } = useI18n()

function initials(name: string): string {
  return name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase()
}
</script>

<template>
  <section :id="hasReviews ? 'reviews' : undefined" class="section">
    <div class="site-container">
      <ScrollReveal v-if="hasReviews">
        <header class="section-header">
          <p class="eyebrow">{{ t_ui.reviews.agencyLabel }}</p>
          <h2 class="display-lg">{{ t_ui.reviews.title }}</h2>
          <p class="section-lead">{{ t_ui.reviews.subtitle }}</p>
        </header>
      </ScrollReveal>

      <div v-if="hasReviews" class="mb-16 grid gap-6 md:grid-cols-3">
        <ScrollReveal
          v-for="(review, index) in reviews"
          :key="review.id"
          :delay="index * 100"
          class="h-full"
        >
          <figure class="surface flex h-full flex-col p-6 xl:p-8">
            <div class="mb-5 flex gap-0.5 text-crimson" aria-hidden="true">
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
            <blockquote class="mb-6 flex-grow text-base leading-relaxed text-theme-secondary">
              “{{ t(review.quote) }}”
            </blockquote>
            <figcaption class="flex items-center gap-3 border-t border-theme pt-5">
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center bg-crimson font-display text-sm font-semibold text-ivory"
                aria-hidden="true"
              >
                {{ initials(review.author) }}
              </span>
              <div class="min-w-0">
                <p class="truncate font-semibold text-theme-primary">{{ review.author }}</p>
                <p class="truncate text-xs text-theme-muted">
                  {{ t(review.role) }} ·
                  <NuxtLink :to="`/projects/${review.id}`" class="underline underline-offset-2 hover:text-theme-accent">{{ review.company }}</NuxtLink>
                </p>
              </div>
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>

      <ScrollReveal :delay="200">
        <div class="cta-band">
          <div class="max-w-xl space-y-3">
            <h3 class="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {{ t_ui.reviews.ctaTitle }}
            </h3>
            <p class="text-industrial-300">{{ t_ui.reviews.ctaBody }}</p>
            <a
              :href="ZERODIGITX_PHONE"
              class="inline-flex min-h-11 items-center font-semibold text-accent-300 underline-offset-4 hover:underline"
            >
              {{ ZERODIGITX_PHONE_DISPLAY }}
            </a>
          </div>
          <div class="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              :href="ZERODIGITX_CONTACT_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              {{ t_ui.reviews.ctaButton }}
            </a>
            <a
              :href="ZERODIGITX_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-ghost btn-ghost--on-dark"
            >
              {{ t_ui.reviews.ctaSecondary }}
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
