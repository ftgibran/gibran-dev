import React, {useEffect, useState} from 'react'
import {GetStaticProps, NextPage} from 'next'
import TransitionShow from '~src/components/utils/TransitionShow'
import {serverHelper} from '~src/app/serverHelper'
import {AppHead} from '~src/app/AppHead'
import {Navbar} from '~src/components/nav/Navbar'
import {useEvent} from '~src/app/useEvent'
import {useScroll} from '~src/app/useScroll'
import {SectionMain} from '~src/components/home/SectionMain'
import {SectionAboutMe} from '~src/components/home/SectionAboutMe'
import {SectionFooter} from '~src/components/home/SectionFooter'
import {ToastyEasterEgg} from '~src/components/home/ToastyEasterEgg'
import {SectionFeature} from '~src/components/home/SectionFeature'
import {SectionTimeline} from '~src/components/home/SectionTimeline'
import {SectionTechnology} from '~src/components/home/SectionTechnology'

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
  const event = useEvent()

  const {onceCrossTopElement} = useScroll({asBottomReference: true})

  const sections = [
    'main',
    'about-me',
    'feature',
    'technology',
    'timeline',
    'footer',
  ]

  useEffect(() => {
    sections.forEach((it, i) => {
      if (i !== 0) {
        onceCrossTopElement(it, () => event.scrollEvent(it), 200)
      }
    })

    onceCrossTopElement('footer', () => setToasty(true))
  }, [])

  return (
    <>
      <AppHead />

      <Navbar id={'navbar'} className={'z-10 fixed top-0 w-full'} />

      <SectionMain id={sections[0]} />
      <SectionAboutMe id={sections[1]} />
      <SectionFeature id={sections[2]} />
      <SectionTechnology id={sections[3]} />
      <SectionTimeline id={sections[4]} />
      <SectionFooter id={sections[5]}>
        <TransitionShow if={toasty}>
          <ToastyEasterEgg />
        </TransitionShow>
      </SectionFooter>
    </>
  )
}

export default HomePage
