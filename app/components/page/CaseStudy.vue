<script setup lang="ts">
/**
 * One client result from the ZeroDigitX work feed. Client items are linked
 * from the business page and the pager, so each one is prerendered in both
 * languages; any other slug is a 404.
 */
import feed from '#zdx-work'
import type { WorkItem } from '#shared/types/work'
import { PERSON_ID, PERSON_LEGAL_NAME, SITE_URL, WEBSITE_ID } from '~/data/identity'

const route = useRoute()
const { t, t_ui, locale, localePath, localeProjectPath } = useI18n()

const clients = feed.items.filter(item => item.kind === 'client')
const index = clients.findIndex(item => item.id === route.params.slug)
const found = clients[index]
if (!found) {
  throw createError({ statusCode: 404, statusMessage: t_ui.value.projects.notFound, fatal: true })
}
const project: WorkItem = found

const count = clients.length
const prev = count > 1 ? clients[(index - 1 + count) % count] : undefined
const next = count > 1 ? clients[(index + 1) % count] : undefined

/** Address shown in the browser-frame bar above the screenshot. */
const address = project.url
  ? (() => {
      const { host, pathname } = new URL(project.url)
      return pathname === '/' ? host : `${host}${pathname}`
    })()
  : null

const chapters = computed(() => [
  { id: 'problem', title: t_ui.value.projects.chapterProblem, text: t(project.problem) },
  { id: 'solution', title: t_ui.value.projects.chapterSolution, text: t(project.solution) },
  { id: 'result', title: t_ui.value.projects.chapterResult, text: t(project.result) },
])

const screenshotAlt = computed(() => t_ui.value.projects.screenshotAlt.replace('{name}', project.name))
const workPath = computed(() => `${localePath('business')}#work`)
const auditPath = computed(() => `${localePath('business')}#audit`)

usePageSeo({
  title: () => `${project.name} — ${t_ui.value.projects.metaTitleSuffix} | Mario Alvarez`,
  description: () => t(project.problem),
  ogType: 'article',
  image: project.image ?? undefined,
  imageAlt: () => (project.image ? screenshotAlt.value : undefined),
  jsonLd: () => {
    const url = absoluteUrl(localeProjectPath(project.id))
    return [{
      '@type': 'CreativeWork',
      '@id': `${url}#work`,
      name: project.name,
      description: t(project.problem),
      genre: t(project.category),
      url,
      inLanguage: locale.value,
      ...(project.image ? { image: project.image } : {}),
      ...(project.year ? { dateCreated: String(project.year) } : {}),
      creator: { '@type': 'Person', '@id': PERSON_ID, name: PERSON_LEGAL_NAME, url: SITE_URL },
      isPartOf: { '@id': WEBSITE_ID },
    }]
  },
})
</script>

<template>
  <article class="side-business pt-28 sm:pt-36" aria-labelledby="case-title">
    <header class="site-container">
      <NuxtLink :to="workPath" class="work-back">
        <span aria-hidden="true">←</span> {{ t_ui.projects.backToWork }}
      </NuxtLink>
      <p class="eyebrow mt-10 sm:mt-14">
        {{ t(project.category) }}<template v-if="project.year"> · {{ project.year }}</template>
      </p>
      <h1 id="case-title" class="display-xl max-w-5xl font-semibold text-theme-primary">
        {{ project.name }}
      </h1>
      <div class="mt-8 flex flex-wrap items-center gap-4">
        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          rel="noopener"
          class="btn btn-primary"
        >
          {{ t_ui.projects.visitSite }} <span aria-hidden="true">↗</span>
        </a>
        <span class="tag tag--accent">{{ t_ui.projects.kindClient }}</span>
      </div>
    </header>

    <figure class="site-container mt-12 sm:mt-16">
      <div class="work-frame surface">
        <div class="work-frame__bar" aria-hidden="true">
          <span class="work-frame__dot" />
          <span class="work-frame__dot" />
          <span class="work-frame__dot" />
          <span v-if="address" class="work-frame__address">{{ address }}</span>
        </div>
        <div class="work-frame__media">
          <img
            v-if="project.image"
            :src="project.image"
            :alt="screenshotAlt"
            width="1440"
            height="900"
            decoding="async"
            fetchpriority="high"
          >
          <div v-else class="work-poster" aria-hidden="true">
            <XMark class="work-poster__mark" :depth="false" />
            <span class="work-poster__category">{{ t(project.category) }}</span>
            <span class="work-poster__name">{{ project.name }}</span>
          </div>
        </div>
      </div>
    </figure>

    <div class="site-container mt-16 sm:mt-24">
      <section
        v-for="(chapter, i) in chapters"
        :key="chapter.id"
        class="work-chapter"
        :aria-labelledby="`chapter-${chapter.id}`"
      >
        <span class="work-chapter__num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
        <h2 :id="`chapter-${chapter.id}`" class="work-chapter__title">{{ chapter.title }}</h2>
        <p class="work-chapter__body">{{ chapter.text }}</p>
      </section>

      <div class="work-details">
        <section v-if="project.highlights.length" class="work-detail" aria-labelledby="case-highlights">
          <h2 id="case-highlights" class="label mb-6">{{ t_ui.projects.highlightsTitle }}</h2>
          <ul class="work-highlights">
            <li v-for="highlight in project.highlights" :key="highlight.en">{{ t(highlight) }}</li>
          </ul>
        </section>
        <section class="work-detail work-detail--aside" aria-labelledby="case-stack">
          <h2 id="case-stack" class="label mb-6">{{ t_ui.projects.stackTitle }}</h2>
          <ul class="flex flex-wrap gap-2">
            <li v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</li>
          </ul>
        </section>
      </div>
    </div>

    <div class="site-container mt-16 sm:mt-24">
      <NuxtLink :to="auditPath" class="btn btn-primary">
        {{ t_ui.projects.auditCta }} <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>

    <nav v-if="prev && next" class="site-container mt-16 sm:mt-24" :aria-label="t_ui.projects.caseNavLabel">
      <ul class="work-pager">
        <li>
          <NuxtLink :to="localeProjectPath(prev.id)" class="work-pager__link">
            <span class="label"><span aria-hidden="true">← </span>{{ t_ui.projects.prevCase }}</span>
            <span class="work-pager__name"><span class="work-underline">{{ prev.name }}</span></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localeProjectPath(next.id)" class="work-pager__link work-pager__link--next">
            <span class="label">{{ t_ui.projects.nextCase }}<span aria-hidden="true"> →</span></span>
            <span class="work-pager__name"><span class="work-underline">{{ next.name }}</span></span>
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="site-container pt-12 pb-20 sm:pb-28">
      <NuxtLink :to="workPath" class="btn btn-ghost">
        <span aria-hidden="true">←</span> {{ t_ui.projects.backToWork }}
      </NuxtLink>
    </div>
  </article>
</template>
