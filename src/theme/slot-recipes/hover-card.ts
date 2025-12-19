import { defineSlotRecipe } from '@chakra-ui/react'

export const hoverCardSlotRecipe = defineSlotRecipe({
  className: 'ds-hover-card',
  slots: ['arrow', 'arrowTip', 'trigger', 'positioner', 'content'],
  base: {
    content: {
      '--hovercard-bg': 'colors.colorPalette.muted',
      '--popover-border-color': 'colors.whiteAlpha.400',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      textStyle: 'sm',
      layerStyle: 'glass',
      bg: 'var(--hovercard-bg)',
      color: 'fg',
      maxWidth: '80',
      borderRadius: 'l3',
      zIndex: 'popover',
      transformOrigin: 'var(--transform-origin)',
      outline: '0',
      _open: {
        animationStyle: 'slide-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'slide-fade-out',
        animationDuration: 'faster',
      },
    },
    arrow: {
      '--arrow-size': 'sizes.3',
      '--arrow-background': 'var(--hovercard-bg)',
      zIndex: 1,
    },
    arrowTip: {
      borderTopWidth: '1px',
      borderInlineStartWidth: '1px',
      borderColor: 'var(--popover-border-color)',
    },
  },
  variants: {
    size: {
      xs: {
        content: {
          padding: '3',
        },
      },
      sm: {
        content: {
          padding: '4',
        },
      },
      md: {
        content: {
          padding: '5',
        },
      },
      lg: {
        content: {
          padding: '6',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
