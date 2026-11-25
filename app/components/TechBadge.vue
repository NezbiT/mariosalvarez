<script setup lang="ts">
import type { TechItem } from '#shared/types'
import { isInkLogo, techLogoUrl } from '~/data/technologies'

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
      class="tech-chip"
    >
      <img
        v-if="tech.icon"
        :src="techLogoUrl({ icon: tech.icon, color: tech.color })"
        alt=""
        class="h-5 w-5 shrink-0"
        :class="{ 'tech-chip__logo--ink': isInkLogo(tech.color) }"
        width="20"
        height="20"
        loading="lazy"
      />
      <span>{{ tech.name }}</span>
    </a>
  </li>
</template>
