import { resolve } from "path";
export default defineNuxtConfig({
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets'
  },
  devtools: { enabled: false },
  alias: {
    "@": resolve(__dirname, "./"),
  },
  css: ['~/assets/css/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  experimental: {
    payloadExtraction: false
  }
})
