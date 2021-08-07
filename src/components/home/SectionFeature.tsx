import React from 'react'
import {useTranslation} from 'next-i18next'
import {range} from 'lodash'

export const SectionFeature = (props: HTMLProps) => {
  const {t} = useTranslation('page_home')

  const renderFeat = (name: string, title: string, description?: string) => (
    <div className={'flex flex-col items-center'}>
      <img
        src={`/img/home/feat/${name}.png`}
        alt={name}
        className={'mb-4 w-32 h-32 object-contain'}
      />

      <div className={'mb-2 font-medium text-center'}>{title}</div>
      <div className={'text-center text-sm'}>{description}</div>
    </div>
  )

  return (
    <section {...props}>
      <div className={'container my-24 sm:36 md:my-48 typo'}>
        <h2 className={'mb-24 title'}>{t('feature.title')}</h2>

        <div
          className={
            'grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-24 sm:gap-12'
          }
        >
          {range(1, 9).map((it) => (
            <div key={it}>
              {renderFeat(
                t(`feature.feat${it}.name`),
                t(`feature.feat${it}.title`),
                t(`feature.feat${it}.description`)
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
