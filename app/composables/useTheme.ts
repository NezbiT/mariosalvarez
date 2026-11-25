/**
 * Tema claro / oscuro. Claro por defecto (el hero siempre es una escena
 * oscura): el script inline de nuxt.config fija `data-theme` antes del primer
 * paint; aquí solo se sincroniza.
 */
import { ref } from 'vue'

export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'mariosalvarez-theme'

const theme = ref<ThemeMode>('light')
let hydrated = false

function readTheme(): ThemeMode {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function applyTheme(mode: ThemeMode): void {
  document.documentElement.dataset.theme = mode
  document.documentElement.style.colorScheme = mode
}

export function useTheme() {
  if (import.meta.client && !hydrated) {
    hydrated = true
    theme.value = readTheme()
  }

  function setTheme(mode: ThemeMode): void {
    theme.value = mode
    if (!import.meta.client) return
    try {
      localStorage.setItem(STORAGE_KEY, mode)
    }
    catch {
      // Storage blocked (private mode): the theme still applies for this visit.
    }
    applyTheme(mode)
  }

  function toggleTheme(): void {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  return { theme, setTheme, toggleTheme }
}
