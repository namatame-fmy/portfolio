<script lang="ts" setup>
import { useParallax, usePreferredReducedMotion, useMediaQuery } from '@vueuse/core'
import type { Blog } from '~/types/blog'

const target = ref(null)
const { tilt, roll } = useParallax(target)
const { data: blogs } = await useAsyncData(
  'blogs',
  () =>
    useMicroCMSGetList<Blog>({
      endpoint: 'blogs',
      queries: {
        limit: 3,
        orders: '-publishedAt',
      },
    }),
  {
    server: true,
    lazy: false,
    transform: (data) => {
      return data.data.value
    },
  }
)

// アクセシビリティ対応
const prefersReducedMotion = usePreferredReducedMotion()
const motionFactor = computed(() => (prefersReducedMotion.value === 'reduce' ? 0 : 1))

// レスポンシブ対応
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const motionScale = computed(() => (isLargeScreen.value ? 1 : 0.5))
</script>

<template>
  <section
    ref="target"
    class="bg-[#fff] pt-40 pb-32 overflow-hidden md:pt-52 md:pb-40 dark:bg-[#171616]"
  >
    <div class="flex items-center justify-center relative">
      <div class="container block mx-auto md:flex md:flex-row md:items-center">
        <div class="md:text-left md:w-1/2">
          <h1 class="font-bold font-mv text-4xl md:text-5xl">
            Front-End <br class="md:hidden" />
            Engineer
          </h1>
          <div class="mt-8">
            <p class="md:text-lg">
              Web制作・ディレクション経験を活かし、デザインと技術のバランスを大切にした開発を行います。
              学んだことはブログで共有しています。
            </p>
          </div>
          <NuxtLink
            to="/about"
            class="inline-block bg-[#e11d48] border border-[#e11d48] text-white rounded-full py-3 px-8 mt-8 cursor-pointer hover:bg-transparent hover:text-rose-600 transition-colors duration-300"
            >もっと詳しく</NuxtLink
          >
        </div>
        <div
          class="w-1/2 mt-8 md:mt-0 h-64 md:h-96 absolute -top-28 right-0"
          :style="{
            transform: `translate(${-tilt * 30 * motionScale * motionFactor}px, ${-roll * 30 * motionScale * motionFactor}px)`,
            transition: 'transform 0.2s ease-out',
          }"
        >
          <TechAnimation />
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="flex justify-between items-center">
      <h2 class="text-4xl font-en mb-8">Blog</h2>
      <NuxtLink
        class="text-[#e11d48] font-bold cursor-pointer hover:opacity-70 duration-300"
        to="/blog"
        >View All</NuxtLink
      >
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <article
        v-for="blog in blogs?.contents"
        :key="blog.id"
        class="border border-stone-600 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:opacity-90"
      >
        <NuxtLink :to="`/blog/${blog.id}`">
          <img
            :src="`${blog.eyecatch?.url}?w=380&h=200&fit=crop`"
            :width="blog.eyecatch?.width"
            :height="blog.eyecatch?.height"
            alt="ブログ画像"
            class="rounded-t-xl object-cover"
          />
          <div class="flex flex-col p-4">
            <h3 class="text-xl truncate">
              {{ blog.title }}
            </h3>
            <div class="flex justify-between items-center mt-5 text-sm opacity-55">
              <span>
                {{ blog.category?.name }}
              </span>
              <time :datetime="dateFormat(blog.publishedAt ?? blog.createdAt)">
                {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
              </time>
            </div>
          </div>
        </NuxtLink>
      </article>
    </div>
  </section>
</template>
