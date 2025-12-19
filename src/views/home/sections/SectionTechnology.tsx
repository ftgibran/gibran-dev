import {
  Box,
  Container,
  For,
  Heading,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import { useTranslation } from '@utils/i18n/useTranslation'
import { forwardRef } from 'react'

import { Section, SectionProps } from '@/components/layout/foundation/Section'

export const SectionTechnology = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    const { t } = useTranslation('page_home.technology')

    const logos = [
      'devicon-nextjs-original-wordmark',
      'devicon-vercel-original-wordmark',
      'devicon-react-original-wordmark',
      'devicon-vuejs-plain-wordmark',
      'devicon-chakraui-plain-wordmark',
      'devicon-tailwindcss-plain-wordmark',
      'devicon-storybook-plain-wordmark',
      'devicon-nodejs-plain-wordmark',
      'devicon-mysql-plain-wordmark',
      'devicon-postgresql-plain-wordmark',
      'devicon-docker-plain-wordmark',
      'devicon-amazonwebservices-plain-wordmark',
    ]

    return (
      <Section ref={ref} py={24} {...props}>
        <Container>
          <VStack gap={12}>
            <Heading textAlign={'center'}>{t('title')}</Heading>

            <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 6 }} gap={16}>
              <For each={logos}>
                {(it) => (
                  <Box key={it} fontSize={'8xl'} color={'fg.emphasized'}>
                    <i className={it} />
                  </Box>
                )}
              </For>
            </SimpleGrid>
          </VStack>
        </Container>
      </Section>
    )
  },
)

SectionTechnology.displayName = 'SectionTechnology'
