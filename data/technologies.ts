/**
 * Grupos de tecnologías con logos y enlaces oficiales.
 * Ordenados por uso real en los proyectos del portafolio (suite TxBizFinder,
 * NavCo, INESA, etc.).
 */
import type { TechGroup } from '~/types'

export const techGroups: TechGroup[] = [
  {
    id: 'frontend',
    title: { es: 'Frontend y UI', en: 'Frontend & UI' },
    items: [
      { id: 'vue', name: 'Vue 3', url: 'https://vuejs.org', icon: 'vuedotjs', color: '4FC08D' },
      { id: 'nuxt', name: 'Nuxt', url: 'https://nuxt.com', icon: 'nuxt', color: '00DC82' },
      { id: 'typescript', name: 'TypeScript', url: 'https://www.typescriptlang.org', icon: 'typescript', color: '3178C6' },
      { id: 'tailwind', name: 'Tailwind CSS', url: 'https://tailwindcss.com', icon: 'tailwindcss', color: '06B6D4' },
      { id: 'vite', name: 'Vite', url: 'https://vite.dev', icon: 'vite', color: '646CFF' },
      { id: 'vue-router', name: 'Vue Router', url: 'https://router.vuejs.org', icon: 'vuedotjs', color: '4FC08D' },
      { id: 'vue-i18n', name: 'Vue I18n', url: 'https://vue-i18n.intlify.dev', icon: 'vuedotjs', color: '4FC08D' },
      { id: 'echarts', name: 'ECharts', url: 'https://echarts.apache.org', icon: 'apacheecharts', color: 'AA344D' },
      { id: 'pwa', name: 'PWA', url: 'https://web.dev/explore/progressive-web-apps', icon: 'googlechrome', color: '4285F4' },
    ],
  },
  {
    id: 'backend',
    title: { es: 'Backend y APIs', en: 'Backend & APIs' },
    items: [
      { id: 'python', name: 'Python', url: 'https://www.python.org', icon: 'python', color: '3776AB' },
      { id: 'fastapi', name: 'FastAPI', url: 'https://fastapi.tiangolo.com', icon: 'fastapi', color: '009688' },
      { id: 'supabase', name: 'Supabase', url: 'https://supabase.com', icon: 'supabase', color: '3FCF8E' },
      { id: 'postgresql', name: 'PostgreSQL', url: 'https://www.postgresql.org', icon: 'postgresql', color: '4169E1' },
      { id: 'postgis', name: 'PostGIS', url: 'https://postgis.net', icon: 'postgresql', color: '336791' },
      { id: 'resend', name: 'Resend', url: 'https://resend.com', icon: 'resend', color: '000000' },
      { id: 'nodejs', name: 'Node.js', url: 'https://nodejs.org', icon: 'nodedotjs', color: '339933' },
    ],
  },
  {
    id: 'data',
    title: { es: 'Datos, Mapas y ML', en: 'Data, Maps & ML' },
    items: [
      { id: 'maplibre', name: 'MapLibre', url: 'https://maplibre.org', icon: 'maplibre', color: '3BB2D0' },
      { id: 'polars', name: 'Polars', url: 'https://pola.rs', icon: 'polars', color: '0075FF' },
      { id: 'scikit-learn', name: 'scikit-learn', url: 'https://scikit-learn.org', icon: 'scikitlearn', color: 'F7931E' },
      { id: 'openfreemap', name: 'OpenFreeMap', url: 'https://openfreemap.org', icon: 'openstreetmap', color: '7EBC6F' },
    ],
  },
  {
    id: 'devops',
    title: { es: 'DevOps y Despliegue', en: 'DevOps & Deployment' },
    items: [
      { id: 'git', name: 'Git', url: 'https://git-scm.com', icon: 'git', color: 'F05032' },
      { id: 'github', name: 'GitHub', url: 'https://github.com', icon: 'github', color: '181717' },
      { id: 'github-actions', name: 'GitHub Actions', url: 'https://github.com/features/actions', icon: 'githubactions', color: '2088FF' },
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
