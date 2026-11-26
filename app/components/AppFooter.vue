<script setup lang="ts">
import { LEAD_EMAIL, LINKEDIN_URL, PHONE, PHONE_DISPLAY, X_URL, ZERODIGITX_URL } from '~/data/identity'

const { t_ui, localePath } = useI18n()

const pages = computed(() => [
  { to: localePath('home'), label: t_ui.value.nav.home },
  { to: localePath('business'), label: t_ui.value.nav.business },
  { to: localePath('finances'), label: t_ui.value.nav.finances },
  { to: localePath('about'), label: t_ui.value.nav.about },
])

const rightsText = computed(() =>
  t_ui.value.footer.rights.replace('{year}', String(new Date().getFullYear())),
)
</script>

<template>
  <footer class="site-footer">
    <div class="site-container py-14">
      <div class="mb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p class="footer-title font-display text-2xl font-semibold tracking-tight">
            Mario Alvarez
          </p>
          <p class="mt-1 text-sm">Mario S. Alvarez</p>
          <p class="mt-4 max-w-sm text-sm">{{ t_ui.footer.tagline }}</p>
          <ul class="mt-4 text-sm">
            <li>
              <a :href="`tel:${PHONE}`" class="footer-link">{{ PHONE_DISPLAY }}</a>
            </li>
            <li>
              <a :href="`mailto:${LEAD_EMAIL}`" class="footer-link">{{ LEAD_EMAIL }}</a>
            </li>
          </ul>
        </div>

        <nav :aria-label="t_ui.footer.navLabel">
          <ul class="text-sm">
            <li v-for="page in pages" :key="page.to">
              <NuxtLink :to="page.to" class="footer-link">{{ page.label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <div>
          <p class="footer-title mb-1 text-sm font-semibold">{{ t_ui.footer.servicesLabel }}</p>
          <ul class="text-sm">
            <li>
              <a :href="ZERODIGITX_URL" target="_blank" rel="noopener noreferrer" class="footer-link">
                {{ t_ui.footer.agency }}
              </a>
            </li>
            <li>
              <a :href="LINKEDIN_URL" target="_blank" rel="me noopener noreferrer" class="footer-link">
                LinkedIn
              </a>
            </li>
            <li>
              <a :href="X_URL" target="_blank" rel="me noopener noreferrer" class="footer-link">
                X / @nezsbit
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-divider flex flex-col justify-between gap-4 border-t pt-8 text-sm sm:flex-row">
        <p>{{ rightsText }}</p>
        <p class="max-w-xl sm:text-right">{{ t_ui.footer.financesNote }}</p>
      </div>
    </div>
  </footer>
</template>
