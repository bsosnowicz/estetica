import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// Serve the static CMS panel (public/admin/index.html) at /admin in `astro dev`.
// The dev server serves exact files from public/ but does not resolve a bare
// directory to its index.html, so /admin and /admin/ would 404. `astro build`
// and `astro preview` already handle this — this rewrite is dev-only.
const cmsAdminDev = {
  name: "cms-admin-dev",
  hooks: {
    "astro:server:setup"({ server }) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === "/admin" || req.url === "/admin/") {
          req.url = "/admin/index.html";
        }
        next();
      });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  // Keep the Vite-era dev port so .claude/launch.json and the README stay valid.
  server: { port: 5173 },
  // React is only used for the dev-only Agentation island (see src/pages/index.astro).
  integrations: [react(), cmsAdminDev],
  vite: {
    plugins: [tailwindcss()],
  },
});
