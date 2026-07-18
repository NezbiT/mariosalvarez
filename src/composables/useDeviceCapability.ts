/**
 * Detecta capacidades del dispositivo para activar/desactivar efectos pesados.
 */
import { ref, onMounted } from 'vue'

export function useDeviceCapability() {
  const isMobile = ref(
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches,
  )
  const isReducedMotion = ref(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const isHighRes = ref(
    typeof window !== 'undefined' && window.matchMedia('(min-width: 2560px)').matches,
  )
  const enableHeavyEffects = ref(!isMobile.value && !isReducedMotion.value)

  onMounted(() => {
    isMobile.value = window.matchMedia('(max-width: 768px)').matches
    isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    isHighRes.value = window.matchMedia('(min-width: 2560px)').matches
    enableHeavyEffects.value = !isMobile.value && !isReducedMotion.value
  })

  return { isMobile, isReducedMotion, isHighRes, enableHeavyEffects }
}