import { Box, BoxProps } from '@chakra-ui/react'
import { useIsInViewport } from '@utils/hooks/dom/useIsInViewport'
import { FC, useRef } from 'react'

import { ReactPlayerBox } from '@/components/misc/ReactPlayerBox'

export const BackgroundCloud: FC<BoxProps> = (props) => {
  const ref = useRef(null)
  const isInViewport = useIsInViewport(ref)

  return (
    <Box ref={ref} {...props}>
      <ReactPlayerBox
        url={'/videos/timeline.webm'}
        posterUrl={'/videos/posters/timeline.webp'}
        playing={isInViewport}
        playsinline={true}
        filter={'hue-rotate(70deg)'}
        WebkitMaskImage={
          'linear-gradient(to bottom, transparent, black, black, transparent)'
        }
      />
    </Box>
  )
}

BackgroundCloud.displayName = 'BackgroundCloud'
