import React, {useState} from 'react'
import {useTranslation} from 'next-i18next'
import {useToasts} from 'react-toast-notifications'
import {AwaitConsumer, useAwait} from '@dev-plus-plus/react-await'
import moment from 'moment'
import axios from 'axios'
import {useEnv} from '~src/app/useEnv'

export interface Props {
  onSubmit?: (name: string, email: string, message: string) => void
}

export const FormContact = (props: Props & HTMLProps) => {
  const formContactAwait = useAwait('formContact')

  const {t} = useTranslation('form_contact')
  const {addToast} = useToasts()
  const {DISCORD_HOOK_URL} = useEnv()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submit = async () => {
    const body = {
      embeds: [
        {
          color: 959977,
          author: {
            name,
          },
          description: message,
          fields: [
            {
              name: 'E-mail',
              value: email,
              inline: true,
            },
          ],
          timestamp: moment().format(),
        },
      ],
    }

    await axios.post(DISCORD_HOOK_URL, body)

    props.onSubmit?.(name, email, message)

    setName('')
    setEmail('')
    setMessage('')

    addToast(t('success_message'), {
      appearance: 'success',
    })
  }

  return (
    <div {...props}>
      <AwaitConsumer name={'formContact'}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            formContactAwait.run(submit, 1000)
          }}
          className={'relative grid gap-4'}
        >
          <p className={'text-2xl text-center text-pal-primary'}>
            {t('title')}
          </p>

          <input
            className={'w-full input'}
            type="text"
            placeholder={t('your_name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className={'w-full input'}
            type="email"
            placeholder={t('email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            className={'w-full input'}
            placeholder={t('leave_your_message')}
            rows={5}
            style={{
              minHeight: '5rem',
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={512}
            required
          />

          <button className={'btn ml-auto w-32'}>{t('submit')}</button>
        </form>
      </AwaitConsumer>
    </div>
  )
}
