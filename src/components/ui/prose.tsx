'use client'

import { chakra } from '@chakra-ui/react'

import { prose } from '@/theme/style/prose'

export const Prose = chakra(
  'div',
  { base: { ...prose['.prose'] } },
  {
    defaultProps: {
      className: 'ilv-prose',
    },
  },
)

Prose.displayName = 'Prose'
