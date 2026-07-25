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
    technologies: string
    reviews: string
    contact: string
    language: string
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
  }
  technologies: {
    title: string
    subtitle: string
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
    nameLabel: string
    namePlaceholder: string
    companyLabel: string
    companyPlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    projectTypeLabel: string
    projectTypePlaceholder: string
    budgetLabel: string
    budgetPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submit: string
    submitting: string
    success: string
    error: string
    hireVia: string
    hireViaBody: string
    visitAgency: string
    linkedin: string
    github: string
    projectTypes: {
      webApp: string
      dataDashboard: string
      industrialTool: string
      consulting: string
      other: string
    }
    budgets: {
      small: string
      medium: string
      large: string
      enterprise: string
      discuss: string
    }
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
    technologies: 'Tecnologías',
    reviews: 'Reseñas',
    contact: 'Contacto',
    language: 'EN',
  },
  hero: {
    greeting: 'Hola, soy',
    name: 'Mario Alvarez',
    slogan: 'De Rope Access en Refinería a Desarrollador de Datos Industriales',
    subtitle:
      'Llevo más de 15 años en desarrollo web. Pasé años en rope access y NDT dentro de refinerías del Golfo de México, y hoy construyo aplicaciones y dashboards que conectan esa experiencia de campo con datos accionables para equipos offshore, contratistas y operadores de Texas.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactar',
    location: 'Houston, Texas · Disponible remoto',
  },
  projects: {
    title: 'Proyectos',
    subtitle:
      'Herramientas reales para el corredor industrial de Houston: directorios, permisos, canales y cumplimiento ambiental.',
    viewDetails: 'Ver detalles',
    visitSite: 'Visitar sitio',
    viewGithub: 'Ver en GitHub',
    statusLive: 'En vivo',
    statusComingSoon: 'Próximamente',
    realUseLabel: 'Uso real',
    technologiesLabel: 'Tecnologías',
    closeModal: 'Cerrar',
    filterAll: 'Todos',
    filterLive: 'En vivo',
    filterComingSoon: 'Próximamente',
  },
  technologies: {
    title: 'Tecnologías',
    subtitle:
      'Stack real de producción: Vue/Nuxt, mapas MapLibre, FastAPI, Supabase y pipelines de datos usados en la suite TxBizFinder y proyectos de clientes.',
  },
  reviews: {
    title: 'Reseñas profesionales',
    subtitle:
      'Feedback de proyectos en producción. Para trabajo profesional y cotizaciones, contáctame a través de ZeroDigitX.',
    ctaTitle: '¿Listo para tu próximo proyecto?',
    ctaBody:
      'Diseño y desarrollo web bilingüe, sitios de negocio y soluciones a medida en Houston y la Costa del Golfo. Cotización y contacto en ZeroDigitX.',
    ctaButton: 'Contactar en ZeroDigitX',
    ctaSecondary: 'Ver agencia',
    agencyLabel: 'zeroˣ digit',
  },
  contact: {
    title: 'Contacto',
    subtitle:
      '¿Necesitas una herramienta de datos, dashboard industrial o aplicación web? Cuéntame tu proyecto o contáctame por ZeroDigitX.',
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre completo',
    companyLabel: 'Empresa',
    companyPlaceholder: 'Nombre de tu empresa (opcional)',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'tu@empresa.com',
    projectTypeLabel: 'Tipo de proyecto',
    projectTypePlaceholder: 'Selecciona una opción',
    budgetLabel: 'Presupuesto estimado',
    budgetPlaceholder: 'Selecciona un rango',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Describe tu proyecto, plazos y objetivos...',
    submit: 'Enviar mensaje',
    submitting: 'Enviando...',
    success: '¡Mensaje enviado! Te responderé pronto.',
    error: 'Hubo un error al enviar. Intenta de nuevo o contáctame por ZeroDigitX.',
    hireVia: 'Trabajo profesional',
    hireViaBody: 'Para cotizaciones, sitios web y soluciones a medida, usa el formulario de ZeroDigitX.',
    visitAgency: 'Ir a ZeroDigitX',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    projectTypes: {
      webApp: 'Aplicación web',
      dataDashboard: 'Dashboard de datos',
      industrialTool: 'Herramienta industrial',
      consulting: 'Consultoría técnica',
      other: 'Otro',
    },
    budgets: {
      small: 'Menos de $5,000',
      medium: '$5,000 – $15,000',
      large: '$15,000 – $50,000',
      enterprise: 'Más de $50,000',
      discuss: 'Prefiero discutirlo',
    },
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
    technologies: 'Technologies',
    reviews: 'Reviews',
    contact: 'Contact',
    language: 'ES',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Mario Alvarez',
    slogan: 'From Refinery Rope Access to Industrial Data Developer',
    subtitle:
      'I have over 15 years of web development experience. I spent years in rope access and NDT inside Gulf Coast refineries, and today I build web apps and dashboards that bridge that field experience with actionable data for offshore crews, contractors, and Texas operators.',
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
    location: 'Houston, Texas · Available remotely',
  },
  projects: {
    title: 'Projects',
    subtitle:
      'Real tools for the Houston industrial corridor: directories, permits, channels, and environmental compliance.',
    viewDetails: 'View details',
    visitSite: 'Visit site',
    viewGithub: 'View on GitHub',
    statusLive: 'Live',
    statusComingSoon: 'Coming soon',
    realUseLabel: 'Real-world use',
    technologiesLabel: 'Technologies',
    closeModal: 'Close',
    filterAll: 'All',
    filterLive: 'Live',
    filterComingSoon: 'Coming soon',
  },
  technologies: {
    title: 'Technologies',
    subtitle:
      'Real production stack: Vue/Nuxt, MapLibre maps, FastAPI, Supabase, and data pipelines used across the TxBizFinder suite and client projects.',
  },
  reviews: {
    title: 'Professional reviews',
    subtitle:
      'Feedback from production projects. For professional work and quotes, reach me through ZeroDigitX.',
    ctaTitle: 'Ready for your next project?',
    ctaBody:
      'Bilingual web design and development, business sites, and custom solutions in Houston and the Gulf Coast. Quotes and contact via ZeroDigitX.',
    ctaButton: 'Contact on ZeroDigitX',
    ctaSecondary: 'Visit agency',
    agencyLabel: 'zeroˣ digit',
  },
  contact: {
    title: 'Contact',
    subtitle:
      'Need a data tool, industrial dashboard, or web application? Tell me about your project or reach me through ZeroDigitX.',
    nameLabel: 'Name',
    namePlaceholder: 'Your full name',
    companyLabel: 'Company',
    companyPlaceholder: 'Your company name (optional)',
    emailLabel: 'Email',
    emailPlaceholder: 'you@company.com',
    projectTypeLabel: 'Project type',
    projectTypePlaceholder: 'Select an option',
    budgetLabel: 'Estimated budget',
    budgetPlaceholder: 'Select a range',
    messageLabel: 'Message',
    messagePlaceholder: 'Describe your project, timeline, and goals...',
    submit: 'Send message',
    submitting: 'Sending...',
    success: 'Message sent! I will get back to you soon.',
    error: 'Something went wrong. Please try again or contact me via ZeroDigitX.',
    hireVia: 'Professional work',
    hireViaBody: 'For quotes, business websites, and custom solutions, use the ZeroDigitX contact form.',
    visitAgency: 'Go to ZeroDigitX',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    projectTypes: {
      webApp: 'Web application',
      dataDashboard: 'Data dashboard',
      industrialTool: 'Industrial tool',
      consulting: 'Technical consulting',
      other: 'Other',
    },
    budgets: {
      small: 'Under $5,000',
      medium: '$5,000 – $15,000',
      large: '$15,000 – $50,000',
      enterprise: 'Over $50,000',
      discuss: 'Prefer to discuss',
    },
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
