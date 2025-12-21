import {
  AspectRatio,
  Box,
  Center,
  Circle,
  Heading,
  HStack,
  Separator,
  Stack,
  StackProps,
} from '@chakra-ui/react'
import { markdownToProps } from '@utils/common/markdownToHtml'
import { useViewportYProgress } from '@utils/hooks/dom/useViewportYProgress'
import { forwardRef, useState } from 'react'
import ReactParallaxTilt from 'react-parallax-tilt'

import { ImageBox } from '@/components/misc/ImageBox'
import { Prose } from '@/components/ui/prose'

export interface TimelineWorkItemProps extends StackProps {
  inverse?: boolean
  src: string
  srcParallax: string
  alt: string
  title: string
  desc: string
  width: number
  height: number
}

export const TimelineWorkItem = forwardRef<
  HTMLDivElement,
  TimelineWorkItemProps
>((props, ref) => {
  const {
    inverse,
    src,
    srcParallax,
    alt,
    title,
    desc,
    width,
    height,
    ...rest
  } = props

  const [isHover, setIsHover] = useState(false)
  const { ref: tiltRef, yProgress } = useViewportYProgress()

  return (
    <Stack
      ref={ref}
      gap={0}
      w={{ base: '90%', lg: 'calc(50% + 2rem)' }}
      alignSelf={inverse ? 'flex-end' : 'flex-start'}
      {...rest}
    >
      <HStack
        gap={0}
        px={{ base: 0, lg: 6 }}
        mb={{ base: '16%', lg: '16%' }}
        data-content
        flexDir={inverse ? 'row-reverse' : 'row'}
        textAlign={inverse ? 'right' : 'left'}
      >
        <Stack flex={1}>
          <AspectRatio
            ratio={width / height}
            transform={{ base: 'none', lg: 'scale(1.3)' }}
          >
            <Box
              ref={tiltRef}
              overflow={'visible !important'}
              cursor={'pointer'}
              userSelect={'none'}
            >
              <ReactParallaxTilt
                perspective={1000}
                tiltReverse={true}
                tiltAngleYManual={!isHover ? (inverse ? 30 : -30) : undefined}
                tiltAngleXManual={
                  !isHover ? (yProgress - 50) * -0.3 : undefined
                }
                onEnter={() => setIsHover(true)}
                onLeave={() => setIsHover(false)}
                style={{
                  position: 'absolute',
                  inset: 0,
                  transformStyle: 'preserve-3d',
                  backgroundImage: `url(${src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPositionX: '50%',
                  backgroundPositionY: '50%',
                  borderRadius: '1rem',
                }}
              >
                <Center
                  pos={'absolute'}
                  inset={'1rem'}
                  transform={'translateZ(80px)'}
                >
                  <ImageBox
                    src={srcParallax}
                    alt={alt}
                    fill={true}
                    sizes={
                      '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    }
                    objectFit={'contain'}
                  />
                </Center>
              </ReactParallaxTilt>
            </Box>
          </AspectRatio>
        </Stack>

        <Separator
          float={'left'}
          pos={'relative'}
          zIndex={'hide'}
          w={'6rem'}
          size={'lg'}
          borderColor={'primary.50'}
          filter={'drop-shadow({shadows.glow})'}
          hideBelow={'lg'}
        />

        <Circle
          pos={'relative'}
          float={'right'}
          size={'1rem'}
          bg={'white'}
          shadow={'focus'}
          hideBelow={'lg'}
        />
      </HStack>

      <HStack
        gap={6}
        flexDir={inverse ? 'row-reverse' : 'row'}
        textAlign={inverse ? 'right' : 'left'}
      >
        <Stack
          gap={4}
          p={4}
          borderRadius={'l4'}
          layerStyle={{ base: 'obsidian', lg: 'none' }}
        >
          <Heading as={'h3'} size={'h3'} textAlign={'center'}>
            {title}
          </Heading>

          <Prose flex={1} {...markdownToProps(desc)} />
        </Stack>

        <Box
          float={'left'}
          pos={'relative'}
          zIndex={'hide'}
          w={'6rem'}
          hideBelow={'lg'}
        />
      </HStack>
    </Stack>
  )
})

TimelineWorkItem.displayName = 'TimelineWorkItem'
