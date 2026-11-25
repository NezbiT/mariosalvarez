<script setup lang="ts">
/**
 * Home — fully prerendered for SEO (SSG).
 * Crawlers receive real HTML: hero, projects, lab, tech, reviews, contact.
 */
import feed from '#zdx-work'
import { labItems } from '~/data/lab'
import {
  OG_IMAGE,
  PERSON_DESCRIPTION,
  SITE_URL,
  organizationJsonLd,
  personJsonLd,
  websiteJsonLd,
} from '~/data/identity'

const { t_ui } = useI18n()

const siteTitle = computed(() => t_ui.value.meta.siteTitle)
const siteDescription = PERSON_DESCRIPTION

useSeoMeta({
  title: siteTitle,
  description: siteDescription,
  ogTitle: siteTitle,
  ogDescription: siteDescription,
  ogUrl: SITE_URL,
  ogType: 'profile',
  ogImage: OG_IMAGE,
  twitterCard: 'summary_large_image',
  twitterTitle: siteTitle,
  twitterDescription: siteDescription,
  twitterImage: OG_IMAGE,
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: SITE_URL }],
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
            '@type': 'ItemList',
            name: 'Selected work',
            itemListElement: feed.items.map((item, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: item.name,
              description: item.problem.en,
              url: `${SITE_URL}/projects/${item.id}`,
            })),
          },
          {
            '@type': 'ItemList',
            name: 'Lab tools',
            itemListElement: labItems.map((item, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: item.title.en,
              description: item.shortDescription.en,
              url: item.site || item.github || SITE_URL,
            })),
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <!--
      Semantic content is in the static HTML for crawlers.
      Client hydrates interactivity (work filter, i18n toggle).
    -->
    <AppHero />
    <div class="section-wave -mt-1" aria-hidden="true" />
    <AppProjects />
    <AppLab />
    <AppTechnologies />
    <AppReviews />
    <AppContact />
  </div>
</template>
