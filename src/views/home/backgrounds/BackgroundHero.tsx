import { Bleed, Box, BoxProps } from '@chakra-ui/react'
import { useIsInViewport } from '@utils/hooks/dom/useIsInViewport'
import { forwardRef, useRef } from 'react'

import { ReactPlayerBox } from '@/components/misc/ReactPlayerBox'

export const BackgroundHero = forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    const playerRef = useRef(null)
    const isInViewport = useIsInViewport(playerRef, '0px 0px 0px 0px')

    return (
      <Bleed
        ref={ref}
        pos={'absolute'}
        inset={0}
        zIndex={'hide'}
        blockStart={'navbar'}
        {...props}
      >
        <ReactPlayerBox
          pos={'absolute'}
          inset={0}
          url={'/videos/hero.webm'}
          playing={isInViewport}
          playsinline={true}
          WebkitMaskImage={'linear-gradient(to bottom, black 50%, transparent)'}
        />

        <Box
          ref={playerRef}
          pos={'absolute'}
          inset={0}
          backdropFilter={'blur({blurs.lg})'}
          bg={'blackAlpha.500'}
          WebkitMaskImage={
            'linear-gradient(to bottom, black, black {spacing.navbar}, transparent calc({spacing.navbar} + 20%), transparent)'
          }
        />
      </Bleed>
    )
  },
)

BackgroundHero.displayName = 'BackgroundHero'
