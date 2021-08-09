import React from 'react'

export const BgVideo = (props: HTMLProps) => (
  <div {...props}>
    <video
      loop
      muted
      autoPlay
      className={'h-screen bg-animated dark:bg-animated--dark'}
    >
      <source src="/video/bg.mp4" type="video/mp4" />
    </video>

    <div className={'h-screen bg-gradient dark:bg-gradient--dark'} />
  </div>
)
