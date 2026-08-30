import fs from 'node:fs'

const h = fs.readFileSync('.output/public/index.html', 'utf8')
console.log('bytes', h.length)
for (const s of [
  'Mario Alvarez',
  'Mario S. Alvarez',
  'Founder, CEO, and owner of ZeroDigitX',
  'zerodigitx.com',
  'TexasBizFinder',
  'Pitch Doctor',
  'GitHub License',
  'From Refinery',
  'application/ld+json',
  'Industrial Data Developer',
  'View projects',
  'Houston',
]) {
  console.log(s, h.includes(s) ? 'YES' : 'NO')
}
