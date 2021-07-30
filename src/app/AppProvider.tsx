import React, {useEffect, useState} from 'react'
import BarLoader from 'react-spinners/BarLoader'
import {RequestConfig, RequestListener} from '@simpli/serialized-request'
import {useAxios} from '~src/app/useAxios'
import {useEnv} from '~src/app/useEnv'
import {Await, AwaitActivity} from '~src/app/await'
import {useDispatch} from 'react-redux'
import {RootStore} from '~src/store/RootStore'
import {CircleLoader} from 'react-spinners/index'

export type Props = {
  children?: React.ReactElement | React.ReactElement[]
}

export function AppProvider(props: Props) {
  const [mounted, setMounted] = useState(false)
  const env = useEnv()
  const axiosInstance = useAxios()

  const dispatch = useDispatch()

  useEffect(() => {
    Await.run('screen', init)
  }, [])

  async function init() {
    RequestConfig.axios = axiosInstance
    RequestListener.onRequestStart((name) => Await.init(name))
    RequestListener.onRequestEnd((name) => Await.done(name))
    RequestListener.onRequestError((name) => Await.error(name))

    Await.defaultLoadingView = <BarLoader color={env.PALETTE_PRIMARY} />

    const themeConditions = [
      localStorage.theme === 'dark',
      !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches,
    ]

    if (themeConditions.some((it) => it)) {
      dispatch(RootStore.app.actions.setDark(true))
    } else {
      dispatch(RootStore.app.actions.setDark(false))
    }

    setMounted(true)
  }

  return (
    <AwaitActivity
      name={'screen'}
      loadingView={<CircleLoader color={env.PALETTE_PRIMARY} size={150} />}
    >
      {mounted ? props.children : <></>}
    </AwaitActivity>
  )
}
