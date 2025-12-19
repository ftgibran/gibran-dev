import { chakra, HTMLChakraProps } from '@chakra-ui/react'
import { useCompositeProps } from '@utils/hooks/react/useCompositeProps'
import { forwardRef } from 'react'

import {
  LayoutContextParams,
  layoutContextParamsNames,
  useLayoutContext,
} from '@/components/layout/hooks/useLayoutContext'

export type ArticleProps = HTMLChakraProps<'article'> & LayoutContextParams

export const Article = forwardRef<HTMLElement, ArticleProps>((props, ref) => {
  const [layoutParams, layoutProps] = useCompositeProps(
    props,
    layoutContextParamsNames,
  )

  const { layoutContextProps } = useLayoutContext(layoutParams)

  return (
    <chakra.article
      ref={ref}
      overflowX={'clip'}
      position={'relative'}
      {...layoutContextProps}
      {...layoutProps}
    />
  )
})

Article.displayName = 'Article'
