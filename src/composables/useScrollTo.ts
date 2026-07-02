/**
 * Composable para navegación suave entre secciones del portafolio.
 *
 * Qué hace:
 * - Desplaza la ventana hacia un elemento por ID de sección
 * - Compensa la altura del navbar fijo para que el título no quede oculto
 *
 * Por qué existe:
 * - Los enlaces del navbar y CTAs del hero usan anclas (#projects, #contact)
 * - scroll-behavior: smooth en CSS no compensa headers fijos
 *
 * Cómo funciona:
 * 1. Busca el elemento por id
 * 2. Calcula posición con offset del navbar (~80px)
 * 3. Llama window.scrollTo con behavior smooth
 */
import { ref, onMounted, onUnmounted } from 'vue'

const NAVBAR_OFFSET = 80

export function useScrollTo() {
  /** Desplaza suavemente hacia la sección indicada */
  function scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId)
    if (!element) return

    const top =
      element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET

    window.scrollTo({ top, behavior: 'smooth' })
  }

  /** Maneja clicks en enlaces internos sin recargar la página */
  function handleAnchorClick(event: MouseEvent, sectionId: string): void {
    event.preventDefault()
    scrollToSection(sectionId)
  }

  /** Cierra menú móvil al navegar (callback opcional del navbar) */
  function scrollAndClose(sectionId: string, closeMenu?: () => void): void {
    scrollToSection(sectionId)
    closeMenu?.()
  }

  return {
    scrollToSection,
    handleAnchorClick,
    scrollAndClose,
  }
}

/**
 * Composable auxiliar: detecta si el usuario ha hecho scroll (navbar sombra).
 */
export function useScrollDetection(threshold = 10) {
  const isScrolled = ref(false)

  function onScroll(): void {
    isScrolled.value = window.scrollY > threshold
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { isScrolled }
}

/**
 * ### Cómo ejecutar este archivo
 * Importar en AppNavbar y AppHero: `const { scrollToSection } = useScrollTo()`
 *
 * ### Qué aprendí en este archivo
 * - Compensar navbar fijo evita que el contenido quede bajo el header
 * - passive: true en scroll mejora rendimiento en móvil
 */