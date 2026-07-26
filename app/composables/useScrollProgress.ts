/**
 * Progreso de scroll de la página (0–1), throttled con rAF.
 */
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)
const scrollY = ref(0)

let listeners = 0
let raf = 0

function measure(): void {
  raf = 0
  scrollY.value = window.scrollY
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? Math.min(scrollY.value / max, 1) : 0
}

function onScroll(): void {
  if (!raf) raf = requestAnimationFrame(measure)
}

export function useScrollProgress() {
  onMounted(() => {
    if (listeners === 0) {
      window.addEventListener('scroll', onScroll, { passive: true })
      measure()
    }
    listeners += 1
  })

  onUnmounted(() => {
    if (listeners === 0) return
    listeners -= 1
    if (listeners === 0) {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }
  })

  return { progress, scrollY }
}
