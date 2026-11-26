<script setup lang="ts">
/**
 * Home: a dual entry. Who Mario is (real portrait), two doors (businesses →
 * ZeroDigitX, families → finances) each with its own visual, why both, and
 * a direct line.
 */
import feed from '#zdx-work'
import {
  LEAD_EMAIL,
  PHONE,
  PHONE_DISPLAY,
  organizationJsonLd,
  personJsonLd,
  websiteJsonLd,
} from '~/data/identity'

const { t_ui, localePath } = useI18n()
const { onMove, onLeave } = useTilt()

usePageSeo({
  title: () => t_ui.value.home.metaTitle,
  description: () => t_ui.value.home.metaDescription,
  ogType: 'profile',
  jsonLd: () => [personJsonLd(), organizationJsonLd(), websiteJsonLd()],
})

/** First client with a screenshot: the business door shows a real site. */
const sample = feed.items.find(item => item.kind === 'client' && item.image)

const doors = computed(() => {
  const h = t_ui.value.home
  return [
    { side: 'business', to: localePath('business'), kicker: h.businessKicker, title: h.businessTitle, body: h.businessBody, points: h.businessPoints, cta: h.businessCta },
    { side: 'finances', to: localePath('finances'), kicker: h.financesKicker, title: h.financesTitle, body: h.financesBody, points: h.financesPoints, cta: h.financesCta },
  ] as const
})
</script>

<template>
  <div>
    <section class="gate" aria-labelledby="gate-title">
      <div class="gate__bg" aria-hidden="true" />
      <div class="site-container relative">
        <div class="gate__intro">
          <header class="gate__text">
            <p class="eyebrow rise" style="--d: 0">{{ t_ui.home.eyebrow }}</p>
            <h1 id="gate-title" class="display-xl rise text-theme-primary" style="--d: 1">{{ t_ui.home.title }}</h1>
            <p class="gate__punch rise" style="--d: 2">{{ t_ui.home.lead }}</p>
            <p class="section-lead rise mt-3 max-w-2xl" style="--d: 3">{{ t_ui.home.leadBody }}</p>
          </header>

          <figure class="portrait rise" style="--d: 2">
            <div class="portrait__frame">
              <img
                src="/images/mario-alvarez-480.jpg"
                srcset="/images/mario-alvarez-480.jpg 480w, /images/mario-alvarez.jpg 747w"
                sizes="(min-width: 1024px) 22rem, 78vw"
                :alt="t_ui.home.portraitAlt"
                width="480"
                height="640"
                fetchpriority="high"
                decoding="async"
              >
            </div>
            <ul class="portrait__chips" role="list">
              <li v-for="(chip, i) in t_ui.home.heroChips" :key="chip" class="portrait__chip" :style="`--i: ${i}`">{{ chip }}</li>
            </ul>
          </figure>
        </div>

        <ul class="gate__doors" role="list">
          <li v-for="(door, i) in doors" :key="door.side" :class="`side-${door.side} rise`" :style="`--d: ${3 + i}`">
            <article class="door surface" @pointermove="onMove" @pointerleave="onLeave">
              <div class="door__media" aria-hidden="true">
                <template v-if="door.side === 'business'">
                  <div class="door__browser">
                    <div class="work-frame__bar">
                      <span class="work-frame__dot" />
                      <span class="work-frame__dot" />
                      <span class="work-frame__dot" />
                    </div>
                    <img v-if="sample?.image" :src="sample.image" alt="" width="1440" height="900" loading="lazy" decoding="async">
                  </div>
                  <div class="notice">
                    <span class="notice__dot" />
                    <span>
                      <strong>{{ t_ui.home.businessNotice }}</strong>
                      <small>{{ t_ui.home.businessNoticeMeta }}</small>
                    </span>
                  </div>
                </template>
                <FinanceArt v-else :labels="t_ui.finances.artLabels" />
              </div>
              <div class="door__content">
                <p class="door__kicker">
                  <UIcon :name="door.side === 'business' ? 'i-lucide-store' : 'i-lucide-shield-check'" class="door__icon" />
                  {{ door.kicker }}
                </p>
                <h2 class="door__title">
                  <NuxtLink :to="door.to" class="door__link">{{ door.title }}</NuxtLink>
                </h2>
                <p class="door__body">{{ door.body }}</p>
                <ul class="door__points" role="list">
                  <li v-for="point in door.points" :key="point">{{ point }}</li>
                </ul>
                <span class="btn btn-primary door__cta" aria-hidden="true">
                  {{ door.cta }} <span class="door__arrow">→</span>
                </span>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>

    <section class="section" aria-labelledby="bridge-title">
      <div class="site-container grid gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal>
          <p class="eyebrow">{{ t_ui.home.bridgeEyebrow }}</p>
          <h2 id="bridge-title" class="display-lg">{{ t_ui.home.bridgeTitle }}</h2>
          <p class="section-lead">{{ t_ui.home.bridgeBody }}</p>
          <NuxtLink :to="`${localePath('finances')}#w2`" class="side-finances btn btn-primary mt-8">
            {{ t_ui.home.bridgeCta }} <span aria-hidden="true">→</span>
          </NuxtLink>
          <p class="mt-4 text-sm text-theme-muted">{{ t_ui.home.bridgeNote }}</p>
        </ScrollReveal>
        <ScrollReveal :delay="100">
          <div class="about-card surface">
            <img
              src="/images/mario-alvarez-480.jpg"
              alt=""
              width="480"
              height="640"
              loading="lazy"
              decoding="async"
              class="about-card__photo"
            >
            <div>
              <h2 class="mb-3 font-display text-2xl font-semibold tracking-tight text-theme-primary">
                {{ t_ui.home.aboutTitle }}
              </h2>
              <p class="mb-6 leading-relaxed text-theme-secondary">{{ t_ui.home.aboutBody }}</p>
              <NuxtLink :to="localePath('about')" class="btn btn-ghost">
                {{ t_ui.home.aboutCta }} <span aria-hidden="true">→</span>
              </NuxtLink>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section id="contact" class="section" aria-labelledby="contact-title">
      <div class="site-container">
        <div class="cta-band">
          <div class="max-w-xl">
            <h2 id="contact-title" class="mb-3 font-display text-3xl font-semibold tracking-tight">
              {{ t_ui.home.contactTitle }}
            </h2>
            <p class="text-industrial-300">{{ t_ui.home.contactBody }}</p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row">
            <a :href="`tel:${PHONE}`" class="btn btn-primary whitespace-nowrap">
              <UIcon name="i-lucide-phone" /> {{ PHONE_DISPLAY }}
            </a>
            <a :href="`mailto:${LEAD_EMAIL}`" class="btn btn-ghost btn-ghost--on-dark whitespace-nowrap">
              <UIcon name="i-lucide-mail" /> {{ LEAD_EMAIL }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
