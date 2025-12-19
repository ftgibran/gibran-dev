import { defineSlotRecipe } from '@chakra-ui/react'

export const editableSlotRecipe = defineSlotRecipe({
  slots: [
    'root',
    'area',
    'label',
    'preview',
    'input',
    'editTrigger',
    'submitTrigger',
    'cancelTrigger',
    'control',
    'textarea',
  ],
  className: 'ds-editable',
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      gap: '1.5',
      width: 'full',
      fontFamily: 'heading',
      fontStyle: 'italic',
      fontWeight: 'semibold',
    },
    preview: {
      width: '100%',
      minWidth: '0',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      textAlign: 'inherit',
      bg: 'transparent',
      borderRadius: 'l2',
      py: '1',
      px: '2',
      display: 'inline-flex',
      alignItems: 'center',
      transitionProperty: 'common',
      transitionDuration: 'moderate',
      cursor: 'text',
      _hover: {
        layerStyle: 'outline',
        color: 'inherit',
      },
      _disabled: {
        userSelect: 'none',
      },
    },
    input: {
      width: '100%',
      minWidth: '0',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      textAlign: 'inherit',
      letterSpacing: 'wide !important',
      bg: 'blackAlpha.400',
      borderRadius: 'l3',
      py: '1',
      px: '1',
      transitionProperty: 'all',
      transitionDuration: 'slow',
      outline: '0px solid',
      outlineColor: 'transparent',
      focusVisibleRing: 'inside',
      focusRingWidth: '2px',
      _hover: {
        filter: 'brightness(1.2)',
      },
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '1.5',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          textStyle: 'sm',
        },
        preview: {
          minH: '8',
          px: '2.5',
        },
        input: {
          minH: '8',
          px: '2.5',
        },
      },
      md: {
        root: {
          textStyle: 'sm',
        },
        preview: {
          minH: '9',
          px: '3',
        },
        input: {
          minH: '9',
          px: '3',
        },
      },
      lg: {
        root: {
          textStyle: 'md',
        },
        preview: {
          minH: '10',
          px: '4',
        },
        input: {
          minH: '10',
          px: '4',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
