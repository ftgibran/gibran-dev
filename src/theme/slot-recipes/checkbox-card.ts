import { defineSlotRecipe } from '@chakra-ui/react'

export const checkboxCardSlotRecipe = defineSlotRecipe({
  slots: [
    'root',
    'control',
    'label',
    'description',
    'addon',
    'indicator',
    'content',
  ],
  className: 'ds-checkbox-card',
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      userSelect: 'none',
      position: 'relative',
      flex: '1',
      borderRadius: 'l3',
      outline: '0px solid',
      outlineColor: 'transparent',
      focusVisibleRing: 'outside',
      fontFamily: 'heading',
      cursor: 'pointer',
      transitionDuration: 'slow',
      transitionProperty: 'all',
      _before: {
        content: '""',
        pos: 'absolute',
        inset: 0,
        borderRadius: 'inherit',
        pointerEvents: 'none',
        transitionDuration: 'fast',
        transitionProperty: 'all',
      },
      _after: {
        transitionDuration: 'fast',
        transitionProperty: 'border',
      },
      _disabled: {
        cursor: 'disabled',
        opacity: '0.8',
      },
      _invalid: {
        outline: '2px solid',
        outlineColor: 'border.error',
      },
    },
    control: {
      display: 'inline-flex',
      flex: '1',
      position: 'relative',
      borderRadius: 'inherit',
      justifyContent: 'var(--checkbox-card-justify)',
      alignItems: 'var(--checkbox-card-align)',
    },
    label: {
      textStyle: 'label',
      display: 'flex',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      color: 'fg.emphasized',
      gap: '2',
      flex: '1',
      _disabled: {
        opacity: '0.5',
      },
    },
    description: {
      opacity: '0.64',
      textStyle: 'sm',
      color: 'fg.muted',
      _disabled: {
        opacity: '0.5',
      },
    },
    addon: {
      borderColor: 'border.muted',
      _disabled: {
        opacity: '0.5',
      },
    },
    indicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      color: 'white',
      borderWidth: '1px',
      borderColor: 'transparent',
      borderRadius: 'l1',
      cursor: 'checkbox',
      focusVisibleRing: 'outside',
      _icon: {
        boxSize: 'full',
      },
      _invalid: {
        colorPalette: 'red',
        borderColor: 'border.error',
      },
      _disabled: {
        opacity: '0.5',
        cursor: 'disabled',
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
      gap: '1',
      justifyContent: 'var(--checkbox-card-justify)',
      alignItems: 'var(--checkbox-card-align)',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          textStyle: 'sm',
          borderRadius: 'l2',
        },
        control: {
          padding: '3',
          gap: '1.5',
        },
        addon: {
          px: '3',
          py: '1.5',
          borderTopWidth: '1px',
        },
        indicator: {
          boxSize: '4',
        },
      },
      md: {
        root: {
          borderRadius: 'l3',
          textStyle: 'sm',
        },
        control: {
          padding: '4',
          gap: '2.5',
        },
        addon: {
          px: '4',
          py: '2',
          borderTopWidth: '1px',
        },
        indicator: {
          boxSize: '5',
          p: '0.5',
        },
      },
      lg: {
        root: {
          borderRadius: 'l4',
          textStyle: 'md',
        },
        control: {
          padding: '4',
          gap: '3.5',
        },
        addon: {
          px: '4',
          py: '2',
          borderTopWidth: '1px',
        },
        indicator: {
          boxSize: '6',
          p: '0.5',
        },
      },
    },
    variant: {
      surface: {
        root: {
          layerStyle: 'surface',
          _hover: {
            bg: 'bg.muted',
            borderColor: 'border.highlight',
          },
          _active: {
            _before: {
              bg: 'blackAlpha.400',
            },
          },
          _checked: {
            _before: {
              bg: 'whiteAlpha.50',
            },
            _after: {
              borderWidth: '2px',
            },
          },
          _disabled: {
            bg: 'bg.muted',
          },
        },
        indicator: {
          borderColor: 'border.emphasized',
          '&:is([data-state=checked], [data-state=indeterminate])': {
            bg: 'colorPalette.solid',
            color: 'colorPalette.contrast',
            borderColor: 'colorPalette.solid',
          },
        },
      },
      subtle: {
        root: {
          layerStyle: 'subtle',
          _hover: {
            filter: 'saturate(1.2) brightness(1.2)',
          },
          _active: {
            shadow: 'inset 0 0 24px {colors.colorPalette.highlight/10}',
          },
          _checked: {
            shadow: 'inset 0 0 48px {colors.colorPalette.focusRing/60}',
          },
        },
        indicator: {
          '&:is([data-state=checked], [data-state=indeterminate])': {
            color: 'colorPalette.fg',
          },
        },
      },
    },
    justify: {
      start: {
        root: {
          '--checkbox-card-justify': 'flex-start',
        },
      },
      end: {
        root: {
          '--checkbox-card-justify': 'flex-end',
        },
      },
      center: {
        root: {
          '--checkbox-card-justify': 'center',
        },
      },
    },
    align: {
      start: {
        root: {
          '--checkbox-card-align': 'flex-start',
        },
        content: {
          textAlign: 'start',
        },
      },
      end: {
        root: {
          '--checkbox-card-align': 'flex-end',
        },
        content: {
          textAlign: 'end',
        },
      },
      center: {
        root: {
          '--checkbox-card-align': 'center',
        },
        content: {
          textAlign: 'center',
        },
      },
    },
    orientation: {
      vertical: {
        control: {
          flexDirection: 'column',
        },
      },
      horizontal: {
        control: {
          flexDirection: 'row',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'surface',
    align: 'start',
    orientation: 'horizontal',
  },
})
