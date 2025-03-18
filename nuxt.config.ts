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
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
    target: 'all',
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
    classSuffix: '',
  },
})
