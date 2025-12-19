import { defineSlotRecipe } from '@chakra-ui/react'

export const breadcrumbSlotRecipe = defineSlotRecipe({
  className: 'ds-breadcrumb',
  slots: [
    'link',
    'currentLink',
    'item',
    'list',
    'root',
    'ellipsis',
    'separator',
  ],
  base: {
    list: {
      display: 'flex',
      alignItems: 'center',
      wordBreak: 'break-word',
      color: 'colorPalette.fg',
      listStyle: 'none',
      userSelect: 'none',
    },
    link: {
      outline: '0',
      borderRadius: 'l1',
      focusRing: 'outside',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2',
    },
    currentLink: {
      textStyle: 'label',
    },
    item: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    separator: {
      color: 'fg.muted',
      opacity: '0.8',
      _icon: {
        boxSize: '1em',
      },
      _rtl: {
        rotate: '180deg',
      },
    },
    ellipsis: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      _icon: {
        boxSize: '1em',
      },
    },
  },
  variants: {
    variant: {
      plain: {
        link: {
          _hover: {
            color: 'fg',
          },
        },
        currentLink: {
          color: 'fg',
        },
      },
    },
    size: {
      sm: {
        list: {
          gap: '1',
          textStyle: 'xs',
        },
      },
      md: {
        list: {
          gap: '1.5',
          textStyle: 'sm',
        },
      },
      lg: {
        list: {
          gap: '2',
          textStyle: 'md',
        },
      },
    },
  },
  compoundVariants: [
    {
      colorPalette: 'primary',
      css: {
        link: {
          color: 'fg.primary',
        },
      },
    },
    {
      colorPalette: 'secondary',
      css: {
        link: {
          color: 'fg.secondary',
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'plain',
    size: 'md',
  },
})
