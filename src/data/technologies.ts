/**
 * Grupos de tecnologías del stack de Mario Alvarez.
 *
 * Qué hace:
 * - Agrupa herramientas por categoría (frontend, backend, datos, industrial)
 * - Provee títulos bilingües para la sección de tecnologías del portafolio
 *
 * Por qué existe:
 * - La sección AppTechnologies solo renderiza; aquí vive el conocimiento técnico
 *
 * Cómo funciona:
 * - Cada TechGroup tiene id único, título ES/EN y lista de items (strings)
 */
import type { TechGroup } from '../types'

export const techGroups: TechGroup[] = [
  {
    id: 'frontend',
    title: {
      es: 'Frontend y UI',
      en: 'Frontend & UI',
    },
    items: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vue I18n', 'Vue Router', 'PWA'],
  },
  {
    id: 'backend',
    title: {
      es: 'Backend y APIs',
      en: 'Backend & APIs',
    },
    items: ['Node.js', 'Python', 'FastAPI', 'REST', 'GraphQL', 'PostgreSQL'],
  },
  {
    id: 'data',
    title: {
      es: 'Datos e Integración',
      en: 'Data & Integration',
    },
    items: ['ETL', 'InfluxDB', 'MQTT', 'SCADA', 'Mapbox', 'Grafana'],
  },
  {
    id: 'industrial',
    title: {
      es: 'Dominio Industrial',
      en: 'Industrial Domain',
    },
    items: [
      'Rope Access',
      'Refinería',
      'Permisos TCEQ/EPA',
      'Houston Ship Channel',
      'Offshore',
      'Cumplimiento ambiental',
    ],
  },
  {
    id: 'devops',
    title: {
      es: 'DevOps y Despliegue',
      en: 'DevOps & Deployment',
    },
    items: ['Git', 'GitHub', 'Vercel', 'Sentry', 'Docker', 'CI/CD'],
  },
]

/**
 * ### Cómo ejecutar este archivo
 * Importar desde AppTechnologies.vue: `import { techGroups } from '../data/technologies'`
 *
 * ### Qué aprendí en este archivo
 * - Agrupar skills por dominio comunica mejor el perfil híbrido campo + código
 * - Separar "dominio industrial" de "stack técnico" refleja la propuesta de valor única
 */