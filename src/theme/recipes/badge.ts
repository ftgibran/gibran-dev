import { defineRecipe } from '@chakra-ui/react'

export const badgeRecipe = defineRecipe({
  className: 'ds-badge',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1',
    fontFamily: 'heading',
    fontStyle: 'italic',
    fontWeight: 'medium',
    fontVariantNumeric: 'tabular-nums',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    borderRadius: 'l2',
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
      xs: {
        textStyle: '2xs',
        px: '1',
        minH: '4',
        borderRadius: 'l1',
      },
      sm: {
        textStyle: 'xs',
        px: '1.5',
        minH: '5',
        borderRadius: 'l2',
      },
      md: {
        textStyle: 'sm',
        px: '2',
        minH: '6',
        borderRadius: 'l3',
      },
      lg: {
        textStyle: 'sm',
        px: '2.5',
        minH: '7',
        borderRadius: 'l4',
      },
    },
  },
  defaultVariants: {
    variant: 'muted',
    size: 'sm',
  },
})
