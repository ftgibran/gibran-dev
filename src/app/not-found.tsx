import { Button, Center, Heading, Text, VStack } from '@chakra-ui/react'
import { Metadata } from 'next'
import NextLink from 'next/link'

import { Layout } from '@/components/layout/Layout'
import { Providers } from '@/components/layout/Providers'
import { ServerLayout } from '@/components/layout/ServerLayout'

// Plain Chakra rather than the `Section` foundation: `Section` has no
// 'use client' of its own and would evaluate the layout context on the server.
export default function NotFoundPage() {
  return (
    <ServerLayout>
      <Providers>
        <Layout>
          <Center flex={1} py={24} px={6}>
            <VStack gap={6} textAlign={'center'}>
              <Heading as={'h1'} size={'h1'}>
                {'404'}
              </Heading>

              <Text>{'This page does not exist.'}</Text>

              <Button asChild>
                <NextLink href={'/'}>{'Back to home'}</NextLink>
              </Button>
            </VStack>
          </Center>
        </Layout>
      </Providers>
    </ServerLayout>
  )
}

export const metadata: Metadata = {
  title: 'Page not found · Felipe Gibran',
  robots: { index: false, follow: true },
}
