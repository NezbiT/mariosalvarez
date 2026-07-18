/**
 * Catálogo de proyectos del portafolio de Mario Alvarez.
 *
 * Qué hace:
 * - Define los proyectos destacados con textos bilingües ES/EN
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
      es: 'Plataforma web que centraliza negocios de Texas con filtros por ubicación, industria y servicios. Es el hub de la suite TxBizFinder Intelligence: leads de negocios, permisos, aire, emisiones, inundaciones y red eléctrica en un solo ecosistema. En producción en txbizfinder.com.',
      en: 'Web platform that centralizes Texas businesses with filters by location, industry, and services. It is the hub of the TxBizFinder Intelligence suite: business leads, permits, air, emissions, flood, and grid data in one ecosystem. Live at txbizfinder.com.',
    },
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite', 'FastAPI'],
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
    id: 'navcosolutions',
    title: {
      es: 'NavCo Solutions',
      en: 'NavCo Solutions',
    },
    shortDescription: {
      es: 'Sitio de servicios notariales bilingüe con agendamiento de citas en línea.',
      en: 'Bilingual notary services website with online appointment booking.',
    },
    realUse: {
      es: 'Clientes reales agendan citas notariales en línea y reciben confirmación por email; el negocio recibe el aviso al instante.',
      en: 'Real clients book notary appointments online and get email confirmations; the business is notified instantly.',
    },
    longDescription: {
      es: 'Sitio en producción para un negocio de servicios notariales en Texas. Agendamiento de citas guardado en Supabase, confirmaciones por email con Resend, i18n ES/EN y despliegue continuo en Vercel. En vivo en navcosolutions.com.',
      en: 'Production website for a Texas notary services business. Appointment booking stored in Supabase, email confirmations via Resend, ES/EN i18n, and continuous deployment on Vercel. Live at navcosolutions.com.',
    },
    technologies: ['Nuxt', 'Vue 3', 'TypeScript', 'Supabase', 'Resend', 'Vercel'],
    status: 'live',
    links: {
      site: 'https://www.navcosolutions.com',
      github: 'https://github.com/NezbiT',
    },
    priority: 3,
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
      es: 'Herramienta de inteligencia de datos que agrega permisos públicos de Houston. Mapa interactivo con heatmap y línea de tiempo, filtros por tipo de obra, tags, exportación CSV e ingesta semanal automatizada con GitHub Actions. Parte de la suite TxBizFinder en radar.txbizfinder.com.',
      en: 'Data intelligence tool aggregating Houston public permits. Interactive map with heatmap and time slider, filters by project type, tags, CSV export, and weekly automated ingest via GitHub Actions. Part of the TxBizFinder suite at radar.txbizfinder.com.',
    },
    technologies: ['Nuxt', 'Vue 3', 'TypeScript', 'Supabase', 'Python', 'MapLibre'],
    status: 'live',
    links: {
      site: 'https://radar.txbizfinder.com',
      github: 'https://github.com/NezbiT',
    },
    priority: 4,
  },
  {
    id: 'maphub-texas',
    title: {
      es: 'MapHub Texas',
      en: 'MapHub Texas',
    },
    shortDescription: {
      es: 'Mapa unificado de Texas con todas las capas de la suite TxBizFinder en una sola vista.',
      en: 'Unified Texas map with every TxBizFinder suite layer in a single view.',
    },
    realUse: {
      es: 'Un solo mapa para cruzar negocios, permisos, aire, emisiones, inundaciones y red eléctrica antes de tomar decisiones de campo.',
      en: 'One map to cross-reference businesses, permits, air, emissions, flood, and grid data before making field decisions.',
    },
    longDescription: {
      es: 'Hub cartográfico de la suite TxBizFinder Intelligence: capas FINDER, RADAR, CHANNEL, SENTINEL, FLOOD y POWER sobre un mapa MapLibre interactivo con toggles de filtro e i18n ES/EN. En map.txbizfinder.com.',
      en: 'Cartographic hub of the TxBizFinder Intelligence suite: FINDER, RADAR, CHANNEL, SENTINEL, FLOOD, and POWER layers on one interactive MapLibre map with filter toggles and ES/EN i18n. At map.txbizfinder.com.',
    },
    technologies: ['Nuxt', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'MapLibre'],
    status: 'live',
    links: {
      site: 'https://map.txbizfinder.com',
      github: 'https://github.com/NezbiT',
    },
    priority: 5,
  },
  {
    id: 'channelwatch-laporte',
    title: {
      es: 'ChannelWatch La Porte',
      en: 'ChannelWatch La Porte',
    },
    shortDescription: {
      es: 'Dashboard comunitario de datos ambientales públicos del Houston Ship Channel y La Porte, TX.',
      en: 'Community dashboard of public environmental data for the Houston Ship Channel and La Porte, TX.',
    },
    realUse: {
      es: 'Da a residentes y trabajadores del corredor industrial una vista clara de calidad del aire, eventos de emisión y facilidades cercanas.',
      en: 'Gives industrial-corridor residents and workers a clear view of air quality, emission events, and nearby facilities.',
    },
    longDescription: {
      es: 'Dashboard de transparencia con snapshot de AQI, monitores CAMS (Deer Park, La Porte, Shore Acres), eventos de emisión estilo TCEQ EER y capa de facilidades TRI, con fuentes y metodología documentadas en ES/EN. Parte de la suite TxBizFinder en channel.txbizfinder.com.',
      en: 'Transparency dashboard with AQI snapshot, CAMS monitors (Deer Park, La Porte, Shore Acres), TCEQ EER-style emission events, and a TRI facilities layer, with sources and methodology documented in ES/EN. Part of the TxBizFinder suite at channel.txbizfinder.com.',
    },
    technologies: ['Nuxt', 'Vue 3', 'TypeScript', 'MapLibre', 'FastAPI', 'PostGIS'],
    status: 'live',
    links: {
      site: 'https://channel.txbizfinder.com',
      github: 'https://github.com/NezbiT',
    },
    priority: 6,
  },
  {
    id: 'emissions-sentinel',
    title: {
      es: 'Emissions Sentinel',
      en: 'Emissions Sentinel',
    },
    shortDescription: {
      es: 'Detección de anomalías de energía y emisiones en Texas a partir de datos públicos.',
      en: 'Texas energy and emissions anomaly detection from public data.',
    },
    realUse: {
      es: 'Convierte datos públicos tipo EIA/TCEQ en señales accionables para anticipar desviaciones antes de que escalen.',
      en: 'Turns EIA/TCEQ-style public data into actionable signals to catch deviations before they escalate.',
    },
    longDescription: {
      es: 'Pipeline de datos con conectores a fuentes públicas (EIA, CAMPD, OpenAQ), detección de anomalías con scikit-learn y paneles con ECharts. API en FastAPI con Polars y persistencia en Supabase Postgres. Parte de la suite TxBizFinder en sentinel.txbizfinder.com.',
      en: 'Data pipeline with connectors to public sources (EIA, CAMPD, OpenAQ), anomaly detection with scikit-learn, and ECharts dashboards. FastAPI backend with Polars and Supabase Postgres persistence. Part of the TxBizFinder suite at sentinel.txbizfinder.com.',
    },
    technologies: ['Nuxt', 'ECharts', 'FastAPI', 'Polars', 'scikit-learn', 'Supabase'],
    status: 'live',
    links: {
      site: 'https://sentinel.txbizfinder.com',
      github: 'https://github.com/NezbiT',
    },
    priority: 7,
  },
  {
    id: 'powerpulse-texas',
    title: {
      es: 'PowerPulse Texas',
      en: 'PowerPulse Texas',
    },
    shortDescription: {
      es: 'Estado de la red eléctrica de Texas al estilo ERCOT: demanda, reservas y estrés regional.',
      en: 'ERCOT-style Texas grid awareness: demand, reserves, and regional stress.',
    },
    realUse: {
      es: 'Ayuda a cualquier texano a entender el estado de la red y anticipar alertas de demanda o cortes.',
      en: 'Helps any Texan understand grid conditions and anticipate demand alerts or outages.',
    },
    longDescription: {
      es: 'Panel de conciencia de red con demanda, reservas y estrés por región sobre un mapa interactivo MapLibre, con series de tiempo, i18n ES/EN y modo demo por defecto. Parte de la suite TxBizFinder en power.txbizfinder.com.',
      en: 'Grid awareness panel with demand, reserves, and regional stress on an interactive MapLibre map, with time series, ES/EN i18n, and demo mode by default. Part of the TxBizFinder suite at power.txbizfinder.com.',
    },
    technologies: ['Nuxt', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'MapLibre'],
    status: 'live',
    links: {
      site: 'https://power.txbizfinder.com',
      github: 'https://github.com/NezbiT',
    },
    priority: 8,
  },
  {
    id: 'floodguard-texas',
    title: {
      es: 'FloodGuard Texas',
      en: 'FloodGuard Texas',
    },
    shortDescription: {
      es: 'Conciencia de riesgo de inundación en Texas: búsqueda por ZIP y mapa interactivo.',
      en: 'Texas flood-risk awareness: ZIP lookup and interactive map.',
    },
    realUse: {
      es: 'Permite a personas y vecindarios consultar su nivel de riesgo de inundación antes de comprar, rentar o asegurar.',
      en: 'Lets people and neighborhoods check their flood-risk level before buying, renting, or insuring.',
    },
    longDescription: {
      es: 'Consulta de riesgo por código ZIP con zonas sobre mapa MapLibre/OpenFreeMap (sin API key), scores de demostración e i18n ES/EN. Parte de la suite TxBizFinder en flood.txbizfinder.com.',
      en: 'ZIP-code risk lookup with zones on a MapLibre/OpenFreeMap map (no API key), demo scores, and ES/EN i18n. Part of the TxBizFinder suite at flood.txbizfinder.com.',
    },
    technologies: ['Nuxt', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'MapLibre'],
    status: 'live',
    links: {
      site: 'https://flood.txbizfinder.com',
      github: 'https://github.com/NezbiT',
    },
    priority: 9,
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
