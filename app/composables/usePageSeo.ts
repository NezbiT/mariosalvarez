/**
 * Per-page head: title, description, Open Graph/Twitter, canonical, and the
 * hreflang pair (en, es, x-default → en) for the current URL.
 */
import type { MaybeRefOrGetter } from 'vue'
import { OG_IMAGE, SITE_URL } from '~/data/identity'
import { alternatesOf } from '~/i18n/routes'

export function absoluteUrl(path: string): string {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`
}

interface PageSeo {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  ogType?: 'website' | 'profile' | 'article'
  image?: string
  imageAlt?: MaybeRefOrGetter<string | undefined>
  /** schema.org nodes for this page (wrapped in one @graph). */
  jsonLd?: () => Record<string, unknown>[]
}

export function usePageSeo(seo: PageSeo): void {
  const route = useRoute()
  const { locale } = useI18n()
  const paths = alternatesOf(route.path)
  const url = absoluteUrl(paths[locale.value])
  const image = seo.image ?? OG_IMAGE

  useSeoMeta({
    title: seo.title,
    description: seo.description,
    ogTitle: seo.title,
    ogDescription: seo.description,
    ogUrl: url,
    ogType: seo.ogType ?? 'website',
    ogImage: image,
    ogImageAlt: seo.imageAlt,
    ogLocale: locale.value === 'es' ? 'es_US' : 'en_US',
    ogLocaleAlternate: locale.value === 'es' ? 'en_US' : 'es_US',
    twitterCard: 'summary_large_image',
    twitterTitle: seo.title,
    twitterDescription: seo.description,
    twitterImage: image,
    robots: 'index, follow',
  })

  useHead({
    link: [
      { rel: 'canonical', href: url },
      { rel: 'alternate', hreflang: 'en', href: absoluteUrl(paths.en) },
      { rel: 'alternate', hreflang: 'es', href: absoluteUrl(paths.es) },
      { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(paths.en) },
    ],
    script: seo.jsonLd
      ? [{
          type: 'application/ld+json',
          textContent: JSON.stringify({ '@context': 'https://schema.org', '@graph': seo.jsonLd() }),
        }]
      : [],
  })
}
