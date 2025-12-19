import { defineSlotRecipe } from '@chakra-ui/react'

export const accordionSlotRecipe = defineSlotRecipe({
  className: 'ds-accordion',
  slots: [
    'root',
    'item',
    'itemTrigger',
    'itemContent',
    'itemIndicator',
    'itemBody',
  ],
  base: {
    root: {
      width: 'full',
      display: 'flex',
      flexFlow: 'column',
      gap: 2,
      colorPalette: 'secondary',
    },
    item: {
      overflow: 'hidden',
      overflowAnchor: 'none',
      borderRadius: 'var(--accordion-radius)',
    },
    itemTrigger: {
      px: 'var(--accordion-padding-x)',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'start',
      width: 'full',
      gap: '3',
      cursor: 'pointer',
      fontWeight: 'medium',
      fontFamily: 'heading',
      transitionProperty: 'all',
      transitionDuration: 'slow',
      outline: '0px solid',
      outlineColor: 'transparent',
      focusVisibleRing: 'outside',
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    itemBody: {
      pt: 'var(--accordion-padding-y)',
      pb: 'calc(var(--accordion-padding-y) * 2)',
    },
    itemContent: {
      px: 'var(--accordion-padding-x)',
      overflow: 'hidden',
      borderRadius: 'var(--accordion-radius)',
      _open: {
        animationName: 'expand-height, fade-in',
        animationDuration: 'moderate',
      },
      _closed: {
        animationName: 'collapse-height, fade-out',
        animationDuration: 'moderate',
      },
    },
    itemIndicator: {
      transition: 'rotate 0.2s',
      transformOrigin: 'center',
      color: 'fg.subtle',
      _open: {
        rotate: '180deg',
      },
      _icon: {
        width: '1.2em',
        height: '1.2em',
      },
    },
  },
  variants: {
    variant: {
      solid: {
        item: {
          layerStyle: 'solid',
        },
        itemTrigger: {
          _hover: {
            bg: 'whiteAlpha.50',
          },
        },
      },
      subtle: {
        item: {
          layerStyle: 'subtle',
          _open: {
            bg: 'colorPalette.subtle',
          },
        },
        itemTrigger: {
          _hover: {
            bg: 'whiteAlpha.50',
          },
        },
      },
      obsidian: {
        item: {
          layerStyle: 'obsidian',
        },
        itemTrigger: {
          _hover: {
            bg: 'whiteAlpha.50',
          },
        },
      },
      glass: {
        item: {
          layerStyle: 'glass',
        },
        itemTrigger: {
          _hover: {
            bg: 'whiteAlpha.50',
          },
        },
      },
    },
    size: {
      sm: {
        root: {
          '--accordion-radius': 'radii.l2',
          '--accordion-padding-x': 'spacing.3',
          '--accordion-padding-y': 'spacing.2',
        },
        itemBody: {
          textStyle: 'sm',
        },
        itemTrigger: {
          textStyle: 'sm',
          py: 'var(--accordion-padding-y)',
        },
      },
      md: {
        root: {
          '--accordion-radius': 'radii.l3',
          '--accordion-padding-x': 'spacing.4',
          '--accordion-padding-y': 'spacing.2',
        },
        itemBody: {
          textStyle: 'md',
        },
        itemTrigger: {
          textStyle: 'md',
          py: 'var(--accordion-padding-y)',
        },
      },
      lg: {
        root: {
          '--accordion-radius': 'radii.l4',
          '--accordion-padding-x': 'spacing.4.5',
          '--accordion-padding-y': 'spacing.2.5',
        },
        itemBody: {
          textStyle: 'lg',
        },
        itemTrigger: {
          textStyle: 'lg',
          py: 'var(--accordion-padding-y)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    colorPalette: 'primary',
    variant: 'solid',
  },
})
