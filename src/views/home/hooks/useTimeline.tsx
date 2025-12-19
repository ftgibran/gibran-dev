import { useTranslation } from '@utils/i18n/useTranslation'
import { useMemo } from 'react'

export function useTimeline() {
  const { t, withChunks } = useTranslation('page_home.timeline.items')

  return useMemo(
    () => [
      {
        src: '/images/home/timeline/ndapp-bg.webp',
        srcParallax: '/images/home/timeline/ndapp-parallax.webp',
        alt: t('ndapp.title'),
        title: t('ndapp.title'),
        desc: t('ndapp.desc', withChunks('p', 'i', 'br')),
        width: 2000,
        height: 1250,
      },
      {
        src: '/images/home/timeline/wow-bg.webp',
        srcParallax: '/images/home/timeline/wow-parallax.webp',
        alt: t('wow.title'),
        title: t('wow.title'),
        desc: t('wow.desc', withChunks('p', 'i', 'br')),
        width: 2000,
        height: 1250,
      },
      {
        src: '/images/home/timeline/apptite-bg.webp',
        srcParallax: '/images/home/timeline/apptite-parallax.webp',
        alt: t('apptite.title'),
        title: t('apptite.title'),
        desc: t('apptite.desc', withChunks('p', 'i', 'br')),
        width: 2000,
        height: 1250,
      },
      {
        src: '/images/home/timeline/sharity-bg.webp',
        srcParallax: '/images/home/timeline/sharity-parallax.webp',
        alt: t('sharity.title'),
        title: t('sharity.title'),
        desc: t('sharity.desc', withChunks('p', 'i', 'br')),
        width: 2000,
        height: 1250,
      },
      {
        src: '/images/home/timeline/itrack-bg.webp',
        srcParallax: '/images/home/timeline/itrack-parallax.webp',
        alt: t('itrack.title'),
        title: t('itrack.title'),
        desc: t('illsim.desc', withChunks('p', 'i', 'br')),
        width: 2000,
        height: 1250,
      },
      {
        src: '/images/home/timeline/illsim-bg.webp',
        srcParallax: '/images/home/timeline/illsim-parallax.webp',
        alt: t('illsim.title'),
        title: t('illsim.title'),
        desc: t('illsim.desc', withChunks('p', 'i', 'br')),
        width: 2000,
        height: 1250,
      },
    ],
    [t, withChunks],
  )
}
