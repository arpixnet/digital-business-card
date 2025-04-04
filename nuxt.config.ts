export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt'
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
    strategy: 'no_prefix'
  },
  image: {
    format: ['webp'],
    provider: 'ipx',
    // domains: ['example.com']
  },
  app: {
    head: {
      charset: 'utf-8',
      templateParams: {
        separator: '|',
      },
    },
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
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'icons/**/*'],
    devOptions: {
      enabled: true,
      type: 'module',
      navigateFallback: 'index.html',
      suppressWarnings: true,
      disableRuntimeConfig: true
    },
  },

  runtimeConfig: {
    public: {
      me: {
        fullName: 'Leonardo Vizcaya Savchenko',
        email: 'lvizcaya@arpixnet.com',
        phone: '+593997003308',
        title: 'Desarrollo de software - IA - Automatización',
        website: 'https://arpixnet.com',
        address: 'Quito, Ecuador',
        business: 'Arpix Solutions'
      },
      company: {
        name: "Arpix Solutions",
        email: "contact@arpixnet.com",
        logoPath: "/images/arpix_logo.png",
        website: "https://arpixnet.com",
        about: [
          "En Arpix Solutions, nos especializamos en el desarrollo de software empresarial, ofreciendo soluciones innovadoras y personalizadas que generan valor para su empresa a través de la tecnología.",
          "Nuestros servicios abarcan desarrollo de software de extremo a extremo, desde arquitecturas escalables hasta interfaces intuitivas, integrando inteligencia artificial generativa y modelos de lenguaje (LLM) para potenciar la automatización y toma de decisiones. Además, optimizamos la eficiencia operativa con automatización de flujos empresariales, integrando sistemas para reducir fricción y maximizar productividad.",
          "Trabajamos estrechamente con nuestros clientes para materializar sus ideas, brindando la asesoría tecnológica necesaria para llevar a cabo cada proyecto con éxito."
        ]
      }
    }
  },
})
