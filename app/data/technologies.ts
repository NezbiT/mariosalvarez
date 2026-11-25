/**
 * Technologies Mario has shipped with, taken from his own GitHub repos
 * (github.com/NezbiT, forks excluded): GitHub language stats plus the
 * dependencies in each repo's package.json, pyproject.toml, requirements.txt,
 * Dockerfile/docker-compose, wrangler, vercel/render configs and workflows.
 * Each group lists, in a comment, the repos that back it.
 *
 * `icon` is a Simple Icons slug (cdn.simpleicons.org); omit it when the tool
 * has no Simple Icons logo.
 */
import type { TechGroup } from '#shared/types'

export const techGroups: TechGroup[] = [
  {
    // GitHub language stats across own repos.
    id: 'languages',
    title: { es: 'Lenguajes', en: 'Languages' },
    items: [
      { id: 'python', name: 'Python', url: 'https://www.python.org', icon: 'python', color: '3776AB' },
      { id: 'typescript', name: 'TypeScript', url: 'https://www.typescriptlang.org', icon: 'typescript', color: '3178C6' },
      { id: 'javascript', name: 'JavaScript', url: 'https://developer.mozilla.org/docs/Web/JavaScript', icon: 'javascript', color: 'F7DF1E' },
      { id: 'rust', name: 'Rust', url: 'https://www.rust-lang.org', icon: 'rust', color: '000000' }, // pyron, texas-biz-finder
      { id: 'sql', name: 'SQL · PL/pgSQL', url: 'https://www.postgresql.org/docs/current/plpgsql.html', icon: 'postgresql', color: '4169E1' }, // navcosolutions, permitradar-houston, crm-fernando, coffee-store
      { id: 'bash', name: 'Bash', url: 'https://www.gnu.org/software/bash/', icon: 'gnubash', color: '4EAA25' }, // rackwatch, omarchy-*, config-files
    ],
  },
  {
    // 17 Nuxt repos, 14 Vue, 21 Tailwind; React in radarreviewtech, SvelteKit in readycdl, Astro in familyappliancefurniture.com.
    id: 'frontend',
    title: { es: 'Frontend y UI', en: 'Frontend & UI' },
    items: [
      { id: 'vue', name: 'Vue 3', url: 'https://vuejs.org', icon: 'vuedotjs', color: '4FC08D' },
      { id: 'nuxt', name: 'Nuxt', url: 'https://nuxt.com', icon: 'nuxt', color: '00DC82' },
      { id: 'nuxt-ui', name: 'Nuxt UI', url: 'https://ui.nuxt.com', icon: 'nuxt', color: '00DC82' },
      { id: 'react', name: 'React', url: 'https://react.dev', icon: 'react', color: '61DAFB' },
      { id: 'tanstack', name: 'TanStack Start', url: 'https://tanstack.com/start', icon: 'tanstack', color: 'FF4154' },
      { id: 'svelte', name: 'SvelteKit', url: 'https://svelte.dev', icon: 'svelte', color: 'FF3E00' },
      { id: 'astro', name: 'Astro', url: 'https://astro.build', icon: 'astro', color: 'BC52EE' },
      { id: 'tailwind', name: 'Tailwind CSS', url: 'https://tailwindcss.com', icon: 'tailwindcss', color: '06B6D4' },
      { id: 'vite', name: 'Vite', url: 'https://vite.dev', icon: 'vite', color: '646CFF' },
      { id: 'pinia', name: 'Pinia', url: 'https://pinia.vuejs.org', icon: 'pinia', color: 'FFD859' },
      { id: 'vuetify', name: 'Vuetify', url: 'https://vuetifyjs.com', icon: 'vuetify', color: '1867C0' },
      { id: 'stylex', name: 'StyleX', url: 'https://stylexjs.com' },
      { id: 'pwa', name: 'PWA', url: 'https://web.dev/explore/progressive-web-apps', icon: 'pwa', color: '5A0FC8' },
    ],
  },
  {
    // FastAPI in 8 repos, Pydantic in 6; Express/Socket.IO/Hono for Node services.
    id: 'backend',
    title: { es: 'Backend y APIs', en: 'Backend & APIs' },
    items: [
      { id: 'fastapi', name: 'FastAPI', url: 'https://fastapi.tiangolo.com', icon: 'fastapi', color: '009688' },
      { id: 'pydantic', name: 'Pydantic', url: 'https://docs.pydantic.dev', icon: 'pydantic', color: 'E92063' },
      { id: 'sqlalchemy', name: 'SQLAlchemy · SQLModel', url: 'https://www.sqlalchemy.org', icon: 'sqlalchemy', color: 'D71F00' },
      { id: 'jinja', name: 'Jinja', url: 'https://jinja.palletsprojects.com', icon: 'jinja', color: 'B41717' },
      { id: 'nodejs', name: 'Node.js', url: 'https://nodejs.org', icon: 'nodedotjs', color: '5FA04E' },
      { id: 'express', name: 'Express', url: 'https://expressjs.com', icon: 'express', color: '000000' },
      { id: 'hono', name: 'Hono', url: 'https://hono.dev', icon: 'hono', color: 'E36002' },
      { id: 'socketio', name: 'Socket.IO', url: 'https://socket.io', icon: 'socketdotio', color: '010101' },
      { id: 'better-auth', name: 'Better Auth', url: 'https://www.better-auth.com', icon: 'betterauth', color: '000000' },
      { id: 'clerk', name: 'Clerk', url: 'https://clerk.com', icon: 'clerk', color: '6C47FF' },
      { id: 'resend', name: 'Resend', url: 'https://resend.com', icon: 'resend', color: '000000' },
    ],
  },
  {
    // Supabase/Postgres in 8 repos, PostGIS in channelwatch, D1 in zerodigitx/sweetheartdaycare/zx-studio,
    // DuckDB + Polars in texas-biz-finder, MongoDB in prospects_online/pyron, Redis in pyron, Neon in crm-fernando.
    id: 'data',
    title: { es: 'Bases de datos y datos', en: 'Databases & Data' },
    items: [
      { id: 'postgresql', name: 'PostgreSQL', url: 'https://www.postgresql.org', icon: 'postgresql', color: '4169E1' },
      { id: 'postgis', name: 'PostGIS', url: 'https://postgis.net', icon: 'postgresql', color: '336791' },
      { id: 'supabase', name: 'Supabase', url: 'https://supabase.com', icon: 'supabase', color: '3FCF8E' },
      { id: 'neon', name: 'Neon', url: 'https://neon.tech', icon: 'neon', color: '00E599' },
      { id: 'sqlite', name: 'SQLite · Cloudflare D1', url: 'https://www.sqlite.org', icon: 'sqlite', color: '003B57' },
      { id: 'duckdb', name: 'DuckDB', url: 'https://duckdb.org', icon: 'duckdb', color: 'FFF000' },
      { id: 'mongodb', name: 'MongoDB', url: 'https://www.mongodb.com', icon: 'mongodb', color: '47A248' },
      { id: 'redis', name: 'Redis', url: 'https://redis.io', icon: 'redis', color: 'FF4438' },
      { id: 'polars', name: 'Polars', url: 'https://pola.rs', icon: 'polars', color: '0075FF' },
      { id: 'numpy', name: 'NumPy', url: 'https://numpy.org', icon: 'numpy', color: '4DABCF' },
      { id: 'scikit-learn', name: 'scikit-learn', url: 'https://scikit-learn.org', icon: 'scikitlearn', color: 'F7931E' },
    ],
  },
  {
    // MapLibre in 5 Texas data repos; ECharts, Chart.js, ApexCharts, Recharts across dashboards.
    id: 'maps',
    title: { es: 'Mapas y gráficas', en: 'Maps & Charts' },
    items: [
      { id: 'maplibre', name: 'MapLibre', url: 'https://maplibre.org', icon: 'maplibre', color: '396CB2' },
      { id: 'openstreetmap', name: 'OpenStreetMap · OpenFreeMap', url: 'https://openfreemap.org', icon: 'openstreetmap', color: '7EBC6F' },
      { id: 'echarts', name: 'ECharts', url: 'https://echarts.apache.org', icon: 'apacheecharts', color: 'AA344D' },
      { id: 'chartjs', name: 'Chart.js', url: 'https://www.chartjs.org', icon: 'chartdotjs', color: 'FF6384' },
      { id: 'apexcharts', name: 'ApexCharts', url: 'https://apexcharts.com' },
      { id: 'recharts', name: 'Recharts', url: 'https://recharts.org' },
    ],
  },
  {
    // Claude API in chequeclaro; local Ollama models in readycdl.
    id: 'ai',
    title: { es: 'IA', en: 'AI' },
    items: [
      { id: 'claude', name: 'Claude API', url: 'https://www.anthropic.com/api', icon: 'claude', color: 'D97757' },
      { id: 'ollama', name: 'Ollama', url: 'https://ollama.com', icon: 'ollama', color: '000000' },
    ],
  },
  {
    // pytest in 6 repos, Vitest in 3, Playwright in 4, Storybook in 2, ESLint in 5, Ruff in 3.
    id: 'quality',
    title: { es: 'Pruebas y calidad', en: 'Testing & Quality' },
    items: [
      { id: 'pytest', name: 'pytest', url: 'https://pytest.org', icon: 'pytest', color: '0A9EDC' },
      { id: 'vitest', name: 'Vitest', url: 'https://vitest.dev', icon: 'vitest', color: '6E9F18' },
      { id: 'playwright', name: 'Playwright', url: 'https://playwright.dev' },
      { id: 'storybook', name: 'Storybook', url: 'https://storybook.js.org', icon: 'storybook', color: 'FF4785' },
      { id: 'eslint', name: 'ESLint', url: 'https://eslint.org', icon: 'eslint', color: '4B32C3' },
      { id: 'ruff', name: 'Ruff', url: 'https://docs.astral.sh/ruff/', icon: 'ruff', color: 'D7FF64' },
      { id: 'prettier', name: 'Prettier', url: 'https://prettier.io', icon: 'prettier', color: 'F7B93E' },
    ],
  },
  {
    // Actions in 10 repos, Vercel 8, Render 7, Cloudflare Workers 6, Docker 6, Sentry 3;
    // Prometheus/Grafana/Mosquitto in rackwatch; Arch Linux + Hyprland in omarchy-* configs.
    id: 'devops',
    title: { es: 'DevOps e infraestructura', en: 'DevOps & Infrastructure' },
    items: [
      { id: 'git', name: 'Git', url: 'https://git-scm.com', icon: 'git', color: 'F05032' },
      { id: 'github-actions', name: 'GitHub Actions', url: 'https://github.com/features/actions', icon: 'githubactions', color: '2088FF' },
      { id: 'docker', name: 'Docker', url: 'https://www.docker.com', icon: 'docker', color: '2496ED' },
      { id: 'cloudflare', name: 'Cloudflare Workers · Pages', url: 'https://workers.cloudflare.com', icon: 'cloudflareworkers', color: 'F38020' },
      { id: 'vercel', name: 'Vercel', url: 'https://vercel.com', icon: 'vercel', color: '000000' },
      { id: 'render', name: 'Render', url: 'https://render.com', icon: 'render', color: '000000' },
      { id: 'sentry', name: 'Sentry', url: 'https://sentry.io', icon: 'sentry', color: '362D59' },
      { id: 'prometheus', name: 'Prometheus', url: 'https://prometheus.io', icon: 'prometheus', color: 'E6522C' },
      { id: 'grafana', name: 'Grafana', url: 'https://grafana.com', icon: 'grafana', color: 'F46800' },
      { id: 'mqtt', name: 'MQTT · Mosquitto', url: 'https://mosquitto.org', icon: 'eclipsemosquitto', color: '3C5280' },
      { id: 'archlinux', name: 'Arch Linux · Hyprland', url: 'https://archlinux.org', icon: 'archlinux', color: '1793D1' },
    ],
  },
]

/** Simple Icons CDN logo URL. */
export function techLogoUrl(item: { icon: string; color?: string }): string {
  return `https://cdn.simpleicons.org/${item.icon}/${item.color ?? '000000'}`
}

/** Near-black logos disappear on the dark theme; TechBadge inverts them there. */
export function isInkLogo(color: string | undefined): boolean {
  const hex = color ?? '000000'
  const [r, g, b] = [0, 2, 4].map(i => Number.parseInt(hex.slice(i, i + 2), 16) / 255)
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b! < 0.12
}
