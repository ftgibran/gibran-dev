import { Button, ButtonProps, Span } from '@chakra-ui/react'
import { useTranslation } from '@utils/i18n/useTranslation'
import NextLink from 'next/link'
import { forwardRef } from 'react'
import { useIntl } from 'react-intl'

import { ImageBox } from '@/components/misc/ImageBox'

export const Logo = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { ...rest } = props

  const { t } = useTranslation('common')
  const { locale } = useIntl()

  return (
    <Button
      ref={ref}
      variant={'plain'}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      asChild
      {...rest}
    >
      <NextLink href={`/${locale}`}>
        <ImageBox
          src={'/images/logo.webp'}
          alt={'Logo'}
          mr={1}
          maxW={8}
          width={128}
          height={128}
        />

        <Span textStyle={'logo'}>{t('app.name')}</Span>
      </NextLink>
    </Button>
  )
})

Logo.displayName = 'Logo'
