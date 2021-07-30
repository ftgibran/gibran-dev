import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {i18n} from '~/next-i18next.config'
import {AppHead} from '~src/app/AppHead'
import {Navbar} from '~src/components/nav/Navbar'

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
  const {t} = useTranslation()

  return (
    <>
      <AppHead />

      <Navbar />

      <div
        className={'flex justify-center items-center typo min-h-screen-no-nav'}
      >
        <main>
          <h1>{t('app.hello_world')}</h1>
        </main>
      </div>
    </>
  )
}

export default HomePage
