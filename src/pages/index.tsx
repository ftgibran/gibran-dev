import React, {useEffect, useState} from 'react'
import {GetStaticProps, NextPage} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {i18n} from '~/next-i18next.config'
import {AppHead} from '~src/app/AppHead'
import {Navbar} from '~src/components/nav/Navbar'
import {BgVideo} from '~src/components/utils/BgVideo'
import {ToastyEasterEgg} from '~src/components/utils/ToastyEasterEgg'
import {useScroll} from '~src/app/useScroll'
import TransitionShow from '~src/components/utils/TransitionShow'
import {FormContact} from '~src/components/forms/FormContact'

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const {_nextI18Next} = await serverSideTranslations(locale ?? '', undefined, {
    i18n,
  })

  return {
    props: {
      _nextI18Next,
    },
  }
}

const HomePage: NextPage = () => {
  const [toasty, setToasty] = useState(false)

  const {t} = useTranslation()
  const {onceCrossTopElement} = useScroll(true)

  useEffect(() => {
    onceCrossTopElement('footer', () => setToasty(true))
  }, [])

  return (
    <>
      <AppHead />

      <Navbar className={'z-40 w-full fixed'} />

      <main>
        <BgVideo />

        <div
          className={
            'relative container py-24 flex flex-col md:flex-row justify-center items-center typo min-h-screen'
          }
        >
          <div
            className={
              'mb-8 md:mb-0 md:mr-20 lg:mr-32 flex-1 lg:flex-none lg:w-96 text-center flex flex-col items-center'
            }
          >
            <h1 className={'mb-4 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl'}>
              {t('app.title')}
            </h1>

            <img
              src="/img/avatar.jpg"
              alt="Felipe Gibran"
              className={
                'mb-4 w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-lg'
              }
            />

            <p dangerouslySetInnerHTML={{__html: t('app.body')}} />
          </div>

          <div className={'flex-1 lg:flex-none lg:w-96 w-full md:w-auto'}>
            <FormContact />
          </div>
        </div>
      </main>

      <section>
        <div
          className={
            'container flex justify-center items-center typo min-h-screen'
          }
        >
          <div>
            <h2 className={'mb-8 text-3xl sm:text-4xl'}>Who I am</h2>
          </div>
        </div>
      </section>

      <footer id={'footer'}>
        <div
          className={
            'container flex justify-center items-center typo min-h-screen'
          }
        >
          <div className={'bg-wave-pattern dark:bg-wave-pattern--dark'} />
          <div className={'bg-gradient dark:bg-gradient--dark'} />

          <FormContact className={'w-full sm:w-96'} />

          <TransitionShow if={toasty}>
            <ToastyEasterEgg />
          </TransitionShow>
        </div>
      </footer>
    </>
  )
}

export default HomePage
