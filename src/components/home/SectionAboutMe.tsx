import React from 'react'
import {useTranslation} from 'next-i18next'

export const SectionAboutMe = (props: HTMLProps) => {
  const {t} = useTranslation('page_home')

  return (
    <section {...props}>
      <div
        className={
          'container mt-12 mb-36 sm:my-36 md:my-48 max-w-screen-sm typo'
        }
      >
        <h2 className={'mb-8 title'}>{t('about_me.title')}</h2>
        <p className={'text-center'}>{t('about_me.body')}</p>
      </div>
    </section>
  )
}
