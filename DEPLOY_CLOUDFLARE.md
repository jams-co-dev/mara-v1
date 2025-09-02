# 🚀 Guía de Despliegue: Next.js en Cloudflare Pages

Esta guía contiene todos los pasos, configuraciones y soluciones a errores comunes para desplegar correctamente un proyecto **Next.js (con App Router)** en **Cloudflare Pages** usando `@cloudflare/next-on-pages`.

---

## ✅ 1. Objetivo

Desplegar una aplicación Next.js moderna (v15+) en **Cloudflare Pages** con soporte para:
- App Router
- Server Components
- API Routes
- Edge runtime
- Variables de entorno

---

## 🔧 2. Cambios en `package.json`

### Archivo: `package.json`

```json
{
  "scripts": {
    "dev": "next dev --turbopack -p 9002",
    "genkit:dev": "genkit start -- tsx src/ai/dev.ts",
    "genkit:watch": "genkit start -- tsx --watch src/ai/dev.ts",
    "build": "next build && next-on-pages",
    "deploy": "npm run build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "prepare": "patch-package"
  },
  "dependencies": {
    "@genkit-ai/googleai": "^1.14.1",
    "@genkit-ai/next": "^1.14.1",
    "next": "15.3.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "firebase": "^11.9.1",
    "framer-motion": "^11.3.19",
    "lucide-react": "^0.475.0",
    "zod": "^3.24.2",
    "tailwind-merge": "^3.0.1",
    "clsx": "^2.1.1"
  },
  "devDependencies": {
    "@cloudflare/next-on-pages": "^1.13.15",
    "@cloudflare/workers-types": "^4.2025.7",
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "tailwindcss": "^3.4.1",
    "postcss": "^8",
    "path-browserify": "^1.0.1",
    "os-browserify": "^0.3.0",
    "crypto-browserify": "^3.12.1",
    "stream-browserify": "^3.0.0"
  },
  "overrides": {
    "esbuild": "0.25.4"
  }
}
```

---
✅ build ejecuta next build y luego next-on-pages en un solo comando.
✅ Polyfills para compatibilidad con edge runtime.
✅ overrides evita conflictos de esbuild. 