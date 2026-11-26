<script setup lang="ts">
/**
 * Illustration for the finances side: a home under a shield (protect),
 * bars that grow (invest), and a dotted road to a flag (plan). Labels come
 * from the three pillars. Purely decorative; no numbers, nothing promised.
 */
defineProps<{
  labels: [string, string, string]
}>()
</script>

<template>
  <svg class="finance-art" viewBox="0 0 520 440" role="img" :aria-label="labels.join(' · ')">
    <rect class="finance-art__card" x="8" y="8" width="504" height="424" rx="20" />
    <g class="finance-art__grid">
      <path v-for="y in [88, 168, 248, 328]" :key="y" :d="`M40 ${y}H480`" />
    </g>

    <!-- Plan: dotted road from the home to the flag -->
    <path class="finance-art__road" d="M120 330 C 200 330, 210 250, 290 240 S 400 150, 420 92" />
    <g class="finance-art__flag" transform="translate(412 46)">
      <path d="M8 4V58" />
      <path class="finance-art__fill" d="M8 6H44L36 18L44 30H8Z" />
    </g>

    <!-- Invest: bars that grow -->
    <g class="finance-art__bars" transform="translate(236 210)">
      <rect class="finance-art__bar" x="0" y="80" width="26" height="70" rx="4" />
      <rect class="finance-art__bar" x="38" y="50" width="26" height="100" rx="4" />
      <rect class="finance-art__bar" x="76" y="16" width="26" height="134" rx="4" />
      <rect class="finance-art__bar" x="114" y="-24" width="26" height="174" rx="4" />
    </g>

    <!-- Protect: home under a shield -->
    <g class="finance-art__home" transform="translate(52 232)">
      <path class="finance-art__fill finance-art__fill--soft" d="M68 0L136 54V128H0V54Z" />
      <path d="M68 0L136 54V128H0V54Z" />
      <path class="finance-art__shield" d="M68 40L98 52V74C98 92 85 104 68 110C51 104 38 92 38 74V52Z" />
      <path class="finance-art__check" d="M56 74L65 83L82 64" />
    </g>

    <g class="finance-art__labels">
      <g transform="translate(40 384)">
        <rect width="132" height="32" rx="16" />
        <text x="16" y="21">1 · {{ labels[0] }}</text>
      </g>
      <g transform="translate(200 384)">
        <rect width="132" height="32" rx="16" />
        <text x="16" y="21">2 · {{ labels[1] }}</text>
      </g>
      <g transform="translate(360 384)">
        <rect width="120" height="32" rx="16" />
        <text x="16" y="21">3 · {{ labels[2] }}</text>
      </g>
    </g>
  </svg>
</template>
