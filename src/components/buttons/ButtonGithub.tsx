import { IconButton, IconButtonProps } from '@chakra-ui/react'
import { GITHUB_URL } from '@config/constants'
import NextLink from 'next/link'
import { forwardRef } from 'react'
import { FaGithub } from 'react-icons/fa6'

export const ButtonGithub = forwardRef<
  HTMLButtonElement,
  Partial<IconButtonProps>
>((props, ref) => (
  <IconButton
    ref={ref}
    aria-label={'Github'}
    variant={'ghost'}
    asChild
    {...props}
  >
    <NextLink href={GITHUB_URL} target={'_blank'}>
      <FaGithub />
    </NextLink>
  </IconButton>
))

ButtonGithub.displayName = 'ButtonGithub'
