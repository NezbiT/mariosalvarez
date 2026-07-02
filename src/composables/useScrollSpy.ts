/**
 * Composable para resaltar la sección activa en el navbar al hacer scroll.
 *
 * Qué hace:
 * - Observa secciones por ID y actualiza activeSection reactivamente
 *
 * Por qué existe:
 * - Feedback visual de dónde está el usuario en la SPA de una sola página
 *
 * Cómo funciona:
 * 1. IntersectionObserver con rootMargin centrado (-45% arriba/abajo)
 * 2. La sección más visible actualiza activeSection
 * 3. AppNavbar usa activeSection para estilos del enlace activo
 */
import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds: string[]) {
  const activeSection = ref(sectionIds[0] ?? 'hero')

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const visibleSections = new Map<string, number>()

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio)
          } else {
            visibleSections.delete(id)
          }
        })

        if (visibleSections.size > 0) {
          const best = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0]
          if (best) activeSection.value = best[0]
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer?.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { activeSection }
}

/**
 * ### Cómo ejecutar este archivo
 * const { activeSection } = useScrollSpy(['hero','projects','technologies','contact'])
 *
 * ### Qué aprendí en este archivo
 * - Scroll spy con intersection ratio elige la sección dominante en pantalla
 */