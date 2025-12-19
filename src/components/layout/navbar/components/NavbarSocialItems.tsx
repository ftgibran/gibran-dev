import { BoxProps, ButtonGroup } from '@chakra-ui/react'
import { forwardRef } from 'react'

import { ButtonGithub } from '@/components/buttons/ButtonGithub'
import { ButtonLinkedIn } from '@/components/buttons/ButtonLinkedIn'

export const NavbarSocialItems = forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    return (
      <ButtonGroup ref={ref} {...props}>
        <ButtonGithub />

        <ButtonLinkedIn />
      </ButtonGroup>
    )
  },
)

NavbarSocialItems.displayName = 'NavbarSocialItems'
