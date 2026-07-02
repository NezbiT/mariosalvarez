<!--
  Sección de tecnologías y stack técnico.

  Qué hace:
  - Renderiza grupos de tecnologías desde src/data/technologies.ts
  - Muestra títulos bilingües y chips por categoría

  Por qué existe:
  - Comunica el perfil híbrido: desarrollo web + dominio industrial

  Cómo funciona:
  - Itera techGroups; useI18n resuelve títulos ES/EN
-->
<script setup lang="ts">
import { techGroups } from '../data/technologies'
import { useI18n } from '../composables/useI18n'

const { t, t_ui } = useI18n()
</script>

<template>
  <section id="technologies" class="py-20 px-4 sm:px-6 bg-industrial-50">
    <div class="mx-auto max-w-6xl">
      <header class="mb-12 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-industrial-900 mb-4">
          {{ t_ui.technologies.title }}
        </h2>
        <p class="text-lg text-industrial-600 max-w-2xl mx-auto">
          {{ t_ui.technologies.subtitle }}
        </p>
      </header>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="group in techGroups"
          :key="group.id"
          class="rounded-xl border border-industrial-200 bg-white p-6 shadow-sm"
        >
          <h3 class="mb-4 text-lg font-semibold text-industrial-800 border-b border-industrial-100 pb-3">
            {{ t(group.title) }}
          </h3>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="item in group.items"
              :key="item"
              class="rounded-md bg-industrial-100 px-3 py-1.5 text-sm text-industrial-700"
            >
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<!--
  ### Cómo ejecutar este archivo
  Importado en App.vue entre proyectos y contacto.

  ### Qué aprendí en este archivo
  - Grilla responsive con lg:grid-cols-3 adapta 5 grupos sin espacios vacíos raros
  - Datos externos permiten añadir skills sin tocar la plantilla
-->