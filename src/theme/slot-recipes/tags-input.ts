import { defineSlotRecipe } from '@chakra-ui/react'

export const tagsInputSlotRecipe = defineSlotRecipe({
  slots: [
    'root',
    'label',
    'control',
    'input',
    'clearTrigger',
    'item',
    'itemPreview',
    'itemInput',
    'itemText',
    'itemDeleteTrigger',
  ],
  className: 'tags-input',
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: 'full',
      fontFamily: 'heading',
    },
    label: {
      textStyle: 'label',
      color: 'fg.emphasized',
      _disabled: {
        opacity: '0.5',
      },
    },
    control: {
      '--focus-color': 'colors.colorPalette.focusRing',
      '--error-color': 'colors.border.error',
      minH: 'var(--tags-input-height)',
      '--input-height': 'var(--tags-input-height)',
      px: 'var(--tags-input-px)',
      py: 'var(--tags-input-py)',
      gap: 'var(--tags-input-gap)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      pos: 'relative',
      transitionProperty: 'all',
      transitionDuration: 'slow',
      borderRadius: 'l3',
      border: 'solid 1px',
      borderColor: 'transparent',
      fontFamily: 'heading',
      fontStyle: 'italic',
      fontWeight: 'semibold',
      outline: '0px solid',
      outlineColor: 'transparent',
      _disabled: {
        opacity: '0.5',
      },
      _hover: {
        filter: 'brightness(1.4)',
      },
      _invalid: {
        borderColor: 'var(--error-color)',
      },
    },
    input: {
      flex: '1',
      minWidth: '20',
      outline: 'none',
      bg: 'transparent',
      color: 'fg',
      px: 'calc(var(--tags-input-item-px) / 1.25)',
      height: 'var(--tags-input-item-height)',
      _readOnly: {
        display: 'none',
      },
    },
    itemText: {
      lineClamp: '1',
    },
    itemInput: {
      outline: 'none',
      bg: 'transparent',
      minWidth: '2ch',
      color: 'inherit',
      px: 'var(--tags-input-item-px)',
      height: 'var(--tags-input-item-height)',
    },
    itemPreview: {
      height: 'var(--tags-input-item-height)',
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '1',
      rounded: 'l1',
      px: 'var(--tags-input-item-px)',
      transitionProperty: 'filter',
      transitionDuration: 'slow',
      _highlighted: {
        filter: 'saturate(1.4) brightness(1.2)',
      },
    },
    itemDeleteTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSize: 'calc(var(--tags-input-item-height) / 1.5)',
      cursor: {
        base: 'button',
        _disabled: 'initial',
      },
      me: '-1',
      opacity: '0.4',
      transitionProperty: 'opacity',
      transitionDuration: 'slow',
      _hover: {
        opacity: '1',
      },
      '[data-highlighted] &': {
        opacity: '1',
      },
      _icon: {
        boxSize: '80%',
      },
    },
    clearTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSize: 'calc(var(--tags-input-item-height) / 1.5)',
      transitionProperty: 'filter',
      transitionDuration: 'slow',
      _hover: {
        filter: 'brightness(1.4)',
      },
      cursor: {
        base: 'button',
        _disabled: 'initial',
      },
      color: 'fg.muted',
      focusVisibleRing: 'inside',
      focusRingWidth: '2px',
      rounded: 'l1',
      _icon: {
        boxSize: '5',
      },
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          '--tags-input-height': 'sizes.8',
          '--tags-input-px': 'spacing.1.5',
          '--tags-input-py': 'spacing.1',
          '--tags-input-gap': 'spacing.1',
          '--tags-input-item-height': 'sizes.6',
          '--tags-input-item-px': 'spacing.2',
          textStyle: 'xs',
        },
      },
      sm: {
        root: {
          '--tags-input-height': 'sizes.9',
          '--tags-input-px': 'spacing.1.5',
          '--tags-input-py': 'spacing.1',
          '--tags-input-gap': 'spacing.1',
          '--tags-input-item-height': 'sizes.6',
          '--tags-input-item-px': 'spacing.2',
          textStyle: 'sm',
        },
      },
      md: {
        root: {
          '--tags-input-height': 'sizes.10',
          '--tags-input-px': 'spacing.1.5',
          '--tags-input-py': 'spacing.1',
          '--tags-input-gap': 'spacing.1',
          '--tags-input-item-height': 'sizes.7',
          '--tags-input-item-px': 'spacing.2',
          textStyle: 'sm',
        },
      },
      lg: {
        root: {
          '--tags-input-height': 'sizes.11',
          '--tags-input-px': 'spacing.1.5',
          '--tags-input-py': 'spacing.1',
          '--tags-input-gap': 'spacing.1',
          '--tags-input-item-height': 'sizes.8',
          '--tags-input-item-px': 'spacing.2',
          textStyle: 'md',
        },
      },
    },
    variant: {
      glass: {
        control: {
          borderColor: 'whiteAlpha.300',
          bg: `linear-gradient(
            {colors.whiteAlpha.50},
            {colors.whiteAlpha.200}
          )`,
          backdropFilter: 'blur({blurs.md})',
          boxShadow: 'input',
          _focus: {
            outlineWidth: '4px',
            outlineStyle: 'solid',
            outlineColor: 'colorPalette.focusRing/50',
            borderColor: 'var(--focus-color)',
            outlineOffset: '-1px',
            _invalid: {
              outlineColor: 'var(--error-color)',
              borderColor: 'var(--error-color)',
            },
          },
        },
        itemPreview: {
          layerStyle: 'obsidian',
          boxShadow: 'sm',
        },
      },
      subtle: {
        control: {
          background: 'colorPalette.subtle/50',
          backdropFilter: 'blur({blurs.md})',
          boxShadow: 'inset 0 0 32px {colors.colorPalette.highlight/30}',
          _focus: {
            outlineWidth: '1px',
            outlineStyle: 'solid',
            outlineColor: 'var(--focus-color)',
            borderColor: 'var(--focus-color)',
            _invalid: {
              outlineColor: 'var(--error-color)',
              borderColor: 'var(--error-color)',
            },
          },
        },
        itemPreview: {
          layerStyle: 'subtle',
          boxShadow: 'sm',
        },
      },
      outline: {
        control: {
          borderColor: 'border',
          bg: 'blackAlpha.400',
          _focus: {
            outlineWidth: '1px',
            outlineStyle: 'solid',
            outlineColor: 'var(--focus-color)',
            borderColor: 'var(--focus-color)',
            _invalid: {
              outlineColor: 'var(--error-color)',
              borderColor: 'var(--error-color)',
            },
          },
        },
        itemPreview: {
          layerStyle: 'muted',
          boxShadow: 'sm',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'glass',
  },
})
