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
  <section class="section pt-32 sm:pt-40">
    <div class="site-container">
      <div class="max-w-3xl">
        <p class="eyebrow">{{ t_ui.about.role }}</p>
        <h1 class="display-xl">{{ t_ui.hero.name }}</h1>
        <p class="mt-3 mb-10 font-display text-lg font-medium text-theme-muted">
          {{ t_ui.hero.legalName }}
        </p>
        <p class="mb-6 text-xl leading-relaxed text-theme-primary sm:text-2xl">
          {{ t_ui.about.lead }}
        </p>
        <p class="mb-14 text-base leading-relaxed text-theme-secondary sm:text-lg">
          {{ t_ui.about.body }}
        </p>

        <article class="surface surface--accent p-6 sm:p-8">
          <h2 class="mb-3 font-display text-2xl font-semibold tracking-tight text-theme-primary">
            {{ t_ui.about.companyTitle }}
          </h2>
          <p class="mb-6 leading-relaxed text-theme-secondary">
            {{ t_ui.about.companyBody }}
          </p>
          <div class="flex flex-wrap gap-3">
            <a
              :href="ZERODIGITX_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              {{ t_ui.about.visitStudio }}
            </a>
            <NuxtLink to="/" class="btn btn-ghost">
              {{ t_ui.about.backHome }}
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
