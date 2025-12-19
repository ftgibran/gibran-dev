import { defineRecipe } from '@chakra-ui/react'

export const codeRecipe = defineRecipe({
  className: 'ds-code',
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    borderRadius: 'l1',
  },
  variants: {
    variant: {
      muted: {
        layerStyle: 'muted',
      },
      plain: {
        color: 'colorPalette.fg',
      },
    },
    size: {
      sm: {
        textStyle: 'xs',
        fontFamily: 'mono',
        px: 1.5,
        minH: '5',
      },
      md: {
        textStyle: 'sm',
        fontFamily: 'mono',
        px: 2,
        minH: '6',
      },
      lg: {
        textStyle: 'md',
        fontFamily: 'mono',
        px: 2.5,
        minH: '7',
      },
    },
  },
  defaultVariants: {
    variant: 'muted',
    size: 'md',
  },
})
