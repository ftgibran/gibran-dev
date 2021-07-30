import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Link from 'next/link'
import {RootStore} from '~src/store/RootStore'
import TransitionShow from '~src/components/utils/TransitionShow'
import {ButtonLanguageSelect} from '~src/components/nav/ButtonLanguageSelect'

export type Props = {
  children?: React.ReactElement | React.ReactElement[]
}

export const Navbar = (props: Props & HTMLProps) => {
  const {app} = useSelector(RootStore.app.getters)
  const dispatch = useDispatch()

  function toggleDark() {
    dispatch(RootStore.app.actions.toggleDark())
  }

  return (
    <div {...props}>
      <div className={'w-full typo'}>
        <div className={'container h-16 flex items-center'}>
          <div className={'mr-4 font-bold text-3xl'}>
            <Link href={'/'}>
              <img
                src={'/img/logo.png'}
                alt={'Logo'}
                className={
                  'transition h-10 cursor-pointer transform hover:scale-105'
                }
              />
            </Link>
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
