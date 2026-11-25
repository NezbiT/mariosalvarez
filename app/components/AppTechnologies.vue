<script setup lang="ts">
import { techGroups } from '~/data/technologies'
import { useI18n } from '~/composables/useI18n'
import ScrollReveal from './ScrollReveal.vue'
import TechBadge from './TechBadge.vue'

const { t, t_ui } = useI18n()
</script>

<template>
  <section id="technologies" class="section">
    <div class="site-container">
      <ScrollReveal>
        <header class="section-header">
          <p class="eyebrow">{{ t_ui.technologies.eyebrow }}</p>
          <h2 class="display-lg">{{ t_ui.technologies.title }}</h2>
          <p class="section-lead">{{ t_ui.technologies.subtitle }}</p>
        </header>
      </ScrollReveal>

      <div class="grid gap-6 sm:grid-cols-2 2xl:gap-8">
        <ScrollReveal
          v-for="(group, index) in techGroups"
          :key="group.id"
          :delay="index * 100"
          class="h-full"
        >
          <article class="surface h-full p-6 xl:p-8">
            <h3 class="mb-5 flex items-center gap-3 font-display text-lg font-semibold text-theme-primary xl:text-xl">
              <span class="h-2 w-2 bg-crimson" aria-hidden="true" />
              {{ t(group.title) }}
            </h3>
            <ul class="flex flex-wrap gap-2">
              <TechBadge v-for="tech in group.items" :key="tech.id" :tech="tech" />
            </ul>
          </article>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
