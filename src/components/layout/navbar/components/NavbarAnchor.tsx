import { Button, ButtonProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import { forwardRef } from 'react'

export interface NavbarAnchorProps extends ButtonProps {
  href: string
}

export const NavbarAnchor = forwardRef<HTMLButtonElement, NavbarAnchorProps>(
  (props, ref) => {
    const { children, href, ...rest } = props

    return (
      <Button
        ref={ref}
        w={'full'}
        variant={'ghost'}
        justifyContent={'start'}
        asChild
        {...rest}
      >
        <NextLink href={href}>{children}</NextLink>
      </Button>
    )
  },
)

NavbarAnchor.displayName = 'NavbarAnchor'
