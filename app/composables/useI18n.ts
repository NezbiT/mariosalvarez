/**
 * ES/EN driven by the URL: English at the root, Spanish under /es
 * (app/i18n/routes.ts). Both languages are prerendered as separate pages, so
 * there is no stored preference and no client-side switch.
 */
import { computed } from 'vue'
import type { Locale, BilingualText } from '#shared/types'
import { translations } from '~/i18n/translations'
import { PAGES, localeOf, projectPath, type PageKey } from '~/i18n/routes'

export function useI18n() {
  const route = useRoute()
  const locale = computed<Locale>(() => localeOf(route.path))
  const t_ui = computed(() => translations[locale.value])

  function t(text: BilingualText): string {
    return text[locale.value]
  }

  function localePath(key: PageKey): string {
    return PAGES[key][locale.value]
  }

  function localeProjectPath(id: string): string {
    return projectPath(id, locale.value)
  }

  return {
    locale,
    t_ui,
    t,
    localePath,
    localeProjectPath,
  }
}
