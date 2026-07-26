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
import type { Locale } from '../types'

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
  }
  hero: {
    greeting: string
    name: string
    slogan: string
    subtitle: string
    ctaProjects: string
    ctaContact: string
    location: string
  }
  projects: {
    title: string
    subtitle: string
    viewDetails: string
    visitSite: string
    viewGithub: string
    statusLive: string
    statusComingSoon: string
    realUseLabel: string
    technologiesLabel: string
    closeModal: string
    filterAll: string
    filterLive: string
    filterComingSoon: string
    emptyTitle: string
    emptyBody: string
    emptyAction: string
  }
  technologies: {
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
    languageAria: 'Cambiar idioma a inglés',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    mainNav: 'Navegación principal',
    skipToContent: 'Saltar al contenido',
  },
  hero: {
    greeting: 'Hola, soy',
    name: 'Mario Alvarez',
    slogan: 'De Rope Access en Refinería a Desarrollador de Datos Industriales',
    subtitle:
      'Llevo más de 15 años en desarrollo web. Pasé años en rope access y NDT dentro de refinerías del Golfo de México, y hoy construyo aplicaciones y dashboards que conectan esa experiencia de campo con datos accionables para equipos offshore, contratistas y operadores de Texas.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Pedir cotización',
    location: 'Houston, Texas · Disponible remoto',
  },
  projects: {
    title: 'Proyectos',
    subtitle:
      'Herramientas reales para el corredor industrial de Houston: directorios, permisos, canales y cumplimiento ambiental.',
    viewDetails: 'Ver detalles del proyecto',
    visitSite: 'Abrir sitio en vivo',
    viewGithub: 'Ver código en GitHub',
    statusLive: 'En vivo',
    statusComingSoon: 'Próximamente',
    realUseLabel: 'Uso real',
    technologiesLabel: 'Tecnologías',
    closeModal: 'Cerrar detalles del proyecto',
    filterAll: 'Todos',
    filterLive: 'En vivo',
    filterComingSoon: 'Próximamente',
    emptyTitle: 'No hay proyectos en este filtro',
    emptyBody: 'Prueba “Todos” o “En vivo” para ver el trabajo en producción.',
    emptyAction: 'Mostrar todos los proyectos',
  },
  technologies: {
    title: 'Tecnologías',
    subtitle:
      'Stack real de producción: Vue/Nuxt, mapas MapLibre, FastAPI, Supabase y pipelines de datos usados en la suite TxBizFinder y proyectos de clientes.',
  },
  lab: {
    eyebrow: 'Tools',
    title: 'Lab',
    subtitle:
      'Herramientas propias del lab: auditorías web, licencias open source y utilidades listas para usar.',
    openTool: 'Abrir tool',
    viewGithub: 'Ver en GitHub',
    viewPypi: 'Instalar desde PyPI',
    emptyTitle: 'Aún no hay tools en el lab',
    emptyBody: 'Pronto publicaré más herramientas open source y utilidades aquí.',
  },
  reviews: {
    title: 'Reseñas profesionales',
    subtitle:
      'Feedback de proyectos en producción. Para trabajo profesional y cotizaciones, contáctame a través de ZeroDigitX.',
    ctaTitle: '¿Listo para tu próximo proyecto?',
    ctaBody:
      'Diseño y desarrollo web bilingüe, sitios de negocio y soluciones a medida en Houston y la Costa del Golfo. Cotización y contacto en ZeroDigitX.',
    ctaButton: 'Pedir cotización en ZeroDigitX',
    ctaSecondary: 'Visitar zerodigitx.com',
    agencyLabel: 'zeroˣ digit',
  },
  contact: {
    title: 'Contacto',
    subtitle:
      '¿Necesitas una herramienta de datos, dashboard industrial o aplicación web? Pide cotización o llámame.',
    hireVia: 'Pedir cotización',
    hireViaBody: 'Para sitios web y soluciones a medida, usa el contacto de ZeroDigitX. Suele responder el mismo día.',
    visitAgency: 'Pedir cotización en ZeroDigitX',
    callNow: 'Llamar ahora',
    responseTime: 'Suele responder el mismo día',
    socialHeading: 'Redes',
    x: 'X / @nezsbit',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    rights: '© {year} Mario Alvarez. Todos los derechos reservados.',
    builtWith: 'Construido con Vue 3, TypeScript y Tailwind CSS',
    tagline: 'From Refinery Rope Access to Industrial Data Developer',
    agency: 'ZeroDigitX',
  },
  meta: {
    siteTitle: 'Mario Alvarez | mariosalvarez.com',
    siteDescription:
      'Portafolio de Mario Alvarez — desarrollador de datos industriales en Houston, Texas. Proyectos en Vue 3, Python y herramientas para el sector petroquímico.',
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
    languageAria: 'Switch language to Spanish',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    mainNav: 'Main navigation',
    skipToContent: 'Skip to content',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Mario Alvarez',
    slogan: 'From Refinery Rope Access to Industrial Data Developer',
    subtitle:
      'I have over 15 years of web development experience. I spent years in rope access and NDT inside Gulf Coast refineries, and today I build web apps and dashboards that bridge that field experience with actionable data for offshore crews, contractors, and Texas operators.',
    ctaProjects: 'View projects',
    ctaContact: 'Request a quote',
    location: 'Houston, Texas · Available remotely',
  },
  projects: {
    title: 'Projects',
    subtitle:
      'Real tools for the Houston industrial corridor: directories, permits, channels, and environmental compliance.',
    viewDetails: 'View project details',
    visitSite: 'Open live site',
    viewGithub: 'View code on GitHub',
    statusLive: 'Live',
    statusComingSoon: 'Coming soon',
    realUseLabel: 'Real-world use',
    technologiesLabel: 'Technologies',
    closeModal: 'Close project details',
    filterAll: 'All',
    filterLive: 'Live',
    filterComingSoon: 'Coming soon',
    emptyTitle: 'No projects in this filter',
    emptyBody: 'Try “All” or “Live” to see production work.',
    emptyAction: 'Show all projects',
  },
  technologies: {
    title: 'Technologies',
    subtitle:
      'Real production stack: Vue/Nuxt, MapLibre maps, FastAPI, Supabase, and data pipelines used across the TxBizFinder suite and client projects.',
  },
  lab: {
    eyebrow: 'Tools',
    title: 'Lab',
    subtitle:
      'My lab tools: website audits, open-source license scanning, and utilities ready to use.',
    openTool: 'Open tool',
    viewGithub: 'View on GitHub',
    viewPypi: 'Install from PyPI',
    emptyTitle: 'No lab tools yet',
    emptyBody: 'More open-source tools and utilities will show up here soon.',
  },
  reviews: {
    title: 'Professional reviews',
    subtitle:
      'Feedback from production projects. For professional work and quotes, reach me through ZeroDigitX.',
    ctaTitle: 'Ready for your next project?',
    ctaBody:
      'Bilingual web design and development, business sites, and custom solutions in Houston and the Gulf Coast. Quotes and contact via ZeroDigitX.',
    ctaButton: 'Request a quote on ZeroDigitX',
    ctaSecondary: 'Visit zerodigitx.com',
    agencyLabel: 'zeroˣ digit',
  },
  contact: {
    title: 'Contact',
    subtitle:
      'Need a data tool, industrial dashboard, or web application? Request a quote or call me.',
    hireVia: 'Request a quote',
    hireViaBody: 'For websites and custom solutions, use ZeroDigitX contact. Usually replies the same day.',
    visitAgency: 'Request a quote on ZeroDigitX',
    callNow: 'Call now',
    responseTime: 'Usually replies the same day',
    socialHeading: 'Social',
    x: 'X / @nezsbit',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    rights: '© {year} Mario Alvarez. All rights reserved.',
    builtWith: 'Built with Vue 3, TypeScript, and Tailwind CSS',
    tagline: 'From Refinery Rope Access to Industrial Data Developer',
    agency: 'ZeroDigitX',
  },
  meta: {
    siteTitle: 'Mario Alvarez | mariosalvarez.com',
    siteDescription:
      'Portfolio of Mario Alvarez — industrial data developer in Houston, Texas. Vue 3, Python, and petrochemical sector tools.',
  },
  theme: {
    light: 'Clear',
    dark: 'Dark',
    label: 'Theme',
  },
}

export const translations: Record<Locale, Translations> = { es, en }
