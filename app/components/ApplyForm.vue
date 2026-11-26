<script setup lang="ts">
/**
 * Extra-income application. Same fields and rules as prospects_v2
 * `POST /api/public/apply` (ApplyIn), so the payload can be posted there
 * unchanged once the CRM intake is reachable. Until then it composes an email
 * to LEAD_EMAIL with the readable answers plus the exact JSON payload.
 */
import { AGE_RANGES, US_STATES } from '~/data/apply'
import { LEAD_EMAIL } from '~/data/identity'

const { t_ui, locale } = useI18n()
const route = useRoute()
const uid = useId()

const form = reactive({
  name: '',
  phone: '',
  email: '',
  ageRange: '',
  zipcode: '',
  city: '',
  state: 'TX',
  cleanBackground: null as boolean | null,
  legalWork: null as boolean | null,
  consent: false,
})
const FIELDS = ['name', 'phone', 'email', 'ageRange', 'zipcode', 'city', 'cleanBackground', 'legalWork', 'consent'] as const
type Field = (typeof FIELDS)[number]
const errors = reactive<Partial<Record<Field, string>>>({})
const sent = ref(false)

/** (713) 555-1234 while typing; only digits are sent. */
function onPhone(event: Event): void {
  const d = (event.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, 10)
  form.phone = d.length === 10 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : d
}

function validate(): boolean {
  const f = t_ui.value.form.errors
  const a = t_ui.value.apply.errors
  errors.name = form.name.trim().length >= 2 ? undefined : f.name
  errors.phone = form.phone.replace(/\D/g, '').length === 10 ? undefined : f.phone
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) ? undefined : f.email
  errors.ageRange = form.ageRange ? undefined : a.ageRange
  errors.zipcode = /^\d{5}$/.test(form.zipcode) ? undefined : a.zipcode
  errors.city = form.city.trim().length >= 2 ? undefined : a.city
  errors.cleanBackground = form.cleanBackground === null ? a.cleanBackground : undefined
  errors.legalWork = form.legalWork === null ? a.legalWork : undefined
  errors.consent = form.consent ? undefined : f.consent
  return !Object.values(errors).some(Boolean)
}

function submit(): void {
  if (!validate()) {
    const first = FIELDS.find(field => errors[field])
    document.getElementById(`${uid}-${first}`)?.focus()
    return
  }
  const t = t_ui.value
  const yesNo = (value: boolean | null) => (value ? t.apply.yes : t.apply.no)
  const payload = {
    name: form.name.trim(),
    phone: form.phone.replace(/\D/g, ''),
    email: form.email.trim().toLowerCase(),
    ageRange: form.ageRange,
    city: form.city.trim(),
    state: form.state,
    zipcode: form.zipcode,
    cleanBackground: form.cleanBackground === true,
    legalWork: form.legalWork === true,
  }
  const body = [
    `${t.form.name}: ${payload.name}`,
    `${t.form.phone}: ${form.phone}`,
    `${t.form.email}: ${payload.email}`,
    `${t.apply.ageRange}: ${payload.ageRange}`,
    `${t.apply.city}: ${payload.city}, ${payload.state} ${payload.zipcode}`,
    `${t.apply.cleanBackground} ${yesNo(form.cleanBackground)}`,
    `${t.apply.legalWork} ${yesNo(form.legalWork)}`,
    '---',
    'source: finances-apply',
    `lang: ${locale.value}`,
    `page: ${route.path}`,
    `consent: ${t.form.consent}`,
    `prospects_v2 /api/public/apply: ${JSON.stringify(payload)}`,
  ].join('\n')
  const subject = `[${t.apply.subject}] ${payload.name}`
  window.location.href = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  sent.value = true
}
</script>

<template>
  <div class="surface surface--accent p-6 sm:p-8">
    <div v-if="sent" role="status" aria-live="polite">
      <p class="mb-2 font-display text-xl font-semibold text-theme-primary">{{ t_ui.form.sentTitle }}</p>
      <p class="mb-6 text-theme-secondary">
        {{ t_ui.form.sentBody.split('{email}')[0] }}<a :href="`mailto:${LEAD_EMAIL}`" class="text-theme-accent underline underline-offset-4">{{ LEAD_EMAIL }}</a>{{ t_ui.form.sentBody.split('{email}')[1] }}
      </p>
      <button type="button" class="btn btn-ghost" @click="sent = false">{{ t_ui.form.sendAnother }}</button>
    </div>

    <form v-else novalidate class="grid gap-5 sm:grid-cols-2" @submit.prevent="submit">
      <div class="field">
        <label :for="`${uid}-name`" class="field__label">{{ t_ui.form.name }}</label>
        <input :id="`${uid}-name`" v-model="form.name" class="field__input" type="text" autocomplete="name" maxlength="80" :aria-invalid="!!errors.name" :aria-describedby="errors.name ? `${uid}-name-error` : undefined">
        <p v-if="errors.name" :id="`${uid}-name-error`" class="field__error">{{ errors.name }}</p>
      </div>

      <div class="field">
        <label :for="`${uid}-phone`" class="field__label">{{ t_ui.form.phone }}</label>
        <input :id="`${uid}-phone`" :value="form.phone" class="field__input" type="tel" inputmode="tel" autocomplete="tel" maxlength="14" :aria-invalid="!!errors.phone" :aria-describedby="errors.phone ? `${uid}-phone-error` : undefined" @input="onPhone">
        <p v-if="errors.phone" :id="`${uid}-phone-error`" class="field__error">{{ errors.phone }}</p>
      </div>

      <div class="field sm:col-span-2">
        <label :for="`${uid}-email`" class="field__label">{{ t_ui.form.email }}</label>
        <input :id="`${uid}-email`" v-model="form.email" class="field__input" type="email" autocomplete="email" maxlength="120" :aria-invalid="!!errors.email" :aria-describedby="errors.email ? `${uid}-email-error` : undefined">
        <p v-if="errors.email" :id="`${uid}-email-error`" class="field__error">{{ errors.email }}</p>
      </div>

      <div class="field sm:col-span-2">
        <label :for="`${uid}-ageRange`" class="field__label">{{ t_ui.apply.ageRange }}</label>
        <select :id="`${uid}-ageRange`" v-model="form.ageRange" class="field__input" :aria-invalid="!!errors.ageRange" :aria-describedby="errors.ageRange ? `${uid}-ageRange-error` : undefined">
          <option value="" disabled>{{ t_ui.apply.select }}</option>
          <option v-for="age in AGE_RANGES" :key="age" :value="age">{{ age }}</option>
        </select>
        <p v-if="errors.ageRange" :id="`${uid}-ageRange-error`" class="field__error">{{ errors.ageRange }}</p>
      </div>

      <div class="field sm:col-span-2">
        <label :for="`${uid}-zipcode`" class="field__label">{{ t_ui.apply.zipcode }}</label>
        <input :id="`${uid}-zipcode`" v-model="form.zipcode" class="field__input" inputmode="numeric" maxlength="5" autocomplete="postal-code" :aria-invalid="!!errors.zipcode" :aria-describedby="errors.zipcode ? `${uid}-zipcode-error` : undefined" @input="form.zipcode = form.zipcode.replace(/\D/g, '')">
        <p v-if="errors.zipcode" :id="`${uid}-zipcode-error`" class="field__error">{{ errors.zipcode }}</p>
      </div>

      <div class="field">
        <label :for="`${uid}-city`" class="field__label">{{ t_ui.apply.city }}</label>
        <input :id="`${uid}-city`" v-model="form.city" class="field__input" autocomplete="address-level2" maxlength="80" :aria-invalid="!!errors.city" :aria-describedby="errors.city ? `${uid}-city-error` : undefined">
        <p v-if="errors.city" :id="`${uid}-city-error`" class="field__error">{{ errors.city }}</p>
      </div>

      <div class="field">
        <label :for="`${uid}-state`" class="field__label">{{ t_ui.apply.state }}</label>
        <select :id="`${uid}-state`" v-model="form.state" class="field__input" autocomplete="address-level1">
          <option v-for="state in US_STATES" :key="state" :value="state">{{ state }}</option>
        </select>
      </div>

      <fieldset v-for="key in (['cleanBackground', 'legalWork'] as const)" :key="key" class="field sm:col-span-2">
        <legend class="field__label mb-2">{{ t_ui.apply[key] }}</legend>
        <div class="flex gap-6">
          <label class="field__check">
            <input :id="`${uid}-${key}`" v-model="form[key]" type="radio" :name="`${uid}-${key}`" :value="true" :aria-describedby="errors[key] ? `${uid}-${key}-error` : undefined">
            <span>{{ t_ui.apply.yes }}</span>
          </label>
          <label class="field__check">
            <input v-model="form[key]" type="radio" :name="`${uid}-${key}`" :value="false">
            <span>{{ t_ui.apply.no }}</span>
          </label>
        </div>
        <p v-if="errors[key]" :id="`${uid}-${key}-error`" class="field__error">{{ errors[key] }}</p>
      </fieldset>

      <div class="field sm:col-span-2">
        <label class="field__check">
          <input :id="`${uid}-consent`" v-model="form.consent" type="checkbox" :aria-invalid="!!errors.consent" :aria-describedby="errors.consent ? `${uid}-consent-error` : undefined">
          <span>{{ t_ui.form.consent }}</span>
        </label>
        <p v-if="errors.consent" :id="`${uid}-consent-error`" class="field__error">{{ errors.consent }}</p>
      </div>

      <div class="flex flex-col gap-3 sm:col-span-2">
        <button type="submit" class="btn btn-primary w-full">{{ t_ui.apply.submit }}</button>
        <p class="text-sm text-theme-muted">{{ t_ui.form.note }}</p>
        <p class="text-xs text-theme-muted">{{ t_ui.apply.disclaimer }}</p>
      </div>
    </form>
  </div>
</template>
