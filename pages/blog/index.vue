<script lang="ts" setup>
const { data: blogs, refresh } = await useAsyncData('blogs', () => $fetch('/api/blogs'), {
  lazy: true,
  server: true,
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    refresh()
  }
})
</script>

<template>
  <section class="mt-40">
    <h2 class="text-4xl font-en mb-8">Blog</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <article
        v-for="blog in blogs?.contents"
        :key="blog.id"
        class="border border-stone-600 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:opacity-90"
      >
        <NuxtLink :to="`/blog/${blog.id}`">
          <figure>
            <img
              :src="`${blog.eyecatch?.url}?w=380&h=200&fit=crop`"
              :width="blog.eyecatch?.width"
              :height="blog.eyecatch?.height"
              alt="ブログ画像"
              class="rounded-t-xl"
            />
          </figure>
          <div class="flex flex-col p-4">
            <h3 class="text-xl truncate">
              {{ blog.title }}
            </h3>
            <div class="flex justify-between items-center mt-5 text-sm opacity-55">
              <span>
                {{ blog.category?.name }}
              </span>
              <time class="" :datetime="dateFormat(blog.publishedAt ?? blog.createdAt)">
                {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
              </time>
            </div>
          </div>
        </NuxtLink>
      </article>
    </div>
  </section>
</template>
