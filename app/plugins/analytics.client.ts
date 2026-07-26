/**
 * Google Analytics 4 for mariosalvarez.com
 *
 * Enable with: NUXT_PUBLIC_GA_ID=G-XXXXXXXXXX  (Vercel env)
 */
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const id = String(config.public.gaId || '').trim()
  if (!id || !id.startsWith('G-')) return

  const w = window as Window & {
    dataLayer?: IArguments[]
    gtag?: (...args: unknown[]) => void
  }

  w.dataLayer = w.dataLayer || []
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments as unknown as IArguments)
  }
  w.gtag('js', new Date())
  w.gtag('config', id, {
    anonymize_ip: true,
    send_page_view: true,
  })

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`,
        async: true,
      },
    ],
  })

  const router = useRouter()
  router.afterEach((to) => {
    w.gtag?.('config', id, {
      page_path: to.fullPath,
      anonymize_ip: true,
    })
  })
})
