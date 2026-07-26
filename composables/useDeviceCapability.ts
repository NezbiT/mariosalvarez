/**
 * Detecta capacidades del dispositivo para efectos pesados.
 * SSR-safe: defaults conservative until client hydrate.
 */
import { ref, onMounted } from 'vue'

const isMobile = ref(false)
const isReducedMotion = ref(false)
const isHighRes = ref(false)
const enableHeavyEffects = ref(false)

let initialized = false

function refresh(): void {
  if (!import.meta.client) return
  isMobile.value = window.matchMedia('(max-width: 768px)').matches
  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  isHighRes.value = window.matchMedia('(min-width: 2560px)').matches
  const coarse = window.matchMedia('(pointer: coarse)').matches
  enableHeavyEffects.value = !isMobile.value && !isReducedMotion.value && !coarse
}

export function useDeviceCapability() {
  onMounted(() => {
    if (!initialized) {
      refresh()
      window.matchMedia('(max-width: 768px)').addEventListener('change', refresh)
      window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', refresh)
      initialized = true
    } else {
      refresh()
    }
  })

  return { isMobile, isReducedMotion, isHighRes, enableHeavyEffects }
}
