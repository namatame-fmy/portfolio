export type Blog = {
  id: string
  createdAt: string
  updateAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  eyecatch?: {
    url: string
    width: number
    height: number
  }
  category?: {
    id: string
    name: string
  }
}
