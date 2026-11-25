/**
 * Client reviews come from the ZeroDigitX work feed (`reviews`), the same
 * single source as the case studies. Only real words from the client, with
 * their permission; when there are none, the reviews block and its nav links
 * are hidden.
 */
import feed from '#zdx-work'
import type { WorkReview } from '#shared/types/work'
import { PHONE, PHONE_DISPLAY } from './identity'

export interface Review extends WorkReview {
  /** Project name, from the matching work item. */
  company: string
}

export const reviews: Review[] = (feed.reviews ?? []).map(review => ({
  ...review,
  company: feed.items.find(i => i.id === review.id)!.name,
}))

export const hasReviews = reviews.length > 0

export {
  ZERODIGITX_URL,
  ZERODIGITX_CONTACT_URL,
} from './identity'

export const ZERODIGITX_PHONE = `tel:${PHONE}`
export const ZERODIGITX_PHONE_DISPLAY = PHONE_DISPLAY
