<script lang="ts" setup>
const route = useRoute()
const blogId = route.params.id as string

const { data: blog, refresh } = await useAsyncData(
  `blog-${blogId}`,
  () => $fetch(`/api/blog/${blogId}`),
  {
    lazy: true,
    server: true,
  }
)

onMounted(() => {
  if (typeof window !== 'undefined') {
    refresh()
  }
})
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
</template>
