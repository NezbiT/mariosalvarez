/**
 * Loads the ZeroDigitX work feed once per build and exposes it as `#zdx-work`.
 *
 * Source: ZDX_WORK_URL when set. Otherwise the feed that pairs with this
 * deploy: Vercel builds of the `dev` branch (dev.mariosalvarez.com) read
 * https://dev.zerodigitx.com/work.json; everything else reads
 * https://zerodigitx.com/work.json. An http(s) URL is fetched; anything else
 * is read as a local file path, handy while editing the feed in zerodigitx.
 *
 * The build fails if the feed is unreachable or malformed: a deploy that would
 * publish an empty portfolio is worse than keeping the previous deploy live.
 */
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { addTemplate, addTypeTemplate, defineNuxtModule } from 'nuxt/kit'
import type { WorkFeed, WorkItem } from '../shared/types/work'

const DEFAULT_SOURCE = process.env.VERCEL_GIT_COMMIT_REF === 'dev'
  ? 'https://dev.zerodigitx.com/work.json'
  : 'https://zerodigitx.com/work.json'

function isBilingual(value: unknown): boolean {
  const v = value as Record<string, unknown> | null
  return typeof v?.en === 'string' && v.en.length > 0 && typeof v.es === 'string' && v.es.length > 0
}

function itemErrors(item: WorkItem, index: number): string[] {
  const at = `items[${index}] (${item?.id ?? 'no id'})`
  const errors: string[] = []
  if (typeof item?.id !== 'string' || !/^[a-z0-9-]+$/.test(item.id)) errors.push(`${at}.id must be kebab-case`)
  if (typeof item?.name !== 'string' || !item.name) errors.push(`${at}.name missing`)
  if (item?.url !== null && typeof item?.url !== 'string') errors.push(`${at}.url must be string or null`)
  if (item?.kind !== 'client' && item?.kind !== 'product') errors.push(`${at}.kind must be client|product`)
  if (item?.year !== null && typeof item?.year !== 'number') errors.push(`${at}.year must be number or null`)
  if (item?.image !== null && typeof item?.image !== 'string') errors.push(`${at}.image must be string or null`)
  for (const key of ['category', 'problem', 'solution', 'result'] as const) {
    if (!isBilingual(item?.[key])) errors.push(`${at}.${key} needs non-empty en/es`)
  }
  if (!Array.isArray(item?.highlights) || !item.highlights.every(isBilingual)) errors.push(`${at}.highlights must be en/es pairs`)
  if (!Array.isArray(item?.stack) || !item.stack.every(s => typeof s === 'string')) errors.push(`${at}.stack must be string[]`)
  return errors
}

async function loadFeed(source: string, rootDir: string): Promise<WorkFeed> {
  let raw: string
  if (/^https?:\/\//.test(source)) {
    const res = await fetch(source, { headers: { accept: 'application/json' } })
    if (!res.ok) throw new Error(`[zdx-work] ${source} responded ${res.status}`)
    raw = await res.text()
  }
  else {
    raw = await readFile(resolve(rootDir, source), 'utf8')
  }

  const feed = JSON.parse(raw) as WorkFeed
  if (feed?.version !== 1 || !Array.isArray(feed.items) || feed.items.length === 0) {
    throw new Error(`[zdx-work] ${source} is not a version 1 feed with items`)
  }
  const errors = feed.items.flatMap(itemErrors)
  const ids = feed.items.map(i => i.id)
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
  if (dupes.length) errors.push(`duplicate ids: ${[...new Set(dupes)].join(', ')}`)
  if (feed.reviews !== undefined && !Array.isArray(feed.reviews)) errors.push('reviews must be an array')
  for (const [i, review] of (feed.reviews ?? []).entries()) {
    const at = `reviews[${i}] (${review?.id ?? 'no id'})`
    if (!ids.includes(review?.id)) errors.push(`${at}.id must match an item id`)
    if (typeof review?.author !== 'string' || !review.author) errors.push(`${at}.author missing`)
    for (const key of ['quote', 'role'] as const) {
      if (!isBilingual(review?.[key])) errors.push(`${at}.${key} needs non-empty en/es`)
    }
  }
  if (errors.length) throw new Error(`[zdx-work] invalid feed from ${source}:\n  ${errors.join('\n  ')}`)
  return feed
}

export default defineNuxtModule({
  meta: { name: 'zdx-work' },
  async setup(_options, nuxt) {
    const source = process.env.ZDX_WORK_URL || DEFAULT_SOURCE
    // `nuxt prepare` (postinstall, typecheck) only generates types and builds
    // nothing, so it must not depend on the network: an unreachable feed there
    // is a warning. `nuxt dev`/`generate` still fail hard.
    const feed: WorkFeed = nuxt.options._prepare
      ? await loadFeed(source, nuxt.options.rootDir).catch((error: Error) => {
          console.warn(`${error.message} (ignored during nuxt prepare)`)
          return { version: 1, updatedAt: '', items: [], reviews: [] }
        })
      : await loadFeed(source, nuxt.options.rootDir)

    const template = addTemplate({
      filename: 'zdx-work.mjs',
      getContents: () => `export default ${JSON.stringify(feed)}\n`,
      write: true,
    })
    nuxt.options.alias['#zdx-work'] = template.dst

    addTypeTemplate({
      filename: 'types/zdx-work.d.ts',
      getContents: () => [
        `declare module '#zdx-work' {`,
        `  const feed: import('${resolve(nuxt.options.rootDir, 'shared/types/work')}').WorkFeed`,
        `  export default feed`,
        `}`,
        '',
      ].join('\n'),
    })

    // Case-study pages are prerendered from the feed.
    nuxt.hook('nitro:config', (config) => {
      config.prerender ||= {}
      config.prerender.routes = [
        ...(config.prerender.routes ?? []),
        ...feed.items.map(item => `/projects/${item.id}`),
      ]
    })
  },
})
