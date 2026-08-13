import type { NextConfig } from 'next'

const IMMUTABLE = 'public, max-age=31536000, immutable'

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },

  // Everything under these paths is content-addressed by hand (a new picture
  // gets a new filename), so it can be cached for as long as the browser likes.
  async headers() {
    return [
      { source: '/images/:path*', headers: [cacheControl(IMMUTABLE)] },
      { source: '/videos/:path*', headers: [cacheControl(IMMUTABLE)] },
      { source: '/icons/:path*', headers: [cacheControl(IMMUTABLE)] },
      { source: '/audios/:path*', headers: [cacheControl(IMMUTABLE)] },
      { source: '/fonts/:path*', headers: [cacheControl(IMMUTABLE)] },
    ]
  },
}

function cacheControl(value: string) {
  return { key: 'Cache-Control', value }
}

export default nextConfig
