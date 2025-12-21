import {
  Box,
  Circle,
  Heading,
  HStack,
  Separator,
  Stack,
  StackProps,
} from '@chakra-ui/react'
import { markdownToProps } from '@utils/common/markdownToHtml'
import { forwardRef } from 'react'

import { Prose } from '@/components/ui/prose'
import { BoxParallaxTilt } from '@/views/home/components/BoxParallaxTilt'

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
        <BoxParallaxTilt
          flex={1}
          ratio={width / height}
          transform={{ base: 'none', lg: 'scale(1.3)' }}
          src={src}
          alt={alt}
          srcParallax={srcParallax}
          inverse={inverse}
          hoverable={true}
        />

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
