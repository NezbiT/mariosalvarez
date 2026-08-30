<script setup lang="ts">
import {
  OG_IMAGE,
  PERSON_DESCRIPTION,
  SITE_URL,
  ZERODIGITX_URL,
  organizationJsonLd,
  personJsonLd,
  websiteJsonLd,
} from '~/data/identity'

const { t_ui } = useI18n()

const pageUrl = `${SITE_URL}/about`
const pageTitle = computed(() => `${t_ui.value.about.title} — ${t_ui.value.hero.name}`)
const pageDescription = PERSON_DESCRIPTION

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: pageUrl,
  ogType: 'profile',
  ogImage: OG_IMAGE,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: OG_IMAGE,
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          personJsonLd(),
          organizationJsonLd(),
          websiteJsonLd(),
          {
            '@type': 'AboutPage',
            '@id': `${pageUrl}#page`,
            url: pageUrl,
            name: 'About Mario S. Alvarez (Mario Alvarez)',
            description: pageDescription,
            mainEntity: { '@id': `${SITE_URL}/#person` },
            isPartOf: { '@id': `${SITE_URL}/#website` },
          },
          {
            '@type': 'ProfilePage',
            '@id': `${pageUrl}#profile`,
            url: pageUrl,
            mainEntity: { '@id': `${SITE_URL}/#person` },
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <section class="relative py-28 sm:py-32">
    <div class="site-container relative z-10 max-w-3xl">
      <p class="text-sm font-semibold uppercase tracking-widest text-accent-600 mb-3">
        {{ t_ui.about.role }}
      </p>
      <h1 class="display-lg font-bold text-theme-primary mb-2">
        {{ t_ui.hero.name }}
      </h1>
      <p class="text-lg font-medium text-theme-muted mb-6">
        {{ t_ui.hero.legalName }}
      </p>
      <p class="text-lg sm:text-xl text-theme-secondary leading-relaxed mb-6">
        {{ t_ui.about.lead }}
      </p>
      <p class="text-base sm:text-lg text-theme-muted leading-relaxed mb-12">
        {{ t_ui.about.body }}
      </p>

      <article class="theme-aside-card rounded-xl p-6 sm:p-8">
        <h2 class="text-xl font-semibold text-theme-primary mb-3">
          {{ t_ui.about.companyTitle }}
        </h2>
        <p class="text-theme-muted leading-relaxed mb-5">
          {{ t_ui.about.companyBody }}
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            :href="ZERODIGITX_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-500 transition-colors"
          >
            {{ t_ui.about.visitStudio }}
          </a>
          <NuxtLink
            to="/"
            class="inline-flex min-h-11 items-center justify-center rounded-lg border border-theme px-4 py-2.5 text-sm font-medium text-theme-secondary hover:text-accent-600 transition-colors"
          >
            {{ t_ui.about.backHome }}
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>
