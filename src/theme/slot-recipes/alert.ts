import { defineSlotRecipe } from '@chakra-ui/react'

export const alertSlotRecipe = defineSlotRecipe({
  slots: ['title', 'description', 'root', 'indicator', 'content'],
  className: 'ds-alert',
  base: {
    root: {
      width: 'full',
      display: 'flex',
      alignItems: 'flex-start',
      position: 'relative',
      color: 'colorPalette.fg',
      borderRadius: 'l5',
    },
    title: {
      textTransform: 'capitalize',
      fontFamily: 'heading',
      fontSize: 'lg',
      fontWeight: 'bold',
      fontStyle: 'italic',
      letterSpacing: 'widest',
      lineHeight: 'tall',
    },
    description: {
      display: 'inline',
      fontWeight: 'medium',
    },
    indicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      width: '1em',
      height: '1em',
      my: 0.5,
      _icon: {
        boxSize: 'full',
      },
    },
    content: {
      display: 'flex',
      flex: '1',
      gap: '1',
    },
  },
  variants: {
    status: {
      info: {
        root: {
          colorPalette: 'secondary',
        },
      },
      warning: {
        root: {
          colorPalette: 'orange',
        },
      },
      success: {
        root: {
          colorPalette: 'green',
        },
      },
      error: {
        root: {
          colorPalette: 'red',
        },
      },
      neutral: {
        root: {
          colorPalette: 'gray',
        },
      },
    },
    inline: {
      true: {
        content: {
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
        },
      },
      false: {
        content: {
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
    variant: {
      solid: {
        root: {
          layerStyle: 'accent',
          backdropFilter: 'blur({blurs.xl})',
          background: 'colorPalette.highlight/20',
        },
      },
      subtle: {
        root: { layerStyle: 'subtle' },
      },
    },
    size: {
      sm: {
        root: {
          gap: 2,
          p: 3,
          textStyle: 'xs',
          borderRadius: 'l2',
          _before: { borderRadius: 'l2' },
          _after: { borderRadius: 'l2' },
        },
        title: {
          textStyle: 'sm',
        },
        indicator: {
          textStyle: 'lg',
        },
      },
      md: {
        root: {
          gap: 3,
          p: 3,
          textStyle: 'sm',
          borderRadius: 'l3',
          _before: { borderRadius: 'l3' },
          _after: { borderRadius: 'l3' },
        },
        title: {
          textStyle: 'md',
        },
        indicator: {
          textStyle: 'xl',
        },
      },
      lg: {
        root: {
          gap: 4,
          p: 4,
          textStyle: 'md',
          borderRadius: 'l4',
          _before: { borderRadius: 'l4' },
          _after: { borderRadius: 'l4' },
        },
        title: {
          textStyle: 'lg',
        },
        indicator: {
          textStyle: '2xl',
        },
      },
    },
  },
  defaultVariants: {
    status: 'info',
    variant: 'solid',
    size: 'md',
    inline: false,
  },
})
