<script setup lang="ts">
/**
 * Family finances: educational only. Three basics, the extra-income path,
 * how a conversation works, the lead form, and the disclaimers. Keep copy
 * free of product names and of promised returns or income.
 */
import { PERSON_ID } from '~/data/identity'
import { PAGES } from '~/i18n/routes'

const { t_ui, locale } = useI18n()
const goal = useLeadGoal('finances')

/** Ages on the W-2 timeline: 50–59 is the "before 60" zone, 67 the usual full retirement age. */
const RETIRE_AGES = [30, 40, 50, 55, 60, 67]

/** One icon per pillar, in the order of `finances.pillars`. */
const PILLAR_ICONS = ['i-lucide-shield-check', 'i-lucide-trending-up', 'i-lucide-map']

usePageSeo({
  title: () => t_ui.value.finances.metaTitle,
  description: () => t_ui.value.finances.metaDescription,
  jsonLd: () => [
    {
      '@type': 'WebPage',
      '@id': `${absoluteUrl(PAGES.finances[locale.value])}#page`,
      url: absoluteUrl(PAGES.finances[locale.value]),
      name: t_ui.value.finances.metaTitle,
      description: t_ui.value.finances.metaDescription,
      inLanguage: locale.value,
      author: { '@id': PERSON_ID },
    },
  ],
})
</script>

<template>
  <div class="side-finances">
    <section class="page-hero" aria-labelledby="finances-title">
      <div class="page-hero__bg" aria-hidden="true" />
      <div class="site-container relative page-hero__grid">
        <div>
          <p class="eyebrow rise" style="--d: 0">{{ t_ui.finances.eyebrow }}</p>
          <h1 id="finances-title" class="display-xl-tight rise text-theme-primary" style="--d: 1">{{ t_ui.finances.title }}</h1>
          <p class="section-lead rise max-w-2xl" style="--d: 2">{{ t_ui.finances.lead }}</p>
          <div class="rise mt-10 flex flex-wrap gap-3" style="--d: 3">
            <a href="#start" class="btn btn-primary">{{ t_ui.finances.cta }}</a>
            <a href="#extra" class="btn btn-ghost">{{ t_ui.finances.ctaExtra }}</a>
          </div>
          <GoalChips class="rise mt-10" style="--d: 4" source="finances" :prompt="t_ui.finances.goalPrompt" target="start" />
        </div>
        <FinanceArt class="rise page-hero__art" style="--d: 2" :labels="t_ui.finances.artLabels" />
      </div>
    </section>

    <section class="section" aria-labelledby="pillars-title">
      <div class="site-container">
        <header class="section-header">
          <p class="eyebrow">{{ t_ui.finances.pillarsEyebrow }}</p>
          <h2 id="pillars-title" class="display-lg">{{ t_ui.finances.pillarsTitle }}</h2>
          <p class="section-lead">{{ t_ui.finances.pillarsLead }}</p>
        </header>
        <ol class="grid gap-5 lg:grid-cols-3" role="list">
          <li v-for="(pillar, i) in t_ui.finances.pillars" :key="pillar.title">
            <ScrollReveal :delay="i * 40" class="h-full">
              <article class="surface surface--accent h-full p-6 sm:p-8">
                <div class="mb-6 flex items-center gap-3">
                  <span class="icon-badge" aria-hidden="true">
                    <UIcon :name="PILLAR_ICONS[i] ?? 'i-lucide-sparkles'" />
                  </span>
                  <span class="pillar__num" aria-hidden="true">{{ i + 1 }}</span>
                </div>
                <h3 class="mb-3 font-display text-xl font-semibold text-theme-primary">{{ pillar.title }}</h3>
                <p class="leading-relaxed text-theme-secondary">{{ pillar.body }}</p>
              </article>
            </ScrollReveal>
          </li>
        </ol>
      </div>
    </section>

    <section id="w2" class="section" aria-labelledby="w2-title">
      <div class="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p class="eyebrow">{{ t_ui.finances.w2.eyebrow }}</p>
          <h2 id="w2-title" class="display-md">{{ t_ui.finances.w2.title }}</h2>
          <p class="section-lead">{{ t_ui.finances.w2.body }}</p>
          <ul class="checklist mt-8" role="list">
            <li v-for="point in t_ui.finances.w2.points" :key="point">{{ point }}</li>
          </ul>
          <a href="#start" class="btn btn-primary mt-10" @click="goal = 'retirement'">
            {{ t_ui.finances.w2.cta }} <span aria-hidden="true">→</span>
          </a>
          <p class="mt-4 text-sm text-theme-muted">{{ t_ui.finances.w2.note }}</p>
        </div>
        <ScrollReveal :delay="100">
          <div class="retire surface" aria-hidden="true">
            <div class="retire__head">
              <span class="icon-badge"><UIcon name="i-lucide-sunrise" /></span>
              <span class="retire__label">{{ t_ui.finances.w2.timelineLabel }}</span>
            </div>
            <div class="retire__bars">
              <span v-for="n in 6" :key="n" class="retire__bar" :style="`--h: ${12 + n * n * 2.4}%; --n: ${n}`" />
            </div>
            <ol class="retire__line">
              <li
                v-for="age in RETIRE_AGES"
                :key="age"
                class="retire__age"
                :class="{ 'retire__age--goal': age >= 50 && age < 60, 'retire__age--late': age > 60 }"
              >
                <span class="retire__dot" />
                <span>{{ age }}</span>
              </li>
            </ol>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section id="extra" class="section" aria-labelledby="extra-title">
      <div class="site-container">
        <div class="extra-band">
          <span class="extra-band__art" aria-hidden="true">
            <UIcon name="i-lucide-moon-star" />
            <UIcon name="i-lucide-graduation-cap" />
            <UIcon name="i-lucide-clock-4" />
          </span>
          <div class="max-w-2xl">
            <p class="eyebrow">{{ t_ui.finances.extraEyebrow }}</p>
            <h2 id="extra-title" class="mb-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {{ t_ui.finances.extraTitle }}
            </h2>
            <p class="mb-6 text-lg leading-relaxed">{{ t_ui.finances.extraBody }}</p>
            <ul class="checklist" role="list">
              <li v-for="point in t_ui.finances.extraPoints" :key="point">{{ point }}</li>
            </ul>
          </div>
          <a href="#apply" class="btn btn-primary relative self-start whitespace-nowrap lg:self-center">{{ t_ui.finances.extraCta }} <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>

    <section id="apply" class="section" aria-labelledby="apply-title">
      <div class="site-container grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <p class="eyebrow">{{ t_ui.apply.eyebrow }}</p>
          <h2 id="apply-title" class="display-md">{{ t_ui.apply.title }}</h2>
          <p class="section-lead">{{ t_ui.apply.lead }}</p>
          <h3 class="label mt-10 mb-4">{{ t_ui.apply.requirementsTitle }}</h3>
          <ul class="checklist" role="list">
            <li v-for="item in t_ui.apply.requirements" :key="item">{{ item }}</li>
          </ul>
        </div>
        <ApplyForm />
      </div>
    </section>

    <section class="section" aria-labelledby="how-title">
      <div class="site-container">
        <header class="section-header">
          <p class="eyebrow">{{ t_ui.finances.howEyebrow }}</p>
          <h2 id="how-title" class="display-lg">{{ t_ui.finances.howTitle }}</h2>
        </header>
        <StepList :steps="t_ui.finances.how" />
      </div>
    </section>

    <section id="start" class="section" aria-labelledby="start-title">
      <div class="site-container grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <p class="eyebrow">{{ t_ui.finances.formEyebrow }}</p>
          <h2 id="start-title" class="display-md">{{ t_ui.finances.formTitle }}</h2>
          <p class="section-lead">{{ t_ui.finances.formLead }}</p>
          <div class="host-card mt-10">
            <img src="/images/mario-alvarez-480.jpg" alt="" width="480" height="640" loading="lazy" decoding="async">
            <p>
              <strong>Mario S. Alvarez</strong>
              <span>{{ t_ui.home.heroChips.join(' · ') }}</span>
            </p>
          </div>
        </div>
        <LeadForm source="finances" />
      </div>
    </section>

    <section class="section" aria-labelledby="finances-faq-title">
      <div class="site-container grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <header>
          <p class="eyebrow">{{ t_ui.finances.faqEyebrow }}</p>
          <h2 id="finances-faq-title" class="display-md">{{ t_ui.finances.faqTitle }}</h2>
        </header>
        <FaqList :items="t_ui.finances.faq" />
      </div>
    </section>

    <section class="section" aria-labelledby="disclaimer-title">
      <div class="site-container">
        <div class="disclaimer">
          <h2 id="disclaimer-title" class="label mb-4">{{ t_ui.finances.disclaimerTitle }}</h2>
          <ul role="list">
            <li v-for="text in t_ui.finances.disclaimers" :key="text">{{ text }}</li>
          </ul>
        </div>
      </div>
    </section>

    <StickyCta :label="t_ui.finances.cta" target="start" />
  </div>
</template>
