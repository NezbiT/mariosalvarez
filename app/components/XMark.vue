<script setup lang="ts">
/**
 * ZeroDigitX 3D X mark, ported from zerodigitx v3 (`app/components/XMark.vue`).
 * Reds: #FF7550 / #F2391C / #C8240E. Unique ids per instance (`useId`).
 */
defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    /** Drop shadow. The blurred ghost copy doesn't need it. */
    depth?: boolean
  }>(),
  { depth: true },
)

const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
const litId = `zx-lit-${uid}`
const shadeId = `zx-shade-${uid}`
const shineId = `zx-shine-${uid}`
const depthId = `zx-depth-${uid}`
const clipId = `zx-clip-${uid}`
</script>

<template>
  <svg
    v-bind="$attrs"
    viewBox="0 0 224 262"
    overflow="visible"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient :id="litId" x1="0" y1="0" x2="0.6" y2="1">
        <stop offset="0" stop-color="#FF7550" />
        <stop offset="0.5" stop-color="#F2391C" />
        <stop offset="1" stop-color="#C8240E" />
      </linearGradient>
      <linearGradient :id="shadeId" x1="0" y1="0" x2="0.6" y2="1">
        <stop offset="0" stop-color="#C4270E" />
        <stop offset="1" stop-color="#6A1204" />
      </linearGradient>
      <linearGradient :id="shineId" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#fff" stop-opacity="0" />
        <stop offset="0.5" stop-color="#fff" stop-opacity="0.6" />
        <stop offset="1" stop-color="#fff" stop-opacity="0" />
      </linearGradient>
      <filter :id="depthId" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#000" flood-opacity="0.5" />
      </filter>
      <clipPath :id="clipId">
        <polygon points="212,0 159.5,50 32,215 12,258 58,215 185.5,50" />
        <polygon points="32,20 78,20 198,240 152,240" />
      </clipPath>
    </defs>

    <!-- Thin bar, pointed at both ends (top-right → bottom-left) -->
    <g class="zx-stroke zx-stroke-b">
      <polygon points="212,0 159.5,50 32,215 12,258 45,215 172.5,50" :fill="`url(#${litId})`" />
      <polygon points="212,0 172.5,50 45,215 12,258 58,215 185.5,50" :fill="`url(#${shadeId})`" />
      <line x1="172.5" y1="50" x2="45" y2="215" stroke="#FFC9B8" stroke-width="0.9" stroke-opacity="0.6" />
    </g>

    <!-- Thick bevelled bar (top-left → bottom-right), in front -->
    <g class="zx-stroke zx-stroke-a" :filter="props.depth ? `url(#${depthId})` : undefined">
      <polygon points="32,20 55,20 175,240 152,240" :fill="`url(#${litId})`" />
      <polygon points="55,20 78,20 198,240 175,240" :fill="`url(#${shadeId})`" />
      <polygon points="152,240 198,240 192,247 158,247" fill="#480C03" />
      <polygon points="32,20 78,20 74,14 36,14" fill="#FF9A7A" />
      <line x1="55" y1="20" x2="175" y2="240" stroke="#FFC9B8" stroke-width="1.1" stroke-opacity="0.7" />
    </g>

    <g :clip-path="`url(#${clipId})`">
      <g class="zx-shine" opacity="0">
        <rect x="-90" y="-30" width="60" height="330" :fill="`url(#${shineId})`" transform="rotate(18 112 131)" />
      </g>
    </g>
  </svg>
</template>
