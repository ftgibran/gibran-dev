import { BoxProps, Image } from '@chakra-ui/react'
import { useCompositeProps } from '@utils/hooks/react/useCompositeProps'
import NextImage, { ImageProps } from 'next/image'
import { forwardRef } from 'react'

// Props routed to next/image; everything else falls through to Chakra as a
// style prop. `objectFit`/`objectPosition` stay out on purpose, so that they
// keep being applied as CSS.
export const imagePropNames = [
  'src',
  'alt',
  'width',
  'height',
  'fill',
  'sizes',
  'loader',
  'quality',
  'priority',
  'loading',
  'fetchPriority',
  'decoding',
  'placeholder',
  'blurDataURL',
  'unoptimized',
  'overrideSrc',
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
