import { defineRecipe } from '@chakra-ui/react'

export const markRecipe = defineRecipe({
  className: 'ds-mark',
  base: {
    py: 0,
    textStyle: 'label',
    fontSize: 'inherit',
    colorPalette: 'secondary',
    color: 'colorPalette.100',
    borderRadius: 'lg',
    whiteSpace: 'nowrap',
  },
  variants: {
    variant: {
      subtle: {
        px: 2,
        bg: 'colorPalette.200/15',
      },
      plain: {
        bg: 'transparent',
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
  },
})
