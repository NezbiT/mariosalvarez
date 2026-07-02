/**
 * Configuración principal de Vite para el portafolio de Mario Alvarez.
 *
 * Qué hace:
 * - Activa el plugin de Vue para compilar componentes .vue
 * - Integra Tailwind CSS v4 mediante el plugin oficial @tailwindcss/vite
 *
 * Por qué es necesaria:
 * - Vite es el bundler del proyecto; sin esta configuración no se compilan
 *   ni los componentes Vue ni los estilos de Tailwind.
 *
 * Cómo funciona:
 * 1. Importa defineConfig para tipado de la configuración
 * 2. Registra el plugin @vitejs/plugin-vue
 * 3. Registra el plugin de Tailwind para procesar @import "tailwindcss"
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
})

/**
 * ### Cómo ejecutar este archivo
 * No se ejecuta directamente. Vite lo lee al correr `npm run dev` o `npm run build`.
 *
 * ### Qué aprendí en este archivo
 * - Cómo integrar Tailwind CSS v4 con Vite usando el plugin dedicado
 * - La estructura mínima de vite.config.ts para un proyecto Vue 3 + TypeScript
 */