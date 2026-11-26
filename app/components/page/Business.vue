<script setup lang="ts">
/**
 * Business side (ZeroDigitX): services, how it works, real client results,
 * and the free-audit form. No prices: every engagement starts with the audit.
 */
import feed from '#zdx-work'
import { ORG_ID, PERSON_ID, ZERODIGITX_URL, organizationJsonLd } from '~/data/identity'
import { PAGES, projectPath } from '~/i18n/routes'

const { t_ui, locale } = useI18n()

/** One icon per service, in the order of `business.services`. */
const SERVICE_ICONS = ['i-lucide-search-check', 'i-lucide-monitor-smartphone', 'i-lucide-map-pin', 'i-lucide-calendar-check']

usePageSeo({
  title: () => t_ui.value.business.metaTitle,
  description: () => t_ui.value.business.metaDescription,
  jsonLd: () => [
    organizationJsonLd(),
    {
      '@type': 'ProfessionalService',
      '@id': `${absoluteUrl(PAGES.business.en)}#service`,
      name: 'ZeroDigitX — websites and online visibility',
      url: absoluteUrl(PAGES.business[locale.value]),
      provider: { '@id': ORG_ID },
      founder: { '@id': PERSON_ID },
      areaServed: ['Houston, TX', 'La Porte, TX', 'Texas Gulf Coast'],
      availableLanguage: ['en', 'es'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t_ui.value.business.servicesTitle,
        itemListElement: t_ui.value.business.services.map(service => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: service.title, description: service.body },
        })),
      },
    },
    {
      '@type': 'ItemList',
      name: t_ui.value.business.workTitle,
      itemListElement: feed.items
        .filter(item => item.kind === 'client')
        .map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          url: absoluteUrl(projectPath(item.id, locale.value)),
        })),
    },
  ],
})
</script>

<template>
  <div class="side-business">
    <section class="page-hero" aria-labelledby="business-title">
      <div class="page-hero__bg" aria-hidden="true" />
      <div class="site-container relative page-hero__grid">
        <div>
          <p class="eyebrow rise" style="--d: 0">{{ t_ui.business.eyebrow }}</p>
          <h1 id="business-title" class="display-xl-tight rise text-theme-primary" style="--d: 1">{{ t_ui.business.title }}</h1>
          <p class="section-lead rise max-w-2xl" style="--d: 2">{{ t_ui.business.lead }}</p>
          <div class="rise mt-10 flex flex-wrap gap-3" style="--d: 3">
            <a href="#audit" class="btn btn-primary">{{ t_ui.business.ctaAudit }}</a>
            <a href="#work" class="btn btn-ghost">{{ t_ui.business.ctaWork }}</a>
          </div>
          <GoalChips class="rise mt-10" style="--d: 4" source="business" :prompt="t_ui.business.goalPrompt" target="audit" />
        </div>
        <ClientShowcase class="rise" style="--d: 2" />
      </div>
    </section>

    <section class="section" aria-labelledby="services-title">
      <div class="site-container">
        <header class="section-header">
          <p class="eyebrow">{{ t_ui.business.servicesEyebrow }}</p>
          <h2 id="services-title" class="display-lg">{{ t_ui.business.servicesTitle }}</h2>
          <p class="section-lead">{{ t_ui.business.servicesLead }}</p>
        </header>
        <ul class="grid gap-5 md:grid-cols-2" role="list">
          <li v-for="(service, i) in t_ui.business.services" :key="service.title">
            <ScrollReveal :delay="i * 40" class="h-full">
              <article class="surface surface--accent flex h-full flex-col p-6 sm:p-8">
                <span class="icon-badge mb-5" aria-hidden="true">
                  <UIcon :name="SERVICE_ICONS[i] ?? 'i-lucide-sparkles'" />
                </span>
                <h3 class="mb-2 font-display text-xl font-semibold text-theme-primary">{{ service.title }}</h3>
                <p class="mb-5 text-theme-secondary">{{ service.body }}</p>
                <ul class="checklist" role="list">
                  <li v-for="point in service.points" :key="point">{{ point }}</li>
                </ul>
              </article>
            </ScrollReveal>
          </li>
        </ul>
      </div>
    </section>

    <section class="section" aria-labelledby="process-title">
      <div class="site-container">
        <header class="section-header">
          <p class="eyebrow">{{ t_ui.business.processEyebrow }}</p>
          <h2 id="process-title" class="display-lg">{{ t_ui.business.processTitle }}</h2>
        </header>
        <StepList :steps="t_ui.business.process" />
      </div>
    </section>

    <AppProjects />

    <section id="audit" class="section" aria-labelledby="audit-title">
      <div class="site-container grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <p class="eyebrow">{{ t_ui.business.auditEyebrow }}</p>
          <h2 id="audit-title" class="display-md">{{ t_ui.business.auditTitle }}</h2>
          <p class="section-lead">{{ t_ui.business.auditBody }}</p>
          <ul class="checklist mt-8" role="list">
            <li v-for="point in t_ui.business.auditPoints" :key="point">{{ point }}</li>
          </ul>
          <p class="mt-10 text-sm text-theme-muted">
            {{ t_ui.business.studioNote }}
            <a :href="ZERODIGITX_URL" target="_blank" rel="noopener noreferrer" class="text-theme-accent underline underline-offset-4">zerodigitx.com</a>
          </p>
        </div>
        <LeadForm source="business" />
      </div>
    </section>

    <section class="section" aria-labelledby="business-faq-title">
      <div class="site-container grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <header>
          <p class="eyebrow">{{ t_ui.business.faqEyebrow }}</p>
          <h2 id="business-faq-title" class="display-md">{{ t_ui.business.faqTitle }}</h2>
        </header>
        <FaqList :items="t_ui.business.faq" />
      </div>
    </section>

    <StickyCta :label="t_ui.business.ctaAudit" target="audit" />
  </div>
</template>
