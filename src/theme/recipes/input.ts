import { defineRecipe } from '@chakra-ui/react'

export const inputRecipe = defineRecipe({
  className: 'ds-input',
  base: {
    width: '100%',
    minWidth: '0',
    position: 'relative',
    appearance: 'none',
    textAlign: 'start',
    borderRadius: 'l3',
    border: 'solid 1px',
    borderColor: 'transparent',
    fontFamily: 'heading',
    fontStyle: 'italic',
    fontWeight: 'semibold',
    transitionProperty: 'all',
    transitionDuration: 'slow',
    outline: '0px solid',
    outlineColor: 'transparent',
    _disabled: {
      layerStyle: 'disabled',
    },
    height: 'var(--input-height)',
    minW: 'var(--input-height)',
    '--focus-color': 'colors.colorPalette.focusRing',
    '--error-color': 'colors.border.error',
    _hover: {
      filter: 'brightness(1.4)',
    },
    _invalid: {
      focusRingColor: 'var(--error-color)',
      borderColor: 'var(--error-color)',
    },
  },
  variants: {
    size: {
      '2xs': {
        textStyle: 'xs',
        px: '2',
        '--input-height': 'sizes.7',
      },
      xs: {
        textStyle: 'xs',
        px: '2',
        '--input-height': 'sizes.8',
      },
      sm: {
        textStyle: 'sm',
        px: '2.5',
        '--input-height': 'sizes.9',
      },
      md: {
        textStyle: 'sm',
        px: '3',
        '--input-height': 'sizes.10',
      },
      lg: {
        textStyle: 'md',
        px: '4',
        '--input-height': 'sizes.11',
      },
      xl: {
        textStyle: 'md',
        px: '4.5',
        '--input-height': 'sizes.12',
      },
      '2xl': {
        textStyle: 'lg',
        px: '5',
        '--input-height': 'sizes.16',
      },
    },
    variant: {
      glass: {
        borderColor: 'whiteAlpha.300',
        bg: `linear-gradient(
          {colors.whiteAlpha.50},
          {colors.whiteAlpha.200}
        )`,
        backdropFilter: 'blur({blurs.md})',
        boxShadow: 'input',
        focusVisibleRing: 'mixed',
        focusRingColor: 'var(--focus-color)',
      },
      subtle: {
        background: 'colorPalette.subtle/50',
        backdropFilter: 'blur({blurs.md})',
        boxShadow: 'inset 0 0 32px {colors.colorPalette.highlight/30}',
        focusVisibleRing: 'inside',
        focusRingColor: 'var(--focus-color)',
      },
      outline: {
        borderColor: 'border',
        bg: 'blackAlpha.400',
        focusVisibleRing: 'inside',
        focusRingColor: 'var(--focus-color)',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'glass',
  },
})
