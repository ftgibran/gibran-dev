import { IconButton, IconButtonProps } from '@chakra-ui/react'
import { LINKEDIN_URL } from '@config/constants'
import NextLink from 'next/link'
import { forwardRef } from 'react'
import { FaLinkedin } from 'react-icons/fa6'

export const ButtonLinkedIn = forwardRef<
  HTMLButtonElement,
  Partial<IconButtonProps>
>((props, ref) => (
  <IconButton
    ref={ref}
    aria-label={'Linked In'}
    variant={'ghost'}
    asChild
    {...props}
  >
    <NextLink href={LINKEDIN_URL} target={'_blank'} rel={'noopener noreferrer'}>
      <FaLinkedin />
    </NextLink>
  </IconButton>
))

ButtonLinkedIn.displayName = 'ButtonLinkedIn'
