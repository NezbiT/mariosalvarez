import fs from 'node:fs'
import path from 'node:path'

function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name)
    if (f.isDirectory()) walk(p)
    else if (/\.(vue|ts)$/.test(f.name)) {
      let s = fs.readFileSync(p, 'utf8')
      const n = s
        .replace(/from ['"]\.\.\/\.\.\/composables\//g, "from '~/composables/")
        .replace(/from ['"]\.\.\/composables\//g, "from '~/composables/")
        .replace(/from ['"]\.\.\/data\//g, "from '~/data/")
        .replace(/from ['"]\.\.\/types['"]/g, "from '~/types'")
        .replace(/from ['"]\.\.\/i18n\//g, "from '~/i18n/")
      if (n !== s) {
        fs.writeFileSync(p, n)
        console.log('fixed', p)
      }
    }
  }
}

walk('components')
walk('composables')
