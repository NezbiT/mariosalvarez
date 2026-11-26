<script setup lang="ts">
/**
 * The one lead form, used on both sides of the site. `source` tags every
 * lead (business vs finances) so the CRM can sort them once it is wired.
 * Until then, submitting composes an email to LEAD_EMAIL with every field;
 * nothing is sent without the visitor pressing send in their email app.
 */
import { LEAD_EMAIL } from '~/data/identity'

const props = defineProps<{
  source: 'business' | 'finances'
}>()

const { t_ui, locale } = useI18n()
const route = useRoute()
const uid = useId()
const goal = useLeadGoal(props.source)

const form = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
  consent: false,
})
type Field = keyof typeof t_ui.value.form.errors
const errors = reactive<Partial<Record<Field, string>>>({})
const sent = ref(false)

const goals = computed(() =>
  Object.entries(props.source === 'business' ? t_ui.value.form.businessGoals : t_ui.value.form.financeGoals),
)
const goalLabel = computed(() =>
  props.source === 'business' ? t_ui.value.form.goalBusiness : t_ui.value.form.goalFinances,
)

function validate(): boolean {
  const e = t_ui.value.form.errors
  errors.name = form.name.trim().length >= 2 ? undefined : e.name
  errors.phone = form.phone.replace(/\D/g, '').length >= 10 ? undefined : e.phone
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) ? undefined : e.email
  errors.goal = goal.value ? undefined : e.goal
  errors.consent = form.consent ? undefined : e.consent
  return !Object.values(errors).some(Boolean)
}

function submit(): void {
  if (!validate()) {
    const first = (['name', 'phone', 'email', 'goal', 'consent'] as const).find(f => errors[f])
    document.getElementById(`${uid}-${first}`)?.focus()
    return
  }
  const f = t_ui.value.form
  const sourceLabel = props.source === 'business' ? f.sourceBusiness : f.sourceFinances
  const goalText = goals.value.find(([value]) => value === goal.value)?.[1] ?? goal.value
  const subject = `[${sourceLabel}] ${goalText} — ${form.name.trim()}`
  const body = [
    `${f.name}: ${form.name.trim()}`,
    `${f.phone}: ${form.phone.trim()}`,
    `${f.email}: ${form.email.trim()}`,
    `${goalLabel.value} ${goalText}`,
    form.message.trim() && `\n${form.message.trim()}\n`,
    '---',
    `source: ${props.source}`,
    `goal: ${goal.value}`,
    `lang: ${locale.value}`,
    `page: ${route.path}`,
    `consent: ${f.consent}`,
  ].filter(Boolean).join('\n')
  window.location.href = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  sent.value = true
}
</script>

<template>
  <div class="lead-form surface surface--accent p-6 sm:p-8">
    <div v-if="sent" role="status" aria-live="polite">
      <p class="mb-2 font-display text-xl font-semibold text-theme-primary">{{ t_ui.form.sentTitle }}</p>
      <p class="mb-6 text-theme-secondary">
        {{ t_ui.form.sentBody.split('{email}')[0] }}<a :href="`mailto:${LEAD_EMAIL}`" class="text-theme-accent underline underline-offset-4">{{ LEAD_EMAIL }}</a>{{ t_ui.form.sentBody.split('{email}')[1] }}
      </p>
      <button type="button" class="btn btn-ghost" @click="sent = false">{{ t_ui.form.sendAnother }}</button>
    </div>

    <form v-else novalidate class="grid gap-5 sm:grid-cols-2" @submit.prevent="submit">
      <div class="field sm:col-span-2">
        <label :for="`${uid}-name`" class="field__label">{{ t_ui.form.name }} <span class="field__req">({{ t_ui.form.required }})</span></label>
        <input
          :id="`${uid}-name`"
          v-model="form.name"
          class="field__input"
          type="text"
          name="name"
          autocomplete="name"
          required
          :aria-invalid="!!errors.name"
          :aria-describedby="errors.name ? `${uid}-name-error` : undefined"
        >
        <p v-if="errors.name" :id="`${uid}-name-error`" class="field__error">{{ errors.name }}</p>
      </div>

      <div class="field">
        <label :for="`${uid}-phone`" class="field__label">{{ t_ui.form.phone }} <span class="field__req">({{ t_ui.form.required }})</span></label>
        <input
          :id="`${uid}-phone`"
          v-model="form.phone"
          class="field__input"
          type="tel"
          name="phone"
          autocomplete="tel"
          inputmode="tel"
          required
          :aria-invalid="!!errors.phone"
          :aria-describedby="errors.phone ? `${uid}-phone-error` : undefined"
        >
        <p v-if="errors.phone" :id="`${uid}-phone-error`" class="field__error">{{ errors.phone }}</p>
      </div>

      <div class="field">
        <label :for="`${uid}-email`" class="field__label">{{ t_ui.form.email }} <span class="field__req">({{ t_ui.form.required }})</span></label>
        <input
          :id="`${uid}-email`"
          v-model="form.email"
          class="field__input"
          type="email"
          name="email"
          autocomplete="email"
          required
          :aria-invalid="!!errors.email"
          :aria-describedby="errors.email ? `${uid}-email-error` : undefined"
        >
        <p v-if="errors.email" :id="`${uid}-email-error`" class="field__error">{{ errors.email }}</p>
      </div>

      <div class="field sm:col-span-2">
        <label :for="`${uid}-goal`" class="field__label">{{ goalLabel }} <span class="field__req">({{ t_ui.form.required }})</span></label>
        <select
          :id="`${uid}-goal`"
          v-model="goal"
          class="field__input"
          name="goal"
          required
          :aria-invalid="!!errors.goal"
          :aria-describedby="errors.goal ? `${uid}-goal-error` : undefined"
        >
          <option value="" disabled>{{ t_ui.form.goalPlaceholder }}</option>
          <option v-for="[value, label] in goals" :key="value" :value="value">{{ label }}</option>
        </select>
        <p v-if="errors.goal" :id="`${uid}-goal-error`" class="field__error">{{ errors.goal }}</p>
      </div>

      <div class="field sm:col-span-2">
        <label :for="`${uid}-message`" class="field__label">{{ t_ui.form.message }}</label>
        <textarea
          :id="`${uid}-message`"
          v-model="form.message"
          class="field__input"
          name="message"
          rows="3"
          :placeholder="t_ui.form.messagePlaceholder"
        />
      </div>

      <div class="field sm:col-span-2">
        <label class="field__check">
          <input
            :id="`${uid}-consent`"
            v-model="form.consent"
            type="checkbox"
            name="consent"
            :aria-invalid="!!errors.consent"
            :aria-describedby="errors.consent ? `${uid}-consent-error` : undefined"
          >
          <span>{{ t_ui.form.consent }}</span>
        </label>
        <p v-if="errors.consent" :id="`${uid}-consent-error`" class="field__error">{{ errors.consent }}</p>
      </div>

      <div class="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" class="btn btn-primary self-start">{{ t_ui.form.submit }}</button>
        <p class="text-sm text-theme-muted">{{ t_ui.form.note }}</p>
      </div>
    </form>
  </div>
</template>
