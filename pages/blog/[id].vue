<script lang="ts" setup>
import type { Blog } from '~/types/blog'

const route = useRoute()
const id = route.params.id as string

const { data: blog } = await useAsyncData(
  'blogs',
  () =>
    useMicroCMSGetListDetail<Blog>({
      endpoint: 'blogs',
      contentId: id,
    }),
  {
    server: true,
    lazy: false,
    transform: (data) => {
      return data.data.value
    },
  }
)
</script>

<template>
  <template v-if="blog">
    <div class="mt-40">
      <div
        class="items-center gap-10 mt-5 text-sm opacity-55"
        :class="!blog.category?.name ? 'block' : 'flex'"
      >
        <span>{{ blog.category?.name }}</span>
        <time :datetime="dateFormat(blog.publishedAt ?? blog.createdAt)">
          {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
        </time>
      </div>
      <img
        class="mt-6"
        :src="blog.eyecatch?.url"
        :width="blog.eyecatch?.width"
        :height="blog.eyecatch?.height"
        alt="ブログ画像"
      />
      <h1 class="text-2xl md:text-4xl my-6">{{ blog.title }}</h1>
      <div class="">
        <div v-html="blog.content"></div>
      </div>
    </div>
  </template>
  <template v-else>
    <p>記事がありません。</p>
  </template>
</template>
