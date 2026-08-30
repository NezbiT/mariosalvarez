<!--
  Pie de página del portafolio.
-->
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '~/composables/useI18n'
import { useScrollTo } from '~/composables/useScrollTo'
import { GITHUB_URL, LINKEDIN_URL, X_URL, ZERODIGITX_URL } from '~/data/identity'

const { t_ui } = useI18n()
const { scrollToSection } = useScrollTo()
const route = useRoute()

const currentYear = computed(() => new Date().getFullYear())

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
  <footer class="site-footer py-12 px-4 sm:px-6">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <div>
          <p class="text-xl font-bold footer-title mb-2">Mario Alvarez</p>
          <p class="text-sm italic opacity-80">
            {{ t_ui.footer.tagline }}
          </p>
          <p class="mt-2 text-sm opacity-80">
            {{ t_ui.footer.identity }}
          </p>
        </div>

        <nav aria-label="Footer links">
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="/#projects"
                class="hover:text-accent-400 transition-colors"
                @click="onFooterNav($event, 'projects')"
              >
                {{ t_ui.nav.projects }}
              </a>
            </li>
            <li>
              <a
                href="/#lab"
                class="hover:text-accent-400 transition-colors"
                @click="onFooterNav($event, 'lab')"
              >
                {{ t_ui.nav.lab }}
              </a>
            </li>
            <li>
              <a
                href="/#technologies"
                class="hover:text-accent-400 transition-colors"
                @click="onFooterNav($event, 'technologies')"
              >
                {{ t_ui.nav.technologies }}
              </a>
            </li>
            <li>
              <a
                href="/#reviews"
                class="hover:text-accent-400 transition-colors"
                @click="onFooterNav($event, 'reviews')"
              >
                {{ t_ui.nav.reviews }}
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                class="hover:text-accent-400 transition-colors"
                @click="onFooterNav($event, 'contact')"
              >
                {{ t_ui.nav.contact }}
              </a>
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="hover:text-accent-400 transition-colors"
              >
                {{ t_ui.nav.about }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="flex flex-col gap-2 text-sm">
          <a
            :href="ZERODIGITX_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-accent-400 transition-colors"
          >
            {{ t_ui.footer.agency }}
          </a>
          <a
            :href="X_URL"
            target="_blank"
            rel="me noopener noreferrer"
            class="hover:text-accent-400 transition-colors"
          >
            X / @nezsbit
          </a>
          <a
            :href="LINKEDIN_URL"
            target="_blank"
            rel="me noopener noreferrer"
            class="hover:text-accent-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            :href="GITHUB_URL"
            target="_blank"
            rel="me noopener noreferrer"
            class="hover:text-accent-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      <div class="footer-divider border-t pt-8 flex flex-col sm:flex-row justify-between gap-4 text-sm opacity-70">
        <p>{{ rightsText }}</p>
        <p>{{ t_ui.footer.builtWith }}</p>
      </div>
    </div>
  </footer>
</template>
