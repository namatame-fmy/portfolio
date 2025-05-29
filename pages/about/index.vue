<script lang="ts" setup>
import { ref } from 'vue'

// スキルデータ
const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 90 },
  { name: 'Wordpress', level: 60 },
  { name: 'Vue.js3', level: 70 },
  { name: 'TypeScript', level: 50 },
  { name: 'TailwindCSS', level: 80 },
]

// プロジェクト実績（詳細情報を追加）
const projects = [
  {
    title: 'チャットシステムのクライアント向け導入支援',
    description: 'CSチームと連携して、納品前のテスト・業務支援。',
    technologies: ['Javascript'],
    detailDescription: `
      <p class="mb-4">チャットシステムの導入に関する業務を担当しました。</p>
      <h4 class="font-semibold mb-2">主な業務</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>RPA開発チームと連携しながら改修業務。</li>
        <li>iframeに自動入力処理</li>
        <li>導入後の運用・保守</li>
        <li>システム具合（エラーなど）に対して、一次調査・確認。</li>
      </ul>
    `,
    period: '2024年4月 - 2024年6月予定',
    role: 'フロントエンド開発',
  },
  {
    title: 'ECサイトの運用・保守',
    description: 'ECサイトのCMSコーディング',
    technologies: ['HTML', 'CSS', 'Javascript', 'ecbeingCMS'],
    detailDescription: `
      <p class="mb-4">チャットシステムの導入に関する業務を担当しました。</p>
      <h4 class="font-semibold mb-2">主な業務</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>CMS運用、保守メンテナンス</li>
        <li>導入後の運用・保守。</li>
        <li>CMS新規ページ作成</li>
      </ul>
    `,
    period: '2025年1月 - 2025年2月',
    role: 'フロントエンド開発',
  },
  {
    title: 'ヘルスケア系のWebアプリ開発',
    description:
      'Vue.js 3とTypeScriptを使用したヘルスケア系Webアプリの開発。UI作成やPiniaでの状態管理とAxiosでのAPI通信実装。',
    technologies: ['Vue.js 3', 'TypeScript', 'Pinia', 'Axios', 'TailwindCSS'],
    detailDescription: `
      <p class="mb-4">健康管理を支援するWebアプリケーションの開発プロジェクトです。ドラックストアで採血し、日々の健康データを記録・管理し、可視化できる機能を提供。</p>
      <h4 class="font-semibold mb-2">主な業務:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>本部・ユーザー画面のUI作成</li>
        <li>登録機能・編集機能・削除機能・検索機能の実装</li>
        <li>レスポンシブ対応のUI</li>
      </ul>
      <h4 class="font-semibold mb-2">技術的な特徴:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>Vue.js 3のComposition APIを活用したコンポーネント設計(アトミックデザインを使用)</li>
        <li>Piniaによる状態管理</li>
        <li>AxiosによるRESTful API通信</li>
        <li>TailwindCSSによるUIスタイリング</li>
      </ul>
    `,
    media: {
      type: 'image',
      url: '/assets/img/project-healthcare.jpg',
    },
    period: '2023年11月 - 2024年12月',
    role: 'フロントエンド開発',
  },
  {
    title: 'ヘルスケア系企業のデザイン作成',
    description: 'コーポレートによるヘルスケア系企業のデザイン作成。',
    technologies: ['Figma', 'photoshop', 'Wordpress'],
    detailDescription: `
      <p class="mb-4">健康管理を支援する企業のコーポレートデザイン作成。</p>
    `,
    media: {
      type: 'image',
      url: '/assets/img/project-healthcare_design.png',
    },
    period: '2023年11月 - 2024年12月',
    role: 'デザイン',
  },
  {
    title: '企業採用ページサイトリニューアル',
    description:
      'ディレクション担当。ノーコードで作成された企業採用サイトのリニューアルとWordPressに移行。',
    technologies: ['HTML', 'CSS', 'Wordpress', 'JavaScript', 'PHP'],
    detailDescription: `
      <p class="mb-4">既存のノーコードツールで構築されていた企業の採用サイトを、WordPressベースの管理しやすいサイトにリニューアルしました。</p>
      <h4 class="font-semibold mb-2">プロジェクトの課題:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>ノーコードツールの制約による更新の困難さ</li>
        <li>SEO対策の不十分さ</li>
        <li>モバイル対応の改善</li>
      </ul>
      <h4 class="font-semibold mb-2">実施した改善:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>WordPressによるCMS化で更新作業を効率化</li>
        <li>SEO対策の実装とサイト速度の向上</li>
        <li>レスポンシブデザインの改善</li>
      </ul>
    `,
    media: {
      type: 'url',
      url: 'https://www.nsgrp.co.jp/recruit/',
      title: 'NSグループ採用サイト',
    },
    period: '2023年11月 - 2024年1月',
    role: 'ディレクション・コーダー',
  },
  {
    title: 'コラボカフェの新規ページ作成',
    description: 'ディレクションとコーダーを担当。',
    technologies: ['HTML', 'Scss', 'Javascript'],
    detailDescription: `
      <p class="mb-4">人気アニメとのコラボレーションカフェの特設サイト制作を担当しました。短期間でのリリースが必要でした。</p>
      <h4 class="font-semibold mb-2">担当業務:</h4>
      <ul class="list-disc list-inside mb-4 space-y-1">
        <li>要件定義とスケジュール管理</li>
        <li>HTML/CSS/JavaScriptによるフロントエンド実装</li>
        <li>アニメーション効果の実装</li>
        <li>各デバイスでの動作確認とテスト</li>
      </ul>
    `,
    media: {
      type: 'url',
      url: 'https://paselabo.pasela.co.jp/sentai/',
      title: 'NSグループ採用サイト',
    },
    period: '2023年8月 - 2023年9月',
    role: 'ディレクション・フロントエンド開発',
  },
]

// 提供サービス
const services = [
  {
    title: 'フロントエンド開発',
    description: 'Vue.js、Nuxt等を用いたWebアプリケーション開発',
  },
  {
    title: 'レスポンシブWebデザイン',
    description: 'モバイルファーストの考え方に基づいたレスポンシブなWebサイト制作',
  },
  {
    title: 'コーディング',
    description: '保守性の高いHTMLとCSS設計',
  },
]

// モーダル関連の状態管理
const isModalOpen = ref(false)
const selectedProject = ref<(typeof projects)[0] | null>(null)

// プロジェクトクリック時の処理
const openProjectModal = (project: (typeof projects)[0]) => {
  selectedProject.value = project
  isModalOpen.value = true
  // ボディのスクロールを無効にする
  document.body.style.overflow = 'hidden'
}

// モーダルを閉じる処理
const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
  // ボディのスクロールを有効にする
  document.body.style.overflow = 'auto'
}

// ESCキーでモーダルを閉じる
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

// キーボードイベントリスナーの追加
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  // コンポーネントが破棄される時にスクロールを復元
  document.body.style.overflow = 'auto'
})
</script>

<template>
  <!-- アバウトセクション -->
  <section class="mt-40">
    <div class="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-28">
      <img
        class="rounded-full shadow-lg"
        src="/assets/img/about-namatame.jpg"
        width="250"
        height="250"
        alt="生田目郁也"
      />
      <div class="md:w-1/2">
        <h2 class="text-4xl font-en mb-8">About</h2>
        <p class="mb-4 leading-relaxed">
          フロントエンジニアのフリーランスとして活動している生田目 郁也と申します。
          フリーランスになる前は、Web制作会社にてコーダーおよびディレクション業務に従事しており、コーディングからプロジェクト進行管理まで幅広い経験があります。
        </p>
        <p class="mb-4 leading-relaxed">
          最近では Vue.js 3 + TypeScript を用いた開発を行っていました。特に Pinia や Axios
          を活用した状態管理・API通信 を伴うヘルスケアアプリの開発経験があります。
          UI設計には、Tailwindcssを使用しました。
        </p>
        <p class="leading-relaxed">
          新しい技術を学ぶことが好きで、キャッチアップも早いため、
          貴社のプロジェクトに貢献できるよう努めますので、ぜひご相談ください！
        </p>
      </div>
    </div>
  </section>

  <!-- 実績セクション -->
  <section class="container mx-auto mt-40">
    <h2 class="text-4xl font-en mb-12">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="index"
        @click="openProjectModal(project)"
        class="rounded-lg overflow-hidden border border-stone-600 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col cursor-pointer group relative"
      >
        <!-- クリック可能であることを示すアイコン -->
        <div
          class="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            ></path>
          </svg>
        </div>

        <div class="p-6 flex-1 flex flex-col">
          <h3 class="text-xl font-semibold mb-3 duration-300">
            {{ project.title }}
          </h3>
          <p class="mb-4 text-sm min-h-[80px]">{{ project.description }}</p>
          <div class="mt-auto">
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="text-black px-3 py-1 bg-gray-100 rounded-full text-xs font-medium"
              >
                {{ tech }}
              </span>
            </div>
            <!-- 詳細を見るボタン -->
            <div
              class="text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span>詳細を見る</span>
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- モーダル -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
    @click.self="closeModal"
  >
    <!-- オーバーレイ -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

    <!-- モーダルコンテンツ -->
    <div
      class="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300"
    >
      <!-- ヘッダー -->
      <div class="flex items-center justify-between p-6 border-b border-gray-200">
        <h3 class="text-2xl font-bold text-gray-900">
          {{ selectedProject?.title }}
        </h3>
        <button
          @click="closeModal"
          class="p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <!-- ボディ -->
      <div class="overflow-y-auto max-h-[calc(90vh-120px)]">
        <div class="p-6">
          <!-- プロジェクト画像/URL -->
          <div class="mb-6">
            <div v-if="selectedProject?.media?.type === 'image'">
              <img
                :src="selectedProject.media.url"
                :alt="selectedProject.title"
                class="w-full h-64 object-cover rounded-lg shadow-md"
                @error="$event.target.style.display = 'none'"
              />
            </div>
            <div
              v-else-if="selectedProject?.media?.type === 'url'"
              class="bg-gray-50 rounded-lg p-6 border border-gray-200"
            >
              <div class="flex items-center justify-between mb-4">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">サイトURL</h4>
                  <p class="text-sm text-gray-600">
                    {{ selectedProject.media.title || 'プロジェクトサイト' }}
                  </p>
                </div>
              </div>
              <a
                :href="selectedProject.media.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 bg-[#e11d48] text-white rounded-lg hover:bg-[#e11d48] transition-colors duration-200 text-sm font-medium"
              >
                <span>サイトを開く</span>
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
              <p class="text-xs text-gray-500 mt-2">{{ selectedProject.media.url }}</p>
            </div>
          </div>

          <!-- プロジェクト情報 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">期間</h4>
              <p class="text-gray-600">{{ selectedProject?.period }}</p>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">担当役割</h4>
              <p class="text-gray-600">{{ selectedProject?.role }}</p>
            </div>
          </div>

          <!-- 使用技術 -->
          <div class="mb-6">
            <h4 class="font-semibold text-gray-900 mb-3">使用技術</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in selectedProject?.technologies"
                :key="tech"
                class="text-black px-3 py-1 bg-gray-100 rounded-full text-xs font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- 詳細説明 -->
          <div class="mb-6">
            <h4 class="font-semibold text-gray-900 mb-3">プロジェクト詳細</h4>
            <div
              class="prose prose-sm max-w-none text-gray-700"
              v-html="selectedProject?.detailDescription"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- スキルセットセクション -->
  <section class="container mx-auto mt-40">
    <h2 class="text-4xl font-en mb-8">Skillset</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <li
        v-for="skill in skills"
        :key="skill.name"
        class="w-full p-4 border border-stone-600 rounded-lg shadow-sm"
      >
        <div class="flex justify-between items-center mb-2">
          <span class="font-semibold">{{ skill.name }}</span>
          <span class="text-sm text-gray-600">{{ skill.level }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5">
          <div class="bg-[#38bdf8] h-2.5 rounded-full" :style="{ width: `${skill.level}%` }"></div>
        </div>
      </li>
    </ul>
  </section>

  <!-- サービスセクション -->
  <section class="container mx-auto mt-40">
    <h2 class="text-4xl font-en mb-8">Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="service in services"
        :key="service.title"
        class="p-6 border rounded-lg shadow-sm transition-all hover:shadow-md"
      >
        <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
        <p class="">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>
