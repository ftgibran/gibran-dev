import { useDrawerContext, Wrap, WrapItem, WrapProps } from '@chakra-ui/react'
import { useTranslation } from '@utils/i18n/useTranslation'
import { forwardRef } from 'react'

import { NavbarAnchor } from '@/components/layout/navbar/components/NavbarAnchor'

export const NavbarItems = forwardRef<HTMLDivElement, WrapProps>(
  (props, ref) => {
    const { t } = useTranslation('navbar')

    const { setOpen } = useDrawerContext()

    return (
      <Wrap
        ref={ref}
        flexWrap={'nowrap'}
        onClick={() => setOpen(false)}
        {...props}
      >
        <WrapItem>
          <NavbarAnchor href={'#about'}>{t('about')}</NavbarAnchor>
        </WrapItem>

        <WrapItem>
          <NavbarAnchor href={'#feature'}>{t('features')}</NavbarAnchor>
        </WrapItem>

        <WrapItem>
          <NavbarAnchor href={'#ai'}>{t('ai')}</NavbarAnchor>
        </WrapItem>

        <WrapItem>
          <NavbarAnchor href={'#career'}>{t('career')}</NavbarAnchor>
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
