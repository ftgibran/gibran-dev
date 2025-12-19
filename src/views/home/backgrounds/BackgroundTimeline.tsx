import { Box, BoxProps, Center, Separator } from '@chakra-ui/react'
import { useIsInViewport } from '@utils/hooks/dom/useIsInViewport'
import { forwardRef, useRef } from 'react'

import { ReactPlayerBox } from '@/components/misc/ReactPlayerBox'

export const BackgroundTimeline = forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    const playerRef = useRef(null)
    const isInViewport = useIsInViewport(playerRef)

    return (
      <Center ref={ref} pos={'absolute'} inset={0} zIndex={'hide'} {...props}>
        <Box
          ref={playerRef}
          pos={'absolute'}
          inset={0}
          opacity={0.15}
          bg={'bg'}
          backgroundImage={`
            repeating-radial-gradient(
              circle at center,
              transparent 0,
              {colors.bg} 4rem
            ),
            repeating-linear-gradient(
              {colors.primary.solid},
              {colors.secondary.muted}
            )
          `}
          WebkitMaskImage={
            'linear-gradient(to bottom, transparent, black, black, transparent)'
          }
        />

        <ReactPlayerBox
          pos={'absolute'}
          top={0}
          inset={0}
          opacity={0.5}
          url={'/videos/timeline.webm'}
          playing={isInViewport}
          WebkitMaskImage={
            'linear-gradient(to bottom, transparent, black, black, transparent)'
          }
          filter={'hue-rotate(70deg)'}
        />

        <Separator
          pos={'absolute'}
          insetY={0}
          size={'lg'}
          orientation={'vertical'}
          borderColor={'primary.50'}
          filter={'drop-shadow({shadows.glow})'}
        />
      </Center>
    )
  },
)

BackgroundTimeline.displayName = 'BackgroundTimeline'
