<script setup lang="ts">
import { useTheme } from '../composables/useTheme'
import { useI18n } from '../composables/useI18n'

const { theme, setTheme } = useTheme()
const { t_ui } = useI18n()
</script>

<template>
  <div
    class="theme-toggle flex rounded-xl overflow-hidden border border-theme p-0.5"
    role="group"
    :aria-label="t_ui.theme.label"
  >
    <button
      type="button"
      class="theme-toggle-btn px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300"
      :class="theme === 'light' ? 'theme-toggle-btn--active' : ''"
      :aria-pressed="theme === 'light'"
      @click="setTheme('light')"
    >
      ☀ {{ t_ui.theme.light }}
    </button>
    <button
      type="button"
      class="theme-toggle-btn px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300"
      :class="theme === 'dark' ? 'theme-toggle-btn--active' : ''"
      :aria-pressed="theme === 'dark'"
      @click="setTheme('dark')"
    >
      ☾ {{ t_ui.theme.dark }}
    </button>
  </div>
</template>