import { type MetadataRoute } from 'next'

const BASE_URL = 'https://gibran.dev'

const PATHS = [''] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) => [
    {
      url: `${BASE_URL}${path || '/'}`,
      priority: path === '' ? 1 : 0.8,
      alternates: {
        languages: {
          'en-US': `${BASE_URL}${path || '/'}`,
          'pt-BR': `${BASE_URL}/pt-BR${path}`,
        },
      },
    },
    {
      url: `${BASE_URL}/pt-BR${path}`,
      priority: path === '' ? 0.9 : 0.7,
      alternates: {
        languages: {
          'en-US': `${BASE_URL}${path || '/'}`,
          'pt-BR': `${BASE_URL}/pt-BR${path}`,
        },
      },
    },
  ])
}
