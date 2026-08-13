import { ButtonProps, For, Menu, Portal } from '@chakra-ui/react'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@config/constants'
import { useTranslation } from '@utils/i18n/useTranslation'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { forwardRef } from 'react'

import { ButtonLocale } from '@/components/buttons/ButtonLocale'
import { ImageBox } from '@/components/misc/ImageBox'

const LOCALE_PREFIX = new RegExp(`^/(${SUPPORTED_LOCALES.join('|')})(?=/|$)`)

export const NavbarLocale = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { t } = useTranslation('common.lang')

    const pathname = usePathname()

    // Switching language should keep you on the page you are reading.
    const basePath = pathname.replace(LOCALE_PREFIX, '')

    const hrefFor = (locale: string) =>
      locale === DEFAULT_LOCALE ? basePath || '/' : `/${locale}${basePath}`

    return (
      <Menu.Root positioning={{ placement: 'bottom-end' }}>
        <Menu.Trigger asChild>
          <ButtonLocale ref={ref} {...props} />
        </Menu.Trigger>

        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <For each={SUPPORTED_LOCALES}>
                {(locale) => (
                  <Menu.Item key={locale} value={locale} asChild>
                    <NextLink href={hrefFor(locale)} rel={'noreferrer'}>
                      <ImageBox
                        src={`/images/flags/${locale}.svg`}
                        alt={t(locale)}
                        width={'20'}
                        height={'20'}
                        sizes={'20px'}
                      />

                      <>{t(locale)}</>
                    </NextLink>
                  </Menu.Item>
                )}
              </For>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    )
  },
)

NavbarLocale.displayName = 'NavbarLocale'
