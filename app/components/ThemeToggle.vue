<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import { useI18n } from '~/composables/useI18n'

const { theme, setTheme } = useTheme()
const { t_ui } = useI18n()
</script>

<template>
  <div class="theme-toggle" role="group" :aria-label="t_ui.theme.label">
    <button
      type="button"
      class="theme-toggle-btn"
      :aria-pressed="theme === 'light'"
      @click="setTheme('light')"
    >
      <span aria-hidden="true">☀</span> {{ t_ui.theme.light }}
    </button>
    <button
      type="button"
      class="theme-toggle-btn"
      :aria-pressed="theme === 'dark'"
      @click="setTheme('dark')"
    >
      <span aria-hidden="true">☾</span> {{ t_ui.theme.dark }}
    </button>
  </div>
</template>
