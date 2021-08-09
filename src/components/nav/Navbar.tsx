import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from 'next-i18next'
import classNames from 'classnames'
import {RootStore} from '~src/store/RootStore'
import {useEvent} from '~src/app/useEvent'
import TransitionShow from '~src/components/utils/TransitionShow'
import {useScroll} from '~src/app/useScroll'
import {ButtonLanguageSelect} from '~src/components/nav/ButtonLanguageSelect'

export type Props = {
  children?: React.ReactElement | React.ReactElement[]
}

export const Navbar = (props: Props & HTMLProps) => {
  const [hasBackground, setHasBackground] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const {app} = useSelector(RootStore.app.getters)

  const {t} = useTranslation('navbar')
  const event = useEvent()

  const {onCross, scrollToElement} = useScroll()

  const dispatch = useDispatch()

  useEffect(() => {
    const listener = onCross({
      offset: 30,
      callback: (e) => setHasBackground(e.isAbove),
    })

    setHasBackground(listener.current.isAbove)
  }, [])

  const scrollToSection = (id: string, offset?: number) => {
    scrollToElement(id, offset)
    setMenuOpen(false)
    event.navigateEvent(id)
  }

  const openExternalLink = (url: string) => {
    window.open(url, '_blank')
    event.openExternalLinkEvent(url)
  }

  const toggleDark = () => {
    dispatch(RootStore.app.actions.toggleDark())
    event.toggleDarkModeEvent()
  }

  const renderLogo = () => (
    <a
      onClick={() => scrollToSection('main')}
      className={'no-underline select-none'}
    >
      <div
        className={
          'flex items-center transition cursor-pointer transform hover:scale-105'
        }
      >
        <img
          src={'/img/logo.png'}
          alt={'Logo'}
          className={'mr-2 h-8 sm:h-10'}
        />

        <span className={'text-base sm:text-lg text-pal-primary'}>
          {t('app')}
        </span>
      </div>
    </a>
  )

  const renderLinks = () => (
    <>
      <button
        onClick={() => scrollToSection('about-me', -100)}
        className={'mx-2 h-10 btn btn--flat font-medium opacity-75'}
      >
        {t('about')}
      </button>

      <button
        onClick={() => scrollToSection('feature', -100)}
        className={'mx-2 h-10 btn btn--flat font-medium opacity-75'}
      >
        {t('features')}
      </button>

      <button
        onClick={() => scrollToSection('technology', -100)}
        className={'mx-2 h-10 btn btn--flat font-medium opacity-75'}
      >
        {t('technologies')}
      </button>

      <button
        onClick={() => scrollToSection('timeline', -100)}
        className={'mx-2 h-10 btn btn--flat font-medium opacity-75'}
      >
        {t('timeline')}
      </button>

      <button
        onClick={() => scrollToSection('footer')}
        className={'mx-2 h-10 btn btn--flat font-medium opacity-75'}
      >
        {t('contact')}
      </button>
    </>
  )

  const renderSocialLinks = () => (
    <>
      <button
        onClick={() => openExternalLink('https://github.com/ftgibran')}
        className={'ml-1 sm:ml-2 btn btn--icon btn--flat text-2xl opacity-75'}
      >
        <i className={'fab fa-github'} />
      </button>

      <button
        onClick={() => openExternalLink('https://www.linkedin.com/in/ftgibran')}
        className={'ml-1 sm:ml-2 btn btn--icon btn--flat text-2xl opacity-75'}
      >
        <i className={'fab fa-linkedin'} />
      </button>
    </>
  )

  const renderOptions = () => (
    <>
      <button
        onClick={toggleDark}
        className={'btn btn--icon btn--flat text-2xl'}
      >
        <TransitionShow
          if={app.isDark}
          elseView={<i className={'text-pal-darker fas fa-moon'} />}
        >
          <i className={'text-yellow-500 fas fa-sun'} />
        </TransitionShow>
      </button>

      <ButtonLanguageSelect className={'ml-2'} />

      <button
        onClick={() => {
          setMenuOpen(true)
          event.openMenuEvent()
        }}
        className={'lg:hidden ml-2 btn btn--icon btn--flat'}
      >
        <i className={'fas fa-bars'} />
      </button>
    </>
  )

  return (
    <div {...props}>
      <div
        className={classNames('w-full', 'bg-navbar', {
          'dark:bg-navbar--dark': hasBackground,
          'bg-navbar--none': !hasBackground,
        })}
      >
        <div className={'container h-16 flex items-center typo'}>
          <div className={'mr-4 font-bold text-3xl'}>{renderLogo()}</div>

          <div className={'hidden lg:flex mr-2 lg:text-xs xl:text-sm'}>
            {renderLinks()}
          </div>

          <div className={'mr-2 flex-1 flex flex-row-reverse'}>
            {props.children}
          </div>

          <div className={'hidden lg:flex mr-8'}>{renderSocialLinks()}</div>

          <div className={'flex'}>{renderOptions()}</div>
        </div>
      </div>

      <TransitionShow if={isMenuOpen} effect={'fade'}>
        <div
          onClick={() => setMenuOpen(!isMenuOpen)}
          className={
            'fixed left-0 top-0 w-screen h-screen bg-pal-primary bg-opacity-25 dark:bg-black dark:bg-opacity-25 backdrop-filter backdrop-blur-md'
          }
        />
      </TransitionShow>

      <TransitionShow if={isMenuOpen} effect={'fade-right'}>
        <div className={'fixed top-0 right-0 max-w-xs w-full'}>
          <div
            className={
              'h-screen flex flex-col items-end card card--square card--transparent'
            }
          >
            <div className={'mb-8 py-1 px-2'}>
              <button
                onClick={() => setMenuOpen(false)}
                className={'btn btn--icon btn--flat'}
              >
                <i className={'fas fa-arrow-right'} />
              </button>
            </div>

            <div className={'mb-8 w-full flex justify-center'}>
              {renderSocialLinks()}
            </div>

            <div className={'mb-24 w-full flex-1 overflow-y-auto'}>
              <div className={'grid gap-4'}>{renderLinks()}</div>
            </div>
          </div>
        </div>
      </TransitionShow>
    </div>
  )
}
