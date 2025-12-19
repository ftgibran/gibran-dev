import { defineRecipe } from '@chakra-ui/react'

export const inputAddonRecipe = defineRecipe({
  className: 'ds-input-addon',
  base: {
    flex: '0 0 auto',
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    alignSelf: 'stretch',
    borderRadius: 'l3',
    border: 'solid 1px',
    borderColor: 'transparent',
    fontFamily: 'heading',
    fontWeight: 'medium',
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
      },
      subtle: {
        background: 'colorPalette.subtle/50',
        backdropFilter: 'blur({blurs.md})',
        boxShadow: 'inset 0 0 32px {colors.colorPalette.highlight/30}',
      },
      outline: {
        borderColor: 'border',
        bg: 'blackAlpha.400',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'glass',
  },
})
