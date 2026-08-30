<script setup lang="ts">
/**
 * Home — fully prerendered for SEO (SSG).
 * Crawlers receive real HTML: hero, projects, lab, tech, reviews, contact.
 */
import { projects } from '~/data/projects'
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
            name: 'Featured projects',
            itemListElement: projects.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: p.title.en,
              description: p.shortDescription.en,
              url: p.links.site || SITE_URL,
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
      Client hydrates interactivity (filters, modal, i18n toggle).
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
