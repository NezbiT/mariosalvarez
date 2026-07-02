/**
 * Composable de tema claro / oscuro con persistencia en localStorage.
 */
import { ref, watch } from 'vue'

export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'mariosalvarez-theme'

function getStoredTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return 'light'
}

const theme = ref<ThemeMode>(getStoredTheme())

function applyTheme(mode: ThemeMode): void {
  document.documentElement.dataset.theme = mode
  document.documentElement.style.colorScheme = mode
}

if (typeof document !== 'undefined') {
  applyTheme(theme.value)
}

export function useTheme() {
  function setTheme(mode: ThemeMode): void {
    theme.value = mode
    localStorage.setItem(STORAGE_KEY, mode)
    applyTheme(mode)
  }

  function toggleTheme(): void {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  watch(theme, applyTheme)

  return { theme, setTheme, toggleTheme }
}