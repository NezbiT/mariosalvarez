<script setup lang="ts">
/**
 * "What brings you here?" chips. Each one is a plain link to the form, so it
 * works without JavaScript; with it, the chip also preselects the goal.
 */
const props = defineProps<{
  source: 'business' | 'finances'
  prompt: string
  /** id of the section that holds the form */
  target: string
}>()

const { t_ui } = useI18n()
const goal = useLeadGoal(props.source)

const chips = computed(() =>
  Object.entries(props.source === 'business' ? t_ui.value.form.businessGoals : t_ui.value.form.financeGoals)
    .filter(([value]) => value !== 'other'),
)
</script>

<template>
  <div class="goal-chips">
    <p class="label mb-3">{{ prompt }}</p>
    <ul class="flex flex-wrap gap-2" role="list">
      <li v-for="[value, label] in chips" :key="value">
        <a
          :href="`#${target}`"
          class="goal-chip"
          :aria-current="goal === value ? 'true' : undefined"
          @click="goal = value"
        >
          {{ label }}
        </a>
      </li>
    </ul>
  </div>
</template>
