import React from 'react'
import {FormContact} from '~src/components/forms/FormContact'
import {useEvent} from '~src/app/useEvent'

export type Props = {
  children?: React.ReactElement | React.ReactElement[]
}

export const SectionFooter = (props: Props & HTMLProps) => {
  const event = useEvent()

  return (
    <footer {...props}>
      <div
        className={
          'container flex flex-col justify-center items-center typo min-h-screen'
        }
      >
        <div className={'bg-wave-pattern dark:bg-wave-pattern--dark'} />
        <div className={'bg-gradient dark:bg-gradient--dark'} />

        <FormContact
          className={'w-full sm:w-96'}
          onSubmit={() => event.submitContactEvent('on footer section')}
        />

        <div className={'absolute inset-x-0 bottom-0'}>
          <div className={'m-1 w-3/4 text-xs opacity-50'}>
            Icons made by{' '}
            <a
              href={'https://www.freepik.com'}
              title={'Freepik'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              Freepik
            </a>{' '}
            from{' '}
            <a
              href={'https://www.flaticon.com/'}
              title={'Flaticon'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              flaticon.com
            </a>
          </div>
        </div>

        {props.children}
      </div>
    </footer>
  )
}
