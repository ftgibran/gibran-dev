import { defineRecipe } from '@chakra-ui/react'

export const textareaRecipe = defineRecipe({
  className: 'ds-textarea',
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
    _hover: {
      filter: 'brightness(1.4)',
    },
    _disabled: {
      layerStyle: 'disabled',
    },
    '--focus-color': 'colors.colorPalette.focusRing',
    '--error-color': 'colors.border.error',
    _invalid: {
      focusRingColor: 'var(--error-color)',
      borderColor: 'var(--error-color)',
    },
  },
  variants: {
    size: {
      xs: {
        textStyle: 'xs',
        px: '2',
        py: '1.5',
        scrollPaddingBottom: '1.5',
      },
      sm: {
        textStyle: 'sm',
        px: '2.5',
        py: '2',
        scrollPaddingBottom: '2',
      },
      md: {
        textStyle: 'sm',
        px: '3',
        py: '2',
        scrollPaddingBottom: '2',
      },
      lg: {
        textStyle: 'md',
        px: '4',
        py: '3',
        scrollPaddingBottom: '3',
      },
      xl: {
        textStyle: 'md',
        px: '4.5',
        py: '3.5',
        scrollPaddingBottom: '3.5',
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
