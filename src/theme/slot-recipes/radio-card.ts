import { defineSlotRecipe } from '@chakra-ui/react'

export const radioCardSlotRecipe = defineSlotRecipe({
  className: 'ds-radio-card',
  slots: [
    'root',
    'label',
    'item',
    'itemText',
    'itemControl',
    'indicator',
    'itemAddon',
    'itemIndicator',
    'itemContent',
    'itemDescription',
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      isolation: 'isolate',
    },
    item: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      userSelect: 'none',
      position: 'relative',
      borderRadius: 'l3',
      outline: '0px solid',
      outlineColor: 'transparent',
      focusVisibleRing: 'outside',
      fontFamily: 'heading',
      cursor: 'pointer',
      transitionDuration: 'slow',
      transitionProperty: 'all',
      '& div[data-state=checked]': {
        bg: 'none',
      },
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
        opacity: '0.8',
        borderColor: 'border.disabled',
      },
      _checked: {
        zIndex: '1',
      },
    },
    label: {
      display: 'inline-flex',
      textStyle: 'label',
      whiteSpace: 'nowrap',
      color: 'fg.emphasized',
      _disabled: {
        opacity: '0.5',
      },
    },
    itemText: {
      fontWeight: 'medium',
      whiteSpace: 'nowrap',
      flex: '1',
    },
    itemDescription: {
      opacity: '0.64',
      textStyle: 'sm',
    },
    itemControl: {
      display: 'inline-flex',
      flex: '1',
      pos: 'relative',
      rounded: 'inherit',
      justifyContent: 'var(--radio-card-justify)',
      alignItems: 'var(--radio-card-align)',
      _disabled: {
        bg: 'bg.muted',
      },
    },
    itemIndicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      verticalAlign: 'top',
      color: 'white',
      borderWidth: '1px',
      borderColor: 'transparent',
      borderRadius: 'full',
      cursor: 'radio',
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'colorPalette.focusRing',
        outlineOffset: '2px',
      },
      _invalid: {
        colorPalette: 'red',
        borderColor: 'red.500',
      },
      _disabled: {
        opacity: '0.5',
        cursor: 'disabled',
      },
      '& .dot': {
        height: '100%',
        width: '100%',
        borderRadius: 'full',
        bg: 'currentColor',
        scale: '0.4',
      },
    },
    itemAddon: {
      roundedBottom: 'inherit',
      _disabled: {
        color: 'fg.muted',
      },
    },
    itemContent: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
      gap: '1',
      justifyContent: 'var(--radio-card-justify)',
      alignItems: 'var(--radio-card-align)',
    },
  },
  variants: {
    size: {
      sm: {
        item: {
          textStyle: 'sm',
          borderRadius: 'l2',
        },
        itemControl: {
          padding: '3',
          gap: '1.5',
        },
        itemAddon: {
          px: '3',
          py: '1.5',
          borderTopWidth: '1px',
        },
        itemIndicator: {
          boxSize: '4',
        },
      },
      md: {
        item: {
          textStyle: 'sm',
          borderRadius: 'l3',
        },
        itemControl: {
          padding: '4',
          gap: '2.5',
        },
        itemAddon: {
          px: '4',
          py: '2',
          borderTopWidth: '1px',
        },
        itemIndicator: {
          boxSize: '5',
        },
      },
      lg: {
        item: {
          textStyle: 'md',
          borderRadius: 'l4',
        },
        itemControl: {
          padding: '4',
          gap: '3.5',
        },
        itemAddon: {
          px: '4',
          py: '2',
          borderTopWidth: '1px',
        },
        itemIndicator: {
          boxSize: '6',
        },
      },
    },
    variant: {
      surface: {
        item: {
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
        itemIndicator: {
          borderWidth: '1px',
          borderColor: 'border.emphasized',
          _checked: {
            bg: 'colorPalette.solid',
            color: 'colorPalette.contrast',
            borderColor: 'colorPalette.solid',
          },
        },
      },
      subtle: {
        item: {
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
        itemControl: {
          _checked: {
            bg: 'colorPalette.muted',
            color: 'colorPalette.fg',
          },
        },
        itemIndicator: {
          borderWidth: '1px',
          borderColor: 'inherit',
          _checked: {
            color: 'colorPalette.fg',
            borderColor: 'colorPalette.solid',
          },
          '& .dot': {
            scale: '0.6',
          },
        },
      },
    },
    justify: {
      start: {
        item: {
          '--radio-card-justify': 'flex-start',
        },
      },
      end: {
        item: {
          '--radio-card-justify': 'flex-end',
        },
      },
      center: {
        item: {
          '--radio-card-justify': 'center',
        },
      },
    },
    align: {
      start: {
        item: {
          '--radio-card-align': 'flex-start',
        },
        itemControl: {
          textAlign: 'start',
        },
      },
      end: {
        item: {
          '--radio-card-align': 'flex-end',
        },
        itemControl: {
          textAlign: 'end',
        },
      },
      center: {
        item: {
          '--radio-card-align': 'center',
        },
        itemControl: {
          textAlign: 'center',
        },
      },
    },
    orientation: {
      vertical: {
        itemControl: {
          flexDirection: 'column',
        },
      },
      horizontal: {
        itemControl: {
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
