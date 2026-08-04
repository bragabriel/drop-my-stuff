import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // O site é publicado em https://bragabriel.github.io/drop-my-stuff/, um
  // subcaminho, não na raiz do domínio. Precisa bater com o nome do repositório.
  base: '/drop-my-stuff/',
  plugins: [react()],
})
