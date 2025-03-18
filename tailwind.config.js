/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 英語用のセリフフォント
        'en': ['"Noto Serif"', 'serif'],
        // 日本語用のサンセリフフォント
        'jp': ['"Noto Sans JP"', 'sans-serif'],
        // MV用の特別なフォント
        'mv': ['"Playfair Display"', 'serif'],
      },
      fontColor: {
        'textWhite': '#fff'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',

}
