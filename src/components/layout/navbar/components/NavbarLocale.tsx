import { ButtonProps, For, Menu, Portal } from '@chakra-ui/react'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@config/constants'
import { useTranslation } from '@utils/i18n/useTranslation'
import NextLink from 'next/link'
import { forwardRef } from 'react'

import { ButtonLocale } from '@/components/buttons/ButtonLocale'
import { ImageBox } from '@/components/misc/ImageBox'

export const NavbarLocale = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { t } = useTranslation('common.lang')

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
                    <NextLink
                      href={`/${locale === DEFAULT_LOCALE ? '' : locale}`}
                      rel={'noreferrer'}
                    >
                      <ImageBox
                        src={`/images/flags/${locale}.svg`}
                        alt={t(locale)}
                        width={'20'}
                        height={'20'}
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
