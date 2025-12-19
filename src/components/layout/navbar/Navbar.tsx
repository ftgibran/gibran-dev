import {
  Box,
  BoxProps,
  CloseButton,
  Container,
  Drawer,
  Flex,
  HStack,
  IconButton,
  Portal,
} from '@chakra-ui/react'
import { NAVBAR_HEIGHT } from '@config/constants'
import { useOnWindowScroll } from '@utils/hooks/dom/useOnScroll'
import { forwardRef, useState } from 'react'
import { LuMenu } from 'react-icons/lu'

import { NavbarItems } from '@/components/layout/navbar/components/NavbarItems'
import { NavbarLocale } from '@/components/layout/navbar/components/NavbarLocale'
import { NavbarSocialItems } from '@/components/layout/navbar/components/NavbarSocialItems'
import { Logo } from '@/components/misc/Logo'

export const Navbar = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const { ...rest } = props

  const [isSticky, setIsSticky] = useState(false)

  useOnWindowScroll(() => {
    setIsSticky(window.scrollY > NAVBAR_HEIGHT)
  })

  return (
    <Drawer.Root>
      <Box
        as={'nav'}
        ref={ref}
        zIndex={'docked'}
        pos={'sticky'}
        top={0}
        transitionProperty={'common'}
        transitionDuration={'moderate'}
        bg={isSticky ? 'bg.panel/80' : 'transparent'}
        shadow={isSticky ? 'input' : 'none'}
        backdropFilter={isSticky ? 'blur({blurs.xl})' : 'none'}
        {...rest}
      >
        <Container>
          <Flex
            h={`${NAVBAR_HEIGHT}px`}
            align={'center'}
            justify={'space-between'}
            wrap={'nowrap'}
            gap={4}
          >
            <HStack gap={8}>
              <Logo />

              <NavbarItems hideBelow={'lg'} />
            </HStack>

            <HStack gap={4}>
              <NavbarSocialItems hideBelow={'md'} />

              <NavbarLocale />

              <Drawer.Trigger asChild>
                <IconButton hideFrom={'lg'} variant={'ghost'}>
                  <LuMenu />
                </IconButton>
              </Drawer.Trigger>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Portal>
        <Drawer.Backdrop />

        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Logo />
            </Drawer.Header>

            <Drawer.Body>
              <NavbarItems direction={'column'} flexWrap={'nowrap'} />
            </Drawer.Body>

            <Drawer.Footer justifyContent={'center'}>
              <NavbarSocialItems />
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton size={'sm'} />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
})

Navbar.displayName = 'Navbar'
