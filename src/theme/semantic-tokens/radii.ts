import { defineSemanticTokens } from '@chakra-ui/react'

export const radii = defineSemanticTokens.radii({
  l0: { value: '{radii.xs}' },
  l1: { value: '{radii.sm}' },
  l2: { value: '{radii.md}' },
  l3: { value: '{radii.lg}' },
  l4: { value: '{radii.xl}' },
  l5: { value: '{radii.2xl}' },
  l6: { value: '{radii.3xl}' },
  l7: { value: '{radii.4xl}' },

  l0Inner: { value: 'calc({radii.xs} - 1px)' },
  l1Inner: { value: 'calc({radii.sm} - 1px)' },
  l2Inner: { value: 'calc({radii.md} - 1px)' },
  l3Inner: { value: 'calc({radii.lg} - 1px)' },
  l4Inner: { value: 'calc({radii.xl} - 1px)' },
  l5Inner: { value: 'calc({radii.2xl} - 1px)' },
  l6Inner: { value: 'calc({radii.3xl} - 1px)' },
  l7Inner: { value: 'calc({radii.4xl} - 1px)' },
})
