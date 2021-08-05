import React from 'react'
import {FormContact} from '~src/components/forms/FormContact'

export type Props = {
  children?: React.ReactElement | React.ReactElement[]
}

export const SectionFooter = (props: Props & HTMLProps) => {
  return (
    <footer {...props}>
      <div
        className={
          'container flex justify-center items-center typo min-h-screen'
        }
      >
        <div className={'bg-wave-pattern dark:bg-wave-pattern--dark'} />
        <div className={'bg-gradient dark:bg-gradient--dark'} />

        <FormContact className={'w-full sm:w-96'} />

        {props.children}
      </div>
    </footer>
  )
}
