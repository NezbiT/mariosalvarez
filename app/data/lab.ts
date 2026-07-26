/**
 * Tools del Lab — herramientas propias (open source y web apps).
 */
import type { LabItem } from '#shared/types'

export const labItems: LabItem[] = [
  {
    id: 'pitch-doctor',
    title: {
      es: 'Pitch Doctor',
      en: 'Pitch Doctor',
    },
    shortDescription: {
      es: 'Audita sitios web de negocios y genera reportes HTML con marca para convertir malas webs en clientes.',
      en: 'Audit business websites and generate branded HTML reports — turn weak sites into your next client.',
    },
    longDescription: {
      es: 'Tool de ZeroDigitX: analiza un sitio, resalta problemas de diseño, SEO y conversión, y entrega un informe listo para presentar al cliente. Ideal para freelancers y agencias en ventas consultivas.',
      en: 'ZeroDigitX tool: analyzes a site, flags design/SEO/conversion issues, and delivers a report ready to pitch. Built for freelancers and agencies doing consultative sales.',
    },
    technologies: ['Web', 'CLI', 'HTML reports', 'ES/EN/FR'],
    site: 'https://doctor.zerodigitx.com/',
    github: 'https://github.com/NezbiT/pitch-doctor',
    badge: {
      es: 'Tool',
      en: 'Tool',
    },
    priority: 1,
  },
  {
    id: 'github-license-scanner',
    title: {
      es: 'GitHub License Scanner',
      en: 'GitHub License Scanner',
    },
    shortDescription: {
      es: 'CLI y UI local para analizar licencias de un repo GitHub y sus dependencias. Señal de riesgo copyleft (GPL/AGPL) y export Markdown/SBOM.',
      en: 'CLI and local UI to analyze a GitHub repo license and its dependencies. Copyleft risk signal (GPL/AGPL) plus Markdown/SBOM export.',
    },
    longDescription: {
      es: 'Tool open source (MIT) en Python: comando `gls`, UI opcional con NiceGUI, escaneo de npm/PyPI/Cargo/Go y más. Corre en tu máquina — sin SaaS. Docs en GitHub Pages; paquete en PyPI.',
      en: 'Open-source (MIT) Python tool: `gls` CLI, optional NiceGUI UI, scans npm/PyPI/Cargo/Go and more. Runs on your machine — no SaaS. Docs on GitHub Pages; package on PyPI.',
    },
    technologies: ['Python', 'NiceGUI', 'CLI', 'CycloneDX', 'SPDX'],
    site: 'https://nezbit.github.io/github-license-scanner/',
    github: 'https://github.com/NezbiT/github-license-scanner',
    install: 'https://pypi.org/project/github-license-scanner/',
    command: 'pipx install github-license-scanner',
    badge: {
      es: 'Open source',
      en: 'Open source',
    },
    priority: 2,
  },
]
