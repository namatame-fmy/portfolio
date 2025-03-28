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

// 動的にコンテンツにTailwindスタイルを追加する関数
const applyContentStyles = (htmlContent: string) => {
  // ダークモード対応のコンテンツスタイルを定義
  const defaultStyles = [
    'prose', // prose クラスで基本的なタイポグラフィスタイルを適用
    'dark:prose-invert', // ダークモード時に色を反転
    'prose-h2:text-2xl',
    'prose-h3:text-xl',
    'prose-p:my-4',
    'prose-a:text-blue-600',
    'dark:prose-a:text-blue-400', // ダークモード時のリンク色
    'prose-a:underline',
    'prose-img:rounded-lg',
    // 'prose-code:bg-gray-100',
    'dark:prose-code:bg-gray-800', // ダークモード時のコードブロック背景
    'prose-code:p-1',
    'prose-code:rounded',
  ].join(' ')

  // コンテンツを div でラップし、スタイルを適用
  return `<div class="${defaultStyles}">${htmlContent}</div>`
}
</script>

<template>
  <template v-if="blog">
    <div class="mt-40 dark:text-gray-100 transition-colors duration-300">
      <div
        class="items-center gap-10 mt-5 text-sm opacity-55 dark:opacity-70"
        :class="!blog.category?.name ? 'block' : 'flex'"
      >
        <span>{{ blog.category?.name }}</span>
        <time :datetime="dateFormat(blog.publishedAt ?? blog.createdAt)" class="dark:text-gray-300">
          {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
        </time>
      </div>
      <img
        class="mt-6 rounded-lg dark:brightness-75 transition-all duration-300"
        :src="blog.eyecatch?.url"
        :width="blog.eyecatch?.width"
        :height="blog.eyecatch?.height"
        alt="ブログ画像"
      />
      <h1 class="text-2xl md:text-4xl my-6 dark:text-white">{{ blog.title }}</h1>
      <div>
        <!-- applyContentStyles 関数で動的にスタイルを適用 -->
        <div v-html="applyContentStyles(blog.content)"></div>
      </div>
    </div>
  </template>
</template>
