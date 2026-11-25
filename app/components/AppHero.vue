<script setup lang="ts">
/**
 * Hero: the ZeroDigitX v3 dark scene (glow, dot grid, crimson beams, 3D X)
 * over a live map of Texas. Counties under an active NWS alert light up; the
 * X sits on Houston and, on scroll, flies into the navbar logo (transform
 * only). Parallax runs only with a fine pointer and without reduced motion.
 */
import { ZERODIGITX_CONTACT_URL } from '~/data/identity'
import { SEVERITIES } from '~/composables/useTexasAlerts'

const { t_ui, locale } = useI18n()
const { alerts, source } = useTexasAlerts()

const root = ref<HTMLElement | null>(null)
const xWrap = ref<HTMLElement | null>(null)
const docked = ref(false)

const beams = [
  { x: '14%', a: '29deg', o: 0.9, d: '0s' },
  { x: '38%', a: '29deg', o: 0.55, d: '1.6s' },
  { x: '66%', a: '29deg', o: 0.4, d: '3.1s' },
  { x: '24%', a: '142deg', o: 0.6, d: '0.8s' },
  { x: '56%', a: '142deg', o: 0.85, d: '2.3s' },
  { x: '86%', a: '142deg', o: 0.45, d: '4.0s' },
]

const legend = SEVERITIES.filter(s => s !== 'Unknown')

const caption = computed(() => {
  const data = alerts.value
  if (!data) return null
  const time = new Intl.DateTimeFormat(locale.value === 'es' ? 'es-US' : 'en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/Chicago',
    timeZoneName: 'short',
  }).format(new Date(data.updated))
  const template = source.value === 'live' ? t_ui.value.hero.mapLive : t_ui.value.hero.mapBuild
  return template.replace('{n}', String(data.total)).replace('{time}', time)
})

const alertCounties = computed(() => alerts.value?.counties ?? {})

// ── Pointer parallax ────────────────────────────────────────────
let lastX = 0
let lastY = 0
let raf = 0

function onMove(event: PointerEvent): void {
  lastX = event.clientX
  lastY = event.clientY
  const el = root.value
  if (!el || raf) return
  raf = requestAnimationFrame(() => {
    raf = 0
    const rect = el.getBoundingClientRect()
    if (!rect.width || !rect.height) return
    el.style.setProperty('--mx', ((lastX - rect.left) / rect.width - 0.5).toFixed(3))
    el.style.setProperty('--my', ((lastY - rect.top) / rect.height - 0.5).toFixed(3))
  })
}

function onLeave(): void {
  if (raf) cancelAnimationFrame(raf)
  raf = 0
  root.value?.style.setProperty('--mx', '0')
  root.value?.style.setProperty('--my', '0')
}

// ── X docks into the navbar logo on scroll ──────────────────────
let dockRaf = 0
let reduceMotion = false
let startRect: DOMRect | null = null

function visibleDock(): HTMLElement | null {
  for (const node of document.querySelectorAll<HTMLElement>('[data-logo-dock]')) {
    if (node.getClientRects().length > 0) return node
  }
  return null
}

function placeX(): void {
  dockRaf = 0
  const el = xWrap.value
  if (!el || reduceMotion || docked.value || !startRect) return
  if (window.scrollY < 2) {
    el.classList.remove('is-flying')
    el.style.cssText = ''
    return
  }
  const target = visibleDock()
  if (!target) return
  const dest = target.getBoundingClientRect()
  const travel = Math.max(window.innerHeight * 0.62, 280)
  const p = Math.min(1, window.scrollY / travel)
  const ease = 1 - (1 - p) ** 3
  const originTop = startRect.top
  const scale = startRect.width > 0 ? 1 + (dest.width / startRect.width - 1) * ease : 1
  if (!el.classList.contains('is-flying')) {
    el.classList.add('is-flying')
    Object.assign(el.style, {
      position: 'fixed',
      zIndex: '60',
      margin: '0',
      left: `${startRect.left}px`,
      top: `${originTop}px`,
      width: `${startRect.width}px`,
      transformOrigin: 'top left',
    })
  }
  const dx = (dest.left - startRect.left) * ease
  const dy = (dest.top - originTop) * ease
  el.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`
  el.style.opacity = p > 0.9 ? String(Math.max(0, 1 - (p - 0.9) / 0.1)) : ''
  if (p >= 1) {
    docked.value = true
    window.removeEventListener('scroll', onScrollDock)
  }
}

function onScrollDock(): void {
  if (dockRaf || reduceMotion || docked.value) return
  dockRaf = requestAnimationFrame(placeX)
}

onMounted(() => {
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const finePointer = window.matchMedia('(pointer: fine)').matches
  const el = root.value
  if (el && finePointer && !reduceMotion) {
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
  }
  if (reduceMotion) return
  if (window.scrollY > 24) {
    docked.value = true
    return
  }
  // Rect relative to the viewport at scrollY 0 (fixed positioning origin).
  startRect = xWrap.value?.getBoundingClientRect() ?? null
  window.addEventListener('scroll', onScrollDock, { passive: true })
})

onBeforeUnmount(() => {
  root.value?.removeEventListener('pointermove', onMove)
  root.value?.removeEventListener('pointerleave', onLeave)
  window.removeEventListener('scroll', onScrollDock)
  if (raf) cancelAnimationFrame(raf)
  if (dockRaf) cancelAnimationFrame(dockRaf)
})
</script>

<template>
  <section id="hero" ref="root" class="ms-hero" aria-labelledby="hero-title">
    <div class="ms-hero__bg" aria-hidden="true">
      <div class="ms-hero__glow" />
      <div class="ms-hero__dots" />
      <span
        v-for="(beam, i) in beams"
        :key="i"
        class="ms-hero__beam"
        :style="{ '--x': beam.x, '--a': beam.a, '--o': beam.o, '--d': beam.d }"
      />
      <div class="ms-hero__vignette" />
    </div>

    <div class="ms-hero__map">
      <TexasMap :counties="alertCounties" />
      <div class="ms-hero__x-anchor">
        <div ref="xWrap" class="ms-hero__xwrap" :class="{ 'is-docked': docked }">
          <XMark class="ms-hero__xghost" :depth="false" />
          <XMark class="ms-hero__x" />
        </div>
      </div>
    </div>

    <div class="site-container ms-hero__content">
      <p class="ms-hero__eyebrow ms-rise" style="--d: 0ms">{{ t_ui.hero.eyebrow }}</p>
      <h1 id="hero-title" class="ms-hero__name ms-rise" style="--d: 90ms">
        {{ t_ui.hero.name }}
      </h1>
      <p class="ms-hero__legal ms-rise" style="--d: 160ms">
        {{ t_ui.hero.legalName }} · {{ t_ui.hero.role }}
      </p>
      <p class="ms-hero__statement ms-rise" style="--d: 240ms">{{ t_ui.hero.statement }}</p>
      <p class="ms-hero__story ms-rise" style="--d: 320ms">{{ t_ui.hero.story }}</p>
      <div class="ms-hero__cta ms-rise" style="--d: 400ms">
        <a class="btn btn-primary" href="#projects">{{ t_ui.hero.ctaWork }}</a>
        <a class="btn btn-ghost btn-ghost--on-dark" :href="ZERODIGITX_CONTACT_URL" target="_blank" rel="noopener">
          {{ t_ui.hero.ctaQuote }}
        </a>
      </div>

      <div v-if="caption" class="ms-hero__live ms-rise" style="--d: 520ms">
        <p class="ms-hero__caption" aria-live="polite">
          <span class="ms-hero__pulse" :class="{ 'is-live': source === 'live' }" aria-hidden="true" />
          {{ caption }}
        </p>
        <div class="ms-hero__legend">
          <span class="ms-hero__legend-title">{{ t_ui.hero.mapLegend }}</span>
          <span v-for="s in legend" :key="s" class="ms-hero__legend-item">
            <span class="ms-hero__swatch" :class="`tx-county--${s.toLowerCase()}`" aria-hidden="true" />
            {{ t_ui.hero.severity[s] }}
          </span>
        </div>
        <NuxtLink class="ms-hero__maplink" to="/projects/texas-intelligence">
          {{ t_ui.hero.mapLink }} <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
