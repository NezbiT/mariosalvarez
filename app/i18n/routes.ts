/**
 * Localized URLs. English lives at the root, Spanish under /es with Spanish
 * slugs. Every page has exactly one counterpart in the other language; the
 * language switch and the hreflang links both come from here.
 */
import type { Locale } from '#shared/types'

export const LOCALES: readonly Locale[] = ['en', 'es']

export const PAGES = {
  home: { en: '/', es: '/es' },
  business: { en: '/business', es: '/es/negocios' },
  finances: { en: '/finances', es: '/es/finanzas' },
  about: { en: '/about', es: '/es/sobre-mi' },
} as const satisfies Record<string, Record<Locale, string>>

export type PageKey = keyof typeof PAGES

const PROJECT_BASE: Record<Locale, string> = { en: '/projects/', es: '/es/proyectos/' }

function normalize(path: string): string {
  return path.length > 1 ? path.replace(/\/+$/, '') : path
}

export function localeOf(path: string): Locale {
  const p = normalize(path)
  return p === '/es' || p.startsWith('/es/') ? 'es' : 'en'
}

export function projectPath(id: string, locale: Locale): string {
  return `${PROJECT_BASE[locale]}${id}`
}

/** The same page in both languages; unknown paths fall back to the homes. */
export function alternatesOf(path: string): Record<Locale, string> {
  const p = normalize(path)
  for (const paths of Object.values(PAGES)) {
    if (paths.en === p || paths.es === p) return paths
  }
  for (const locale of LOCALES) {
    if (p.startsWith(PROJECT_BASE[locale])) {
      const id = p.slice(PROJECT_BASE[locale].length)
      return { en: projectPath(id, 'en'), es: projectPath(id, 'es') }
    }
  }
  return PAGES.home
}

/** Which top-level page a path belongs to (case studies count as business). */
export function sectionOf(path: string): PageKey {
  const p = normalize(path)
  for (const [key, paths] of Object.entries(PAGES) as [PageKey, Record<Locale, string>][]) {
    if (paths.en === p || paths.es === p) return key
  }
  return LOCALES.some(l => p.startsWith(PROJECT_BASE[l])) ? 'business' : 'home'
}
