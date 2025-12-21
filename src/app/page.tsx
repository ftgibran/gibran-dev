import { Metadata } from 'next'

import { Layout } from '@/components/layout/Layout'
import { Providers } from '@/components/layout/Providers'
import { ServerLayout } from '@/components/layout/ServerLayout'
import { getDefaultMetadata } from '@/server/getDefaultMetadata'
import { HomeView } from '@/views/home/HomeView'

export default function HomePage() {
  return (
    <ServerLayout>
      <Providers>
        <Layout>
          <HomeView />
        </Layout>
      </Providers>
    </ServerLayout>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return getDefaultMetadata()
}
