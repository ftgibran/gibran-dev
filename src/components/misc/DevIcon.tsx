import { Box, BoxProps } from '@chakra-ui/react'
import { FC } from 'react'

export type DevIconProps = BoxProps & {
  /** Devicon class name, e.g. `devicon-react-original-wordmark`. */
  name: string
  label?: string
}

/**
 * Draws a devicon glyph from a local SVG instead of the 775 KB icon webfont.
 *
 * The SVG is used as a mask rather than an image, so only its silhouette
 * matters and the shape is painted with `currentColor`. That is exactly how the
 * webfont behaved, which is why call sites can keep setting `fontSize` and
 * `color` on the wrapper and get the same result.
 */
export const DevIcon: FC<DevIconProps> = (props) => {
  const { name, label, ...rest } = props

  const file = name.replace(/^devicon-/, '')

  return (
    <Box
      as={'span'}
      display={'inline-block'}
      boxSize={'1em'}
      bg={'currentColor'}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      css={{
        maskImage: `url(/icons/devicon/${file}.svg)`,
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        maskSize: 'contain',
      }}
      {...rest}
    />
  )
}

DevIcon.displayName = 'DevIcon'
