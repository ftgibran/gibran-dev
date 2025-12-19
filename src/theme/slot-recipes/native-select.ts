import { defineSlotRecipe } from '@chakra-ui/react'

export const nativeSelectSlotRecipe = defineSlotRecipe({
  className: 'ds-native-select',
  slots: ['root', 'field', 'indicator'],
  base: {
    root: {
      height: 'fit-content',
      display: 'flex',
      width: '100%',
      position: 'relative',
    },
    field: {
      width: '100%',
      minWidth: '0',
      appearance: 'none',
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
      '--error-color': 'colors.border.error',
      '--input-height': 'var(--select-field-height)',
      height: 'var(--select-field-height)',
      _hover: {
        filter: 'brightness(1.4)',
      },
      _disabled: {
        layerStyle: 'disabled',
      },
      _invalid: {
        focusRingColor: 'var(--error-color)',
        borderColor: 'var(--error-color)',
      },
      focusVisibleRing: 'inside',
      lineHeight: 'normal',
      '& > option, & > optgroup': {
        bg: 'bg',
      },
    },
    indicator: {
      position: 'absolute',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      top: '50%',
      transform: 'translateY(-50%)',
      height: '100%',
      color: 'fg.muted',
      _disabled: {
        opacity: '0.5',
      },
      _invalid: {
        color: 'fg.error',
      },
      _icon: {
        width: '1em',
        height: '1em',
      },
    },
  },
  variants: {
    variant: {
      glass: {
        field: {
          borderColor: 'whiteAlpha.300',
          bg: `linear-gradient(
            {colors.whiteAlpha.50},
            {colors.whiteAlpha.200}
          )`,
          backdropFilter: 'blur({blurs.md})',
          boxShadow: 'input',
          focusVisibleRing: 'mixed',
        },
      },
      subtle: {
        field: {
          background: 'colorPalette.subtle/50',
          backdropFilter: 'blur({blurs.md})',
          boxShadow: 'inset 0 0 32px {colors.colorPalette.highlight/30}',
          focusVisibleRing: 'inside',
        },
      },
      outline: {
        field: {
          borderColor: 'border',
          bg: 'transparent',
          focusVisibleRing: 'inside',
        },
      },
      plain: {
        field: {
          bg: 'transparent',
          color: 'fg',
          focusRingWidth: '2px',
        },
      },
    },
    size: {
      xs: {
        root: {
          '--select-field-height': 'sizes.8',
        },
        field: {
          textStyle: 'xs',
          ps: '2',
          pe: '6',
        },
        indicator: {
          textStyle: 'sm',
          insetEnd: '1.5',
        },
      },
      sm: {
        root: {
          '--select-field-height': 'sizes.9',
        },
        field: {
          textStyle: 'sm',
          ps: '2.5',
          pe: '8',
        },
        indicator: {
          textStyle: 'md',
          insetEnd: '2',
        },
      },
      md: {
        root: {
          '--select-field-height': 'sizes.10',
        },
        field: {
          textStyle: 'sm',
          ps: '3',
          pe: '8',
        },
        indicator: {
          textStyle: 'lg',
          insetEnd: '2',
        },
      },
      lg: {
        root: {
          '--select-field-height': 'sizes.11',
        },
        field: {
          textStyle: 'md',
          ps: '4',
          pe: '8',
        },
        indicator: {
          textStyle: 'xl',
          insetEnd: '3',
        },
      },
      xl: {
        root: {
          '--select-field-height': 'sizes.12',
        },
        field: {
          textStyle: 'md',
          ps: '4.5',
          pe: '10',
        },
        indicator: {
          textStyle: 'xl',
          insetEnd: '3',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'glass',
  },
})
