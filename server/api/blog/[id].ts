import { Blog } from '~/types/blog'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const blogId = event.context.params.id

  try {
    const response = await fetch(
      `https://${config.public.microcmsServiceDomain}.microcms.io/api/v1/blogs/${blogId}`,
      {
        headers: {
          'X-MICROCMS-API-KEY': config.microcmsApiKey,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    return data as Blog
  } catch (error) {
    console.error('Error fetching blog:', error)
    return null
  }
})
