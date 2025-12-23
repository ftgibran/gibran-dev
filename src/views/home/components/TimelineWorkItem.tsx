import {
  Box,
  Button,
  Circle,
  CloseButton,
  Dialog,
  Heading,
  HStack,
  Portal,
  Separator,
  Stack,
  StackProps,
} from '@chakra-ui/react'
import { markdownToProps } from '@utils/common/markdownToHtml'
import { useTranslation } from '@utils/i18n/useTranslation'
import NextLink from 'next/link'
import { forwardRef } from 'react'

import { ReactPlayerBox } from '@/components/misc/ReactPlayerBox'
import { Prose } from '@/components/ui/prose'
import { ParallaxTiltBox } from '@/views/home/components/ParallaxTiltBox'

export interface TimelineWorkItemProps extends StackProps {
  inverse?: boolean
  src: string
  srcParallax: string
  alt: string
  title: string
  desc: string
  width: number
  height: number
  url?: string
  videoUrl?: string
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
    url,
    videoUrl,
    ...rest
  } = props

  const { t } = useTranslation('page_home.timeline')

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
        <ParallaxTiltBox
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

          {videoUrl && (
            <Dialog.Root size={'xl'} placement={'center'}>
              <Dialog.Trigger asChild>
                <Button
                  w={'120px'}
                  maxW={'full'}
                  alignSelf={inverse ? 'flex-end' : 'flex-start'}
                >
                  {t('demo_cta')}
                </Button>
              </Dialog.Trigger>

              <Portal>
                <Dialog.Backdrop />

                <Dialog.Positioner>
                  <Dialog.Content overflow={'hidden'}>
                    <Dialog.Body p={0}>
                      <ReactPlayerBox
                        url={videoUrl}
                        playing={true}
                        isMuted={false}
                        controls={true}
                        pointerEvents={'auto'}
                      />
                    </Dialog.Body>

                    <Dialog.CloseTrigger top={2} right={2} asChild>
                      <CloseButton variant={'solid'} />
                    </Dialog.CloseTrigger>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          )}

          {url && (
            <Button
              w={'120px'}
              maxW={'full'}
              alignSelf={inverse ? 'flex-end' : 'flex-start'}
              asChild
            >
              <NextLink href={url} target={'_blank'}>
                {t('demo_cta')}
              </NextLink>
            </Button>
          )}
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
