import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from 'next-i18next'
import classNames from 'classnames'
import {RootStore} from '~src/store/RootStore'
import TransitionShow from '~src/components/utils/TransitionShow'
import {useScroll} from '~src/app/useScroll'
import {ButtonLanguageSelect} from '~src/components/nav/ButtonLanguageSelect'

export type Props = {
  children?: React.ReactElement | React.ReactElement[]
}

export const Navbar = (props: Props & HTMLProps) => {
  const [hasBackground, setHasBackground] = useState(false)

  const {app} = useSelector(RootStore.app.getters)
  const {t} = useTranslation()
  const {onCross, scrollTo} = useScroll()

  const dispatch = useDispatch()

  function toggleDark() {
    dispatch(RootStore.app.actions.toggleDark())
  }

  useEffect(() => {
    const listener = onCross({
      offset: 30,
      callback: (e) => setHasBackground(e.isAbove),
    })

    setHasBackground(listener.current.isAbove)
  }, [])

  return (
    <div {...props}>
      <div
        className={classNames('w-full', 'bg-navbar', {
          'dark:bg-navbar--dark': hasBackground,
          'bg-navbar--none': !hasBackground,
        })}
      >
        <div className={'container h-16 flex items-center typo'}>
          <div className={'mr-4 font-bold text-3xl'}>
            <a onClick={() => scrollTo(0)} className={'no-underline'}>
              <div
                className={
                  'flex items-center transition cursor-pointer transform hover:scale-105'
                }
              >
                <img
                  src={'/img/logo.png'}
                  alt={'Logo'}
                  className={'mr-2 h-10'}
                />
                <span className={'text-lg text-pal-primary'}>
                  {t('app.name')}
                </span>
              </div>
            </a>
          </div>

          <div className={'mr-2 flex-1 flex flex-row-reverse'}>
            {props.children}
          </div>

          <div className={'flex items-center'}>
            <ButtonLanguageSelect />

            <button onClick={toggleDark} className={'ml-2 btn btn--icon'}>
              <TransitionShow
                if={app.isDark}
                elseView={<i className={'fas fa-moon'} />}
              >
                <i className={'fas fa-sun'} />
              </TransitionShow>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
