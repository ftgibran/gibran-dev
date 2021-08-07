import React, {useEffect, useState} from 'react'
import TransitionShow from '~src/components/utils/TransitionShow'
import {useTranslation} from 'next-i18next'
import {AppStorage} from '~src/app/AppStorage'

export const CookiePopup = (props: HTMLProps) => {
  const {t} = useTranslation('cookie_popup')

  const [isActive, setActive] = useState(false)

  const accept = () => {
    AppStorage.hasAcceptedCookies.save(true)
    setActive(false)
  }

  useEffect(() => {
    const hasAcceptedCookies = AppStorage.hasAcceptedCookies.load()
    setActive(!hasAcceptedCookies)
  }, [])

  return (
    <div {...props}>
      <div className={'fixed w-screen bottom-0'}>
        <TransitionShow if={isActive} effect={'fade-up'}>
          <div className={'mx-auto max-w-xl'}>
            <div
              className={
                'm-2 card card--padding-sm card--glass flex flex-col sm:flex-row items-center'
              }
            >
              <div
                className={'mb-2 sm:mb-0 sm:mr-4 flex-1 text-xs'}
                dangerouslySetInnerHTML={{__html: t('message')}}
              />

              <div className={'self-end sm:self-center'}>
                <button onClick={accept} className={'btn text-sm'}>
                  {t('accept')}
                </button>
              </div>
            </div>
          </div>
        </TransitionShow>
      </div>
    </div>
  )
}
