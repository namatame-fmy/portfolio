<script lang="ts" setup>
// スキルデータ
const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 90 },
  { name: 'Wordpress', level: 70 },
  { name: 'Vue.js3', level: 80 },
  { name: 'Nuxt3', level: 50 },
  { name: 'TypeScript', level: 60 },
  { name: 'TailwindCSS', level: 80 },
]

// プロジェクト実績
const projects = [
  {
    title: 'ヘルスケア系のWebアプリ開発',
    description:
      'Vue.js 3とTypeScriptを使用したヘルスケア系Webアプリの開発。UI作成やPiniaでの状態管理とAxiosでのAPI通信実装。',
    technologies: ['Vue.js 3', 'TypeScript', 'Pinia', 'Axios', 'TailwindCSS'],
    achievements: 'ユーザー登録率が30%向上、アプリ利用時間が平均15分増加',
  },
  {
    title: '企業採用ページサイトリニューアル',
    description:
      'ディレクション担当。ノーコードで作成された企業採用サイトのリニューアルとWordPressに移行。',
    technologies: ['Wordpress', 'JavaScript', 'PHP'],
    achievements: 'ページ読み込み速度を40%改善、モバイルユーザーのCVR向上',
  },
  {
    title: 'コラボカフェの新規ページ作成',
    description: 'ディレクションとコーダーを担当。',
    technologies: ['HTML', 'Scss', 'Javascript'],
    achievements: 'モバイルでのコンバージョン率を25%向上',
  },
]

// 提供サービス
const services = [
  {
    title: 'フロントエンド開発',
    description: 'Vue.js、Nuxt、React等を用いたWebアプリケーション開発',
  },
  {
    title: 'レスポンシブWebデザイン',
    description: 'モバイルファーストの考え方に基づいたレスポンシブなWebサイト制作',
  },
  {
    title: 'コーディング',
    description: '保守性の高いセマンティックなHTMLとCSS設計',
  },
  // {
  //   title: 'ディレクション',
  //   description: '要件定義からリリースまでのプロジェクト管理'
  // }
]
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
        class="rounded-lg overflow-hidden border border-stone-600 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
      >
        <div class="p-6 flex-1 flex flex-col">
          <h3 class="text-xl font-semibold mb-3">{{ project.title }}</h3>
          <p class="mb-4 text-sm min-h-[80px]">{{ project.description }}</p>
          <div class="mt-auto">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="text-black px-3 py-1 bg-gray-100 rounded-full text-xs font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

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
