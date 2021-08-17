import React from 'react'
import {useEnv} from '~src/app/useEnv'

export const BgVideo = (props: HTMLProps) => {
  const {isTestEnv} = useEnv()

  return (
    <div {...props}>
      {!isTestEnv() && (
        <video
          loop
          muted
          autoPlay
          className={'h-screen bg-animated dark:bg-animated--dark'}
        >
          <source src="/video/bg.mp4" type="video/mp4" />
        </video>
      )}

      <div className={'h-screen bg-gradient dark:bg-gradient--dark'} />
    </div>
  )
}
