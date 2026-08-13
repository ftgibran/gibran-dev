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
import { Tooltip } from '@/components/ui/tooltip'

export const SectionCodeLanguage = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    const { t } = useTranslation('page_home.code_language')

    const logos = [
      { icon: 'devicon-javascript-plain', label: 'JavaScript' },
      { icon: 'devicon-typescript-plain', label: 'TypeScript' },
      { icon: 'devicon-java-plain-wordmark', label: 'Java' },
      { icon: 'devicon-kotlin-plain-wordmark', label: 'Kotlin' },
    ]

    const secondaryLogos = [
      { icon: 'devicon-python-plain-wordmark', label: 'Python' },
      { icon: 'devicon-csharp-plain', label: 'C#' },
    ]

    return (
      <Section ref={ref} py={24} {...props}>
        <Container>
          <Stack gap={12} align={'center'}>
            <Heading textAlign={'center'}>{t('title')}</Heading>

            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={16}>
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

            <Stack gap={6} align={'center'}>
              <Heading as={'h3'} size={'h3'} color={'fg.muted'}>
                {t('secondary')}
              </Heading>

              <SimpleGrid columns={2} gap={12}>
                <For each={secondaryLogos}>
                  {(it) => (
                    <Tooltip
                      key={it.icon}
                      content={it.label}
                      openDelay={200}
                      closeDelay={100}
                      showArrow
                    >
                      <Box fontSize={'6xl'} color={'fg.muted'}>
                        <i className={it.icon} />
                      </Box>
                    </Tooltip>
                  )}
                </For>
              </SimpleGrid>
            </Stack>
          </Stack>
        </Container>
      </Section>
    )
  },
)

SectionCodeLanguage.displayName = 'SectionCodeLanguage'
