import React, {useEffect} from 'react'
import {AwaitConsumer, useAwait} from '@dev-plus-plus/react-await'
import {RequestConfig, RequestListener} from '@simpli/serialized-request'
import {useAxios} from '~src/app/useAxios'
import {useEnv} from '~src/app/useEnv'
import {useDispatch} from 'react-redux'
import {RootStore} from '~src/store/RootStore'
import {CircleLoader} from 'react-spinners/index'

export type Props = {
  children?: React.ReactElement | React.ReactElement[]
}

export function AppProvider(props: Props) {
  const env = useEnv()
  const screenAwait = useAwait('screen')
  const axiosInstance = useAxios()

  const dispatch = useDispatch()

  useEffect(() => {
    screenAwait.run(init)
  }, [])

  async function init() {
    RequestConfig.axios = axiosInstance
    RequestListener.onRequestStart((name) => useAwait(name).init())
    RequestListener.onRequestEnd((name) => useAwait(name).done())
    RequestListener.onRequestError((name) => useAwait(name).error())

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
  }

  return (
    <AwaitConsumer
      name={'screen'}
      loadingView={<CircleLoader color={env.PALETTE_PRIMARY} size={150} />}
    >
      {props.children}
    </AwaitConsumer>
  )
}
