import React, {useState} from 'react'

export const ToastyEasterEgg = (props: HTMLProps) => {
  const [toasty, setToasty] = useState(false)

  const runToast = async () => {
    setToasty(true)

    const audio = new Audio('/audio/toasty.mp3')
    await audio.play()
  }

  return (
    <div {...props}>
      <div className={'fixed right-0 bottom-0 select-none'}>
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
