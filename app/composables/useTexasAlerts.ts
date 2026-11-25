/**
 * Active National Weather Service alerts for Texas, mapped to county FIPS.
 *
 * - Prerender: fetched once during `nuxt generate`, so the static HTML ships a
 *   real count (the build-time snapshot).
 * - Client: refreshed on mount and every 5 minutes while the tab is visible.
 *   A failed refresh keeps the last real data; nothing is ever invented.
 *
 * Source: https://api.weather.gov/alerts/active?area=TX (GeoJSON, CORS *).
 * Counties come from `properties.geocode.SAME` ("048201" → FIPS "48201").
 */
export const SEVERITIES = ['Extreme', 'Severe', 'Moderate', 'Minor', 'Unknown'] as const
export type Severity = (typeof SEVERITIES)[number]

export interface TexasAlerts {
  /** Active alerts with status "Actual". */
  total: number
  /** ISO timestamp the NWS stamped on the collection. */
  updated: string
  /** Highest severity per Texas county FIPS. */
  counties: Record<string, Severity>
}

interface NwsAlertCollection {
  updated?: string
  features?: {
    properties?: {
      status?: string
      severity?: string
      geocode?: { SAME?: string[] }
    }
  }[]
}

const ENDPOINT = 'https://api.weather.gov/alerts/active?area=TX'
const USER_AGENT = 'mariosalvarez.com (hello@zerodigitx.com)'
const REFRESH_MS = 5 * 60 * 1000

function summarize(collection: NwsAlertCollection): TexasAlerts {
  const counties: Record<string, Severity> = {}
  let total = 0
  for (const feature of collection.features ?? []) {
    const props = feature.properties
    if (props?.status !== 'Actual') continue
    total++
    const severity: Severity = SEVERITIES.find(s => s === props.severity) ?? 'Unknown'
    for (const same of props.geocode?.SAME ?? []) {
      if (!/^048\d{3}$/.test(same)) continue
      const fips = same.slice(1)
      const current = counties[fips]
      if (!current || SEVERITIES.indexOf(severity) < SEVERITIES.indexOf(current)) counties[fips] = severity
    }
  }
  return { total, updated: collection.updated ?? new Date().toISOString(), counties }
}

async function fetchTexasAlerts(): Promise<TexasAlerts> {
  const collection = await $fetch<NwsAlertCollection>(ENDPOINT, {
    headers: import.meta.server
      ? { 'User-Agent': USER_AGENT, Accept: 'application/geo+json' }
      : { Accept: 'application/geo+json' },
    timeout: 10_000,
  })
  return summarize(collection)
}

export function useTexasAlerts() {
  const { data: snapshot } = useAsyncData(
    'tx-nws-alerts',
    () => fetchTexasAlerts().catch(() => null),
    { default: () => null },
  )

  const live = ref<TexasAlerts | null>(null)
  const alerts = computed(() => live.value ?? snapshot.value)
  /** 'live' once the browser has fetched; 'build' while showing the prerender snapshot. */
  const source = computed<'live' | 'build'>(() => (live.value ? 'live' : 'build'))

  let timer: number | undefined
  let lastFetch = 0

  async function refresh(): Promise<void> {
    lastFetch = Date.now()
    try {
      live.value = await fetchTexasAlerts()
    }
    catch {
      // Keep whatever real data we already have (live or build snapshot).
    }
  }

  function onVisibility(): void {
    if (document.visibilityState === 'visible' && Date.now() - lastFetch >= REFRESH_MS) void refresh()
  }

  onMounted(() => {
    void refresh()
    timer = window.setInterval(() => {
      if (document.visibilityState === 'visible') void refresh()
    }, REFRESH_MS)
    document.addEventListener('visibilitychange', onVisibility)
  })

  onBeforeUnmount(() => {
    window.clearInterval(timer)
    document.removeEventListener('visibilitychange', onVisibility)
  })

  return { alerts, source }
}
