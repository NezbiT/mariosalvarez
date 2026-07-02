/**
 * Progreso de scroll de la página (0–1) para barra y parallax.
 */
import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollProgress() {
  const progress = ref(0)
  const scrollY = ref(0)

  function onScroll(): void {
    scrollY.value = window.scrollY
    const max = document.documentElement.scrollHeight - window.innerHeight
    progress.value = max > 0 ? Math.min(scrollY.value / max, 1) : 0
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { progress, scrollY }
}