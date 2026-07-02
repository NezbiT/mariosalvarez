<!--
  Sección de contacto con formulario Formspree y enlaces directos.

  Qué hace:
  - Formulario de contacto (nombre, empresa, email, tipo, presupuesto, mensaje)
  - Enlaces a email, LinkedIn y GitHub

  Por qué existe:
  - Canal principal de conversión para clientes potenciales del portafolio

  Cómo funciona:
  - POST a Formspree; estado loading/success/error reactivo
-->
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { ContactFormData } from '../types'
import { useI18n } from '../composables/useI18n'
import ScrollReveal from './ScrollReveal.vue'

const { t_ui } = useI18n()

/**
 * CONFIGURACIÓN FORMSPREE
 * -----------------------
 * 1. Crear cuenta en https://formspree.io
 * 2. Crear un formulario nuevo y copiar el endpoint (ej: https://formspree.io/f/xxxxxxx)
 * 3. Reemplazar FORMSPREE_ENDPOINT abajo con tu URL real
 * 4. En Formspree, configurar email de destino: mario@mariosalvarez.com
 * 5. Opcional: activar reCAPTCHA en el panel de Formspree
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const LINKEDIN_URL = 'https://www.linkedin.com/in/mariosalv2/'
const GITHUB_URL = 'https://github.com/NezbiT'
const EMAIL = 'mario@mariosalvarez.com'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const status = ref<FormStatus>('idle')

const form = reactive<ContactFormData>({
  name: '',
  company: '',
  email: '',
  projectType: '',
  message: '',
  budget: '',
})

// Opciones de selects derivadas de traducciones activas
const projectTypeOptions = computed(() => [
  { value: 'web-app', label: t_ui.value.contact.projectTypes.webApp },
  { value: 'data-dashboard', label: t_ui.value.contact.projectTypes.dataDashboard },
  { value: 'industrial-tool', label: t_ui.value.contact.projectTypes.industrialTool },
  { value: 'consulting', label: t_ui.value.contact.projectTypes.consulting },
  { value: 'other', label: t_ui.value.contact.projectTypes.other },
])

const budgetOptions = computed(() => [
  { value: 'small', label: t_ui.value.contact.budgets.small },
  { value: 'medium', label: t_ui.value.contact.budgets.medium },
  { value: 'large', label: t_ui.value.contact.budgets.large },
  { value: 'enterprise', label: t_ui.value.contact.budgets.enterprise },
  { value: 'discuss', label: t_ui.value.contact.budgets.discuss },
])

/** Envía formulario a Formspree vía fetch */
async function handleSubmit(): Promise<void> {
  status.value = 'submitting'

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        company: form.company,
        email: form.email,
        projectType: form.projectType,
        budget: form.budget,
        message: form.message,
        _subject: `Nuevo contacto desde mariosalvarez.com — ${form.name}`,
      }),
    })

    if (!response.ok) throw new Error('Formspree error')

    status.value = 'success'
    // Limpiar campos tras envío exitoso
    Object.assign(form, {
      name: '',
      company: '',
      email: '',
      projectType: '',
      message: '',
      budget: '',
    })
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section id="contact" class="relative py-20 sm:py-28 overflow-hidden">
    <div class="absolute inset-0 contact-section-bg pointer-events-none" aria-hidden="true" />
    <div class="site-container relative z-10">
      <ScrollReveal>
        <header class="mb-14 text-center">
          <p class="text-sm font-semibold uppercase tracking-widest text-accent-600 mb-3">Contact</p>
          <h2 class="display-lg font-bold text-theme-primary mb-4">
            {{ t_ui.contact.title }}
          </h2>
          <p class="text-lg xl:text-xl text-theme-muted max-w-3xl mx-auto">
            {{ t_ui.contact.subtitle }}
          </p>
        </header>
      </ScrollReveal>

      <div class="grid gap-12 lg:grid-cols-5">
        <ScrollReveal :delay="100" class="lg:col-span-3">
        <form
          class="space-y-5 rounded-2xl glass-card p-6 sm:p-8 shadow-lg"
          @submit.prevent="handleSubmit"
        >
          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label for="contact-name" class="mb-1.5 block text-sm font-medium text-theme-secondary">
                {{ t_ui.contact.nameLabel }} *
              </label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                required
                :placeholder="t_ui.contact.namePlaceholder"
                class="theme-input w-full rounded-lg border px-4 py-2.5 transition-all duration-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30 focus:scale-[1.01]"
              />
            </div>
            <div>
              <label for="contact-company" class="mb-1.5 block text-sm font-medium text-theme-secondary">
                {{ t_ui.contact.companyLabel }}
              </label>
              <input
                id="contact-company"
                v-model="form.company"
                type="text"
                :placeholder="t_ui.contact.companyPlaceholder"
                class="theme-input w-full rounded-lg border px-4 py-2.5 transition-all duration-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30 focus:scale-[1.01]"
              />
            </div>
          </div>

          <div>
            <label for="contact-email" class="mb-1.5 block text-sm font-medium text-theme-secondary">
              {{ t_ui.contact.emailLabel }} *
            </label>
            <input
              id="contact-email"
              v-model="form.email"
              type="email"
              required
              :placeholder="t_ui.contact.emailPlaceholder"
              class="theme-input w-full rounded-lg border px-4 py-2.5 focus:border-accent-500 focus:ring-1 focus:ring-accent-500"
            />
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label for="contact-type" class="mb-1.5 block text-sm font-medium text-theme-secondary">
                {{ t_ui.contact.projectTypeLabel }}
              </label>
              <select
                id="contact-type"
                v-model="form.projectType"
                class="theme-input w-full rounded-lg border px-4 py-2.5 transition-all duration-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
              >
                <option value="" disabled>{{ t_ui.contact.projectTypePlaceholder }}</option>
                <option
                  v-for="opt in projectTypeOptions"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
            </div>
            <div>
              <label for="contact-budget" class="mb-1.5 block text-sm font-medium text-theme-secondary">
                {{ t_ui.contact.budgetLabel }}
              </label>
              <select
                id="contact-budget"
                v-model="form.budget"
                class="theme-input w-full rounded-lg border px-4 py-2.5 transition-all duration-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
              >
                <option value="" disabled>{{ t_ui.contact.budgetPlaceholder }}</option>
                <option
                  v-for="opt in budgetOptions"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label for="contact-message" class="mb-1.5 block text-sm font-medium text-theme-secondary">
              {{ t_ui.contact.messageLabel }} *
            </label>
            <textarea
              id="contact-message"
              v-model="form.message"
              required
              rows="5"
              :placeholder="t_ui.contact.messagePlaceholder"
              class="theme-input w-full rounded-lg border px-4 py-2.5 transition-all duration-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30 resize-y"
            />
          </div>

          <button
            type="submit"
            :disabled="status === 'submitting'"
            class="btn-interactive w-full sm:w-auto rounded-lg bg-accent-600 px-8 py-3 font-medium text-white hover:bg-accent-500 disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-accent-600/20 hover:shadow-lg"
          >
            {{ status === 'submitting' ? t_ui.contact.submitting : t_ui.contact.submit }}
          </button>

          <Transition name="status-fade">
            <p
              v-if="status === 'success'"
              class="text-green-700 bg-green-50 rounded-lg px-4 py-3 text-sm"
              role="status"
            >
              {{ t_ui.contact.success }}
            </p>
          </Transition>
          <Transition name="status-fade">
            <p
              v-if="status === 'error'"
              class="text-red-700 bg-red-50 rounded-lg px-4 py-3 text-sm"
              role="alert"
            >
              {{ t_ui.contact.error }}
            </p>
          </Transition>
        </form>
        </ScrollReveal>

        <ScrollReveal :delay="200" class="lg:col-span-2">
        <aside class="space-y-6">
          <div class="theme-aside-card rounded-xl p-6 transition-all duration-300 hover:border-accent-300 hover:shadow-md">
            <h3 class="mb-4 text-lg font-semibold text-theme-primary">
              {{ t_ui.contact.directEmail }}
            </h3>
            <a
              :href="`mailto:${EMAIL}`"
              class="text-accent-600 hover:underline font-medium break-all"
            >
              {{ EMAIL }}
            </a>
          </div>

          <div class="flex flex-col gap-3">
            <a
              :href="LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="theme-aside-card inline-flex items-center gap-3 rounded-lg px-4 py-3 text-theme-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 hover:shadow-md"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.128 0 2.065 2.065 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              {{ t_ui.contact.linkedin }}
            </a>
            <a
              :href="GITHUB_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="theme-aside-card inline-flex items-center gap-3 rounded-lg px-4 py-3 text-theme-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 hover:shadow-md"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
              </svg>
              {{ t_ui.contact.github }}
            </a>
          </div>
        </aside>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<!--
  ### Cómo ejecutar este archivo
  Importado en App.vue; requiere configurar FORMSPREE_ENDPOINT antes de producción.

  ### Qué aprendí en este archivo
  - Formspree acepta JSON con Accept: application/json para evitar redirección
  - computed para opciones de select mantiene labels sincronizados con i18n
-->