import { Metadata } from 'next'

import { Layout } from '@/components/layout/Layout'
import { HomeView } from '@/views/home/HomeView'

export default function HomePage() {
  return (
    <Layout>
      <HomeView />
    </Layout>
  )
}

export const metadata: Metadata = {
  title: 'Coding Everywhere',
  description: '',
}
