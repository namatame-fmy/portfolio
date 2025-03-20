// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-microcms-module',
    '@nuxtjs/color-mode',
  ],
  runtimeConfig: {
    microcmsApiKey: process.env.MICROCMS_API_KEY, // サーバー側のみで使用
    public: {
      microcmsServiceDomain: process.env.NUXT_PUBLIC_MICROCMS_SERVICE_DOMAIN, // クライアント側でも使用
    },
  },
  microCMS: {
    serviceDomain: process.env.NUXT_PUBLIC_MICROCMS_SERVICE_DOMAIN, // ここを修正
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
})
