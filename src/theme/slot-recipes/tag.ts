import { defineSlotRecipe } from '@chakra-ui/react'

export const tagSlotRecipe = defineSlotRecipe({
  slots: ['root', 'label', 'closeTrigger', 'startElement', 'endElement'],
  className: 'ds-tag',
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      verticalAlign: 'top',
      maxWidth: '100%',
      userSelect: 'none',
      borderRadius: 'l2',
      focusVisibleRing: 'outside',
      fontFamily: 'heading',
      fontStyle: 'italic',
    },
    label: {
      lineClamp: '1',
    },
    closeTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'l1',
      color: 'currentColor',
      transitionProperty: 'all',
      transitionDuration: 'slow',
      outline: '0px solid',
      outlineColor: 'transparent',
      focusVisibleRing: 'inside',
      focusRingWidth: '2px',
      cursor: 'pointer',
      _hover: {
        filter: 'brightness(1.4)',
      },
    },
    startElement: {
      flexShrink: 0,
      boxSize: 'var(--tag-element-size)',
      ms: 'var(--tag-element-offset)',
      '&:has([data-scope=avatar])': {
        boxSize: 'var(--tag-avatar-size)',
        ms: 'calc(var(--tag-element-offset) * 1.5)',
      },
      _icon: {
        boxSize: '100%',
      },
    },
    endElement: {
      flexShrink: 0,
      boxSize: 'var(--tag-element-size)',
      me: 'var(--tag-element-offset)',
      _icon: {
        boxSize: '100%',
      },
      '&:has(button)': {
        ms: 'calc(var(--tag-element-offset) * -1)',
      },
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          px: '1.5',
          minH: '4.5',
          gap: '1',
          '--tag-avatar-size': 'spacing.3',
          '--tag-element-size': 'spacing.3',
          '--tag-element-offset': '-2px',
        },
        label: {
          textStyle: 'xs',
        },
      },
      md: {
        root: {
          px: '1.5',
          minH: '5',
          gap: '1',
          '--tag-avatar-size': 'spacing.3.5',
          '--tag-element-size': 'spacing.3.5',
          '--tag-element-offset': '-2px',
        },
        label: {
          textStyle: 'xs',
        },
      },
      lg: {
        root: {
          px: '2',
          minH: '6',
          gap: '1.5',
          '--tag-avatar-size': 'spacing.4.5',
          '--tag-element-size': 'spacing.4',
          '--tag-element-offset': '-3px',
        },
        label: {
          textStyle: 'sm',
        },
      },
      xl: {
        root: {
          px: '2.5',
          minH: '8',
          gap: '1.5',
          '--tag-avatar-size': 'spacing.6',
          '--tag-element-size': 'spacing.4.5',
          '--tag-element-offset': '-4px',
        },
        label: {
          textStyle: 'sm',
        },
      },
    },
    variant: {
      muted: {
        root: {
          layerStyle: 'muted',
        },
      },
      accent: {
        root: {
          layerStyle: 'accent',
        },
      },
      plain: {
        root: {
          color: 'colorPalette.fg',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'muted',
  },
})
