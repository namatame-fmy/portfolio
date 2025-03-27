// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-microcms-module',
    '@nuxtjs/color-mode',
  ],
  import: {
    autoImport: true,
  },
  runtimeConfig: {
    microcmsApiKey: process.env.MICROCMS_API_KEY, // サーバー側のみで使用
    public: {
      microcmsServiceDomain: process.env.NUXT_PUBLIC_MICROCMS_SERVICE_DOMAIN, // クライアント側でも使用
    },
  },
  microCMS: {
    serviceDomain: process.env.NUXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  googleFonts: {
    families: {
      // 英語用セリフフォント
      'Noto+Serif': [300, 400, 700],
      // 日本語用サンセリフフォント
      'Noto+Sans+JP': [300, 400, 700],
      // MV用の特別なフォント
      'Playfair+Display': [400, 700],
    },
    display: 'swap',
    preload: true,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  colorMode: {
    preference: 'dark',
    classSuffix: '',
  },
  app: {
    head: {
      title: 'Namatame Fumiya | Front-End Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Web制作・ディレクション経験を活かし、デザインと技術のバランスを大切にした開発を行います。学んだことはブログで共有しています。',
        },
        { property: 'og:title', content: 'Namatame Fumiya | Front-End Engineer' },
        {
          property: 'og:description',
          content:
            'Web制作・ディレクション経験を活かし、デザインと技術のバランスを大切にした開発を行います。学んだことはブログで共有しています。',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://namafumi.com/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Namatame Fumiya | Front-End Engineer' },
        {
          name: 'twitter:description',
          content:
            'Web制作・ディレクション経験を活かし、デザインと技術のバランスを大切にした開発を行います。学んだことはブログで共有しています。',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },
})
