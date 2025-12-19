import { defineRecipe } from '@chakra-ui/react'

export const linkRecipe = defineRecipe({
  className: 'ds-link',
  base: {
    color: 'colorPalette.fg',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1.5',
    cursor: 'pointer',
    borderRadius: 'l1',
    focusRing: 'outside',
    outline: '0px solid',
    outlineOffset: '0',
    outlineColor: 'transparent',
    transitionProperty: 'all',
    transitionDuration: 'moderate',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    _hover: {
      textDecorationColor: 'colorPalette.fg',
    },
  },
  variants: {
    variant: {
      underline: {
        textDecorationColor: 'colorPalette.fg/50',
      },
      plain: {
        textDecorationColor: 'transparent',
      },
    },
  },
  compoundVariants: [
    {
      colorPalette: 'primary',
      css: { color: 'fg.primary' },
    },
    {
      colorPalette: 'secondary',
      css: { color: 'fg.secondary' },
    },
  ],
  defaultVariants: {
    colorPalette: 'primary',
    variant: 'underline',
  },
})
