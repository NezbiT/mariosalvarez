<!--
  Pie de página del portafolio.
-->
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '~/composables/useI18n'
import { useScrollTo } from '~/composables/useScrollTo'
import { GITHUB_URL, LINKEDIN_URL, X_URL, ZERODIGITX_URL } from '~/data/identity'
import { hasReviews } from '~/data/reviews'

const { t_ui } = useI18n()
const { scrollToSection } = useScrollTo()
const route = useRoute()

const currentYear = computed(() => new Date().getFullYear())

const sectionLinks = computed(() => [
  { id: 'projects', label: t_ui.value.nav.projects },
  { id: 'lab', label: t_ui.value.nav.lab },
  { id: 'technologies', label: t_ui.value.nav.technologies },
  ...(hasReviews ? [{ id: 'reviews', label: t_ui.value.nav.reviews }] : []),
  { id: 'contact', label: t_ui.value.nav.contact },
])

function onFooterNav(event: MouseEvent, sectionId: string): void {
  if (route.path === '/') {
    event.preventDefault()
    scrollToSection(sectionId)
  }
}

const rightsText = computed(() =>
  t_ui.value.footer.rights.replace('{year}', String(currentYear.value)),
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
        </div>

        <nav :aria-label="t_ui.footer.navLabel">
          <ul class="text-sm">
            <li v-for="link in sectionLinks" :key="link.id">
              <a
                :href="`/#${link.id}`"
                class="footer-link"
                @click="onFooterNav($event, link.id)"
              >
                {{ link.label }}
              </a>
            </li>
            <li>
              <NuxtLink to="/about" class="footer-link">
                {{ t_ui.nav.about }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <ul class="text-sm">
          <li>
            <a :href="ZERODIGITX_URL" target="_blank" rel="noopener noreferrer" class="footer-link">
              {{ t_ui.footer.agency }}
            </a>
          </li>
          <li>
            <a :href="X_URL" target="_blank" rel="me noopener noreferrer" class="footer-link">
              X / @nezsbit
            </a>
          </li>
          <li>
            <a :href="LINKEDIN_URL" target="_blank" rel="me noopener noreferrer" class="footer-link">
              LinkedIn
            </a>
          </li>
          <li>
            <a :href="GITHUB_URL" target="_blank" rel="me noopener noreferrer" class="footer-link">
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-divider flex flex-col justify-between gap-4 border-t pt-8 text-sm sm:flex-row">
        <p>{{ rightsText }}</p>
        <p>{{ t_ui.footer.builtWith }}</p>
      </div>
    </div>
  </footer>
</template>
