<script setup lang="ts">
/**
 * Browser frame that cycles through live client sites (real screenshots from
 * the ZeroDigitX feed). Tabs pick a site; it advances on its own every few
 * seconds unless the visitor hovers, focuses, or prefers reduced motion.
 */
import feed from '#zdx-work'

const ROTATE_MS = 5000

const { t, t_ui, localeProjectPath } = useI18n()

const sites = feed.items.filter(item => item.kind === 'client' && item.image)
const active = ref(0)
const paused = ref(false)
const current = computed(() => sites[active.value])
const host = computed(() => (current.value?.url ? new URL(current.value.url).host.replace(/^www\./, '') : ''))

let timer: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  if (sites.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(() => {
    if (!paused.value && !document.hidden) active.value = (active.value + 1) % sites.length
  }, ROTATE_MS)
})
onBeforeUnmount(() => clearInterval(timer))

function select(i: number): void {
  active.value = i
  paused.value = true
}

function onKey(event: KeyboardEvent): void {
  const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
  if (!step) return
  event.preventDefault()
  select((active.value + step + sites.length) % sites.length)
  ;(event.currentTarget as HTMLElement).querySelectorAll<HTMLElement>('[role="tab"]')[active.value]?.focus()
}
</script>

<template>
  <div
    v-if="current"
    class="showcase"
    @pointerenter="paused = true"
    @pointerleave="paused = false"
    @focusin="paused = true"
  >
    <div class="showcase__frame surface">
      <div class="work-frame__bar" aria-hidden="true">
        <span class="work-frame__dot" />
        <span class="work-frame__dot" />
        <span class="work-frame__dot" />
        <span class="work-frame__address">{{ host }}</span>
      </div>
      <div
        id="showcase-panel"
        class="showcase__media"
        role="tabpanel"
        :aria-label="current.name"
      >
        <Transition name="showcase-fade" mode="out-in">
          <img
            :key="current.id"
            :src="current.image!"
            :alt="t_ui.projects.screenshotAlt.replace('{name}', current.name)"
            width="1440"
            height="900"
            decoding="async"
            :fetchpriority="active === 0 ? 'high' : undefined"
          >
        </Transition>
      </div>
      <NuxtLink :to="localeProjectPath(current.id)" class="showcase__caption">
        <span class="label">{{ t(current.category) }}</span>
        <span class="showcase__case">{{ t_ui.business.showcaseCase.replace('{name}', current.name) }} <span aria-hidden="true">→</span></span>
      </NuxtLink>
    </div>

    <div class="showcase__tabs" role="tablist" :aria-label="t_ui.business.showcaseLabel" @keydown="onKey">
      <button
        v-for="(site, i) in sites"
        :key="site.id"
        type="button"
        role="tab"
        class="showcase__tab"
        :aria-selected="i === active"
        aria-controls="showcase-panel"
        :tabindex="i === active ? 0 : -1"
        @click="select(i)"
      >
        {{ site.name }}
      </button>
    </div>
  </div>
</template>
