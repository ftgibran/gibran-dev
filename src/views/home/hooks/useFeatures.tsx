import { useTranslation } from '@utils/i18n/useTranslation'
import { useMemo } from 'react'

export function useFeatures() {
  const { t } = useTranslation('page_home.feature.items')

  return useMemo(
    () => [
      {
        src: '/images/home/feat/technology.webp',
        alt: t('architecture.title'),
        title: t('architecture.title'),
        desc: t('architecture.desc'),
      },
      {
        src: '/images/home/feat/automation.webp',
        alt: t('migration.title'),
        title: t('migration.title'),
        desc: t('migration.desc'),
      },
      {
        src: '/images/home/feat/code.webp',
        alt: t('design_system.title'),
        title: t('design_system.title'),
        desc: t('design_system.desc'),
      },
      {
        src: '/images/home/feat/fastness.webp',
        alt: t('performance.title'),
        title: t('performance.title'),
        desc: t('performance.desc'),
      },
      {
        src: '/images/home/feat/security.webp',
        alt: t('ownership.title'),
        title: t('ownership.title'),
        desc: t('ownership.desc'),
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
