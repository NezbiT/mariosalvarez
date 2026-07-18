/**
 * Grupos de tecnologías con logos y enlaces oficiales.
 */
import type { TechGroup } from '../types'

export const techGroups: TechGroup[] = [
  {
    id: 'frontend',
    title: { es: 'Frontend y UI', en: 'Frontend & UI' },
    items: [
      { id: 'vue', name: 'Vue 3', url: 'https://vuejs.org', icon: 'vuedotjs', color: '4FC08D' },
      { id: 'typescript', name: 'TypeScript', url: 'https://www.typescriptlang.org', icon: 'typescript', color: '3178C6' },
      { id: 'tailwind', name: 'Tailwind CSS', url: 'https://tailwindcss.com', icon: 'tailwindcss', color: '06B6D4' },
      { id: 'vite', name: 'Vite', url: 'https://vite.dev', icon: 'vite', color: '646CFF' },
      { id: 'vue-i18n', name: 'Vue I18n', url: 'https://vue-i18n.intlify.dev', icon: 'vuedotjs', color: '4FC08D' },
      { id: 'vue-router', name: 'Vue Router', url: 'https://router.vuejs.org', icon: 'vuedotjs', color: '4FC08D' },
      { id: 'pwa', name: 'PWA', url: 'https://web.dev/explore/progressive-web-apps', icon: 'googlechrome', color: '4285F4' },
    ],
  },
  {
    id: 'backend',
    title: { es: 'Backend y APIs', en: 'Backend & APIs' },
    items: [
      { id: 'nodejs', name: 'Node.js', url: 'https://nodejs.org', icon: 'nodedotjs', color: '339933' },
      { id: 'python', name: 'Python', url: 'https://www.python.org', icon: 'python', color: '3776AB' },
      { id: 'fastapi', name: 'FastAPI', url: 'https://fastapi.tiangolo.com', icon: 'fastapi', color: '009688' },
      { id: 'rest', name: 'REST', url: 'https://developer.mozilla.org/en-US/docs/Glossary/REST', icon: 'openapiinitiative', color: '6BA539' },
      { id: 'graphql', name: 'GraphQL', url: 'https://graphql.org', icon: 'graphql', color: 'E10098' },
      { id: 'postgresql', name: 'PostgreSQL', url: 'https://www.postgresql.org', icon: 'postgresql', color: '4169E1' },
    ],
  },
  {
    id: 'data',
    title: { es: 'Datos e Integración', en: 'Data & Integration' },
    items: [
      { id: 'duckdb', name: 'DuckDB', url: 'https://duckdb.org', icon: 'duckdb', color: 'FFF000' },
      { id: 'polars', name: 'Polars', url: 'https://pola.rs', icon: 'polars', color: '0075FF' },
      { id: 'influxdb', name: 'InfluxDB', url: 'https://www.influxdata.com', icon: 'influxdb', color: '22ADF6' },
      { id: 'mapbox', name: 'Mapbox', url: 'https://www.mapbox.com', icon: 'mapbox', color: '000000' },
      { id: 'grafana', name: 'Grafana', url: 'https://grafana.com', icon: 'grafana', color: 'F46800' },
      { id: 'mqtt', name: 'MQTT', url: 'https://mqtt.org', icon: 'eclipsemosquitto', color: '3C5280' },
    ],
  },
  {
    id: 'devops',
    title: { es: 'DevOps y Despliegue', en: 'DevOps & Deployment' },
    items: [
      { id: 'git', name: 'Git', url: 'https://git-scm.com', icon: 'git', color: 'F05032' },
      { id: 'github', name: 'GitHub', url: 'https://github.com', icon: 'github', color: '181717' },
      { id: 'vercel', name: 'Vercel', url: 'https://vercel.com', icon: 'vercel', color: '000000' },
      { id: 'sentry', name: 'Sentry', url: 'https://sentry.io', icon: 'sentry', color: '362D59' },
      { id: 'docker', name: 'Docker', url: 'https://www.docker.com', icon: 'docker', color: '2496ED' },
      { id: 'cloudflare', name: 'Cloudflare', url: 'https://www.cloudflare.com', icon: 'cloudflare', color: 'F38020' },
    ],
  },
]

/** URL del logo en Simple Icons CDN */
export function techLogoUrl(item: { icon: string; color?: string }): string {
  const color = item.color ?? '000000'
  return `https://cdn.simpleicons.org/${item.icon}/${color}`
}