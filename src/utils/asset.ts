/**
 * Resolve o caminho de um asset estático em `public/` para a URL final.
 *
 * O site é publicado em um subcaminho no GitHub Pages
 * (ex: https://bragabriel.github.io/drop-my-stuff/), então caminhos
 * absolutos fixos como "/assets/..." resolveriam para a raiz do domínio
 * e dariam 404. `import.meta.env.BASE_URL` reflete o `base` configurado
 * em vite.config.ts (sempre termina com "/"), então prefixamos os
 * caminhos relativos com ele para funcionar em qualquer subcaminho.
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const normalized = path.replace(/^\/+/, '')
  return `${base}${normalized}`
}
