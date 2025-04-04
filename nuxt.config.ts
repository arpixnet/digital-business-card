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
    domains: ['arpixnet.com']
  },

  site: {
    url: 'https://lvizcaya.arpixnet.com',
    name: 'Leonardo Vizcaya',
    title: 'Leonardo Vizcaya - Business Card',
    description: 'Soluciones de software personalizadas, desde arquitecturas escalables hasta interfaces intuitivas.',
    defaultLocale: 'es',
  },
  schemaOrg: {
    identity: defineOrganization({
      '@type': ['Organization'],
      'name': 'Arpix Solutions',
      'logo': '/images/arpix_logo.png',
    }),
  },
  seo: {
    meta: {
      title: 'Leonardo Vizcaya - Business Card',
      description: 'Soluciones de software personalizadas, desde arquitecturas escalables hasta interfaces intuitivas.',
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
    id: process.env.GTAG_ID || 'GTM-WS9DBDG2',
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
      name: 'Leonardo Vizcaya',
      short_name: 'lvizcaya',
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
        fullName: 'Leonardo Vizcaya Savchenko',
        email: 'lvizcaya@arpixnet.com',
        phone: '+593997003308',
        whatsapp: '593997003308',
        website: 'https://lvizcaya.arpixnet.com',
        address: 'Quito, Ecuador',
        business: 'Arpix Solutions'
      },
      company: {
        name: "Arpix Solutions",
        email: "contact@arpixnet.com",
        logoPath: "/images/arpix_logo.png",
        website: "https://www.arpixnet.com"
      }
    }
  },
})
