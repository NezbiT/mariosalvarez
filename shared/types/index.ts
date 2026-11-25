/**
 * Definiciones de tipos TypeScript compartidas en todo el portafolio.
 */
export type Locale = 'es' | 'en'

export interface BilingualText {
  es: string
  en: string
}

/** Tecnología con logo y enlace oficial */
export interface TechItem {
  id: string
  name: string
  url: string
  /** Simple Icons slug (cdn.simpleicons.org); omitted when there is no logo */
  icon?: string
  color?: string
}

export interface TechGroup {
  id: string
  title: BilingualText
  items: TechItem[]
}

/** Tool del Lab (productos/herramientas propias) */
export interface LabItem {
  id: string
  title: BilingualText
  shortDescription: BilingualText
  longDescription: BilingualText
  technologies: string[]
  /** App / docs live URL */
  site?: string
  github?: string
  /** e.g. PyPI package page */
  install?: string
  /** Optional install one-liner shown under the card */
  command?: string
  badge: BilingualText
  priority: number
}

export interface SelectOption {
  value: string
  label: BilingualText
}

/**
 * ### Cómo ejecutar este archivo
 * Se importa desde otros módulos TypeScript.
 *
 * ### Qué aprendí en este archivo
 * - Modelar contenido bilingüe con interfaces tipadas
 * - Separación de tipos de dominio del código de UI
 */