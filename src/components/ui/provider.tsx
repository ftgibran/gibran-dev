'use client'

import { ChakraProvider } from '@chakra-ui/react'

import { Toaster } from '@/components/ui/toaster'
import { system } from '@/theme'

import { ColorModeProvider, type ColorModeProviderProps } from './color-mode'

export function DesignSystemProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />

      <Toaster />
    </ChakraProvider>
  )
}
