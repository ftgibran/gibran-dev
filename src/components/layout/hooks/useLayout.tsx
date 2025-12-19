import { createContext } from '@chakra-ui/react'
import { NAVBAR_HEIGHT } from '@config/constants'
import { useWindowSize } from '@utils/hooks/dom/useWindowSize'
import { useIsMounted } from '@utils/hooks/react/useIsMounted'
import { useState } from 'react'

export const [LayoutProvider, _useLayoutContext] =
  createContext<ReturnUseLayout>({
    strict: false,
  })

export type ReturnUseLayout = ReturnType<typeof useLayout>

export interface LayoutParams {
  omitNavbar?: boolean
}

export function useLayout(options: LayoutParams = {}) {
  const [navbarHeight, setNavbarHeight] = useState(NAVBAR_HEIGHT)

  const { windowWidth: contentWidth, windowHeight } = useWindowSize()

  const isMounted = useIsMounted()

  return {
    isMounted,

    navbarHeight,
    setNavbarHeight,

    contentWidth,
    windowHeight,

    ...options,
  }
}
