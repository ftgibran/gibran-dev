import React from 'react'
import Head from 'next/head'
import {useTranslation} from 'next-i18next'

export interface HeadProps {
  title?: string
  description?: string
  imageUrl?: string
  url?: string
}

export function AppHead(props: HeadProps) {
  const {t} = useTranslation('default_head')

  const {
    title = t('title'),
    description = t('description'),
    imageUrl = t('image_url'),
    url = t('url'),
  } = props

  return (
    <Head>
      <title>{title}</title>

      <meta
        name={'viewport'}
        content={
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        }
      />

      <meta name={'description'} content={description} />
      <meta
        name={'keywords'}
        content={'gibran, developer, frontend, backend'}
      />

      <meta property={'og:type'} content={'website'} />
      <meta property={'og:site_name'} content={'Gibran Developer'} />
      <meta property={'og:url'} content={url} />
      <meta property={'og:title'} content={title} />
      <meta property={'og:description'} content={description} />
      <meta property={'og:image'} itemProp={'image'} content={imageUrl} />

      <link rel={'icon'} href={'/favicon.ico'} />
    </Head>
  )
}
