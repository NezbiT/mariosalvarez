// https://nuxt.com/docs/4.x/getting-started/configuration
import tailwindcss from '@tailwindcss/vite'

const siteUrl = 'https://mariosalvarez.com'
const siteTitle = 'Mario S. Alvarez (Mario Alvarez) — CEO of ZeroDigitX | Houston'
const siteDescription =
  'Mario Alvarez (Mario S. Alvarez) has been building on the web for more than 15 years from the Houston area. He runs Zeroˣ Digit (zerodigitx.com) to help small businesses get found on Google and in ChatGPT.'
const ogImage = `${siteUrl}/og-image.png`

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // Full HTML at build time for crawlers (SSG)
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about'],
    },
  },

  // GA4: set NUXT_PUBLIC_GA_ID=G-XXXXXXXX on Vercel
  runtimeConfig: {
    public: {
      siteUrl,
      gaId: '',
    },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss() as never],
  },

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
        { name: 'theme-color', content: '#0284c7' },
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
        { rel: 'canonical', href: siteUrl },
        { rel: 'me', href: 'https://github.com/NezbiT' },
        { rel: 'me', href: 'https://www.linkedin.com/in/mariosalv2/' },
        { rel: 'me', href: 'https://x.com/nezsbit' },
        { rel: 'me', href: 'https://zerodigitx.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap',
        },
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
