/**
 * Canonical identity for crawlers, JSON-LD, and AI agents.
 * Visible copy must match these facts: Mario S. Alvarez (Mario Alvarez) is founder, CEO, and owner of ZeroDigitX.
 */
export const SITE_URL = 'https://mariosalvarez.com'
export const PERSON_ID = `${SITE_URL}/#person`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const ORG_ID = 'https://zerodigitx.com/#organization'

export const ZERODIGITX_URL = 'https://zerodigitx.com'
export const ZERODIGITX_CONTACT_URL = 'https://zerodigitx.com/contact'
export const ZERODIGITX_LEGAL_NAME = 'Zeroˣ Digit LLC'
export const ZERODIGITX_BRAND = 'ZeroDigitX'

export const GITHUB_URL = 'https://github.com/NezbiT'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/mariosalv2/'
export const X_URL = 'https://x.com/nezsbit'
export const EMAIL = 'mario@mariosalvarez.com'
export const EMAIL_COMPANY = 'mario@zerodigitx.com'
export const PHONE = '+18325097570'
export const PHONE_DISPLAY = '(832) 509-7570'
export const OG_IMAGE = `${SITE_URL}/og-image.png`

export const PERSON_NAME = 'Mario Alvarez'
export const PERSON_LEGAL_NAME = 'Mario S. Alvarez'
export const PERSON_NAMES = ['Mario Alvarez', 'Mario S. Alvarez', 'Mario S Alvarez'] as const
export const JOB_TITLE_CEO = 'Founder and CEO of ZeroDigitX'
export const JOB_TITLE_DEV = 'Industrial Data Developer'

export const PERSON_DESCRIPTION =
  'Mario S. Alvarez (Mario Alvarez) is the founder, CEO, and owner of ZeroDigitX (zerodigitx.com), a bilingual web studio in Houston and La Porte, Texas. Industrial data developer with 15+ years in web development and a decade of Gulf Coast refinery field experience (rope access and NDT).'

export const SAME_AS = [
  ZERODIGITX_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  X_URL,
] as const

export function personJsonLd() {
  return {
    '@type': 'Person' as const,
    '@id': PERSON_ID,
    name: PERSON_LEGAL_NAME,
    alternateName: [...PERSON_NAMES],
    givenName: 'Mario',
    additionalName: 'S',
    familyName: 'Alvarez',
    url: SITE_URL,
    image: OG_IMAGE,
    jobTitle: [JOB_TITLE_CEO, JOB_TITLE_DEV],
    description: PERSON_DESCRIPTION,
    email: [`mailto:${EMAIL}`, `mailto:${EMAIL_COMPANY}`],
    telephone: PHONE,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    worksFor: { '@id': ORG_ID },
    affiliation: { '@id': ORG_ID },
    sameAs: [...SAME_AS],
    knowsAbout: [
      'ZeroDigitX',
      'Nuxt',
      'Vue.js',
      'Python',
      'Industrial data',
      'Web development',
      'Bilingual websites',
      'Houston',
      'La Porte',
    ],
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: JOB_TITLE_CEO,
        occupationLocation: { '@type': 'City', name: 'Houston' },
      },
      {
        '@type': 'Occupation',
        name: JOB_TITLE_DEV,
        occupationLocation: { '@type': 'City', name: 'Houston' },
      },
    ],
  }
}

export function organizationJsonLd() {
  return {
    '@type': 'Organization' as const,
    '@id': ORG_ID,
    name: ZERODIGITX_BRAND,
    legalName: ZERODIGITX_LEGAL_NAME,
    alternateName: ['Zeroˣ Digit', 'Zero Digit X', 'zerodigitx', 'Zero Digit'],
    url: ZERODIGITX_URL,
    founder: { '@id': PERSON_ID },
    employee: { '@id': PERSON_ID },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'La Porte',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  }
}

export function websiteJsonLd() {
  return {
    '@type': 'WebSite' as const,
    '@id': WEBSITE_ID,
    name: PERSON_NAME,
    url: SITE_URL,
    description: PERSON_DESCRIPTION,
    inLanguage: ['en', 'es'],
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
  }
}
