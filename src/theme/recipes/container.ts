import { defineRecipe } from '@chakra-ui/react'

export const containerRecipe = defineRecipe({
  className: 'ds-container',
  base: {
    position: 'relative',
    w: 'full',
    mx: 'auto',
    px: 4,
    maxW: {
      base: 'full',
      sm: 'container.sm',
      md: 'container.md',
      lg: 'container.lg',
      xl: 'container.xl',
      '2xl': 'container.2xl',
    },
  },
  variants: {
    maxSize: {
      sm: { maxWidth: 'container.sm' },
      md: { maxWidth: 'container.md' },
      lg: { maxWidth: 'container.lg' },
      xl: { maxWidth: 'container.xl' },
      '2xl': { maxWidth: 'container.2xl' },
    },
    centerContent: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    fluid: {
      true: {
        maxWidth: 'full',
      },
    },
  },
})
