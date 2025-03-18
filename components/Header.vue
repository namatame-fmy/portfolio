<script lang="ts" setup>
const isOpen = ref(false)
const router = useRouter()
const colorMode = useColorMode()

const toggleMenu = () => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

router.afterEach(() => {
  closeMenu()
})
</script>
<template>
  <header
    class="w-full h-24 flex items-center justify-between gap-14 p-6 absolute top-0 z-10 dark:text-black"
  >
    <a class="flex items-center gap-2 cursor-pointer opacity-80 duration-300" href="/">
      <template v-if="colorMode.value === 'dark'">
        <img src="/public/lightLogo.svg" width="30" height="30" alt="logo" />
      </template>
      <template v-else>
        <img src="/darkLogo.svg" width="30" height="30" alt="logo" />
      </template>
      <h1 class="text-base md:text-2xl font-bold font-en">Namatame Fumiya</h1>
    </a>
    <div class="hidden md:flex flex-1 items-center justify-between font-en font-bold">
      <nav>
        <NuxtLink
          to="/"
          class="px-4 cursor-pointer hover:opacity-70 duration-300"
          :class="$route.path === '/' && 'opacity-55'"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/about"
          class="px-4 cursor-pointer hover:opacity-70 duration-300"
          :class="$route.path === '/about' && 'opacity-55'"
          >About</NuxtLink
        >
        <NuxtLink
          to="/blog"
          class="px-4 cursor-pointer hover:opacity-70 duration-300"
          :class="$route.path.startsWith('/blog') && 'opacity-55'"
          >Blog</NuxtLink
        >
      </nav>
      <ToggleThemeButton />
    </div>

    <!-- ハンバーガーメニューボタン -->
    <button
      class="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-20"
      @click="toggleMenu"
      aria-label="メニュー"
    >
      <span
        class="block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 dark:bg-[#333]"
        :class="isOpen ? 'rotate-45 translate-y-2 dark:bg-[#fff]' : ''"
      ></span>
      <span
        class="block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 dark:bg-[#333]"
        :class="isOpen ? 'opacity-0' : ''"
      ></span>
      <span
        class="block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 dark:bg-[#333]"
        :class="isOpen ? '-rotate-45 -translate-y-2 dark:bg-[#fff]' : ''"
      ></span>
    </button>

    <div
      class="fixed inset-0 pt-36 px-4 bg-[#171616] bg-opacity-95 flex flex-col items-start md:hidden transition-all duration-300 z-10"
      :class="isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
    >
      <nav class="flex flex-col items-start space-y-10 text-3xl w-full">
        <NuxtLink
          to="/"
          class="px-4 py-2 cursor-pointer hover:opacity-70 duration-300 dark:text-[#fff]"
          :class="$route.path === '/' && 'opacity-55'"
          @click="closeMenu"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="px-4 py-2 cursor-pointer hover:opacity-70 duration-300 dark:text-[#fff]"
          :class="$route.path === '/about' && 'opacity-55'"
          @click="closeMenu"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/blog"
          class="px-4 py-2 cursor-pointer hover:opacity-70 duration-300 dark:text-[#fff]"
          :class="$route.path.startsWith('/blog') && 'opacity-55'"
          @click="closeMenu"
        >
          Blog
        </NuxtLink>
        <div class="ml-3 mt-28">
          <ToggleThemeButton />
        </div>
      </nav>
    </div>
  </header>
</template>
