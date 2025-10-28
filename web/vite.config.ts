import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import path from 'path'

export default defineConfig({
  plugins: [
    tanstackRouter({
      autoCodeSplitting: true,
      target: 'react',
      routeToken: 'layout',
      generatedRouteTree: './src/route-tree.gen.ts',
      routesDirectory: './src/pages'
    }),
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
