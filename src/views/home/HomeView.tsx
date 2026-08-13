'use client'

import { FC } from 'react'

import { SectionAbout } from '@/views/home/sections/SectionAbout'
import { SectionAi } from '@/views/home/sections/SectionAi'
import { SectionCareer } from '@/views/home/sections/SectionCareer'
import { SectionCodeLanguage } from '@/views/home/sections/SectionCodeLanguage'
import { SectionContact } from '@/views/home/sections/SectionContact'
import { SectionFeature } from '@/views/home/sections/SectionFeature'
import { SectionHero } from '@/views/home/sections/SectionHero'
import { SectionTechnology } from '@/views/home/sections/SectionTechnology'
import { SectionTimeline } from '@/views/home/sections/SectionTimeline'

export const HomeView: FC = () => {
  return (
    <>
      <SectionHero id={'hero'} />

      <SectionAbout id={'about'} />

      <SectionFeature id={'feature'} />

      <SectionAi id={'ai'} />

      <SectionCareer id={'career'} />

      <SectionTechnology id={'technology'} />

      <SectionCodeLanguage id={'code-language'} />

      <SectionTimeline id={'timeline'} />

      <SectionContact id={'contact'} />
    </>
  )
}

HomeView.displayName = 'HomeView'
