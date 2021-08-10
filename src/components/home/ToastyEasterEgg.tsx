import React, {useEffect, useState} from 'react'
import {useHelper} from '~src/app/useHelper'
import {useEvent} from '~src/app/useEvent'

export const ToastyEasterEgg = (props: HTMLProps) => {
  const event = useEvent()
  const {sleep} = useHelper()

  const [toasty, setToasty] = useState(false)
  const [killed, setKilled] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement>()

  useEffect(() => {
    setAudio(new Audio('/audio/toasty.mp3'))
  }, [])

  const isEnabled = () => toasty && !killed

  const runToast = async () => {
    setToasty(true)

    await audio?.play()

    await sleep(3000)

    setKilled(true)
    event.clickOnDontClickCorner()
  }

  return (
    <div {...props}>
      <div
        className={'fixed right-0 bottom-0 select-none'}
        style={{
          zIndex: isEnabled() ? 'unset' : -1,
        }}
      >
        <img
          src="/img/home/toasty.png"
          alt="Toasty"
          className={`${toasty ? 'run-toasty' : ''} w-48`}
          style={{
            transform: 'translate(10rem, 10rem)',
          }}
        />
      </div>

      {!toasty && (
        <div className={'absolute right-0 bottom-0 select-none'}>
          <img
            src="/img/home/dont-click.png"
            alt="Don't click"
            className={'w-20'}
            onClick={runToast}
          />
        </div>
      )}
    </div>
  )
}
