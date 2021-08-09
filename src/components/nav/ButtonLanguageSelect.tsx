import React, {useState} from 'react'
import {useRouter} from 'next/router'
import TransitionShow from '~src/components/utils/TransitionShow'
import {useTranslation} from 'next-i18next'
import {useEvent} from '~src/app/useEvent'
import Link from 'next/link'

export const ButtonLanguageSelect = (props: HTMLProps) => {
  const router = useRouter()
  const event = useEvent()

  const {t} = useTranslation()

  const [isActive, setActive] = useState(false)

  const renderOption = (lang: Language) => {
    return (
      <Link href={router} locale={lang}>
        <div
          onClick={() => event.changeLocaleEvent(lang)}
          className={
            'p-2 cursor-pointer flex items-center transition rounded hover:bg-pal-primary hover:bg-opacity-50'
          }
        >
          <img
            src={`/img/locale/${lang}.svg`}
            alt={lang}
            className={'mr-2 h-8'}
          />

          <div
            className={'text-sm'}
            style={{
              fontWeight: router.locale === lang ? 'bold' : 'normal',
              textDecoration: router.locale === lang ? 'underline' : 'none',
            }}
          >
            {t(`lang.${lang}`)}
          </div>
        </div>
      </Link>
    )
  }

  return (
    <div {...props}>
      <div className={'relative'}>
        <TransitionShow if={isActive} effect={'fade'}>
          <div
            onClick={() => setActive(!isActive)}
            className={
              'fixed left-0 top-0 w-screen h-screen bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10'
            }
          />
        </TransitionShow>

        <TransitionShow if={isActive} effect={'fade-down'}>
          <div className={'absolute w-40 top-16 right-0 select-none'}>
            <div className={'card card--padding-sm grid gap-2'}>
              {renderOption('pt-BR')}
              {renderOption('en-US')}
            </div>
          </div>
        </TransitionShow>

        <button
          onClick={() => setActive(!isActive)}
          className={'relative btn btn--icon btn--flat'}
        >
          <img src={`/img/locale/${router.locale}.svg`} alt={router.locale} />
        </button>
      </div>
    </div>
  )
}
