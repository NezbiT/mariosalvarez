<script setup lang="ts">
import type { TechItem } from '../types'
import { techLogoUrl } from '../data/technologies'

defineProps<{
  tech: TechItem
}>()
</script>

<template>
  <li>
    <a
      :href="tech.url"
      target="_blank"
      rel="noopener noreferrer"
      class="group inline-flex items-center gap-2 rounded-xl bg-industrial-100 px-3 py-2 text-sm font-medium text-industrial-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-accent-500 hover:to-cyan-500 hover:text-white hover:scale-105 hover:shadow-md"
      :aria-label="`${tech.name} — sitio oficial`"
    >
      <img
        :src="techLogoUrl(tech)"
        :alt="`${tech.name} logo`"
        class="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110"
        width="20"
        height="20"
        loading="lazy"
      />
      <span>{{ tech.name }}</span>
    </a>
  </li>
</template>