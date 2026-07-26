/**
 * Posición normalizada del mouse (-0.5 a 0.5), throttled con rAF.
 * No suscribe listeners si los efectos pesados están desactivados.
 */
import { ref, onMounted, onUnmounted } from 'vue'
import { useDeviceCapability } from './useDeviceCapability'

const mouseX = ref(0)
const mouseY = ref(0)
const isInside = ref(false)

let listeners = 0
let raf = 0
let pendingX = 0
let pendingY = 0
let dirty = false

function flush(): void {
  raf = 0
  if (!dirty) return
  dirty = false
  mouseX.value = pendingX
  mouseY.value = pendingY
}

function onMove(e: MouseEvent): void {
  pendingX = e.clientX / window.innerWidth - 0.5
  pendingY = e.clientY / window.innerHeight - 0.5
  isInside.value = true
  dirty = true
  if (!raf) raf = requestAnimationFrame(flush)
}

function onLeave(): void {
  pendingX = 0
  pendingY = 0
  mouseX.value = 0
  mouseY.value = 0
  isInside.value = false
  dirty = false
}

export function useMousePosition() {
  const { enableHeavyEffects } = useDeviceCapability()

  onMounted(() => {
    if (!enableHeavyEffects.value) return
    if (listeners === 0) {
      window.addEventListener('mousemove', onMove, { passive: true })
      document.documentElement.addEventListener('mouseleave', onLeave)
    }
    listeners += 1
  })

  onUnmounted(() => {
    if (listeners === 0) return
    listeners -= 1
    if (listeners === 0) {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }
  })

  return { mouseX, mouseY, isInside }
}
