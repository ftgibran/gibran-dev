import { defineSlotRecipe } from '@chakra-ui/react'

export const numberInputSlotRecipe = defineSlotRecipe({
  className: 'ds-number-input',
  slots: [
    'root',
    'label',
    'input',
    'control',
    'valueText',
    'incrementTrigger',
    'decrementTrigger',
    'scrubber',
  ],
  base: {
    root: {
      position: 'relative',
      zIndex: '0',
      isolation: 'isolate',
    },
    input: {
      width: '100%',
      minWidth: '0',
      position: 'relative',
      appearance: 'none',
      textAlign: 'start',
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
      verticalAlign: 'top',
      pe: 'calc(var(--stepper-width) + 0.5rem)',
    },
    control: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '0',
      insetEnd: '0px',
      margin: '1px',
      width: 'var(--stepper-width)',
      height: 'calc(100% - 2px)',
      zIndex: '1',
      borderStartWidth: '1px',
      divideY: '1px',
    },
    incrementTrigger: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '1',
      userSelect: 'none',
      cursor: 'button',
      lineHeight: '1',
      color: 'fg.muted',
      '--stepper-base-radius': 'radii.l3',
      '--stepper-radius': 'calc(var(--stepper-base-radius) + 1px)',
      _icon: {
        boxSize: '1em',
      },
      _disabled: {
        opacity: '0.5',
      },
      _hover: {
        bg: 'bg.muted',
      },
      _active: {
        bg: 'bg.emphasized',
      },
      borderTopEndRadius: 'var(--stepper-radius)',
    },
    decrementTrigger: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '1',
      userSelect: 'none',
      cursor: 'button',
      lineHeight: '1',
      color: 'fg.muted',
      '--stepper-base-radius': 'radii.l3',
      '--stepper-radius': 'calc(var(--stepper-base-radius) + 1px)',
      _icon: {
        boxSize: '1em',
      },
      _disabled: {
        opacity: '0.5',
      },
      _hover: {
        bg: 'bg.muted',
      },
      _active: {
        bg: 'bg.emphasized',
      },
      borderBottomEndRadius: 'var(--stepper-radius)',
    },
    valueText: {
      textStyle: 'label',
      fontFeatureSettings: 'pnum',
      fontVariantNumeric: 'proportional-nums',
    },
  },
  variants: {
    size: {
      xs: {
        input: {
          textStyle: 'xs',
          px: '2',
          '--input-height': 'sizes.8',
        },
        control: {
          fontSize: '2xs',
          '--stepper-width': 'sizes.4',
        },
      },
      sm: {
        input: {
          textStyle: 'sm',
          px: '2.5',
          '--input-height': 'sizes.9',
        },
        control: {
          fontSize: 'xs',
          '--stepper-width': 'sizes.5',
        },
      },
      md: {
        input: {
          textStyle: 'sm',
          px: '3',
          '--input-height': 'sizes.10',
        },
        control: {
          fontSize: 'sm',
          '--stepper-width': 'sizes.6',
        },
      },
      lg: {
        input: {
          textStyle: 'md',
          px: '4',
          '--input-height': 'sizes.11',
        },
        control: {
          fontSize: 'sm',
          '--stepper-width': 'sizes.6',
        },
      },
    },
    variant: {
      glass: {
        control: {
          borderColor: 'whiteAlpha.200',
        },
        decrementTrigger: {
          borderColor: 'whiteAlpha.200',
        },
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
      outline: {
        input: {
          bg: 'transparent',
          borderWidth: '1px',
          borderColor: 'border',
          focusVisibleRing: 'inside',
          focusRingColor: 'var(--focus-color)',
        },
      },
      subtle: {
        input: {
          borderWidth: '1px',
          borderColor: 'transparent',
          bg: 'bg.muted',
          focusVisibleRing: 'inside',
          focusRingColor: 'var(--focus-color)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'glass',
  },
})
