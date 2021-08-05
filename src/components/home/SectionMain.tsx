import React from 'react'
import {BgVideo} from '~src/components/home/BgVideo'
import {FormContact} from '~src/components/forms/FormContact'
import {useTranslation} from 'next-i18next'

export const SectionMain = (props: HTMLProps) => {
  const {t} = useTranslation()

  return (
    <main {...props}>
      <BgVideo />

      <div
        className={
          'relative container py-24 flex flex-col md:flex-row justify-center items-center typo min-h-screen'
        }
      >
        <div
          className={
            'mb-8 md:mb-0 md:mr-20 lg:mr-32 flex-1 lg:max-w-sm flex flex-col items-center'
          }
        >
          <h1 className={'mb-4 sm:mb-8 title'}>{t('app.title')}</h1>

          <img
            src="/img/home/avatar.jpg"
            alt="Felipe Gibran"
            className={'mb-4 w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-lg'}
          />

          <p
            className={'text-center'}
            dangerouslySetInnerHTML={{__html: t('app.body')}}
          />
        </div>

        <div className={'flex-1 lg:max-w-sm w-full md:w-auto'}>
          <FormContact />
        </div>
      </div>
    </main>
  )
}