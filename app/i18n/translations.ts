/**
 * Diccionario de traducciones ES/EN para toda la interfaz del portafolio.
 *
 * Qué hace:
 * - Centraliza todas las cadenas de UI en un solo objeto tipado
 * - Permite cambiar idioma sin duplicar componentes
 *
 * Por qué existe:
 * - El portafolio atiende clientes bilingües en Texas (ES/EN)
 * - Un solo archivo facilita revisión de copy y consistencia de marca
 *
 * Cómo funciona:
 * - useI18n.ts lee locale actual y devuelve translations[locale].clave
 * - Las claves son planas (nav.projects) para simplicidad sin vue-i18n
 */
import type { Locale } from '#shared/types'

export interface Translations {
  nav: {
    home: string
    projects: string
    lab: string
    technologies: string
    reviews: string
    contact: string
    language: string
    languageAria: string
    menuOpen: string
    menuClose: string
    mainNav: string
    skipToContent: string
    about: string
  }
  hero: {
    eyebrow: string
    name: string
    legalName: string
    role: string
    statement: string
    story: string
    ctaWork: string
    ctaQuote: string
    mapLive: string
    mapBuild: string
    mapLegend: string
    mapLink: string
    severity: Record<'Extreme' | 'Severe' | 'Moderate' | 'Minor' | 'Unknown', string>
  }
  about: {
    title: string
    role: string
    lead: string
    body: string
    companyTitle: string
    companyBody: string
    visitStudio: string
    backHome: string
  }
  projects: {
    eyebrow: string
    title: string
    subtitle: string
    filterLabel: string
    filterAll: string
    filterClients: string
    filterProducts: string
    /** Screen-reader suffix after the project name on each card link. */
    caseSuffix: string
    /** `{name}` is replaced with the project name. */
    screenshotAlt: string
    kindClient: string
    kindProduct: string
    visitSite: string
    chapterProblem: string
    chapterSolution: string
    chapterResult: string
    highlightsTitle: string
    stackTitle: string
    caseNavLabel: string
    prevCase: string
    nextCase: string
    backToWork: string
    metaTitleSuffix: string
    notFound: string
  }
  technologies: {
    eyebrow: string
    title: string
    subtitle: string
  }
  lab: {
    eyebrow: string
    title: string
    subtitle: string
    openTool: string
    viewGithub: string
    viewPypi: string
    emptyTitle: string
    emptyBody: string
    stackLabel: string
  }
  reviews: {
    title: string
    subtitle: string
    ctaTitle: string
    ctaBody: string
    ctaButton: string
    ctaSecondary: string
    agencyLabel: string
  }
  contact: {
    eyebrow: string
    title: string
    subtitle: string
    hireVia: string
    hireViaBody: string
    visitAgency: string
    callNow: string
    responseTime: string
    socialHeading: string
    x: string
    linkedin: string
    github: string
  }
  footer: {
    rights: string
    builtWith: string
    tagline: string
    agency: string
    navLabel: string
  }
  meta: {
    siteTitle: string
    siteDescription: string
  }
  theme: {
    light: string
    dark: string
    label: string
  }
}

const es: Translations = {
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    lab: 'Lab',
    technologies: 'Tecnologías',
    reviews: 'Reseñas',
    contact: 'Contacto',
    language: 'EN',
    languageAria: 'EN — cambiar idioma a inglés',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    mainNav: 'Navegación principal',
    skipToContent: 'Saltar al contenido',
    about: 'Sobre mí',
  },
  hero: {
    eyebrow: 'Diseñador y desarrollador web · Houston, TX',
    name: 'Mario Alvarez',
    legalName: 'Mario S. Alvarez',
    role: 'Fundador de ZeroDigitX',
    statement: 'Llevo más de 15 años construyendo en la web.',
    story:
      'Lo aprendí en Latinoamérica, lo seguí en Canadá y hoy trabajo desde Houston. Para quedarme en Texas hice rope access y NDT en las refinerías; después de cada turno volvía al teclado. Ahora diseño y construyo sitios y herramientas de datos para negocios de Texas.',
    ctaWork: 'Ver mi trabajo',
    ctaQuote: 'Pedir cotización',
    mapLive: 'En vivo · {n} alertas activas del NWS en Texas · actualizado {time}',
    mapBuild: '{n} alertas activas del NWS en Texas al publicar el sitio · {time}',
    mapLegend: 'Severidad',
    mapLink: 'Cómo construyo esto',
    severity: { Extreme: 'Extrema', Severe: 'Severa', Moderate: 'Moderada', Minor: 'Menor', Unknown: 'Sin dato' },
  },
  about: {
    title: 'Quién soy',
    role: 'Fundador, CEO y dueño de ZeroDigitX',
    lead:
      'Mario S. Alvarez, también conocido como Mario Alvarez, lleva más de 15 años construyendo en la web. Lo aprendió en Latinoamérica, lo siguió en Canadá, y ahora trabaja desde el área de Houston.',
    body:
      'Para quedarse en Texas, tomó rope access y NDT en las refinerías. Después de un turno, volvía al teclado. Nunca dejó la web: creció con ella. La búsqueda cambió: los clientes siguen usando Google, pero muchos también le preguntan a ChatGPT a quién llamar. Dirige Zeroˣ Digit para ayudar a dueños de pequeños negocios a seguirle el paso: un sitio que funciona, una presencia que se encuentra, y menos adivinanzas.',
    companyTitle: 'ZeroDigitX',
    companyBody:
      'ZeroDigitX (también Zeroˣ Digit, Zero Digit X) es un estudio de sitios bilingües y sistemas a medida para negocios en Houston, La Porte y la Costa del Golfo. Mario S. Alvarez (Mario Alvarez) es su único fundador, CEO y dueño.',
    visitStudio: 'Visitar zerodigitx.com',
    backHome: 'Volver al portafolio',
  },
  projects: {
    eyebrow: 'Casos de estudio',
    title: 'Trabajo seleccionado',
    subtitle:
      'Proyectos terminados y entregados con ZeroDigitX, el estudio que dirijo: cuál era el problema, qué construí y qué cambió.',
    filterLabel: 'Filtrar proyectos',
    filterAll: 'Todos',
    filterClients: 'Clientes',
    filterProducts: 'Productos',
    caseSuffix: 'caso de estudio',
    screenshotAlt: 'Página de inicio de {name}',
    kindClient: 'Proyecto de cliente',
    kindProduct: 'Producto propio',
    visitSite: 'Visitar sitio',
    chapterProblem: 'El problema',
    chapterSolution: 'La solución',
    chapterResult: 'El resultado',
    highlightsTitle: 'Lo destacado',
    stackTitle: 'Stack',
    caseNavLabel: 'Más casos de estudio',
    prevCase: 'Caso anterior',
    nextCase: 'Caso siguiente',
    backToWork: 'Todo el trabajo',
    metaTitleSuffix: 'caso de estudio',
    notFound: 'Caso de estudio no encontrado',
  },
  technologies: {
    title: 'Tecnologías',
    eyebrow: 'Stack',
    subtitle:
      'Lo que he usado en mis repos de GitHub: lenguajes, frameworks, bases de datos, mapas, IA, pruebas e infraestructura, de sitios para clientes a herramientas de datos de Texas.',
  },
  lab: {
    eyebrow: 'Tools',
    title: 'Lab',
    subtitle:
      'Herramientas propias, open source y listas para usar: un framework web en Python/Rust y un escáner de licencias.',
    openTool: 'Abrir tool',
    viewGithub: 'Ver en GitHub',
    viewPypi: 'Instalar desde PyPI',
    emptyTitle: 'Aún no hay tools en el lab',
    emptyBody: 'Pronto publicaré más herramientas open source y utilidades aquí.',
    stackLabel: 'Tecnologías',
  },
  reviews: {
    title: 'Reseñas profesionales',
    subtitle:
      'Feedback de proyectos en producción. El trabajo profesional y las cotizaciones van por ZeroDigitX, el estudio que fundé y dirijo.',
    ctaTitle: '¿Listo para tu próximo proyecto?',
    ctaBody:
      'Diseño y desarrollo web bilingüe, sitios de negocio y soluciones a medida en Houston y la Costa del Golfo. Soy el fundador, CEO y dueño de ZeroDigitX: cotiza ahí.',
    ctaButton: 'Pedir cotización en ZeroDigitX',
    ctaSecondary: 'Visitar zerodigitx.com',
    agencyLabel: 'zeroˣ digit',
  },
  contact: {
    title: 'Contacto',
    eyebrow: 'Trabajemos juntos',
    subtitle:
      '¿Necesitas una herramienta de datos, dashboard industrial o aplicación web? Pide cotización o llámame.',
    hireVia: 'Pedir cotización',
    hireViaBody:
      'Soy el fundador, CEO y dueño de ZeroDigitX. Para sitios web y soluciones a medida, pide cotización ahí. Suele responder el mismo día.',
    visitAgency: 'Pedir cotización en ZeroDigitX',
    callNow: 'Llamar ahora',
    responseTime: 'Suele responder el mismo día',
    socialHeading: 'Redes',
    x: 'X / @nezsbit',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    rights: '© {year}. Todos los derechos reservados.',
    builtWith: 'Hecho con Nuxt, TypeScript y Tailwind CSS',
    tagline: 'Fundador, CEO y dueño de ZeroDigitX · Houston, Texas',
    agency: 'ZeroDigitX',
    navLabel: 'Secciones del sitio',
  },
  meta: {
    siteTitle: 'Mario S. Alvarez (Mario Alvarez) — CEO de ZeroDigitX | Houston',
    siteDescription:
      'Mario S. Alvarez, también conocido como Mario Alvarez, es el fundador, CEO y dueño de ZeroDigitX (zerodigitx.com). Desarrollador de datos industriales en Houston y La Porte, Texas.',
  },
  theme: {
    light: 'Claro',
    dark: 'Oscuro',
    label: 'Tema',
  },
}

const en: Translations = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    lab: 'Lab',
    technologies: 'Technologies',
    reviews: 'Reviews',
    contact: 'Contact',
    language: 'ES',
    languageAria: 'ES — switch language to Spanish',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    mainNav: 'Main navigation',
    skipToContent: 'Skip to content',
    about: 'About',
  },
  hero: {
    eyebrow: 'Web designer & developer · Houston, TX',
    name: 'Mario Alvarez',
    legalName: 'Mario S. Alvarez',
    role: 'Founder of ZeroDigitX',
    statement: "I've been building on the web for more than 15 years.",
    story:
      'I learned it in Latin America, kept at it in Canada, and work from Houston now. To stay in Texas I did rope access and NDT in the refineries; after every shift I went back to the keyboard. Today I design and build websites and data tools for Texas businesses.',
    ctaWork: 'See my work',
    ctaQuote: 'Request a quote',
    mapLive: 'Live · {n} active NWS alerts in Texas · updated {time}',
    mapBuild: '{n} active NWS alerts in Texas when this site was published · {time}',
    mapLegend: 'Severity',
    mapLink: 'How I build this',
    severity: { Extreme: 'Extreme', Severe: 'Severe', Moderate: 'Moderate', Minor: 'Minor', Unknown: 'Unknown' },
  },
  about: {
    title: 'Who I am',
    role: 'Founder, CEO, and owner of ZeroDigitX',
    lead:
      'Mario S. Alvarez, also known as Mario Alvarez, has been building on the web for more than 15 years. He learned it in Latin America, kept at it in Canada, and works from the Houston area now.',
    body:
      'To stay in Texas, he took rope access and NDT in the refineries. After a shift, he went back to the keyboard. He never left the web — he just grew up with it. Search changed: customers still use Google, but a lot of them also ask ChatGPT who to call. He runs Zeroˣ Digit to help small business owners keep up: a site that works, a presence people can find, and less guesswork.',
    companyTitle: 'ZeroDigitX',
    companyBody:
      'ZeroDigitX (also written Zeroˣ Digit, Zero Digit X) is a bilingual website and custom-systems studio for businesses in Houston, La Porte, and the Gulf Coast. Mario S. Alvarez (Mario Alvarez) is its founder, CEO, and owner.',
    visitStudio: 'Visit zerodigitx.com',
    backHome: 'Back to portfolio',
  },
  projects: {
    eyebrow: 'Case studies',
    title: 'Selected work',
    subtitle:
      'Finished projects shipped through ZeroDigitX, the studio I run: what was in the way, what I built, and what changed.',
    filterLabel: 'Filter projects',
    filterAll: 'All',
    filterClients: 'Clients',
    filterProducts: 'Products',
    caseSuffix: 'case study',
    screenshotAlt: '{name} homepage',
    kindClient: 'Client project',
    kindProduct: 'Studio product',
    visitSite: 'Visit site',
    chapterProblem: 'The problem',
    chapterSolution: 'The solution',
    chapterResult: 'The result',
    highlightsTitle: 'Highlights',
    stackTitle: 'Stack',
    caseNavLabel: 'More case studies',
    prevCase: 'Previous case',
    nextCase: 'Next case',
    backToWork: 'All work',
    metaTitleSuffix: 'case study',
    notFound: 'Case study not found',
  },
  technologies: {
    title: 'Technologies',
    eyebrow: 'Stack',
    subtitle:
      'What I have shipped with across my GitHub repos: languages, frameworks, databases, maps, AI, testing and infrastructure, from client sites to Texas data tools.',
  },
  lab: {
    eyebrow: 'Tools',
    title: 'Lab',
    subtitle:
      'Tools I build in the open and ship ready to use: a Python/Rust web framework and a license scanner.',
    openTool: 'Open tool',
    viewGithub: 'View on GitHub',
    viewPypi: 'Install from PyPI',
    emptyTitle: 'No lab tools yet',
    emptyBody: 'More open-source tools and utilities will show up here soon.',
    stackLabel: 'Technologies',
  },
  reviews: {
    title: 'Professional reviews',
    subtitle:
      'Feedback from production projects. Professional work and quotes go through ZeroDigitX, the studio I founded and lead.',
    ctaTitle: 'Ready for your next project?',
    ctaBody:
      'Bilingual web design and development, business sites, and custom solutions in Houston and the Gulf Coast. I am the founder, CEO, and owner of ZeroDigitX — request a quote there.',
    ctaButton: 'Request a quote on ZeroDigitX',
    ctaSecondary: 'Visit zerodigitx.com',
    agencyLabel: 'zeroˣ digit',
  },
  contact: {
    title: 'Contact',
    eyebrow: 'Work with me',
    subtitle:
      'Need a data tool, industrial dashboard, or web application? Request a quote or call me.',
    hireVia: 'Request a quote',
    hireViaBody:
      'I am the founder, CEO, and owner of ZeroDigitX. For websites and custom solutions, request a quote there. Usually replies the same day.',
    visitAgency: 'Request a quote on ZeroDigitX',
    callNow: 'Call now',
    responseTime: 'Usually replies the same day',
    socialHeading: 'Social',
    x: 'X / @nezsbit',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    rights: '© {year}. All rights reserved.',
    builtWith: 'Built with Nuxt, TypeScript, and Tailwind CSS',
    tagline: 'Founder, CEO, and owner of ZeroDigitX · Houston, Texas',
    agency: 'ZeroDigitX',
    navLabel: 'Site sections',
  },
  meta: {
    siteTitle: 'Mario S. Alvarez (Mario Alvarez) — CEO of ZeroDigitX | Houston',
    siteDescription:
      'Mario S. Alvarez, also known as Mario Alvarez, is the founder, CEO, and owner of ZeroDigitX (zerodigitx.com). Industrial data developer in Houston and La Porte, Texas.',
  },
  theme: {
    light: 'Light',
    dark: 'Dark',
    label: 'Theme',
  },
}

export const translations: Record<Locale, Translations> = { es, en }
