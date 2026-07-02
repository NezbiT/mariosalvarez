/**
 * Composable para revelar elementos al entrar en el viewport.
 */
import { ref, watch, onUnmounted, type Ref } from 'vue'

export function useScrollReveal(threshold = 0.15): {
  target: Ref<HTMLElement | null>
  isVisible: Ref<boolean>
} {
  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  let observer: IntersectionObserver | null = null

  watch(
    target,
    (el) => {
      observer?.disconnect()
      if (!el) return

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            isVisible.value = true
            observer?.disconnect()
          }
        },
        { threshold, rootMargin: '0px 0px -40px 0px' },
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

/**
 * ### Cómo ejecutar este archivo
 * const { target, isVisible } = useScrollReveal(); ref="target" en el template.
 *
 * ### Qué aprendí en este archivo
 * - watch sobre template ref conecta el observer cuando el DOM está listo
 */