import {
  Box,
  BoxProps,
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { DISCORD_HOOK_URL } from '@config/constants'
import { useTranslation } from '@utils/i18n/useTranslation'
import { FC, useCallback, useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { toaster } from '@/components/ui/toaster'

export interface ContactFieldValues {
  name: string
  email: string
  message: string
}

export const FieldsetContactMe: FC<BoxProps> = (props) => {
  const { t } = useTranslation('form_contact')

  const [isLoading, setIsLoading] = useState(false)
  const { handleSubmit, register, reset } = useForm<ContactFieldValues>()

  const onSubmit = useCallback<SubmitHandler<ContactFieldValues>>(
    async (values) => {
      const { name, email, message } = values

      setIsLoading(true)

      try {
        const response = await fetch(DISCORD_HOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `**Name:** ${name}\n**Email:** ${email}\n**Message:**\n${message}`,
          }),
        })

        if (!response.ok) {
          const data = await response.json()

          toaster.error({ title: data.code, description: data.message })
        } else {
          toaster.success({ title: t('success_message') })

          reset()
        }
      } catch (e) {
        toaster.error({ title: 'Something went wrong' })
        console.error(e)
      } finally {
        setIsLoading(false)
      }
    },
    [reset, t],
  )

  return (
    <Box as={'form'} w={'full'} onSubmit={handleSubmit(onSubmit)} {...props}>
      <Fieldset.Root size={'lg'}>
        <Stack>
          <Fieldset.Legend textStyle={'2xl'}>{t('title')}</Fieldset.Legend>
        </Stack>

        <Fieldset.Content>
          <Field.Root required={true}>
            <Field.Label>
              {t('your_name')}
              <Field.RequiredIndicator />
            </Field.Label>

            <Input disabled={isLoading} {...register('name')} />
          </Field.Root>

          <Field.Root required={true}>
            <Field.Label>
              {t('email')}
              <Field.RequiredIndicator />
            </Field.Label>

            <Input disabled={isLoading} type={'email'} {...register('email')} />
          </Field.Root>

          <Field.Root required={true}>
            <Field.Label>
              {t('leave_your_message')}
              <Field.RequiredIndicator />
            </Field.Label>

            <Textarea
              disabled={isLoading}
              resize={'none'}
              rows={6}
              {...register('message')}
            />
          </Field.Root>
        </Fieldset.Content>

        <Button
          type={'submit'}
          w={'full'}
          maxW={'12rem'}
          variant={'accent'}
          alignSelf={'center'}
          loading={isLoading}
        >
          {t('submit')}
        </Button>
      </Fieldset.Root>
    </Box>
  )
}

FieldsetContactMe.displayName = 'FieldsetContactMe'
