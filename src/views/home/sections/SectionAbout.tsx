import { Container, Heading, Stack } from '@chakra-ui/react'
import { useTranslation } from '@utils/i18n/useTranslation'
import { forwardRef } from 'react'

import { Section, SectionProps } from '@/components/layout/foundation/Section'
import { Prose } from '@/components/ui/prose'

export const SectionAbout = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    const { t } = useTranslation('page_home.about_me')

    return (
      <Section ref={ref} py={24} {...props}>
        <Container>
          <Stack gap={12} align={'center'}>
            <Heading textAlign={'center'}>{t('title')}</Heading>

            <Prose
              maxW={'xl'}
              textAlign={'center'}
              dangerouslySetInnerHTML={{ __html: t('body') }}
            />
          </Stack>
        </Container>
      </Section>
    )
  },
)

SectionAbout.displayName = 'SectionAbout'
