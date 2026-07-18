<script setup lang="ts">
import { techGroups } from '../data/technologies'
import { useI18n } from '../composables/useI18n'
import ScrollReveal from './ScrollReveal.vue'
import TiltCard from './effects/TiltCard.vue'
import TechBadge from './TechBadge.vue'

const { t, t_ui } = useI18n()
</script>

<template>
  <section id="technologies" class="relative py-20 sm:py-28 bg-theme-section overflow-hidden">
    <div class="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" aria-hidden="true" />

    <div class="site-container relative z-10">
      <ScrollReveal>
        <header class="mb-14 text-center">
          <p class="text-sm font-semibold uppercase tracking-widest text-accent-600 mb-3">Stack</p>
          <h2 class="display-lg font-bold text-theme-primary mb-4">{{ t_ui.technologies.title }}</h2>
          <p class="text-lg xl:text-xl text-theme-muted max-w-3xl mx-auto">{{ t_ui.technologies.subtitle }}</p>
        </header>
      </ScrollReveal>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 2xl:gap-8">
        <ScrollReveal v-for="(group, index) in techGroups" :key="group.id" :delay="index * 100">
          <TiltCard>
            <article class="h-full rounded-2xl glass-card p-6 xl:p-8 shadow-md transition-shadow duration-300 hover:shadow-xl">
              <h3 class="mb-5 text-lg xl:text-xl font-bold text-theme-primary flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-gradient-to-r from-accent-500 to-cyan-400 animate-float-slow" />
                {{ t(group.title) }}
              </h3>
              <ul class="flex flex-wrap gap-2">
                <TechBadge v-for="tech in group.items" :key="tech.id" :tech="tech" />
              </ul>
            </article>
          </TiltCard>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>