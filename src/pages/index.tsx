import React, {useEffect, useState} from 'react'
import {GetStaticProps, NextPage} from 'next'
import TransitionShow from '~src/components/utils/TransitionShow'
import {serverHelper} from '~src/app/serverHelper'
import {AppHead} from '~src/app/AppHead'
import {Navbar} from '~src/components/nav/Navbar'
import {useScroll} from '~src/app/useScroll'
import {SectionMain} from '~src/components/home/SectionMain'
import {SectionAboutMe} from '~src/components/home/SectionAboutMe'
import {SectionFooter} from '~src/components/home/SectionFooter'
import {ToastyEasterEgg} from '~src/components/home/ToastyEasterEgg'
import {SectionFeature} from '~src/components/home/SectionFeature'

export const getStaticProps: GetStaticProps = async (props) => {
  const {populateSSRConfig} = serverHelper()
  const {_nextI18Next} = await populateSSRConfig(props.locale)

  return {
    props: {
      _nextI18Next,
    },
  }
}

const HomePage: NextPage = () => {
  const [toasty, setToasty] = useState(false)

  const {onceCrossTopElement} = useScroll({asBottomReference: true})

  useEffect(() => {
    onceCrossTopElement('footer', () => setToasty(true))
  }, [])

  return (
    <>
      <AppHead />

      <Navbar id={'navbar'} className={'z-10 fixed top-0 w-full'} />

      <SectionMain id={'main'} />

      <SectionAboutMe id={'about-me'} />

      <SectionFeature id={'feature'} />

      <SectionFooter id={'footer'}>
        <TransitionShow if={toasty}>
          <ToastyEasterEgg />
        </TransitionShow>
      </SectionFooter>
    </>
  )
}

export default HomePage
