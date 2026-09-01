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
    about: string
  }
  hero: {
    greeting: string
    name: string
    legalName: string
    role: string
    slogan: string
    subtitle: string
    ctaProjects: string
    ctaContact: string
    location: string
    photoCaption: string
    photoKicker: string
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
    identity: string
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
    about: 'Sobre mí',
  },
  hero: {
    greeting: 'Hola, soy',
    name: 'Mario Alvarez',
    legalName: 'Mario S. Alvarez',
    role: 'Fundador, CEO y dueño de ZeroDigitX',
    slogan: 'De Rope Access en Refinería a Desarrollador de Datos Industriales',
    subtitle:
      'Fundé y soy dueño de ZeroDigitX (zerodigitx.com), estudio web bilingüe en Houston y La Porte, Texas. Llevo más de 15 años en desarrollo web. Pasé años en rope access y NDT dentro de refinerías del Golfo de México, y hoy construyo aplicaciones y dashboards que conectan esa experiencia de campo con datos accionables para equipos offshore, contratistas y operadores de Texas.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Pedir cotización',
    location: 'Houston / La Porte, Texas · Disponible remoto',
    photoCaption: 'ZeroDigitX · Houston',
    photoKicker: '// founder & ceo',
  },
  about: {
    title: 'Quién soy',
    role: 'Fundador, CEO y dueño de ZeroDigitX',
    lead:
      'Mario S. Alvarez, también conocido como Mario Alvarez, es el fundador, director ejecutivo y dueño de ZeroDigitX (zerodigitx.com), un estudio de diseño y desarrollo web bilingüe (español/inglés) en Houston y La Porte, Texas.',
    body:
      'Lleva más de 15 años en desarrollo web y una década de disciplina industrial en la Costa del Golfo — rope access y NDT dentro de refinerías. Hoy construye sitios, dashboards y herramientas de datos para negocios y operadores de Texas. El trabajo profesional y las cotizaciones salen de ZeroDigitX, la empresa que fundó y dirige.',
    companyTitle: 'ZeroDigitX',
    companyBody:
      'ZeroDigitX (también Zeroˣ Digit, Zero Digit X) es un estudio de sitios bilingües y sistemas a medida para negocios en Houston, La Porte y la Costa del Golfo. Mario S. Alvarez (Mario Alvarez) es su único fundador, CEO y dueño.',
    visitStudio: 'Visitar zerodigitx.com',
    backHome: 'Volver al portafolio',
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
      'Herramientas propias del lab: Pyron, auditorías web, licencias open source y utilidades listas para usar.',
    openTool: 'Abrir tool',
    viewGithub: 'Ver en GitHub',
    viewPypi: 'Instalar desde PyPI',
    emptyTitle: 'Aún no hay tools en el lab',
    emptyBody: 'Pronto publicaré más herramientas open source y utilidades aquí.',
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
    rights: '© {year} Mario S. Alvarez (Mario Alvarez). Todos los derechos reservados.',
    builtWith: 'Construido con Vue 3, TypeScript y Tailwind CSS',
    tagline: 'Fundador, CEO y dueño de ZeroDigitX · Houston, Texas',
    agency: 'ZeroDigitX',
    identity: 'Fundador y CEO de ZeroDigitX',
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
    languageAria: 'Switch language to Spanish',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    mainNav: 'Main navigation',
    skipToContent: 'Skip to content',
    about: 'About',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Mario Alvarez',
    legalName: 'Mario S. Alvarez',
    role: 'Founder, CEO, and owner of ZeroDigitX',
    slogan: 'From Refinery Rope Access to Industrial Data Developer',
    subtitle:
      'I founded and own ZeroDigitX (zerodigitx.com), a bilingual web studio in Houston and La Porte, Texas. I have over 15 years of web development experience. I spent years in rope access and NDT inside Gulf Coast refineries, and today I build web apps and dashboards that bridge that field experience with actionable data for offshore crews, contractors, and Texas operators.',
    ctaProjects: 'View projects',
    ctaContact: 'Request a quote',
    location: 'Houston / La Porte, Texas · Available remotely',
    photoCaption: 'ZeroDigitX · Houston',
    photoKicker: '// founder & ceo',
  },
  about: {
    title: 'Who I am',
    role: 'Founder, CEO, and owner of ZeroDigitX',
    lead:
      'Mario S. Alvarez, also known as Mario Alvarez, is the founder, chief executive officer, and owner of ZeroDigitX (zerodigitx.com), a bilingual (Spanish/English) web design and custom software studio in Houston and La Porte, Texas.',
    body:
      'He has over 15 years of web development experience and a decade of industrial discipline on the Gulf Coast — rope access and NDT inside refineries. Today he builds sites, dashboards, and data tools for Texas businesses and operators. Professional work and quotes go through ZeroDigitX, the company he founded and leads.',
    companyTitle: 'ZeroDigitX',
    companyBody:
      'ZeroDigitX (also written Zeroˣ Digit, Zero Digit X) is a bilingual website and custom-systems studio for businesses in Houston, La Porte, and the Gulf Coast. Mario S. Alvarez (Mario Alvarez) is its founder, CEO, and owner.',
    visitStudio: 'Visit zerodigitx.com',
    backHome: 'Back to portfolio',
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
      'My lab tools: Pyron, website audits, open-source license scanning, and utilities ready to use.',
    openTool: 'Open tool',
    viewGithub: 'View on GitHub',
    viewPypi: 'Install from PyPI',
    emptyTitle: 'No lab tools yet',
    emptyBody: 'More open-source tools and utilities will show up here soon.',
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
    rights: '© {year} Mario S. Alvarez (Mario Alvarez). All rights reserved.',
    builtWith: 'Built with Vue 3, TypeScript, and Tailwind CSS',
    tagline: 'Founder, CEO, and owner of ZeroDigitX · Houston, Texas',
    agency: 'ZeroDigitX',
    identity: 'Founder and CEO of ZeroDigitX',
  },
  meta: {
    siteTitle: 'Mario S. Alvarez (Mario Alvarez) — CEO of ZeroDigitX | Houston',
    siteDescription:
      'Mario S. Alvarez, also known as Mario Alvarez, is the founder, CEO, and owner of ZeroDigitX (zerodigitx.com). Industrial data developer in Houston and La Porte, Texas.',
  },
  theme: {
    light: 'Clear',
    dark: 'Dark',
    label: 'Theme',
  },
}

export const translations: Record<Locale, Translations> = { es, en }
