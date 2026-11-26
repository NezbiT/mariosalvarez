// https://nuxt.com/docs/4.x/getting-started/configuration
const siteUrl = 'https://mariosalvarez.com'
const siteTitle = 'Mario S. Alvarez (Mario Alvarez) — Websites for businesses, plans for families | Houston'
const siteDescription =
  'Mario Alvarez helps small businesses show up and sell online through ZeroDigitX, and helps families protect their income, invest, and plan. Bilingual, from the Houston area.'
const ogImage = `${siteUrl}/og-image.png`

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/ui', '@nuxt/eslint'],

  // Theme (data-theme + localStorage) is handled by the site itself.
  // Fonts: @nuxt/fonts (enabled by Nuxt UI) self-hosts Inter/Poppins with
  // metric-matched fallbacks, so text doesn't shift when the web font lands.
  ui: {
    colorMode: false,
  },

  // Full HTML at build time for crawlers (SSG)
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      // Both language homes; every other page is reached through links.
      routes: ['/', '/es'],
    },
  },

  // GA4: set NUXT_PUBLIC_GA_ID=G-XXXXXXXX on Vercel
  runtimeConfig: {
    public: {
      siteUrl,
      gaId: '',
    },
  },

  // Nuxt UI registers the Tailwind v4 Vite plugin
  css: ['~/assets/css/main.css', '~/assets/css/work.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: siteTitle,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: siteDescription },
        { name: 'author', content: 'Mario S. Alvarez' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#131110' },
        { property: 'og:type', content: 'profile' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:image', content: ogImage },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'es_US' },
        { property: 'og:site_name', content: 'Mario S. Alvarez' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: ogImage },
        { name: 'twitter:site', content: '@nezsbit' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'me', href: 'https://github.com/NezbiT' },
        { rel: 'me', href: 'https://www.linkedin.com/in/mariosalv2/' },
        { rel: 'me', href: 'https://x.com/nezsbit' },
        { rel: 'me', href: 'https://zerodigitx.com' },
      ],
      script: [
        {
          // Prevent theme flash (Unhead v2: textContent, not children)
          textContent: `(function(){try{var t=localStorage.getItem('mariosalvarez-theme');var m=t==='dark'?'dark':'light';document.documentElement.dataset.theme=m;document.documentElement.style.colorScheme=m;}catch(e){}})();`,
          type: 'text/javascript',
        },
      ],
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
    tsConfig: {
      compilerOptions: {
        // Align with TS 7 defaults used in Nuxt 4/5
        noUncheckedIndexedAccess: true,
      },
    },
  },
})
