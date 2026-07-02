/**
 * Catálogo de proyectos del portafolio de Mario Alvarez.
 *
 * Qué hace:
 * - Define los 4 proyectos industriales destacados con textos bilingües ES/EN
 * - Ordena por prioridad para mostrar primero los más relevantes
 *
 * Por qué existe:
 * - Separar datos de contenido de los componentes Vue facilita mantenimiento
 *   y futuras traducciones sin tocar la UI
 *
 * Cómo funciona:
 * - Cada proyecto implementa la interfaz Project de src/types/index.ts
 * - status 'live' muestra enlace al sitio; 'coming-soon' muestra badge de próximamente
 */
import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'texasbizfinder',
    title: {
      es: 'TexasBizFinder',
      en: 'TexasBizFinder',
    },
    shortDescription: {
      es: 'Directorio inteligente de negocios locales en Texas con búsqueda por ciudad y categoría.',
      en: 'Smart Texas local business directory with search by city and category.',
    },
    realUse: {
      es: 'Ayuda a empresas del Golfo de México a ser encontradas por clientes locales y contratistas industriales.',
      en: 'Helps Gulf Coast businesses get discovered by local customers and industrial contractors.',
    },
    longDescription: {
      es: 'Plataforma web que centraliza negocios de Texas con filtros por ubicación, industria y servicios. Diseñada para el ecosistema industrial del área de Houston, con SEO optimizado y experiencia móvil rápida. Actualmente en producción en txbizfinder.com.',
      en: 'Web platform that centralizes Texas businesses with filters by location, industry, and services. Built for the Houston-area industrial ecosystem with optimized SEO and fast mobile experience. Currently live at txbizfinder.com.',
    },
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    status: 'live',
    links: {
      site: 'https://www.txbizfinder.com',
      github: 'https://github.com/NezbiT',
    },
    priority: 1,
  },
  {
    id: 'inesa-institute',
    title: {
      es: 'INESA Institute',
      en: 'INESA Institute',
    },
    shortDescription: {
      es: 'Sitio institucional del Instituto de Evaluación Sensorial de Alimentos INESA~C.A. en Houston, TX.',
      en: 'Institutional website for the Food Sensory Evaluation Institute INESA~C.A. in Houston, TX.',
    },
    realUse: {
      es: 'Presenta servicios de evaluación sensorial, galería de cursos y contacto profesional para clientes del sector alimentario en Texas y Latinoamérica.',
      en: 'Showcases sensory evaluation services, course gallery, and professional contact for food industry clients in Texas and Latin America.',
    },
    longDescription: {
      es: 'SPA completa en Vue 3 con i18n trilingüe (ES/EN/FR), galería fotográfica, formulario de contacto, PWA instalable y monitoreo con Sentry en producción. Desplegada en Vercel en inesa.institute.',
      en: 'Full Vue 3 SPA with trilingual i18n (ES/EN/FR), photo gallery, contact form, installable PWA, and Sentry monitoring in production. Deployed on Vercel at inesa.institute.',
    },
    technologies: ['Vue 3', 'Vue Router', 'Vue I18n', 'Vite', 'PWA', 'Sentry', 'Vercel'],
    status: 'live',
    links: {
      site: 'https://inesa.institute',
      github: 'https://github.com/NezbiT',
    },
    priority: 2,
  },
  {
    id: 'permitradar-houston',
    title: {
      es: 'PermitRadar Houston',
      en: 'PermitRadar Houston',
    },
    shortDescription: {
      es: 'Monitor de permisos de construcción e industrial en el área metropolitana de Houston.',
      en: 'Construction and industrial permit monitor for the Houston metro area.',
    },
    realUse: {
      es: 'Permite a contratistas y empresas de rope access anticipar oportunidades de trabajo según permisos nuevos.',
      en: 'Lets contractors and rope access teams anticipate job opportunities from newly filed permits.',
    },
    longDescription: {
      es: 'Herramienta de inteligencia de datos que agrega permisos públicos de Houston y municipios cercanos. Incluye alertas por tipo de obra, mapa interactivo y exportación para análisis comercial. Conecta el mundo de la construcción industrial con datos accionables.',
      en: 'Data intelligence tool aggregating public permits from Houston and nearby municipalities. Features alerts by project type, interactive map, and export for business analysis. Bridges industrial construction with actionable data.',
    },
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Vue 3', 'Mapbox'],
    status: 'coming-soon',
    links: {
      github: 'https://github.com/NezbiT',
    },
    priority: 3,
  },
  {
    id: 'channelwatch-laporte',
    title: {
      es: 'ChannelWatch La Porte',
      en: 'ChannelWatch La Porte',
    },
    shortDescription: {
      es: 'Seguimiento de condiciones del canal de navegación y actividad portuaria en La Porte, TX.',
      en: 'Navigation channel conditions and port activity tracking in La Porte, TX.',
    },
    realUse: {
      es: 'Apoya a equipos offshore y logística a planificar embarcaciones según mareas, tráfico y restricciones del canal.',
      en: 'Helps offshore crews and logistics plan vessel movements based on tides, traffic, and channel restrictions.',
    },
    longDescription: {
      es: 'Dashboard operativo para el corredor industrial de La Porte y Houston Ship Channel. Combina datos de mareas, avisos a la navegación y actividad portuaria en una vista unificada. Pensado para operadores que necesitan información confiable antes de movilizar personal o equipos.',
      en: 'Operational dashboard for the La Porte and Houston Ship Channel industrial corridor. Combines tide data, navigation notices, and port activity in a unified view. Built for operators who need reliable info before mobilizing crews or equipment.',
    },
    technologies: ['Vue 3', 'TypeScript', 'Node.js', 'REST APIs', 'Chart.js'],
    status: 'coming-soon',
    links: {
      github: 'https://github.com/NezbiT',
    },
    priority: 4,
  },
  {
    id: 'emissions-sentinel',
    title: {
      es: 'Emissions Sentinel',
      en: 'Emissions Sentinel',
    },
    shortDescription: {
      es: 'Monitoreo de emisiones y cumplimiento ambiental para plantas de refinería y petroquímica.',
      en: 'Emissions monitoring and environmental compliance for refinery and petrochemical plants.',
    },
    realUse: {
      es: 'Traduce experiencia de campo en refinería en alertas tempranas de desviaciones de emisiones y reportes regulatorios.',
      en: 'Translates refinery field experience into early alerts on emission deviations and regulatory reporting.',
    },
    longDescription: {
      es: 'Sistema en desarrollo que integrará sensores, registros SCADA y normativas TCEQ/EPA para detectar anomalías antes de multas o paros. Incluirá paneles por unidad de proceso, historial de eventos y exportación para auditorías. Próximamente disponible.',
      en: 'System in development that will integrate sensors, SCADA logs, and TCEQ/EPA regulations to detect anomalies before fines or shutdowns. Will include process unit dashboards, event history, and audit exports. Coming soon.',
    },
    technologies: ['Python', 'InfluxDB', 'Grafana', 'MQTT', 'Vue 3'],
    status: 'coming-soon',
    links: {
      github: 'https://github.com/NezbiT',
    },
    priority: 5,
  },
]

/**
 * ### Cómo ejecutar este archivo
 * Importar `projects` desde composables o componentes: `import { projects } from '@/data/projects'`
 *
 * ### Qué aprendí en este archivo
 * - Mantener contenido bilingüe en la capa de datos, no en plantillas
 * - Usar prioridad numérica para ordenar sin depender del orden del array
 */