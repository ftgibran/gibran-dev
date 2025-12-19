'use client'

import {
  createToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  Toaster as ChakraToaster,
} from '@chakra-ui/react'
import { NAVBAR_HEIGHT } from '@config/constants'

export const toaster = createToaster({
  placement: 'top-end',
  offsets: {
    top: `calc(${NAVBAR_HEIGHT}px + 0.5rem)`,
    bottom: '0.5rem',
    left: '0.5rem',
    right: '0.5rem',
  },
  duration: 8000,
  pauseOnPageIdle: true,
})

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: '4' }}>
        {(toast) => (
          <Toast.Root width={{ md: 'sm' }}>
            {toast.type === 'loading' ? (
              <Spinner size={'sm'} color={'blue.solid'} />
            ) : (
              <Toast.Indicator />
            )}
            <Stack gap={'1'} flex={'1'} maxWidth={'100%'}>
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {toast.description && (
                <Toast.Description>{toast.description}</Toast.Description>
              )}
            </Stack>
            {toast.action && (
              <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
            )}
            {toast.closable && <Toast.CloseTrigger />}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  )
}
