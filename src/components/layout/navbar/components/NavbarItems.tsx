import { Wrap, WrapItem, WrapProps } from '@chakra-ui/react'
import { useTranslation } from '@utils/i18n/useTranslation'
import { forwardRef } from 'react'

import { NavbarAnchor } from '@/components/layout/navbar/components/NavbarAnchor'

export const NavbarItems = forwardRef<HTMLDivElement, WrapProps>(
  (props, ref) => {
    const { t } = useTranslation('navbar')

    return (
      <Wrap ref={ref} {...props}>
        <WrapItem>
          <NavbarAnchor href={'#about'}>{t('about')}</NavbarAnchor>
        </WrapItem>

        <WrapItem>
          <NavbarAnchor href={'#feature'}>{t('features')}</NavbarAnchor>
        </WrapItem>

        <WrapItem>
          <NavbarAnchor href={'#technology'}>{t('technologies')}</NavbarAnchor>
        </WrapItem>

        <WrapItem>
          <NavbarAnchor href={'#timeline'}>{t('timeline')}</NavbarAnchor>
        </WrapItem>

        <WrapItem>
          <NavbarAnchor href={'#contact'}>{t('contact')}</NavbarAnchor>
        </WrapItem>
      </Wrap>
    )
  },
)

NavbarItems.displayName = 'NavbarItems'
