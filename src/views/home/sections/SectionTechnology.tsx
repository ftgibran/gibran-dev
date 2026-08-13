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
import { Tooltip } from '@/components/ui/tooltip'

export const SectionTechnology = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    const { t } = useTranslation('page_home.technology')

    const logos = [
      { icon: 'devicon-nextjs-original-wordmark', label: 'Next.js' },
      { icon: 'devicon-vercel-original-wordmark', label: 'Vercel' },
      { icon: 'devicon-react-original-wordmark', label: 'React' },
      { icon: 'devicon-vuejs-plain-wordmark', label: 'Vue' },
      { icon: 'devicon-chakraui-plain-wordmark', label: 'Chakra UI' },
      { icon: 'devicon-tailwindcss-plain-wordmark', label: 'Tailwind CSS' },
      { icon: 'devicon-storybook-plain-wordmark', label: 'Storybook' },
      { icon: 'devicon-nodejs-plain-wordmark', label: 'Node.js' },
      { icon: 'devicon-spring-original-wordmark', label: 'Spring Boot' },
      { icon: 'devicon-prisma-original-wordmark', label: 'Prisma' },
      { icon: 'devicon-postgresql-plain-wordmark', label: 'PostgreSQL' },
      { icon: 'devicon-redis-plain-wordmark', label: 'Redis' },
      { icon: 'devicon-supabase-plain-wordmark', label: 'Supabase' },
      { icon: 'devicon-docker-plain-wordmark', label: 'Docker' },
      { icon: 'devicon-amazonwebservices-plain-wordmark', label: 'AWS' },
    ]

    return (
      <Section ref={ref} py={24} {...props}>
        <Container>
          <VStack gap={12}>
            <Heading textAlign={'center'}>{t('title')}</Heading>

            <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 6 }} gap={16}>
              <For each={logos}>
                {(it) => (
                  <Tooltip
                    key={it.icon}
                    content={it.label}
                    openDelay={200}
                    closeDelay={100}
                    showArrow
                  >
                    <Box fontSize={'8xl'} color={'fg.emphasized'}>
                      <i className={it.icon} />
                    </Box>
                  </Tooltip>
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
