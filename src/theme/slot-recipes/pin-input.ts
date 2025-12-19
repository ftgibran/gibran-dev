import { defineSlotRecipe } from '@chakra-ui/react'

export const pinInputSlotRecipe = defineSlotRecipe({
  className: 'ds-pin-input',
  slots: ['root', 'label', 'input', 'control'],
  base: {
    input: {
      width: 'var(--input-height)',
      minWidth: '0',
      position: 'relative',
      appearance: 'none',
      textAlign: 'center',
      borderRadius: 'l3',
      border: 'solid 1px',
      borderColor: 'transparent',
      fontFamily: 'heading',
      fontStyle: 'italic',
      fontWeight: 'semibold',
      transitionProperty: 'all',
      transitionDuration: 'slow',
      outline: '0px solid',
      outlineColor: 'transparent',
      _disabled: {
        layerStyle: 'disabled',
      },
      height: 'var(--input-height)',
      minW: 'var(--input-height)',
      '--focus-color': 'colors.colorPalette.focusRing',
      '--error-color': 'colors.border.error',
      _hover: {
        filter: 'brightness(1.4)',
      },
      _invalid: {
        focusRingColor: 'var(--error-color)',
        borderColor: 'var(--error-color)',
      },
    },
    control: {
      display: 'inline-flex',
      gap: '2',
      isolation: 'isolate',
    },
  },
  variants: {
    size: {
      '2xs': {
        input: {
          textStyle: 'xs',
          px: '1',
          '--input-height': 'sizes.7',
        },
      },
      xs: {
        input: {
          textStyle: 'xs',
          px: '1',
          '--input-height': 'sizes.8',
        },
      },
      sm: {
        input: {
          textStyle: 'sm',
          px: '1',
          '--input-height': 'sizes.9',
        },
      },
      md: {
        input: {
          textStyle: 'sm',
          px: '1',
          '--input-height': 'sizes.10',
        },
      },
      lg: {
        input: {
          textStyle: 'md',
          px: '1',
          '--input-height': 'sizes.11',
        },
      },
      xl: {
        input: {
          textStyle: 'md',
          px: '1',
          '--input-height': 'sizes.12',
        },
      },
      '2xl': {
        input: {
          textStyle: 'lg',
          px: '1',
          '--input-height': 'sizes.16',
        },
      },
    },
    variant: {
      glass: {
        input: {
          borderColor: 'whiteAlpha.300',
          bg: `linear-gradient(
            {colors.whiteAlpha.50},
            {colors.whiteAlpha.200}
          )`,
          backdropFilter: 'blur({blurs.md})',
          boxShadow: 'input',
          focusVisibleRing: 'mixed',
          focusRingColor: 'var(--focus-color)',
        },
      },
      subtle: {
        input: {
          background: 'colorPalette.subtle/50',
          backdropFilter: 'blur({blurs.md})',
          boxShadow: 'inset 0 0 32px {colors.colorPalette.highlight/30}',
          focusVisibleRing: 'inside',
        },
      },
      outline: {
        input: {
          borderColor: 'border',
          bg: 'transparent',
          focusVisibleRing: 'inside',
        },
      },
    },
    attached: {
      true: {
        control: {
          gap: '0',
          spaceX: '-1px',
        },
        input: {
          _notFirst: {
            borderStartRadius: '0',
          },
          _notLast: {
            borderEndRadius: '0',
          },
          _focusVisible: {
            zIndex: '1',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'glass',
  },
})
