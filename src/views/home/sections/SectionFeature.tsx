import {
  Container,
  For,
  Heading,
  SimpleGrid,
  Span,
  Stack,
  VStack,
} from '@chakra-ui/react'
import { useTranslation } from '@utils/i18n/useTranslation'
import { forwardRef } from 'react'

import { Section, SectionProps } from '@/components/layout/foundation/Section'
import { ImageBox } from '@/components/misc/ImageBox'
import { useFeatures } from '@/views/home/hooks/useFeatures'

export const SectionFeature = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    const features = useFeatures()

    const { t } = useTranslation('page_home.feature')

    return (
      <Section ref={ref} py={24} {...props}>
        <Container>
          <VStack gap={12}>
            <Heading textAlign={'center'}>{t('title')}</Heading>

            <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gapX={8} gapY={16}>
              <For each={features}>
                {(it, i) => (
                  <VStack
                    key={[it.title, i].join('-')}
                    maxW={'sm'}
                    textAlign={'center'}
                  >
                    <ImageBox
                      src={it.src}
                      alt={it.alt}
                      maxW={32}
                      width={'512'}
                      height={'512'}
                    />

                    <Stack minH={16} direction={'column-reverse'}>
                      <Heading as={'h3'} size={'h3'}>
                        {it.title}
                      </Heading>
                    </Stack>

                    <Span color={'fg.emphasized'}>{it.desc}</Span>
                  </VStack>
                )}
              </For>
            </SimpleGrid>
          </VStack>
        </Container>
      </Section>
    )
  },
)

SectionFeature.displayName = 'SectionFeature'
