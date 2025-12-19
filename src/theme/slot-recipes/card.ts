import { defineSlotRecipe } from '@chakra-ui/react'

export const cardSlotRecipe = defineSlotRecipe({
  className: 'ds-card',
  slots: ['root', 'header', 'body', 'footer', 'title', 'description'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minWidth: '0',
      wordWrap: 'break-word',
      color: 'fg',
      textAlign: 'start',
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
      color: 'colorPalette.fg/70',
      fontSize: 'sm',
    },
    header: {
      paddingInline: 'var(--card-padding)',
      paddingTop: 'var(--card-padding)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
    },
    body: {
      padding: 'var(--card-padding)',
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      paddingInline: 'var(--card-padding)',
      paddingBottom: 'var(--card-padding)',
    },
  },
  variants: {
    size: {
      sm: {
        root: { '--card-padding': 'spacing.3', borderRadius: 'l4' },
        title: { textStyle: 'md' },
      },
      md: {
        root: { '--card-padding': 'spacing.4', borderRadius: 'l5' },
        title: { textStyle: 'lg' },
      },
      lg: {
        root: { '--card-padding': 'spacing.6', borderRadius: 'l6' },
        title: { textStyle: 'xl' },
      },
    },
    variant: {
      accent: {
        root: { layerStyle: 'accent' },
      },
      solid: {
        root: { layerStyle: 'solid' },
      },
      surface: {
        root: { layerStyle: 'surface' },
      },
      subtle: {
        root: { layerStyle: 'subtle' },
      },
      outline: {
        root: { layerStyle: 'outline' },
      },
      obsidian: {
        root: { layerStyle: 'obsidian' },
      },
      glass: {
        root: { layerStyle: 'glass' },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'accent',
      css: {
        title: {
          color: 'fg',
        },
      },
    },
    {
      variant: 'solid',
      css: {
        title: {
          color: 'fg',
        },
        description: {
          color: 'fg.muted',
        },
      },
    },
    {
      variant: 'surface',
      css: {
        title: {
          color: 'fg',
        },
      },
    },
    {
      colorPalette: 'primary',
      css: {
        title: {
          color: 'fg',
        },
        description: {
          color: 'fg.muted',
        },
      },
    },
    {
      colorPalette: 'secondary',
      css: {
        title: {
          color: 'fg.emphasized',
        },
        description: {
          color: 'fg.muted',
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'surface',
    colorPalette: 'primary',
    size: 'md',
  },
})
