/**
 * Reseñas profesionales de clientes y partners.
 */
import type { BilingualText } from '#shared/types'
import { PHONE, PHONE_DISPLAY } from './identity'

export interface Review {
  id: string
  quote: BilingualText
  author: string
  role: BilingualText
  company: string
  /** Iniciales para avatar */
  initials: string
}

export const reviews: Review[] = [
  {
    id: 'navco',
    quote: {
      es: 'El sitio y el sistema de citas en línea transformaron cómo recibimos clientes. Confirmaciones por email, bilingüe, y todo listo en producción sin dolores de cabeza.',
      en: 'The site and online booking system transformed how we take clients. Email confirmations, bilingual, and production-ready with no headaches.',
    },
    author: 'NavCo Solutions',
    role: {
      es: 'Servicios notariales',
      en: 'Notary services',
    },
    company: 'navcosolutions.com',
    initials: 'NC',
  },
  {
    id: 'inesa',
    quote: {
      es: 'Un sitio institucional trilingüe, galería y PWA que representa al instituto con claridad profesional. Exactamente lo que necesitábamos para Houston y Latinoamérica.',
      en: 'A trilingual institutional site, gallery, and PWA that represents the institute with professional clarity. Exactly what we needed for Houston and Latin America.',
    },
    author: 'INESA Institute',
    role: {
      es: 'Evaluación sensorial de alimentos',
      en: 'Food sensory evaluation',
    },
    company: 'inesa.institute',
    initials: 'IN',
  },
  {
    id: 'txbiz',
    quote: {
      es: 'De directorio a suite de inteligencia: mapas, permisos, aire y red eléctrica. Herramientas reales para el corredor industrial de Texas, construidas con rigor de campo.',
      en: 'From directory to intelligence suite: maps, permits, air, and grid. Real tools for the Texas industrial corridor, built with field-level rigor.',
    },
    author: 'TxBizFinder Intelligence',
    role: {
      es: 'Suite de datos industriales',
      en: 'Industrial data suite',
    },
    company: 'txbizfinder.com',
    initials: 'TX',
  },
]

export {
  ZERODIGITX_URL,
  ZERODIGITX_CONTACT_URL,
} from './identity'

export const ZERODIGITX_PHONE = `tel:${PHONE}`
export const ZERODIGITX_PHONE_DISPLAY = PHONE_DISPLAY
