import { useTranslation } from '@utils/i18n/useTranslation'
import { useMemo } from 'react'

export function useFeatures() {
  const { t } = useTranslation('page_home.feature.items')

  return useMemo(
    () => [
      {
        src: '/images/home/feat/technology.webp',
        alt: t('technology.title'),
        title: t('technology.title'),
        desc: t('technology.desc'),
      },
      {
        src: '/images/home/feat/code.webp',
        alt: t('code.title'),
        title: t('code.title'),
        desc: t('code.desc'),
      },
      {
        src: '/images/home/feat/automation.webp',
        alt: t('automation.title'),
        title: t('automation.title'),
        desc: t('automation.desc'),
      },
      {
        src: '/images/home/feat/security.webp',
        alt: t('security.title'),
        title: t('security.title'),
        desc: t('security.desc'),
      },
      {
        src: '/images/home/feat/responsiveness.webp',
        alt: t('responsiveness.title'),
        title: t('responsiveness.title'),
        desc: t('responsiveness.desc'),
      },
      {
        src: '/images/home/feat/ux.webp',
        alt: t('ux.title'),
        title: t('ux.title'),
        desc: t('ux.desc'),
      },
      {
        src: '/images/home/feat/fastness.webp',
        alt: t('fastness.title'),
        title: t('fastness.title'),
        desc: t('fastness.desc'),
      },
      {
        src: '/images/home/feat/seo.webp',
        alt: t('seo.title'),
        title: t('seo.title'),
        desc: t('seo.desc'),
      },
    ],
    [t],
  )
}
