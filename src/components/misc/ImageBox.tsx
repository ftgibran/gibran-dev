import { BoxProps, Image } from '@chakra-ui/react'
import { useCompositeProps } from '@utils/hooks/react/useCompositeProps'
import NextImage, { ImageProps } from 'next/image'
import { forwardRef } from 'react'

export const imagePropNames = [
  'src',
  'alt',
  'width',
  'height',
  'fill',
  'loader',
  'quality',
  'preload',
  'priority',
  'loading',
  'placeholder',
  'blurDataURL',
  'unoptimized',
  'overrideSrc',
  'onLoadingComplete',
  'layout',
  // 'objectFit',
  // 'objectPosition',
  'lazyBoundary',
  'lazyRoot',
] as const

export type ImageBoxProps = BoxProps & ImageProps

export const ImageBox = forwardRef<HTMLImageElement, ImageBoxProps>(
  (props, ref) => {
    const [imageProps, boxProps] = useCompositeProps(props, imagePropNames)

    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image userSelect={'none'} pointerEvents={'none'} {...boxProps} asChild>
        <NextImage ref={ref} {...imageProps} />
      </Image>
    )
  },
)

ImageBox.displayName = 'ImageBox'
