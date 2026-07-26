/**
 * Detecta capacidades del dispositivo para activar/desactivar efectos pesados.
 * Por defecto desactiva partículas/parallax en mobile, reduced-motion y
 * cuando el usuario pide “menos animaciones” vía media query.
 */
import { ref, onMounted } from 'vue'

const isMobile = ref(
  typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches,
)
const isReducedMotion = ref(
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
)
const isHighRes = ref(
  typeof window !== 'undefined' && window.matchMedia('(min-width: 2560px)').matches,
)
/** Efectos caros: partículas, cursor glow, tilt 3D, magnetic */
const enableHeavyEffects = ref(!isMobile.value && !isReducedMotion.value)

let initialized = false

function refresh(): void {
  if (typeof window === 'undefined') return
  isMobile.value = window.matchMedia('(max-width: 768px)').matches
  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  isHighRes.value = window.matchMedia('(min-width: 2560px)').matches
  // Also skip heavy effects on coarse pointers (touch laptops) for snappier UI
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
