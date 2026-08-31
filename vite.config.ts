import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'

// Serve the static CMS panel (public/admin/index.html) at /admin in dev.
// Vite's SPA fallback otherwise rewrites bare directory requests to the
// app's root index.html. This middleware runs before internal middlewares,
// so it rewrites the URL before the fallback sees it.
const cmsAdmin: Plugin = {
  name: 'cms-admin-dev',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/admin' || req.url === '/admin/') {
        req.url = '/admin/index.html'
      }
      next()
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), cmsAdmin],
})
