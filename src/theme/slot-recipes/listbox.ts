import { defineSlotRecipe } from '@chakra-ui/react'

export const listboxSlotRecipe = defineSlotRecipe({
  className: 'ds-listbox',
  slots: [
    'label',
    'input',
    'item',
    'itemText',
    'itemIndicator',
    'itemGroup',
    'itemGroupLabel',
    'content',
    'root',
    'valueText',
    'empty',
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: 'full',
    },
    content: {
      display: 'flex',
      maxH: '96',
      p: '1',
      gap: '1',
      textStyle: 'sm',
      outline: 'none',
      scrollPadding: '1',
      borderRadius: 'l3',
      _horizontal: {
        flexDirection: 'row',
        overflowX: 'auto',
      },
      _vertical: {
        flexDirection: 'column',
        overflowY: 'auto',
      },
      '--listbox-item-padding-x': 'spacing.2',
      '--listbox-item-padding-y': 'spacing.1.5',
    },
    item: {
      position: 'relative',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      cursor: 'pointer',
      justifyContent: 'space-between',
      flex: '1',
      textAlign: 'start',
      borderRadius: 'l1',
      transitionProperty: 'common',
      transitionDuration: 'fast',
      textStyle: 'label',
      py: 'var(--listbox-item-padding-y)',
      px: 'var(--listbox-item-padding-x)',
      _highlighted: {
        bg: 'whiteAlpha.100',
      },
      _disabled: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    empty: {
      py: 'var(--listbox-item-padding-y)',
      px: 'var(--listbox-item-padding-x)',
    },
    itemText: {
      flex: '1',
    },
    itemGroup: {
      mt: '1.5',
      _first: {
        mt: '0',
      },
    },
    itemGroupLabel: {
      py: '1.5',
      px: '2',
      textStyle: 'subtitle',
      color: 'fg.emphasized',
      userSelect: 'none',
    },
    label: {
      textStyle: 'label',
      userSelect: 'none',
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    valueText: {
      lineClamp: '1',
      maxW: '80%',
    },
    itemIndicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      _icon: {
        boxSize: '4',
      },
    },
  },
  variants: {
    variant: {
      accent: {
        content: {
          layerStyle: 'accent',
        },
        item: {
          _hover: { bg: 'colorPalette.solid/30' },
          _selected: { bg: 'colorPalette.solid/50' },
        },
      },
      solid: {
        content: {
          layerStyle: 'solid',
        },
        item: {
          _hover: { bg: 'colorPalette.solid/30' },
          _selected: { bg: 'colorPalette.solid/50' },
        },
      },
      surface: {
        content: {
          layerStyle: 'surface',
        },
        item: {
          _hover: { bg: 'colorPalette.solid/30' },
          _selected: { bg: 'colorPalette.solid/50' },
        },
      },
      glass: {
        content: {
          layerStyle: 'glass',
        },
        itemGroup: {
          borderColor: 'whiteAlpha.200',
        },
        item: {
          _hover: { bg: 'whiteAlpha.100' },
          _selected: { bg: 'whiteAlpha.200' },
        },
      },
      obsidian: {
        content: {
          layerStyle: 'obsidian',
        },
        itemGroup: { borderColor: 'whiteAlpha.200' },
        item: {
          _hover: { bg: 'whiteAlpha.100' },
          _selected: { bg: 'whiteAlpha.200' },
        },
      },
      plain: {},
    },
  },
  defaultVariants: {
    variant: 'surface',
  },
})
