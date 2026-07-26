/**
 * Revela al scrollear. En SSG el contenido arranca visible (SEO / no flash empty).
 * En client, anima solo elementos que entran desde fuera del viewport.
 */
import { ref, watch, onUnmounted, type Ref } from 'vue'

export function useScrollReveal(threshold = 0.08): {
  target: Ref<HTMLElement | null>
  isVisible: Ref<boolean>
} {
  // true by default so prerendered HTML is fully visible to crawlers
  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(true)

  let observer: IntersectionObserver | null = null

  watch(
    target,
    (el) => {
      observer?.disconnect()
      if (!el || !import.meta.client) return

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduced) {
        isVisible.value = true
        return
      }

      const rect = el.getBoundingClientRect()
      const alreadyInView = rect.top < window.innerHeight * 0.92
      if (alreadyInView) {
        isVisible.value = true
        return
      }

      isVisible.value = false
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            isVisible.value = true
            observer?.disconnect()
          }
        },
        { threshold, rootMargin: '0px 0px 80px 0px' },
      )
      observer.observe(el)
    },
    { flush: 'post' },
  )

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { target, isVisible }
}
