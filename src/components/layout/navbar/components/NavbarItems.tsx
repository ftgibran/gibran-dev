import { useDrawerContext, Wrap, WrapItem, WrapProps } from '@chakra-ui/react'
import { useLocalePath } from '@utils/i18n/useLocalePath'
import { useTranslation } from '@utils/i18n/useTranslation'
import { forwardRef } from 'react'

import { NavbarAnchor } from '@/components/layout/navbar/components/NavbarAnchor'

export const NavbarItems = forwardRef<HTMLDivElement, WrapProps>(
  (props, ref) => {
    const { t } = useTranslation('navbar')

    const localePath = useLocalePath()

    const { setOpen } = useDrawerContext()

    return (
      <Wrap
        ref={ref}
        flexWrap={'nowrap'}
        onClick={() => setOpen(false)}
        {...props}
      >
        <WrapItem>
          <NavbarAnchor href={localePath('/#about')}>{t('about')}</NavbarAnchor>
        </WrapItem>

        <WrapItem>
          <NavbarAnchor href={localePath('/#feature')}>
            {t('features')}
          </NavbarAnchor>
        </WrapItem>

        <WrapItem>
          <NavbarAnchor href={localePath('/#career')}>
            {t('career')}
          </NavbarAnchor>
        </WrapItem>

        <WrapItem>
          <NavbarAnchor href={localePath('/#technology')}>
            {t('technologies')}
          </NavbarAnchor>
        </WrapItem>

        <WrapItem>
          <NavbarAnchor href={localePath('/#timeline')}>
            {t('timeline')}
          </NavbarAnchor>
        </WrapItem>

        <WrapItem>
          <NavbarAnchor href={localePath('/#contact')}>
            {t('contact')}
          </NavbarAnchor>
        </WrapItem>
      </Wrap>
    )
  },
)

NavbarItems.displayName = 'NavbarItems'
