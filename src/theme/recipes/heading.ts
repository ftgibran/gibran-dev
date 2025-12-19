import { defineRecipe } from '@chakra-ui/react'

export const headingRecipe = defineRecipe({
  className: 'ds-heading',
  base: {
    fontFamily: 'heading',
    fontWeight: 'bold',
    letterSpacing: 'widest',
    fontStyle: 'italic',
  },
  variants: {
    size: {
      h1: { textStyle: 'h1' },
      h2: { textStyle: 'h2' },
      h3: { textStyle: 'h3' },
      h4: { textStyle: 'h4' },
      h5: { textStyle: 'h5' },
      h6: { textStyle: 'h6' },
      '2xs': { textStyle: '2xs' },
      xs: { textStyle: 'xs' },
      sm: { textStyle: 'sm' },
      md: { textStyle: 'md' },
      lg: { textStyle: 'lg' },
      xl: { textStyle: 'xl' },
      '2xl': { textStyle: '2xl' },
      '3xl': { textStyle: '3xl' },
      '4xl': { textStyle: '4xl' },
      '5xl': { textStyle: '5xl' },
      '6xl': { textStyle: '6xl' },
      '7xl': { textStyle: '7xl' },
    },
  },
  defaultVariants: {
    size: 'h2',
  },
})
