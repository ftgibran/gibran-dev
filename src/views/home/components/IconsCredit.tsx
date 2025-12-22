import { BoxProps, Link, Span } from '@chakra-ui/react'
import NextLink from 'next/link'
import { forwardRef } from 'react'

export const IconsCredit = forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    return (
      <Span ref={ref} textStyle={'label'} {...props}>
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
      </Span>
    )
  },
)

IconsCredit.displayName = 'IconsCredit'
