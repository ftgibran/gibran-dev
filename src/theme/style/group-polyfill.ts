import type { GlobalStyleObject } from '@chakra-ui/react'

export const groupPolyfill: GlobalStyleObject = {
  '.chakra-group > *:first-of-type:not(:last-of-type)': {
    _before: {
      borderEndRadius: 'inherit !important',
    },
    _after: {
      borderEndRadius: 'inherit !important',
    },
  },

  '.chakra-group > *:not(:first-of-type):not(:last-of-type)': {
    _before: {
      borderRadius: 'inherit !important',
    },
    _after: {
      borderRadius: 'inherit !important',
    },
  },

  '.chakra-group > *:not(:first-of-type):last-of-type': {
    _before: {
      borderStartRadius: 'inherit !important',
    },
    _after: {
      borderStartRadius: 'inherit !important',
    },
  },
} as const
