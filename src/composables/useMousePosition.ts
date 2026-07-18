/**
 * Posición normalizada del mouse (-0.5 a 0.5) para parallax global.
 */
import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const mouseX = ref(0)
  const mouseY = ref(0)
  const isInside = ref(false)

  function onMove(e: MouseEvent): void {
    mouseX.value = e.clientX / window.innerWidth - 0.5
    mouseY.value = e.clientY / window.innerHeight - 0.5
    isInside.value = true
  }

  function onLeave(): void {
    mouseX.value = 0
    mouseY.value = 0
    isInside.value = false
  }

  onMounted(() => {
    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMove)
    document.documentElement.removeEventListener('mouseleave', onLeave)
  })

  return { mouseX, mouseY, isInside }
}