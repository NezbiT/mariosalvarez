/**
 * Tema claro / oscuro — solo escribe DOM en client.
 */
import { ref, watch } from 'vue'

export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'mariosalvarez-theme'

function getStoredTheme(): ThemeMode {
  if (!import.meta.client) return 'light'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return 'light'
}

const theme = ref<ThemeMode>('light')
let hydrated = false

function applyTheme(mode: ThemeMode): void {
  if (!import.meta.client) return
  document.documentElement.dataset.theme = mode
  document.documentElement.style.colorScheme = mode
}

export function useTheme() {
  if (import.meta.client && !hydrated) {
    hydrated = true
    theme.value = getStoredTheme()
    applyTheme(theme.value)
  }

  function setTheme(mode: ThemeMode): void {
    theme.value = mode
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, mode)
      applyTheme(mode)
    }
  }

  function toggleTheme(): void {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  watch(theme, applyTheme)

  return { theme, setTheme, toggleTheme }
}
