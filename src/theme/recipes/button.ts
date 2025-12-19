import { defineRecipe } from '@chakra-ui/react'
import {
  _createGradientBorder,
  _createGradientBorderBase,
} from '@utils/chakra/createGradientBorder'

export const buttonRecipe = defineRecipe({
  className: 'ds-button',
  base: {
    display: 'inline-flex',
    appearance: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    position: 'relative',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    borderWidth: '1px',
    borderColor: 'transparent',
    cursor: 'button',
    flexShrink: '0',
    outline: '0px solid',
    outlineColor: 'transparent',
    lineHeight: '1.2',
    isolation: 'isolate',
    fontFamily: 'heading',
    letterSpacing: 'wide',
    fontStyle: 'italic',
    fontWeight: 'semibold',
    textTransform: 'capitalize',
    textShadow: 'stroke',
    transitionProperty: 'all',
    transitionDuration: 'slow',
    focusVisibleRing: 'outside',
    colorPalette: 'secondary',
    overflow: 'hidden',
    _before: {
      transitionProperty: 'all',
      transitionDuration: 'slow',
    },
    _after: {
      transitionProperty: 'all',
      transitionDuration: 'slow',
    },
    _disabled: {
      layerStyle: 'disabled',
    },
    _icon: {
      flexShrink: '0',
    },
  },
  variants: {
    size: {
      xs: {
        h: '6',
        minW: '6',
        textStyle: '2xs',
        px: '2',
        gap: '1',
        _icon: {
          width: '3',
          height: '3',
        },
        borderRadius: 'l1',
        ..._createGradientBorderBase('l1Inner'),
        _before: {
          borderRadius: 'l1Inner',
        },
      },
      sm: {
        h: '8',
        minW: '8',
        textStyle: 'xs',
        px: '3',
        gap: '1',
        _icon: {
          width: '4',
          height: '4',
        },
        borderRadius: 'l1',
        ..._createGradientBorderBase('l1Inner'),
        _before: {
          borderRadius: 'l1Inner',
        },
      },
      md: {
        h: '10',
        minW: '10',
        textStyle: 'sm',
        px: '4',
        gap: '1',
        _icon: {
          width: '5',
          height: '5',
        },
        borderRadius: 'l2',
        ..._createGradientBorderBase('l2Inner'),
        _before: {
          borderRadius: 'l2Inner',
        },
      },
      lg: {
        h: '12',
        minW: '12',
        textStyle: 'md',
        px: '5',
        gap: '2',
        _icon: {
          width: '5',
          height: '5',
        },
        borderRadius: 'l3',
        ..._createGradientBorderBase('l3Inner'),
        _before: {
          borderRadius: 'l3Inner',
        },
      },
    },
    variant: {
      solid: {
        bg: 'colorPalette.emphasized',
        color: 'colorPalette.contrast',
        borderColor: 'black',

        ..._createGradientBorder(
          'to bottom',
          '{colors.colorPalette.focusRing/50}',
          '{colors.colorPalette.focusRing/10}',
        ),

        _before: {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: '-1',
          pointerEvents: 'none',
          bg: `linear-gradient(
            transparent,
            {colors.colorPalette.subtle/90}
          )`,
        },

        _hover: {
          filter: 'saturate(1.2) brightness(1.2)',
        },

        _active: {
          bg: 'colorPalette.subtle !important',
          ..._createGradientBorder(
            'to bottom',
            '{colors.colorPalette.focusRing/30}',
            '{colors.colorPalette.focusRing/10}',
          ),
        },

        _expanded: {
          filter: 'saturate(1.2) brightness(1.2)',
        },
      },
      accent: {
        bg: 'colorPalette.solid',
        color: 'colorPalette.contrast',
        borderColor: 'black',
        shadow: '0px 4px 12px {colors.colorPalette.focusRing/40}',

        ..._createGradientBorder(
          'to bottom',
          '{colors.colorPalette.focusRing}',
          '{colors.colorPalette.focusRing/30}',
        ),

        _before: {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: '-1',
          pointerEvents: 'none',
          bg: `linear-gradient(
            transparent,
            {colors.colorPalette.subtle/70} 80%,
            {colors.colorPalette.muted/70}
          )`,
        },

        _hover: {
          filter: 'saturate(1.2) brightness(1.2)',
        },

        _active: {
          bg: 'colorPalette.muted !important',
          ..._createGradientBorder(
            'to bottom',
            '{colors.colorPalette.focusRing/50}',
            '{colors.colorPalette.focusRing/30}',
          ),
        },

        _expanded: {
          filter: 'saturate(1.2) brightness(1.2)',
        },

        _pressed: {
          filter: 'saturate(1.2) brightness(1.4)',
        },
      },
      glass: {
        bg: 'whiteAlpha.200',
        backdropFilter: 'blur({blurs.xl})',
        border: 'none',
        shadow: `
          0px 0px 0px 1px inset {colors.whiteAlpha.400},
          0 2px 8px {colors.colorPalette.focusRing/20}
        `,

        ..._createGradientBorder(
          '150deg',
          'transparent',
          '{colors.colorPalette.solid/40}',
        ),

        _before: {
          content: '""',
          position: 'absolute',
          inset: '1px',
          zIndex: '-1',
          pointerEvents: 'none',
          borderWidth: '1px',
          borderColor: '{colors.black/50}',
          bg: `linear-gradient(
            transparent,
            {colors.colorPalette.solid/10}
          )`,
        },

        _hover: {
          filter: 'saturate(1.2) brightness(1.2)',
        },

        _active: {
          bg: 'whiteAlpha.50 !important',
          shadow: `
            0px 0px 0px 1px inset {colors.whiteAlpha.300},
            0 2px 8px {colors.colorPalette.focusRing/0}
          `,
          ..._createGradientBorder(
            '150deg',
            'transparent',
            '{colors.colorPalette.muted/40}',
          ),
          _before: {
            bg: `linear-gradient(
              transparent,
              {colors.colorPalette.muted/10}
            )`,
          },
        },

        _expanded: {
          filter: 'saturate(1.2) brightness(1.2)',
        },

        _pressed: {
          filter: 'saturate(1.2) brightness(1.4)',
        },
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'colorPalette.highlight/50',
        color: 'colorPalette.fg',
        _hover: {
          bg: 'colorPalette.highlight/10',
          filter: 'saturate(1.2) brightness(1.2)',
        },
        _active: {
          borderColor: 'colorPalette.highlight/30',
          bg: 'colorPalette.highlight/5 !important',
        },
        _expanded: {
          bg: 'colorPalette.highlight/10',
          filter: 'saturate(1.2) brightness(1.2)',
        },
      },
      ghost: {
        bg: 'transparent',
        color: 'colorPalette.fg',
        _hover: {
          bg: 'colorPalette.highlight/10',
          filter: 'saturate(1.2) brightness(1.2)',
        },
        _active: {
          bg: 'colorPalette.highlight/5 !important',
        },
        _expanded: {
          bg: 'colorPalette.highlight/5 !important',
          filter: 'saturate(1.2) brightness(1.2)',
        },
      },
      plain: {
        color: 'colorPalette.fg',
        px: 0,
        _hover: {
          transform: 'scale(1.1)',
        },
        _active: {
          transform: 'scale(0.95) !important',
        },
        _expanded: {
          transform: 'scale(1.1)',
        },
      },
    },
    borderRadius: {
      l0: {
        borderRadius: 'l0',
        _before: { borderRadius: 'l0Inner' },
        _after: { borderRadius: 'l0Inner' },
      },
      l1: {
        borderRadius: 'l1',
        _before: { borderRadius: 'l1Inner' },
        _after: { borderRadius: 'l1Inner' },
      },
      l2: {
        borderRadius: 'l2',
        _before: { borderRadius: 'l2Inner' },
        _after: { borderRadius: 'l2Inner' },
      },
      l3: {
        borderRadius: 'l3',
        _before: { borderRadius: 'l3Inner' },
        _after: { borderRadius: 'l3Inner' },
      },
      l4: {
        borderRadius: 'l4',
        _before: { borderRadius: 'l4Inner' },
        _after: { borderRadius: 'l4Inner' },
      },
      l5: {
        borderRadius: 'l5',
        _before: { borderRadius: 'l5Inner' },
        _after: { borderRadius: 'l5Inner' },
      },
      l6: {
        borderRadius: 'l6',
        _before: { borderRadius: 'l6Inner' },
        _after: { borderRadius: 'l6Inner' },
      },
      l7: {
        borderRadius: 'l7',
        _before: { borderRadius: 'l7Inner' },
        _after: { borderRadius: 'l7Inner' },
      },
      xs: {
        borderRadius: 'l0',
        _before: { borderRadius: 'l0Inner' },
        _after: { borderRadius: 'l0Inner' },
      },
      sm: {
        borderRadius: 'l1',
        _before: { borderRadius: 'l1Inner' },
        _after: { borderRadius: 'l1Inner' },
      },
      md: {
        borderRadius: 'l2',
        _before: { borderRadius: 'l2Inner' },
        _after: { borderRadius: 'l2Inner' },
      },
      lg: {
        borderRadius: 'l3',
        _before: { borderRadius: 'l3Inner' },
        _after: { borderRadius: 'l3Inner' },
      },
      xl: {
        borderRadius: 'l4',
        _before: { borderRadius: 'l4Inner' },
        _after: { borderRadius: 'l4Inner' },
      },
      '2xl': {
        borderRadius: 'l5',
        _before: { borderRadius: 'l5Inner' },
        _after: { borderRadius: 'l5Inner' },
      },
      '3xl': {
        borderRadius: 'l6',
        _before: { borderRadius: 'l6Inner' },
        _after: { borderRadius: 'l6Inner' },
      },
      '4xl': {
        borderRadius: 'l7',
        _before: { borderRadius: 'l7Inner' },
        _after: { borderRadius: 'l7Inner' },
      },
      full: {
        borderRadius: 'full',
        _before: { borderRadius: 'full' },
        _after: { borderRadius: 'full' },
      },
    },
    rounded: {},
  },
  compoundVariants: [
    {
      variant: 'outline',
      colorPalette: 'primary',
      css: {
        color: 'fg.primary',
        borderColor: 'fg.primary/30',
        _hover: {
          bg: 'fg.primary/10',
        },
        _active: {
          borderColor: 'fg.primary/30',
          bg: 'fg.primary/5 !important',
        },
        _expanded: {
          bg: 'fg.primary/10',
        },
      },
    },

    {
      variant: 'ghost',
      colorPalette: 'primary',
      css: {
        color: 'fg.primary',
        _hover: {
          bg: 'fg.primary/10',
        },
        _active: {
          bg: 'fg.primary/5 !important',
        },
        _expanded: {
          bg: 'fg.primary/10',
        },
      },
    },
    {
      variant: 'ghost',
      colorPalette: 'secondary',
      css: {
        color: 'fg.secondary',
        _hover: {
          bg: 'fg.secondary/10',
        },
        _active: {
          bg: 'fg.secondary/5 !important',
        },
        _expanded: {
          bg: 'fg.secondary/10',
        },
      },
    },

    {
      variant: 'glass',
      size: 'xs',
      css: { _after: { borderRadius: 'l1' } },
    },
    {
      variant: 'glass',
      size: 'sm',
      css: { _after: { borderRadius: 'l1' } },
    },
    {
      variant: 'glass',
      size: 'md',
      css: { _after: { borderRadius: 'l2' } },
    },
    {
      variant: 'glass',
      size: 'lg',
      css: { _after: { borderRadius: 'l3' } },
    },
    {
      variant: 'glass',
      borderRadius: 'l0',
      css: { _after: { borderRadius: 'l0' } },
    },
    {
      variant: 'glass',
      borderRadius: 'l1',
      css: { _after: { borderRadius: 'l1' } },
    },
    {
      variant: 'glass',
      borderRadius: 'l2',
      css: { _after: { borderRadius: 'l2' } },
    },
    {
      variant: 'glass',
      borderRadius: 'l3',
      css: { _after: { borderRadius: 'l3' } },
    },
    {
      variant: 'glass',
      borderRadius: 'l4',
      css: { _after: { borderRadius: 'l4' } },
    },
    {
      variant: 'glass',
      borderRadius: 'l5',
      css: { _after: { borderRadius: 'l5' } },
    },
    {
      variant: 'glass',
      borderRadius: 'l6',
      css: { _after: { borderRadius: 'l6' } },
    },
    {
      variant: 'glass',
      borderRadius: 'l7',
      css: { _after: { borderRadius: 'l7' } },
    },
    {
      variant: 'glass',
      borderRadius: 'xs',
      css: { _after: { borderRadius: 'l0' } },
    },
    {
      variant: 'glass',
      borderRadius: 'sm',
      css: { _after: { borderRadius: 'l1' } },
    },
    {
      variant: 'glass',
      borderRadius: 'md',
      css: { _after: { borderRadius: 'l2' } },
    },
    {
      variant: 'glass',
      borderRadius: 'lg',
      css: { _after: { borderRadius: 'l3' } },
    },
    {
      variant: 'glass',
      borderRadius: 'xl',
      css: { _after: { borderRadius: 'l4' } },
    },
    {
      variant: 'glass',
      borderRadius: '2xl',
      css: { _after: { borderRadius: 'l5' } },
    },
    {
      variant: 'glass',
      borderRadius: '3xl',
      css: { _after: { borderRadius: 'l6' } },
    },
    {
      variant: 'glass',
      borderRadius: '4xl',
      css: { _after: { borderRadius: 'l7' } },
    },

    {
      variant: 'plain',
      colorPalette: 'primary',
      css: {
        color: 'fg.primary',
      },
    },
    {
      variant: 'plain',
      colorPalette: 'secondary',
      css: {
        color: 'fg.secondary',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    colorPalette: 'primary',
  },
})
