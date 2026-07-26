<!--
  Sección de contacto: cotización ZeroDigitX + teléfono + redes.
-->
<script setup lang="ts">
import { useI18n } from '~/composables/useI18n'
import {
  ZERODIGITX_CONTACT_URL,
  ZERODIGITX_URL,
  ZERODIGITX_PHONE,
  ZERODIGITX_PHONE_DISPLAY,
} from '~/data/reviews'
import ScrollReveal from './ScrollReveal.vue'

const { t_ui } = useI18n()

const LINKEDIN_URL = 'https://www.linkedin.com/in/mariosalv2/'
const GITHUB_URL = 'https://github.com/NezbiT'
const X_URL = 'https://x.com/nezsbit'

const socialLinkClass =
  'theme-aside-card inline-flex min-h-11 items-center gap-3 rounded-lg px-4 py-3 text-theme-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 hover:shadow-md'
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

      <div class="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        <ScrollReveal :delay="100">
          <div class="theme-aside-card h-full rounded-xl p-6 transition-all duration-300 hover:border-accent-300 hover:shadow-md">
            <h3 class="mb-2 text-lg font-semibold text-theme-primary">
              {{ t_ui.contact.hireVia }}
            </h3>
            <p class="mb-4 text-sm text-theme-muted">
              {{ t_ui.contact.hireViaBody }}
            </p>
            <a
              :href="ZERODIGITX_CONTACT_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-accent-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-500 transition-colors"
            >
              {{ t_ui.contact.visitAgency }}
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <div class="mt-5 border-t border-theme pt-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-theme-muted">
                {{ t_ui.contact.callNow }}
              </p>
              <a
                :href="ZERODIGITX_PHONE"
                class="inline-flex min-h-11 items-center text-base font-semibold text-accent-600 hover:underline"
              >
                {{ ZERODIGITX_PHONE_DISPLAY }}
              </a>
              <p class="mt-2 text-xs text-theme-muted">
                {{ t_ui.contact.responseTime }}
              </p>
              <a
                :href="ZERODIGITX_URL"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-2 inline-block text-xs text-theme-muted hover:text-accent-600"
              >
                zerodigitx.com
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal :delay="150">
          <div class="flex h-full flex-col gap-3">
            <h3 class="text-sm font-semibold uppercase tracking-wide text-theme-muted px-1">
              {{ t_ui.contact.socialHeading }}
            </h3>
            <a
              :href="X_URL"
              target="_blank"
              rel="noopener noreferrer"
              :class="socialLinkClass"
            >
              <svg class="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
              </svg>
              {{ t_ui.contact.x }}
            </a>
            <a
              :href="LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
              :class="socialLinkClass"
            >
              <svg class="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.128 0 2.065 2.065 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              {{ t_ui.contact.linkedin }}
            </a>
            <a
              :href="GITHUB_URL"
              target="_blank"
              rel="noopener noreferrer"
              :class="socialLinkClass"
            >
              <svg class="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
              </svg>
              {{ t_ui.contact.github }}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
