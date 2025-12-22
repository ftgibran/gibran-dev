import {
  AspectRatio,
  AspectRatioProps,
  Box,
  BoxProps,
  Center,
} from '@chakra-ui/react'
import { useViewportYProgress } from '@utils/hooks/dom/useViewportYProgress'
import { FC, useMemo, useState } from 'react'
import ReactParallaxTilt from 'react-parallax-tilt'

import { ImageBox } from '@/components/misc/ImageBox'

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
          tiltAngleYManual={!isHover ? (inverse ? 30 : -30) : undefined}
          tiltAngleXManual={!isHover ? (yProgress - 50) * -0.3 : undefined}
          onEnter={() => setIsHover(true)}
          onLeave={() => setIsHover(false)}
          style={{
            position: 'absolute',
            inset: 0,
            transformStyle: 'preserve-3d',
          }}
        >
          <Box
            pos={'absolute'}
            inset={0}
            transformStyle={'preserve-3d'}
            backgroundImage={`url(${src})`}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
            backgroundPositionX={'50%'}
            backgroundPositionY={'50%'}
            borderRadius={'1rem'}
            {...backgroundProps}
          />

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
