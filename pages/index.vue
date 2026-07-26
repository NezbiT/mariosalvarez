<script setup lang="ts">
/**
 * Home — fully prerendered for SEO (SSG).
 * Crawlers receive real HTML: hero, projects, lab, tech, reviews, contact.
 */
import { projects } from '~/data/projects'
import { labItems } from '~/data/lab'

const siteUrl = 'https://mariosalvarez.com'
const siteTitle = 'Mario Alvarez | mariosalvarez.com'
const siteDescription =
  'Portfolio of Mario Alvarez — industrial data developer in Houston, Texas. From Refinery Rope Access to Industrial Data Developer. Vue/Nuxt, Python, and Gulf Coast data tools.'

useSeoMeta({
  title: siteTitle,
  description: siteDescription,
  ogTitle: siteTitle,
  ogDescription: siteDescription,
  ogUrl: siteUrl,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: siteTitle,
  twitterDescription: siteDescription,
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Mario Alvarez',
        url: siteUrl,
        jobTitle: 'Industrial Data Developer',
        description: siteDescription,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Houston',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        sameAs: [
          'https://github.com/NezbiT',
          'https://www.linkedin.com/in/mariosalv2/',
          'https://x.com/nezsbit',
          'https://zerodigitx.com',
        ],
        knowsAbout: [
          'Nuxt',
          'Vue.js',
          'Python',
          'Industrial data',
          'Web development',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Industrial Data Developer',
          occupationLocation: {
            '@type': 'City',
            name: 'Houston',
          },
        },
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Mario Alvarez',
        url: siteUrl,
        description: siteDescription,
        inLanguage: ['en', 'es'],
        author: { '@type': 'Person', name: 'Mario Alvarez' },
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Featured projects',
        itemListElement: projects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: p.title.en,
          description: p.shortDescription.en,
          url: p.links.site || siteUrl,
        })),
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Lab tools',
        itemListElement: labItems.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.title.en,
          description: item.shortDescription.en,
          url: item.site || item.github || siteUrl,
        })),
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
