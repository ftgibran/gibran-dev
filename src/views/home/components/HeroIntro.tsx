import { Box, Heading, Skeleton, StackProps, VStack } from '@chakra-ui/react'
import { createGradientBorder } from '@utils/chakra/createGradientBorder'
import { useTranslation } from '@utils/i18n/useTranslation'
import dynamic from 'next/dynamic'
import { forwardRef } from 'react'

import { ImageBox } from '@/components/misc/ImageBox'
import { Prose } from '@/components/ui/prose'

const ReactParallaxTilt = dynamic(() => import('react-parallax-tilt'), {
  ssr: false,
  loading: () => <Skeleton rounded={'full'} width={72} height={72} />,
})

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
              sizes={'(max-width: 768px) 100vw, 288px'}
            />
          </Box>
        </ReactParallaxTilt>

        <Prose
          maxW={'sm'}
          textAlign={'center'}
          dangerouslySetInnerHTML={{ __html: t('body') }}
        />
      </VStack>
    )
  },
)

HeroIntro.displayName = 'HeroIntro'
