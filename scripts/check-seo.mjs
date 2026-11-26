import fs from 'node:fs'

for (const page of ['index.html', 'es/index.html', 'business/index.html', 'es/negocios/index.html', 'finances/index.html', 'es/finanzas/index.html']) {
  const h = fs.readFileSync(`.output/public/${page}`, 'utf8')
  console.log(`\n${page}`, 'bytes', h.length)
  for (const s of [
    'Mario Alvarez',
    'Mario S. Alvarez',
    'ZeroDigitX',
    'Houston',
    'application/ld+json',
    'rel="canonical"',
    'hreflang="es"',
    'hreflang="en"',
  ]) {
    console.log(' ', s, h.includes(s) ? 'YES' : 'NO')
  }
}
