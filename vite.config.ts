// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// NITRO_PRESET lets us flip deploy targets without editing code.
// On Vercel set NITRO_PRESET=vercel (see vercel.json). Locally it falls back to
// node-server so `npm run build` produces a runnable server bundle.
const preset = process.env.NITRO_PRESET ?? "node-server";

// The Vercel preset emits the Build Output API layout under `.vercel/output`.
// The Lovable wrapper otherwise forces output into `dist/`, which Vercel can't
// auto-detect — so when targeting Vercel we restore the preset's native dirs.
const vercelOutput = {
  dir: ".vercel/output",
  serverDir: ".vercel/output/functions/__server.func",
  publicDir: ".vercel/output/static",
};

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Explicit `nitro` is required: outside the Lovable sandbox the wrapper skips
  // the server build entirely unless this option is set.
  nitro: {
    preset,
    ...(preset === "vercel" ? { output: vercelOutput } : {}),
  },
});
