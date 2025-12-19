import { defineSlotRecipe } from '@chakra-ui/react'

export const popoverSlotRecipe = defineSlotRecipe({
  className: 'ds-popover',
  slots: [
    'arrow',
    'arrowTip',
    'anchor',
    'trigger',
    'indicator',
    'positioner',
    'content',
    'title',
    'description',
    'closeTrigger',
    'header',
    'body',
    'footer',
  ],
  base: {
    content: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      '--popover-bg': 'colors.colorPalette.muted',
      '--popover-border-color': 'colors.whiteAlpha.400',
      '--popover-size': 'sizes.xs',
      '--popover-mobile-size': 'calc(100dvw - 1rem)',
      fontFamily: 'heading',
      textStyle: 'sm',
      layerStyle: 'glass',
      bg: 'var(--popover-bg)',
      color: 'fg',
      width: {
        base: 'min(var(--popover-mobile-size), var(--popover-size))',
        sm: 'var(--popover-size)',
      },
      borderRadius: 'l3',
      '--popover-z-index': 'zIndex.popover',
      zIndex: 'calc(var(--popover-z-index) + var(--layer-index, 0))',
      outline: '0',
      transformOrigin: 'var(--transform-origin)',
      maxHeight: 'var(--available-height)',
      _open: {
        animationStyle: 'scale-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'scale-fade-out',
        animationDuration: 'faster',
      },
    },
    title: {
      textStyle: 'title',
      color: 'colorPalette.fg',
    },
    header: {
      paddingInline: 'var(--popover-padding)',
      paddingTop: 'var(--popover-padding)',
    },
    body: {
      padding: 'var(--popover-padding)',
      flex: '1',
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      paddingInline: 'var(--popover-padding)',
      paddingBottom: 'var(--popover-padding)',
    },
    arrow: {
      '--arrow-size': 'sizes.3',
      '--arrow-background': 'var(--popover-bg)',
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
          '--popover-padding': 'spacing.3',
        },
      },
      sm: {
        content: {
          '--popover-padding': 'spacing.4',
        },
      },
      md: {
        content: {
          '--popover-padding': 'spacing.5',
        },
      },
      lg: {
        content: {
          '--popover-padding': 'spacing.6',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
