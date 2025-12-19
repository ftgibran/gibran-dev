import { defineLayerStyles } from '@chakra-ui/react'
import { createGradientBorder } from '@utils/chakra/createGradientBorder'

export const layerStyles = defineLayerStyles({
  none: {
    value: {
      bg: 'transparent',
      color: 'inherit',
      border: 'none',
      opacity: 1,
      backdropFilter: 'none',
      boxShadow: 'none',
      _before: { display: 'none' },
      _after: { display: 'none' },
    },
  },
  disabled: { value: { opacity: '0.5', cursor: 'not-allowed' } },
  outline: {
    value: {
      color: 'colorPalette.fg',
      boxShadow: '0 0 0px 1px var(--shadow-color)',
      boxShadowColor: 'colorPalette.focusRing/50',
    },
  },
  muted: {
    value: {
      bg: 'colorPalette.muted/80',
      color: 'colorPalette.fg',
      boxShadow: '0 0 0px 1px var(--shadow-color)',
      boxShadowColor: 'colorPalette.focusRing/50',
    },
  },
  subtle: {
    value: {
      background: 'colorPalette.subtle/50',
      color: 'colorPalette.fg',
      backdropFilter: 'blur({blurs.xl})',
      boxShadow: 'inset 0 0 32px {colors.colorPalette.highlight/30}',
    },
  },
  surface: {
    value: {
      background: 'colorPalette.subtle/50',
      color: 'fg',
      backdropFilter: 'blur({blurs.xl})',
      boxShadow: `
        inset 0 0 32px {colors.colorPalette.highlight/30},
        {shadows.lg}
      `,
    },
  },
  solid: {
    value: {
      background: 'bg.panel',
      color: 'colorPalette.fg',
      boxShadow: 'card',
      ...createGradientBorder(
        'inherit',
        'to bottom',
        '{colors.colorPalette.focusRing/30}',
        '{colors.colorPalette.focusRing/50}',
      ),
    },
  },
  accent: {
    value: {
      background: 'colorPalette.muted',
      color: 'colorPalette.fg',
      boxShadow: '0px 4px 12px {colors.colorPalette.focusRing/30}',
      ...createGradientBorder(
        'inherit',
        'to bottom',
        '{colors.colorPalette.focusRing/50}',
        '{colors.colorPalette.focusRing}',
      ),
    },
  },
  obsidian: {
    value: {
      background: 'blackAlpha.500',
      color: 'fg',
      backdropFilter: 'blur({blurs.xl})',
      border: 'none',
      boxShadow: `
        0px 0px 0px 1px inset {colors.whiteAlpha.200},
        {shadows.card}
      `,

      ...createGradientBorder(
        'inherit',
        '150deg',
        '{colors.colorPalette.highlight/20}',
        '{colors.colorPalette.highlight/50}',
      ),

      _before: {
        content: '""',
        borderRadius: 'inherit',
        position: 'absolute',
        inset: '1px',
        zIndex: '-1',
        pointerEvents: 'none',
        bg: `linear-gradient(
          transparent,
          {colors.colorPalette.muted/60}
        )`,
      },
    },
  },
  glass: {
    value: {
      background: 'whiteAlpha.200',
      color: 'fg',
      backdropFilter: 'blur({blurs.xl})',
      border: 'none',
      boxShadow: `
        0px 0px 0px 1px inset {colors.whiteAlpha.400},
        0 2px 8px {colors.colorPalette.focusRing/40}
      `,

      ...createGradientBorder(
        'inherit',
        '150deg',
        'transparent',
        '{colors.colorPalette.highlight/70}',
      ),

      _before: {
        content: '""',
        borderRadius: 'inherit',
        position: 'absolute',
        inset: '1px',
        zIndex: '-1',
        pointerEvents: 'none',
        bg: `linear-gradient(
          transparent,
          {colors.colorPalette.highlight/20}
        )`,
      },
    },
  },
  'indicator.bottom': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'colors.colorPalette.solid',
      _before: {
        content: '""',
        position: 'absolute',
        bottom: 'var(--indicator-offset-y, 0)',
        insetInline: 'var(--indicator-offset-x, 0)',
        height: 'var(--indicator-thickness, 2px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },
  'indicator.top': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'colors.colorPalette.solid',
      _before: {
        content: '""',
        position: 'absolute',
        top: 'var(--indicator-offset-y, 0)',
        insetInline: 'var(--indicator-offset-x, 0)',
        height: 'var(--indicator-thickness, 2px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },
  'indicator.start': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'colors.colorPalette.solid',
      _before: {
        content: '""',
        position: 'absolute',
        insetInlineStart: 'var(--indicator-offset-x, 0)',
        insetBlock: 'var(--indicator-offset-y, 0)',
        width: 'var(--indicator-thickness, 2px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },
  'indicator.end': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'colors.colorPalette.solid',
      _before: {
        content: '""',
        position: 'absolute',
        insetInlineEnd: 'var(--indicator-offset-x, 0)',
        insetBlock: 'var(--indicator-offset-y, 0)',
        width: 'var(--indicator-thickness, 2px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },
})
