import { IconButton, IconButtonProps } from '@chakra-ui/react'
import { useTranslation } from '@utils/i18n/useTranslation'
import { forwardRef } from 'react'
import { useIntl } from 'react-intl'

import { ImageBox } from '@/components/misc/ImageBox'

export const ButtonLocale = forwardRef<
  HTMLButtonElement,
  Partial<IconButtonProps>
>((props, ref) => {
  const { t } = useTranslation('common.lang')
  const { locale } = useIntl()

  return (
    <IconButton
      ref={ref}
      aria-label={'Switch Locale'}
      variant={'ghost'}
      {...props}
    >
      <ImageBox
        src={`/images/flags/${locale}.svg`}
        alt={t(locale)}
        width={'24'}
        height={'24'}
      />
    </IconButton>
  )
})

ButtonLocale.displayName = 'ButtonLocale'
