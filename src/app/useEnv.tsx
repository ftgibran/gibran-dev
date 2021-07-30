import {useMemo} from 'react'

export function useEnv() {
  const factory = () => ({
    PALETTE_BLACK: process.env.NEXT_PUBLIC_PALETTE_BLACK ?? '',
    PALETTE_WHITE: process.env.NEXT_PUBLIC_PALETTE_WHITE ?? '',
    PALETTE_DARKEST: process.env.NEXT_PUBLIC_PALETTE_DARKEST ?? '',
    PALETTE_DARKER: process.env.NEXT_PUBLIC_PALETTE_DARKER ?? '',
    PALETTE_PRIMARY: process.env.NEXT_PUBLIC_PALETTE_PRIMARY ?? '',
    PALETTE_LIGHTER: process.env.NEXT_PUBLIC_PALETTE_LIGHTER ?? '',
    PALETTE_LIGHTEST: process.env.NEXT_PUBLIC_PALETTE_LIGHTEST ?? '',
  })

  return useMemo(factory, [])
}
