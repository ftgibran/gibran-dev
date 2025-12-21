import { Box, BoxProps, Container, For, Stack } from '@chakra-ui/react'
import { forwardRef } from 'react'

import { BackgroundTimeline } from '@/views/home/backgrounds/BackgroundTimeline'
import { TimelineWorkItem } from '@/views/home/components/TimelineWorkItem'
import { useTimeline } from '@/views/home/hooks/useTimeline'

export const TimelineWork = forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    const timelineList = useTimeline()

    return (
      <Box ref={ref} pos={'relative'} {...props}>
        <BackgroundTimeline />

        <Container>
          <Stack py={24} gap={24}>
            <For each={timelineList}>
              {(it, i) => (
                <TimelineWorkItem key={it.src} inverse={!!(i % 2)} {...it} />
              )}
            </For>
          </Stack>
        </Container>
      </Box>
    )
  },
)

TimelineWork.displayName = 'TimelineWork'
