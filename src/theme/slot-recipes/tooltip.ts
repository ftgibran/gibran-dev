import { defineSlotRecipe } from '@chakra-ui/react'

export const tooltipSlotRecipe = defineSlotRecipe({
  slots: ['trigger', 'arrow', 'arrowTip', 'positioner', 'content'],
  className: 'ds-tooltip',
  base: {
    content: {
      '--tooltip-bg': 'colors.bg.muted',
      px: '2.5',
      py: '1',
      borderRadius: 'l2',
      fontFamily: 'heading',
      textStyle: 'sm',
      layerStyle: 'solid',
      bg: 'var(--tooltip-bg)',
      color: 'fg',
      maxW: 'xs',
      zIndex: 'tooltip',
      transformOrigin: 'var(--transform-origin)',
      _open: {
        animationStyle: 'scale-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'scale-fade-out',
        animationDuration: 'fast',
      },
    },
    arrow: {
      '--arrow-size': 'sizes.2',
      '--arrow-background': 'var(--tooltip-bg)',
      zIndex: 1,
    },
    arrowTip: {
      borderTopWidth: '1px',
      borderInlineStartWidth: '1px',
    },
  },
})
