/**
 * i18n ligero ES/EN con persistencia en localStorage (client only).
 * Default EN for SSG so prerendered HTML is in English for recruiters/crawlers.
 */
import { ref, computed, watch } from 'vue'
import type { Locale, BilingualText } from '~/types'
import { translations } from '~/i18n/translations'

const STORAGE_KEY = 'mariosalvarez-locale'
const DEFAULT_LOCALE: Locale = 'en'

function getStoredLocale(): Locale {
  if (!import.meta.client) return DEFAULT_LOCALE
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'es' || stored === 'en') return stored
  return DEFAULT_LOCALE
}

const locale = ref<Locale>(DEFAULT_LOCALE)
let hydrated = false

export function useI18n() {
  const t_ui = computed(() => translations[locale.value])

  function setLocale(newLocale: Locale): void {
    locale.value = newLocale
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, newLocale)
      document.documentElement.lang = newLocale
    }
  }

  function toggleLocale(): void {
    setLocale(locale.value === 'es' ? 'en' : 'es')
  }

  function t(text: BilingualText): string {
    return text[locale.value]
  }

  // Hydrate preference once on client (avoids SSR/localStorage mismatch)
  if (import.meta.client && !hydrated) {
    hydrated = true
    const stored = getStoredLocale()
    if (stored !== locale.value) locale.value = stored
  }

  watch(
    locale,
    (val) => {
      if (import.meta.client) document.documentElement.lang = val
    },
    { immediate: true },
  )

  return {
    locale,
    t_ui,
    t,
    setLocale,
    toggleLocale,
  }
}
