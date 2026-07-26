/**
 * Revela elementos al entrar en el viewport — delays cortos para sensación de velocidad.
 */
import { ref, watch, onUnmounted, type Ref } from 'vue'
import { useDeviceCapability } from './useDeviceCapability'

export function useScrollReveal(threshold = 0.08): {
  target: Ref<HTMLElement | null>
  isVisible: Ref<boolean>
} {
  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  const { isReducedMotion } = useDeviceCapability()

  let observer: IntersectionObserver | null = null

  watch(
    target,
    (el) => {
      observer?.disconnect()
      if (!el) return

      // Instant for reduced motion — no “waiting for fade”
      if (isReducedMotion.value) {
        isVisible.value = true
        return
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            isVisible.value = true
            observer?.disconnect()
          }
        },
        // Reveal earlier so content is ready before the user finishes scrolling
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
