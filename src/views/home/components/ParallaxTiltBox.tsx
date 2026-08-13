import {
  AspectRatio,
  AspectRatioProps,
  Box,
  BoxProps,
  Center,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useViewportYProgress } from '@utils/hooks/dom/useViewportYProgress'
import dynamic from 'next/dynamic'
import { FC, useMemo, useState } from 'react'

import { ImageBox } from '@/components/misc/ImageBox'

// Server-rendered on purpose, see the note in HeroIntro: it puts the timeline
// <img> in the HTML with its dimensions, which is what keeps those cards from
// shifting once the chunk lands.
const ReactParallaxTilt = dynamic(() => import('react-parallax-tilt'))

export interface ParallaxTiltBoxProps extends AspectRatioProps {
  hoverable?: boolean
  inverse?: boolean
  src: string
  srcParallax: string
  alt: string
  parallaxProps?: BoxProps
  backgroundProps?: BoxProps
}

export const ParallaxTiltBox: FC<ParallaxTiltBoxProps> = (props) => {
  const {
    hoverable,
    inverse,
    src,
    srcParallax,
    alt,
    parallaxProps,
    backgroundProps,
    ...rest
  } = props

  const { ref, yProgress } = useViewportYProgress()
  const [_isHover, setIsHover] = useState(false)

  const isHover = useMemo(() => {
    return hoverable ? _isHover : false
  }, [_isHover, hoverable])

  const tiltAngleYManual = useBreakpointValue({
    base: inverse ? 15 : -15,
    lg: !isHover ? (inverse ? 30 : -30) : undefined,
  })

  return (
    <AspectRatio {...rest}>
      <Box
        ref={ref}
        overflow={'visible !important'}
        cursor={hoverable ? 'pointer' : 'default'}
        userSelect={'none'}
      >
        <ReactParallaxTilt
          perspective={1000}
          tiltReverse={true}
          tiltAngleYManual={tiltAngleYManual}
          tiltAngleXManual={!isHover ? (yProgress - 50) * -0.3 : undefined}
          onEnter={() => setIsHover(true)}
          onLeave={() => setIsHover(false)}
          style={{
            position: 'absolute',
            inset: 0,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* An <ImageBox> rather than a CSS background: `url()` backgrounds
              skip next/image entirely, so these 16 card backdrops used to ship
              unoptimized and, worse, eagerly. */}
          <Box
            pos={'absolute'}
            inset={0}
            transformStyle={'preserve-3d'}
            borderRadius={'1rem'}
            {...backgroundProps}
          >
            <ImageBox
              src={src}
              alt={''}
              fill={true}
              sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
              objectFit={'cover'}
              objectPosition={'center'}
              borderRadius={'1rem'}
            />
          </Box>

          <Center
            pos={'absolute'}
            inset={'1rem'}
            transform={'translateZ(80px)'}
            {...parallaxProps}
          >
            <ImageBox
              src={srcParallax}
              alt={alt}
              fill={true}
              sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
              objectFit={'contain'}
            />
          </Center>
        </ReactParallaxTilt>
      </Box>
    </AspectRatio>
  )
}

ParallaxTiltBox.displayName = 'ParallaxTiltBox'
