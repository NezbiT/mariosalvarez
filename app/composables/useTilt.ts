/**
 * Subtle 3D tilt that follows the pointer. Only for fine pointers with hover
 * and when the visitor hasn't asked for reduced motion; writes `--rx`/`--ry`
 * (degrees) on the element and leaves the transform to CSS.
 */
const MAX_DEG = 4

export function useTilt() {
  function onMove(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = event.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty('--rx', `${(-y * MAX_DEG).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * MAX_DEG).toFixed(2)}deg`)
  }

  function onLeave(event: PointerEvent): void {
    const el = event.currentTarget as HTMLElement
    el.style.removeProperty('--rx')
    el.style.removeProperty('--ry')
  }

  return { onMove, onLeave }
}
