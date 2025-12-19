import { chakra, HTMLChakraProps } from '@chakra-ui/react'
import { useCompositeProps } from '@utils/hooks/react/useCompositeProps'
import { forwardRef } from 'react'

import {
  LayoutContextParams,
  layoutContextParamsNames,
  useLayoutContext,
} from '@/components/layout/hooks/useLayoutContext'

export type SectionProps = HTMLChakraProps<'section'> & LayoutContextParams

export const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const [layoutParams, layoutProps] = useCompositeProps(
    props,
    layoutContextParamsNames,
  )

  const { layoutContextProps } = useLayoutContext(layoutParams)

  return (
    <chakra.section
      ref={ref}
      overflowX={'clip'}
      position={'relative'}
      {...layoutContextProps}
      {...layoutProps}
    />
  )
})

Section.displayName = 'Section'
