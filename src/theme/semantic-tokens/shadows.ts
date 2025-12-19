import { defineSemanticTokens } from '@chakra-ui/react'

export const shadows = defineSemanticTokens.shadows({
  xs: {
    value:
      '0px 1px 1px {black/64}, 0px 0px 1px inset {colors.border.highlight}',
  },
  sm: {
    value:
      '0px 2px 4px {black/64}, 0px 0px 1px inset {colors.border.highlight}',
  },
  md: {
    value:
      '0px 4px 8px {black/64}, 0px 0px 1px inset {colors.border.highlight}',
  },
  lg: {
    value:
      '0px 8px 16px {black/64}, 0px 0px 1px inset {colors.border.highlight}',
  },
  xl: {
    value:
      '0px 16px 24px {black/64}, 0px 0px 1px inset {colors.border.highlight}',
  },
  '2xl': {
    value:
      '0px 24px 40px {black/64}, 0px 0px 1px inset {colors.border.highlight}',
  },
  stroke: {
    value: '0 0 1px black',
  },
  card: {
    value: '0 8px 16px {black/64}',
  },
  input: {
    value: '0 8px 8px {colors.blackAlpha.400}',
  },
  glow: {
    value: '0 0 8px {colors.whiteAlpha.900}',
  },
  focus: {
    value: '0 0 16px {colors.white}',
  },
  inner: {
    value: 'inset 0 2px 4px 0 black',
  },
  inset: {
    value: 'inset 0 0 0 1px {colors.gray.300/5}',
  },
})
