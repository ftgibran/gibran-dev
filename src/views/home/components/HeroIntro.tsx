import { Box, Heading, StackProps, VStack } from '@chakra-ui/react'
import { createGradientBorder } from '@utils/chakra/createGradientBorder'
import { markdownToProps } from '@utils/common/markdownToHtml'
import { useTranslation } from '@utils/i18n/useTranslation'
import dynamic from 'next/dynamic'
import { forwardRef } from 'react'

import { ImageBox } from '@/components/misc/ImageBox'
import { Prose } from '@/components/ui/prose'

// Code-split, but server-rendered: the library's render() is a plain <div> and
// every DOM call sits in componentDidMount. Keeping it in the server tree is
// what lets the avatar below reach the HTML and get its preload hint.
const ReactParallaxTilt = dynamic(() => import('react-parallax-tilt'))

export const HeroIntro = forwardRef<HTMLDivElement, StackProps>(
  (props, ref) => {
    const { t } = useTranslation('page_home.main')

    return (
      <VStack ref={ref} gap={8} textAlign={'center'} {...props}>
        <Heading as={'h1'} size={'h1'}>
          {t('title')}
        </Heading>

        <ReactParallaxTilt
          glareEnable={true}
          glareMaxOpacity={0.7}
          glareColor={'white'}
          glarePosition={'bottom'}
          glareBorderRadius={'9999px'}
        >
          <Box
            css={{
              ...createGradientBorder(
                'full',
                'to bottom',
                '{colors.whiteAlpha.700}',
                '{colors.whiteAlpha.500}',
              ),
            }}
          >
            <ImageBox
              maxW={72}
              rounded={'full'}
              src={'/images/home/avatar.webp'}
              alt={'Felipe Gibran'}
              width={'512'}
              height={'512'}
              loading={'eager'}
              priority={true}
              fetchPriority={'high'}
              // maxW={72} caps this at 288px on every breakpoint, so the old
              // `100vw` on mobile was asking for an image twice the size it
              // would ever be drawn at.
              sizes={'288px'}
            />
          </Box>
        </ReactParallaxTilt>

        <Prose
          maxW={'sm'}
          textAlign={'center'}
          {...markdownToProps(t('body'))}
        />
      </VStack>
    )
  },
)

HeroIntro.displayName = 'HeroIntro'
