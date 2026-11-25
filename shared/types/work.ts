/**
 * Contract of the ZeroDigitX work feed (`https://zerodigitx.com/work.json`).
 * ZeroDigitX is the single source of truth for finished projects; this site
 * reads the feed at build time (modules/zdx-work.ts).
 */
import type { BilingualText } from './index'

export interface WorkItem {
  id: string
  name: string
  /** Live URL, or null when the project is not publicly deployed. */
  url: string | null
  kind: 'client' | 'product'
  category: BilingualText
  year: number | null
  problem: BilingualText
  solution: BilingualText
  result: BilingualText
  highlights: BilingualText[]
  stack: string[]
  /** Absolute URL of a 1440×900 screenshot, or null. */
  image: string | null
}

/**
 * A client's own words, published with their permission. `id` is the WorkItem
 * id of the project it refers to.
 */
export interface WorkReview {
  id: string
  quote: BilingualText
  author: string
  role: BilingualText
}

export interface WorkFeed {
  version: 1
  updatedAt: string
  items: WorkItem[]
  /** Optional: absent or empty means no published reviews. */
  reviews?: WorkReview[]
}
