import { Box, BoxProps, Center } from '@chakra-ui/react'
import { useIsInViewport } from '@utils/hooks/dom/useIsInViewport'
import { forwardRef, useRef } from 'react'

import { ReactPlayerBox } from '@/components/misc/ReactPlayerBox'

export const BackgroundContact = forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    const playerRef = useRef(null)
    const isInViewport = useIsInViewport(playerRef)

    return (
      <Center
        ref={ref}
        pos={'absolute'}
        inset={0}
        zIndex={'hide'}
        WebkitMaskImage={
          'linear-gradient(to bottom, transparent, black, black, transparent)'
        }
        {...props}
      >
        <ReactPlayerBox
          pos={'absolute'}
          inset={0}
          url={'/videos/footer.webm'}
          playing={isInViewport}
          filter={'hue-rotate(-40deg) brightness(1.5)'}
        />

        <Box
          ref={playerRef}
          pos={'absolute'}
          inset={0}
          backdropFilter={'blur({blurs.lg})'}
          WebkitMaskImage={
            'linear-gradient(to bottom, black, transparent, transparent, black)'
          }
        />
      </Center>
    )
  },
)

BackgroundContact.displayName = 'BackgroundContact'
