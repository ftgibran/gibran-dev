import {
  Box,
  Container,
  For,
  Heading,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { useTranslation } from '@utils/i18n/useTranslation'
import { forwardRef } from 'react'

import { Section, SectionProps } from '@/components/layout/foundation/Section'

export const SectionCodeLanguage = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    const { t } = useTranslation('page_home.code_language')

    const logos = [
      'devicon-javascript-plain',
      'devicon-typescript-plain',
      'devicon-java-plain-wordmark',
      'devicon-kotlin-plain-wordmark',
    ]

    return (
      <Section ref={ref} py={24} {...props}>
        <Container>
          <Stack gap={12} align={'center'}>
            <Heading textAlign={'center'}>{t('title')}</Heading>

            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={16}>
              <For each={logos}>
                {(it) => (
                  <Box key={it} fontSize={'8xl'} color={'fg.emphasized'}>
                    <i className={it} />
                  </Box>
                )}
              </For>
            </SimpleGrid>
          </Stack>
        </Container>
      </Section>
    )
  },
)

SectionCodeLanguage.displayName = 'SectionCodeLanguage'
