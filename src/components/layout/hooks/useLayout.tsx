import { createContext } from '@chakra-ui/react'
import { NAVBAR_HEIGHT } from '@config/constants'

export const [LayoutProvider, _useLayoutContext] =
  createContext<ReturnUseLayout>({
    strict: false,
  })

export type ReturnUseLayout = ReturnType<typeof useLayout>

export interface LayoutParams {
  omitNavbar?: boolean
}

export function useLayout(options: LayoutParams = {}) {
  return {
    navbarHeight: NAVBAR_HEIGHT,

    ...options,
  }
}
