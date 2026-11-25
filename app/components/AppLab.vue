<!--
  Sección Lab: herramientas propias open source.
-->
<script setup lang="ts">
import { computed } from 'vue'
import { labItems } from '~/data/lab'
import { useI18n } from '~/composables/useI18n'
import ScrollReveal from './ScrollReveal.vue'

const { t, t_ui } = useI18n()

const items = computed(() =>
  [...labItems].sort((a, b) => a.priority - b.priority),
)
</script>

<template>
  <section id="lab" class="section">
    <div class="site-container">
      <ScrollReveal>
        <header class="section-header">
          <p class="eyebrow">{{ t_ui.lab.eyebrow }}</p>
          <h2 class="display-lg">{{ t_ui.lab.title }}</h2>
          <p class="section-lead">{{ t_ui.lab.subtitle }}</p>
        </header>
      </ScrollReveal>

      <div v-if="items.length === 0" class="surface mx-auto max-w-lg p-8 text-center" role="status">
        <h3 class="mb-2 text-lg font-semibold text-theme-primary">{{ t_ui.lab.emptyTitle }}</h3>
        <p class="text-sm text-theme-muted">{{ t_ui.lab.emptyBody }}</p>
      </div>

      <div v-else class="grid gap-6 md:grid-cols-2">
        <ScrollReveal
          v-for="(item, index) in items"
          :key="item.id"
          :delay="index * 100"
          class="h-full"
        >
            <article class="surface surface--interactive flex h-full flex-col p-6 sm:p-8">
              <div class="mb-5 flex items-start justify-between gap-4">
                <h3 class="font-display text-2xl font-semibold tracking-tight text-theme-primary">
                  {{ t(item.title) }}
                </h3>
                <span class="tag tag--accent shrink-0">{{ t(item.badge) }}</span>
              </div>

              <p class="mb-3 text-base leading-relaxed text-theme-secondary">
                {{ t(item.shortDescription) }}
              </p>
              <p class="mb-6 flex-grow text-sm leading-relaxed text-theme-muted">
                {{ t(item.longDescription) }}
              </p>

              <p v-if="item.command" class="mb-5 font-mono text-xs text-theme-secondary">
                <span class="text-theme-accent" aria-hidden="true">$</span> {{ item.command }}
              </p>

              <ul class="mb-6 flex flex-wrap gap-2" :aria-label="t_ui.lab.stackLabel">
                <li v-for="tech in item.technologies" :key="tech" class="tag">
                  {{ tech }}
                </li>
              </ul>

              <div class="flex flex-wrap gap-3 border-t border-theme pt-6">
                <a
                  v-if="item.site"
                  :href="item.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  {{ t_ui.lab.openTool }}<span class="sr-only">: {{ t(item.title) }}</span>
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  v-if="item.github"
                  :href="item.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-ghost"
                >
                  {{ t_ui.lab.viewGithub }}<span class="sr-only">: {{ t(item.title) }}</span>
                </a>
                <a
                  v-if="item.install"
                  :href="item.install"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-ghost"
                >
                  {{ t_ui.lab.viewPypi }}<span class="sr-only">: {{ t(item.title) }}</span>
                </a>
              </div>
            </article>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
