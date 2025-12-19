import { defineSlotRecipe } from '@chakra-ui/react'

export const ratingGroupSlotRecipe = defineSlotRecipe({
  className: 'ds-rating-group',
  slots: ['root', 'label', 'item', 'control', 'itemIndicator'],
  base: {
    root: {
      display: 'inline-flex',
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    item: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      borderRadius: 'l2',
      outline: '0px solid',
      outlineColor: 'transparent',
      focusVisibleRing: 'mixed',
      transitionProperty: 'all',
      transitionDuration: 'slow',
    },
    itemIndicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '1em',
      height: '1em',
      position: 'relative',
      '--clip-path': {
        base: 'inset(0 50% 0 0)',
        _rtl: 'inset(0 0 0 50%)',
      },
      _icon: {
        stroke: 'currentColor',
        width: '100%',
        height: '100%',
        display: 'inline-block',
        flexShrink: 0,
        position: 'absolute',
        left: 0,
        top: 0,
      },
      '& [data-bg]': {
        color: 'colorPalette.highlight/20',
      },
      '& [data-fg]': {
        color: 'transparent',
      },
      '&[data-highlighted]:not([data-half])': {
        '& [data-fg]': {
          color: 'colorPalette.highlight',
        },
      },
      '&[data-half]': {
        '& [data-fg]': {
          color: 'colorPalette.solid',
          clipPath: 'var(--clip-path)',
        },
      },
    },
  },
  variants: {
    size: {
      xs: {
        item: {
          textStyle: 'sm',
        },
      },
      sm: {
        item: {
          textStyle: 'md',
        },
      },
      md: {
        item: {
          textStyle: 'xl',
        },
      },
      lg: {
        item: {
          textStyle: '2xl',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
