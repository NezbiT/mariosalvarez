/**
 * Composable de internacionalización (i18n) ligero sin dependencias externas.
 *
 * Qué hace:
 * - Gestiona el idioma activo (es | en) con persistencia en localStorage
 * - Expone traducciones reactivas y función t() para textos bilingües de datos
 *
 * Por qué existe:
 * - El portafolio es bilingüe; vue-i18n sería overkill para un sitio estático
 *
 * Cómo funciona:
 * 1. Lee locale guardado o usa 'es' por defecto
 * 2. Provee setLocale() que actualiza ref + localStorage + atributo html[lang]
 * 3. t() resuelve BilingualText según locale actual
 */
import { ref, computed, watch } from 'vue'
import type { Locale, BilingualText } from '../types'
import { translations } from '../i18n/translations'

const STORAGE_KEY = 'mariosalvarez-locale'
const DEFAULT_LOCALE: Locale = 'es'

/** Lee locale persistido o devuelve español por defecto */
function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const stored = localStorage.getItem(STORAGE_KEY)
  // Validar que el valor guardado sea un locale soportado
  if (stored === 'es' || stored === 'en') return stored
  return DEFAULT_LOCALE
}

// Estado global compartido entre todos los componentes que usen useI18n
const locale = ref<Locale>(getStoredLocale())

export function useI18n() {
  // Objeto de traducciones del idioma activo (reactivo)
  const t_ui = computed(() => translations[locale.value])

  /** Cambia idioma y persiste preferencia del usuario */
  function setLocale(newLocale: Locale): void {
    locale.value = newLocale
    localStorage.setItem(STORAGE_KEY, newLocale)
    document.documentElement.lang = newLocale
  }

  /** Alterna entre español e inglés (botón en navbar) */
  function toggleLocale(): void {
    setLocale(locale.value === 'es' ? 'en' : 'es')
  }

  /** Resuelve texto bilingüe de datos (proyectos, tecnologías) */
  function t(text: BilingualText): string {
    return text[locale.value]
  }

  // Sincronizar atributo lang del HTML cuando cambie el locale
  watch(
    locale,
    (val) => {
      document.documentElement.lang = val
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

/**
 * ### Cómo ejecutar este archivo
 * Importar en componentes: `const { t_ui, t, toggleLocale } = useI18n()`
 *
 * ### Qué aprendí en este archivo
 * - Ref global fuera del composable comparte estado i18n sin Pinia
 * - localStorage + html[lang] mejoran UX y SEO al recordar preferencia
 */