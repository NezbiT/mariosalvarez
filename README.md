<p align="center">
  <img src="docs/images/banner.svg" alt="Mario S. Alvarez (Mario Alvarez) — mariosalvarez.com" width="920" />
</p>

<p align="center">
  <img src="docs/images/hero.png" alt="Mario S. Alvarez (Mario Alvarez) — Founder & CEO of ZeroDigitX" width="280" />
</p>

<h1 align="center">mariosalvarez.com</h1>

<p align="center">
  <strong>Portafolio profesional bilingüe (ES/EN) de Mario S. Alvarez (Mario Alvarez)</strong><br/>
  <em>From Refinery Rope Access to Industrial Data Developer</em>
</p>

<p align="center">
  <a href="https://mariosalvarez.vercel.app">🌐 Sitio en vivo</a> ·
  <a href="https://mariosalvarez.com">mariosalvarez.com</a> ·
  <a href="mailto:mario@mariosalvarez.com">sales@mariosalvarez.com</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt&logoColor=white" alt="Nuxt 4"/>
  <img src="https://img.shields.io/badge/Vue_3-3.5-4FC08D?logo=vue.js&logoColor=white" alt="Vue 3"/>
  <img src="https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/SSG-SEO-000000?logo=vercel&logoColor=white" alt="SSG"/>
  <img src="https://img.shields.io/badge/Vercel-Deploy-000000?logo=vercel&logoColor=white" alt="Vercel"/>
</p>

---

## Sobre Mario S. Alvarez (Mario Alvarez)

**Founder & CEO of ZeroDigitX.** Con **más de 15 años en desarrollo web**, Mario S. Alvarez (Mario Alvarez) combina experiencia real en **rope access y NDT en refinerías del Golfo de México** con desarrollo moderno de **aplicaciones web, dashboards y herramientas de datos** para el sector energético de Houston/Texas.

Disponible para proyectos **freelance** y oportunidades **full-time** en el área de Houston.

| | |
|---|---|
| 📍 Ubicación | Houston, Texas |
| 💼 Especialidad | Datos industriales · Vue 3 · Python |
| 🌐 Idiomas | Español (nativo) · Inglés (profesional) |
| 🐙 GitHub | [NezbiT](https://github.com/NezbiT) |

---

## Vista previa

| Hero | Proyectos | Contacto |
|------|-----------|----------|
| Presentación con slogan, historia y CTAs | Grid con filtros, búsqueda y modal de detalles | Formulario de cotización bilingüe |

El sitio incluye **selector ES/EN** instantáneo con preferencia guardada en `localStorage`.

---

## Proyectos destacados

| Proyecto | Estado | Enlace | Descripción |
|----------|--------|--------|-------------|
| **TexasBizFinder** | 🟢 En vivo | [txbizfinder.com](https://www.txbizfinder.com) | Directorio de negocios en Texas con datos masivos |
| **INESA Institute** | 🟢 En vivo | [inesa.institute](https://inesa.institute) | Sitio institucional trilingüe (ES/EN/FR) con PWA |
| **PermitRadar Houston** | 🟢 En vivo | — | Monitor de permisos industriales en Houston |
| **ChannelWatch La Porte** | 🟢 En vivo | — | Condiciones del canal de navegación |
| **Emissions Sentinel** | 🟡 Próximamente | — | Monitoreo de emisiones en refinería |

---

## Stack técnico

```
Nuxt 4 (SSG / nuxt generate)
├── Vue 3 Composition API
├── TypeScript 7 (project references)
├── Tailwind CSS v4
├── app/ + shared/types structure
└── Vercel (static deploy from .output/public)
```


HTML prerendered for crawlers (projects, lab, meta, JSON-LD). Client hydrates filters, modal, and locale toggle.

### Scripts

```bash
npm run dev        # desarrollo
npm run generate   # build estático (SEO)
npm run preview    # previsualizar .output/public
```

**También en producción:** [inesa.institute](https://inesa.institute) — Vue 3, Vue Router, Vue I18n, PWA, Sentry.

---

## Inicio rápido

```bash
# Clonar
git clone https://github.com/NezbiT/mariosalvarez.git
cd mariosalvarez

# Instalar y ejecutar
npm install
npm run dev
```

Abre **http://localhost:5173**

```bash
npm run build    # Build de producción
npm run preview  # Vista previa del build
```

---

## Estructura del proyecto

```
mariosalvarez/
├── docs/images/          # Assets para README (banner, hero)
├── public/               # favicon.svg
├── src/
│   ├── components/       # Navbar, Hero, Projects, Tech, Contact, Footer
│   ├── composables/      # useI18n, useProjects, useScrollTo
│   ├── data/             # projects.ts, technologies.ts
│   ├── i18n/             # translations.ts (ES/EN)
│   ├── assets/           # hero.png
│   ├── types/            # Interfaces TypeScript
│   ├── App.vue
│   ├── main.ts
│   └── style.css         # Tema industrial + Tailwind v4
├── vercel.json           # Config SPA para Vercel
├── vite.config.ts
└── README.md
```

---

## Configuración

### Formulario de contacto (Formspree)

1. Crear cuenta en [formspree.io](https://formspree.io)
2. Crear formulario con destino `mario@mariosalvarez.com`
3. Editar `src/components/AppContact.vue` → reemplazar `FORMSPREE_ENDPOINT`

### Agregar más idiomas

1. Extender el tipo `Locale` en `src/types/index.ts`
2. Añadir traducciones en `src/i18n/translations.ts`
3. Agregar botón en `AppNavbar.vue`

### Agregar un proyecto

Editar `src/data/projects.ts` con textos bilingües, tecnologías, enlaces y `priority`.

---

## Despliegue en Vercel

```bash
npx vercel --prod
```

O conectar el repo en [vercel.com](https://vercel.com) — Vercel detecta Vite automáticamente.

**Dominio personalizado:** Settings → Domains → `mariosalvarez.com`

---

## Sitios relacionados

| Sitio | Repo / Proyecto | Stack |
|-------|-----------------|-------|
| [mariosalvarez.com](https://mariosalvarez.com) | Este repo | Vue 3 + Tailwind + Vite |
| [inesa.institute](https://inesa.institute) | `ineca-vue` | Vue 3 + i18n + PWA + Sentry |
| [txbizfinder.com](https://www.txbizfinder.com) | `TexasBizFinder` | Vue 3 + FastAPI + DuckDB |

---

## Licencia

© Mario S. Alvarez (Mario Alvarez). Todos los derechos reservados.
