<script setup lang="ts">
import { techGroups } from '../data/technologies'
import { useI18n } from '../composables/useI18n'
import ScrollReveal from './ScrollReveal.vue'

const { t, t_ui } = useI18n()
</script>

<template>
  <section id="technologies" class="py-20 px-4 sm:px-6 bg-industrial-50">
    <div class="mx-auto max-w-6xl">
      <ScrollReveal>
        <header class="mb-12 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold text-industrial-900 mb-4">
            {{ t_ui.technologies.title }}
          </h2>
          <p class="text-lg text-industrial-600 max-w-2xl mx-auto">
            {{ t_ui.technologies.subtitle }}
          </p>
        </header>
      </ScrollReveal>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ScrollReveal
          v-for="(group, index) in techGroups"
          :key="group.id"
          :delay="index * 80"
        >
          <article
            class="h-full rounded-xl border border-industrial-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-lg hover:shadow-accent-500/10"
          >
            <h3 class="mb-4 text-lg font-semibold text-industrial-800 border-b border-industrial-100 pb-3">
              {{ t(group.title) }}
            </h3>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="item in group.items"
                :key="item"
                class="rounded-md bg-industrial-100 px-3 py-1.5 text-sm text-industrial-700 transition-colors duration-200 hover:bg-accent-100 hover:text-accent-700"
              >
                {{ item }}
              </li>
            </ul>
          </article>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>