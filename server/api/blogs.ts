import { Blog } from '~/types/blog'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  // limitが指定されていない場合は全件取得
  const limit = query.limit ? Number(query.limit) : undefined

  try {
    const url = new URL(`https://${config.public.microcmsServiceDomain}.microcms.io/api/v1/blogs`)
    url.searchParams.set('orders', '-publishedAt')

    if (limit) {
      url.searchParams.set('limit', limit.toString())
    }

    const response = await fetch(url.toString(), {
      headers: {
        'X-MICROCMS-API-KEY': config.microcmsApiKey,
      },
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    return data as { contents: Blog[]; totalCount: number }
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return { contents: [] as Blog[], totalCount: 0 }
  }
})
