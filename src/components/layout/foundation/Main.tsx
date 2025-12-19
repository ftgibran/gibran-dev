import { chakra, HTMLChakraProps } from '@chakra-ui/react'
import { useCompositeProps } from '@utils/hooks/react/useCompositeProps'
import { forwardRef } from 'react'

import {
  LayoutContextParams,
  layoutContextParamsNames,
  useLayoutContext,
} from '@/components/layout/hooks/useLayoutContext'

export type MainProps = HTMLChakraProps<'main'> & LayoutContextParams

export const Main = forwardRef<HTMLElement, MainProps>((props, ref) => {
  const [layoutParams, layoutProps] = useCompositeProps(
    props,
    layoutContextParamsNames,
  )

  const { layoutContextProps } = useLayoutContext(layoutParams)

  return (
    <chakra.main
      ref={ref}
      overflowX={'clip'}
      position={'relative'}
      {...layoutContextProps}
      {...layoutProps}
    />
  )
})

Main.displayName = 'Main'
