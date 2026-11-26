<script setup lang="ts">
import {
  PERSON_ID,
  WEBSITE_ID,
  ZERODIGITX_URL,
  organizationJsonLd,
  personJsonLd,
  websiteJsonLd,
} from '~/data/identity'
import { PAGES } from '~/i18n/routes'

const { t_ui, locale, localePath } = useI18n()

usePageSeo({
  title: () => t_ui.value.about.metaTitle,
  description: () => t_ui.value.about.lead,
  ogType: 'profile',
  jsonLd: () => {
    const url = absoluteUrl(PAGES.about[locale.value])
    return [
      personJsonLd(),
      organizationJsonLd(),
      websiteJsonLd(),
      {
        '@type': ['AboutPage', 'ProfilePage'],
        '@id': `${url}#page`,
        url,
        name: t_ui.value.about.metaTitle,
        inLanguage: locale.value,
        mainEntity: { '@id': PERSON_ID },
        isPartOf: { '@id': WEBSITE_ID },
      },
    ]
  },
})
</script>

<template>
  <section class="section pt-32 sm:pt-40">
    <div class="site-container">
      <div class="about-hero mb-14">
        <div>
          <p class="eyebrow rise" style="--d: 0">{{ t_ui.about.eyebrow }}</p>
          <h1 class="display-xl rise" style="--d: 1">{{ t_ui.about.name }}</h1>
          <p class="rise mt-3 mb-10 font-display text-lg font-medium text-theme-muted" style="--d: 1">
            {{ t_ui.about.legalName }}
          </p>
          <p class="rise mb-6 text-xl leading-relaxed text-theme-primary sm:text-2xl" style="--d: 2">
            {{ t_ui.about.lead }}
          </p>
          <p class="rise text-base leading-relaxed text-theme-secondary sm:text-lg" style="--d: 3">
            {{ t_ui.about.body }}
          </p>
        </div>
        <figure class="portrait rise" style="--d: 2">
          <div class="portrait__frame">
            <img
              src="/images/mario-alvarez.jpg"
              :alt="t_ui.home.portraitAlt"
              width="747"
              height="996"
              fetchpriority="high"
              decoding="async"
            >
          </div>
        </figure>
      </div>

      <div class="grid gap-5 lg:grid-cols-2">
        <article class="side-business surface surface--accent flex flex-col p-6 sm:p-8">
          <h2 class="mb-3 font-display text-2xl font-semibold tracking-tight text-theme-primary">
            {{ t_ui.about.businessTitle }}
          </h2>
          <p class="mb-6 leading-relaxed text-theme-secondary">{{ t_ui.about.businessBody }}</p>
          <div class="mt-auto flex flex-wrap gap-3">
            <NuxtLink :to="localePath('business')" class="btn btn-primary">{{ t_ui.about.businessCta }}</NuxtLink>
            <a :href="ZERODIGITX_URL" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">
              {{ t_ui.about.visitStudio }}
            </a>
          </div>
        </article>
        <article class="side-finances surface surface--accent flex flex-col p-6 sm:p-8">
          <h2 class="mb-3 font-display text-2xl font-semibold tracking-tight text-theme-primary">
            {{ t_ui.about.financesTitle }}
          </h2>
          <p class="mb-6 leading-relaxed text-theme-secondary">{{ t_ui.about.financesBody }}</p>
          <div class="mt-auto flex flex-wrap gap-3">
            <NuxtLink :to="localePath('finances')" class="btn btn-primary">{{ t_ui.about.financesCta }}</NuxtLink>
            <NuxtLink :to="`${localePath('finances')}#apply`" class="btn btn-ghost">{{ t_ui.apply.cta }} <span aria-hidden="true">→</span></NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
