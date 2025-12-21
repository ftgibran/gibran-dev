import { Container, Heading, Stack } from '@chakra-ui/react'
import { markdownToProps } from '@utils/common/markdownToHtml'
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
              maxW={'container.md'}
              textAlign={'center'}
              {...markdownToProps(t('body'))}
            />
          </Stack>
        </Container>
      </Section>
    )
  },
)

SectionAbout.displayName = 'SectionAbout'
