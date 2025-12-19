import type { SystemStyleObject } from '@chakra-ui/react'

export function _createGradientBorderBase<S extends SystemStyleObject>(
  borderRadius: SystemStyleObject['borderRadius'],
) {
  return {
    pos: 'relative',
    _after: {
      content: '""',
      position: 'absolute',
      inset: 0,
      borderRadius,
      borderWidth: '1px',
      borderColor: 'transparent',
      pointerEvents: 'none',
    },
  } as S
}

export function _createGradientBorder<S extends SystemStyleObject>(
  direction: string,
  ...colors: string[]
) {
  return {
    _after: {
      backgroundOrigin: 'border-box',
      bgImage: `linear-gradient(${direction}, ${colors.join(', ')})`,
      mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'source-out', // Safari compatibility
      maskComposite: 'exclude',
    },
  } as S
}

export function createGradientBorder<S extends SystemStyleObject>(
  borderRadius: SystemStyleObject['borderRadius'],
  direction: string,
  ...colors: string[]
) {
  return {
    pos: 'relative',
    _after: {
      content: '""',
      position: 'absolute',
      inset: 0,
      borderRadius,
      borderWidth: '1px',
      borderColor: 'transparent',
      pointerEvents: 'none',
      backgroundOrigin: 'border-box',
      bgImage: `linear-gradient(${direction}, ${colors.join(', ')})`,
      mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'source-out', // Safari compatibility
      maskComposite: 'exclude',
    },
  } as S
}
