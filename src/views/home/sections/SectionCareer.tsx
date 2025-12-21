import { Container, Heading, Stack } from '@chakra-ui/react'
import { markdownToProps } from '@utils/common/markdownToHtml'
import { useTranslation } from '@utils/i18n/useTranslation'
import { forwardRef } from 'react'

import { Section, SectionProps } from '@/components/layout/foundation/Section'
import { Prose } from '@/components/ui/prose'
import { BoxParallaxTilt } from '@/views/home/components/BoxParallaxTilt'

export const SectionCareer = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    const { t } = useTranslation('page_home.career')

    return (
      <Section ref={ref} py={24} {...props}>
        <Container>
          <Stack gap={12}>
            <Heading textAlign={'center'}>{t('title')}</Heading>

            <Stack
              direction={{ base: 'column', lg: 'row' }}
              align={'center'}
              gap={12}
            >
              <BoxParallaxTilt
                w={'full'}
                flex={1}
                ratio={1}
                src={'/images/companies/illuvium_hero.webp'}
                srcParallax={'/images/companies/illuvium_logo.svg'}
                alt={'Illuvium'}
                parallaxProps={{
                  inset: '20%',
                  transform: 'translateZ(160px)',
                }}
                backgroundProps={{
                  WebkitMaskImage: `
                    radial-gradient(
                      ellipse 100% 80% at center,
                      rgba(0, 0, 0, 0.8) 0%,
                      transparent 50%
                    )
                  `,
                }}
              />

              <Prose flex={1} {...markdownToProps(t('illuvium.desc'))} />
            </Stack>

            <Stack
              direction={{ base: 'column', lg: 'row' }}
              align={'center'}
              gap={12}
            >
              <Prose flex={1} {...markdownToProps(t('simpli.desc'))} />

              <BoxParallaxTilt
                w={'full'}
                flex={1}
                ratio={1}
                inverse={true}
                src={'/images/companies/simpli_hero.webp'}
                srcParallax={'/images/companies/simpli_logo.svg'}
                alt={'Simpli'}
                parallaxProps={{ inset: '25%', transform: 'translateZ(160px)' }}
                backgroundProps={{
                  WebkitMaskImage: `
                    radial-gradient(
                      ellipse 100% 80% at center,
                      rgba(0, 0, 0, 0.8) 0%,
                      transparent 50%
                    )
                  `,
                }}
              />
            </Stack>
          </Stack>
        </Container>
      </Section>
    )
  },
)

SectionCareer.displayName = 'SectionCareer'
