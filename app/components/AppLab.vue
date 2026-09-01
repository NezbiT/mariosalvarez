<!--
  Sección Lab: tools propias (Pitch Doctor, License Scanner, …).
-->
<script setup lang="ts">
import { computed } from 'vue'
import { labItems } from '~/data/lab'
import { useI18n } from '~/composables/useI18n'
import ScrollReveal from './ScrollReveal.vue'
import TiltCard from './effects/TiltCard.vue'

const { t, t_ui } = useI18n()

const items = computed(() =>
  [...labItems].sort((a, b) => a.priority - b.priority),
)
</script>

<template>
  <section id="lab" class="relative py-20 sm:py-28 bg-theme-section overflow-hidden">
    <div class="absolute inset-0 mesh-gradient opacity-15 pointer-events-none" aria-hidden="true" />

    <div class="site-container relative z-10">
      <ScrollReveal>
        <header class="mb-14 text-center">
          <p class="text-sm font-semibold uppercase tracking-widest text-accent-600 mb-3">
            {{ t_ui.lab.eyebrow }}
          </p>
          <h2 class="display-lg font-bold text-theme-primary mb-4">
            {{ t_ui.lab.title }}
          </h2>
          <p class="text-lg xl:text-xl text-theme-muted max-w-3xl mx-auto">
            {{ t_ui.lab.subtitle }}
          </p>
        </header>
      </ScrollReveal>

      <div
        v-if="items.length === 0"
        class="mx-auto max-w-lg rounded-2xl glass-card p-8 text-center shadow-md"
        role="status"
      >
        <h3 class="mb-2 text-lg font-semibold text-theme-primary">{{ t_ui.lab.emptyTitle }}</h3>
        <p class="text-sm text-theme-muted">{{ t_ui.lab.emptyBody }}</p>
      </div>

      <div v-else class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ScrollReveal
          v-for="(item, index) in items"
          :key="item.id"
          :delay="index * 100"
        >
          <TiltCard>
            <article class="group flex h-full flex-col rounded-2xl glass-card p-6 sm:p-7 shadow-md transition-shadow duration-300 hover:shadow-xl">
              <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
                <h3 class="text-xl font-bold text-theme-primary group-hover:text-accent-600 transition-colors">
                  {{ t(item.title) }}
                </h3>
                <span class="shrink-0 rounded-full bg-accent-600/15 px-2.5 py-0.5 text-xs font-semibold text-accent-600">
                  {{ t(item.badge) }}
                </span>
              </div>

              <p class="mb-3 text-sm sm:text-base text-theme-secondary leading-relaxed">
                {{ t(item.shortDescription) }}
              </p>

              <p class="mb-4 flex-grow text-sm text-theme-muted leading-relaxed">
                {{ t(item.longDescription) }}
              </p>

              <ul class="mb-5 flex flex-wrap gap-1.5">
                <li
                  v-for="tech in item.technologies"
                  :key="tech"
                  class="rounded-lg bg-industrial-100 px-2.5 py-1 text-xs font-medium text-industrial-600"
                >
                  {{ tech }}
                </li>
              </ul>

              <div class="mt-auto flex flex-wrap gap-2 border-t border-theme pt-5">
                <a
                  v-if="item.site"
                  :href="item.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-interactive inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-500 shadow-md shadow-accent-600/15"
                >
                  {{ t_ui.lab.openTool }}
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  v-if="item.github"
                  :href="item.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-interactive inline-flex min-h-11 items-center gap-2 rounded-lg border border-theme px-4 py-2.5 text-sm font-medium text-theme-secondary hover:text-accent-600 hover:border-accent-500"
                >
                  {{ t_ui.lab.viewGithub }}
                </a>
                <a
                  v-if="item.install"
                  :href="item.install"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-interactive inline-flex min-h-11 items-center gap-2 rounded-lg border border-theme px-4 py-2.5 text-sm font-medium text-theme-secondary hover:text-accent-600 hover:border-accent-500"
                >
                  {{ t_ui.lab.viewPypi }}
                </a>
              </div>

              <p
                v-if="item.command"
                class="mt-4 font-mono text-xs text-theme-muted"
              >
                <span class="text-accent-600">$</span> {{ item.command }}
              </p>
            </article>
          </TiltCard>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
