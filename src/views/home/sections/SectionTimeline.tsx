import { Container, Heading, Stack } from '@chakra-ui/react'
import { useTranslation } from '@utils/i18n/useTranslation'
import { forwardRef } from 'react'

import { Section, SectionProps } from '@/components/layout/foundation/Section'
import { TimelineWork } from '@/views/home/components/TimelineWork'

export const SectionTimeline = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    const { t } = useTranslation('page_home.timeline')

    return (
      <Section ref={ref} py={24} fillViewport={true} {...props}>
        <Stack gap={24}>
          <Container>
            <Heading textAlign={'center'}>{t('title')}</Heading>
          </Container>

          <TimelineWork />
        </Stack>
      </Section>
    )
  },
)

SectionTimeline.displayName = 'SectionTimeline'
