'use client'

import { Flex, FlexProps } from '@chakra-ui/react'
import { FC } from 'react'

import { Main } from '@/components/layout/foundation/Main'
import {
  LayoutParams,
  LayoutProvider,
  useLayout,
} from '@/components/layout/hooks/useLayout'
import { Navbar } from '@/components/layout/navbar/Navbar'

export type LayoutProps = LayoutParams & FlexProps

export const Layout: FC<LayoutProps> = (props) => {
  const { children, omitNavbar, ...rest } = props

  const context = useLayout({ omitNavbar })

  return (
    <LayoutProvider value={context}>
      <Flex
        direction={'column'}
        minH={'100vh'}
        visibility={context.isMounted ? 'visible' : 'hidden'}
        {...rest}
      >
        <Navbar />

        <Main flex={1}>{children}</Main>
      </Flex>
    </LayoutProvider>
  )
}
