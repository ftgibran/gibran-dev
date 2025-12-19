import { BoxProps, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { forwardRef } from 'react'

export const IconsCredit = forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    return (
      <Heading ref={ref} as={'h5'} size={'h5'} {...props}>
        <>Icons made by </>

        <Link asChild>
          <NextLink href={'https://www.freepik.com/'} target={'_blank'}>
            Freepik
          </NextLink>
        </Link>

        <> from </>

        <Link asChild>
          <NextLink href={'https://www.flaticon.com'} target={'_blank'}>
            flaticon.com
          </NextLink>
        </Link>
      </Heading>
    )
  },
)

IconsCredit.displayName = 'IconsCredit'
