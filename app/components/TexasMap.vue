<script setup lang="ts">
/**
 * Texas, 254 counties (US Census cartographic boundaries, see
 * scripts/build-texas-map.mjs). Counties under an active NWS alert light up in
 * crimson by severity. Geometry is inlined so the outline is in the SSR HTML.
 */
import map from '~/assets/data/texas-map.json'
import type { Severity } from '~/composables/useTexasAlerts'

const props = defineProps<{
  counties: Record<string, Severity>
}>()

const counties = Object.entries(map.counties as Record<string, string>)
</script>

<template>
  <svg class="tx-map" :viewBox="map.viewBox" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet">
    <g class="tx-map__counties">
      <path
        v-for="[fips, d] in counties"
        :key="fips"
        :d="d"
        :class="props.counties[fips] ? `tx-county tx-county--${props.counties[fips]!.toLowerCase()}` : 'tx-county'"
      />
    </g>
    <path class="tx-map__outline" :d="map.outline" />
    <circle class="tx-map__houston" :cx="map.houston.x" :cy="map.houston.y" r="5" />
  </svg>
</template>
