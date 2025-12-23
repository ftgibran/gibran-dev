import { Card, Container, Heading, Stack } from '@chakra-ui/react'
import { markdownToProps } from '@utils/common/markdownToHtml'
import { useTranslation } from '@utils/i18n/useTranslation'
import { forwardRef } from 'react'

import { Section, SectionProps } from '@/components/layout/foundation/Section'
import { ImageBox } from '@/components/misc/ImageBox'
import { Prose } from '@/components/ui/prose'

export const SectionAi = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    const { t } = useTranslation('page_home.ai')

    return (
      <Section ref={ref} py={24} {...props}>
        <Container maxW={'container.lg'}>
          <Stack gap={12} align={'center'}>
            <Heading textAlign={'center'}>{t('title')}</Heading>

            <Stack
              gap={12}
              direction={{ base: 'column', md: 'row' }}
              align={'center'}
            >
              <ImageBox
                maxW={'xs'}
                src={'/images/home/ai.webp'}
                alt={'AI'}
                width={'600'}
                height={'900'}
                blendMode={'lighten'}
                WebkitMaskImage={`
                  radial-gradient(
                  ellipse 120% 120% at center,
                  rgba(0, 0, 0, 0.8) 0%,
                  transparent 50%
                )`}
              />

              <Card.Root flex={1} size={'lg'} variant={'subtle'}>
                <Card.Body>
                  <Prose flex={1} {...markdownToProps(t('body'))} />
                </Card.Body>
              </Card.Root>
            </Stack>
          </Stack>
        </Container>
      </Section>
    )
  },
)

SectionAi.displayName = 'SectionAi'
