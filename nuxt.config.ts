import { defineOrganization } from 'nuxt-schema-org/schema';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: false },
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxtjs/seo',
    'nuxt-gtag',
  ],

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: "#FFC008",
              50: '#fffeea',
              100: '#fffbc5',
              200: '#fff785',
              300: '#ffed46',
              400: '#ffde1b',
              500: '#ffc008',
              600: '#e29200',
              700: '#bb6802',
              800: '#985008',
              900: '#7c410b',
              950: '#482100',
            },
            active: '#FFC008'
          }
        },
      },
    }
  },
  primevue: {
    importTheme: { from: '@/assets/themes/config.js' },
  },
  colorMode: {
    preference: 'system',
    fallback: 'light'
  },
  i18n: {
    bundle: {
      optimizeTranslationDirective: false, // Disable optimization
    },
    locales: [
      { code: 'es', language: 'es-ES', file: 'es.json' },
      { code: 'en', language: 'en-US', file: 'en.json' },
    ],
    defaultLocale: 'es',
    lazy: true,
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  image: {
    format: ['webp'],
    provider: 'ipx',
    domains: [process.env.DOMAIN || '']
  },

  site: {
    url: process.env.ME_WEBSITE || '',
    name: process.env.ME_FULL_NAME || '',
    title: `${process.env.ME_FULL_NAME} - Business Card`,
    description: process.env.SEO_DESCRIPTION || '',
    defaultLocale: 'es',
  },
  schemaOrg: {
    identity: defineOrganization({
      '@type': ['Organization'],
      'name': process.env.COMPANY_NAME || '',
      'logo': process.env.COMPANY_LOGO_PATH || '',
    }),
  },
  seo: {
    meta: {
      title: `${process.env.ME_FULL_NAME} - Business Card`,
      description: process.env.SEO_DESCRIPTION || '',
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      templateParams: {
        separator: '|',
      },
    },
  },
  sitemap: {
    autoI18n: true,
    includeAppSources: true,
  },
  gtag: {
    id: process.env.GTAG_ID || '',
    enabled: process.env.NODE_ENV === 'production'
  },

  router: {
    options: {
      strict: false
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: process.env.ME_FULL_NAME || '',
      short_name: process.env.ME_SHORT_NAME || '',
      theme_color: '#FFC008',
      background_color: '#121212',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: 'icons/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: 'icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20
    },
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'icons/**/*']
  },

  runtimeConfig: {
    public: {
      me: {
        fullName: process.env.ME_FULL_NAME || '',
        email: process.env.ME_EMAIL || '',
        phone: process.env.ME_PHONE || '',
        whatsapp: process.env.ME_WHATSAPP || '',
        website: process.env.ME_WEBSITE || '',
        address: process.env.ME_ADDRESS || '',
        business: process.env.ME_BUSINESS || ''
      },
      company: {
        name: process.env.COMPANY_NAME || '',
        email: process.env.COMPANY_EMAIL || '',
        logoPath: process.env.COMPANY_LOGO_PATH || '',
        website: process.env.COMPANY_WEBSITE || ''
      }
    }
  },
})
