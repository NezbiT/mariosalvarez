/**
 * Punto de entrada de la aplicación Vue 3.
 *
 * Qué hace:
 * - Crea la instancia de Vue y monta App.vue en el elemento #app
 * - Importa estilos globales (Tailwind + tema industrial)
 *
 * Por qué existe:
 * - Vite carga este archivo desde index.html como módulo ES
 *
 * Cómo funciona:
 * 1. createApp(App) inicializa la raíz reactiva
 * 2. .mount('#app') conecta con el DOM del index.html
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

/**
 * ### Cómo ejecutar este archivo
 * Automático con `npm run dev` o incluido en el bundle de `npm run build`.
 *
 * ### Qué aprendí en este archivo
 * - El orden import style.css → App garantiza que Tailwind esté listo antes del render
 * - createApp sin router es suficiente para un portafolio de página única
 */