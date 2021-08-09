import React from 'react'
import {useTranslation} from 'next-i18next'
import {range} from 'lodash'

export const SectionTechnology = (props: HTMLProps) => {
  const {t} = useTranslation('page_home')

  const renderFeat = (code: string) => (
    <div className={'flex flex-col items-center'}>
      <div className={'text-6xl sm:text-8xl xl:text-7xl text-pal-primary'}>
        <i className={code} />
      </div>
    </div>
  )

  return (
    <section {...props}>
      <div className={'container my-24 sm:36 md:my-48 typo'}>
        <h2 className={'mb-16 title'}>{t('technology.title')}</h2>

        <div className={'grid grid-cols-3 xl:grid-cols-9 gap-12'}>
          {range(1, 10).map((it, i) => (
            <React.Fragment key={it}>
              {renderFeat(t(`technology.items.${i}`))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
