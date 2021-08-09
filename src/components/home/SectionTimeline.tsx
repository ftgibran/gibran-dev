import React from 'react'
import {useTranslation} from 'next-i18next'
import ReactParallaxTilt from 'react-parallax-tilt'
import {range} from 'lodash'

export const SectionTimeline = (props: HTMLProps) => {
  const {t} = useTranslation('page_home')

  const renderItem = (
    name: string,
    url: string,
    title: string,
    description: string
  ) => (
    <div className={'my-4 timeline__content'}>
      <a href={url} target={'_blank'} rel="noreferrer">
        <ReactParallaxTilt
          className={'mb-20 lg:mb-16 timeline__tilt card'}
          tiltReverse={true}
          style={{
            transformStyle: 'preserve-3d',
            transform: 'perspective(1000px)',
            backgroundImage: `url(/img/home/timeline/${name}-bg.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPositionX: '50%',
            backgroundPositionY: '50%',
          }}
        >
          <div
            className={'mb-1 md:mb-4 h-full'}
            style={{
              transform: 'translateZ(80px)',
            }}
          >
            <img
              src={`/img/home/timeline/${name}-parallax.png`}
              className={'w-full h-full object-contain'}
              alt={name}
            />
          </div>

          <div
            className={'timeline__title'}
            style={{
              transform: 'translateZ(80px) scale(0.8)',
            }}
          >
            {title}
          </div>
        </ReactParallaxTilt>
      </a>

      <div
        className={
          'mb-12 p-4 rounded-md backdrop-filter backdrop-blur-md bg-pal-white bg-opacity-50 dark:bg-pal-darker dark:bg-opacity-50 shadow-lg xl:backdrop-blur-none xl:shadow-none xl:bg-transparent xl:dark:backdrop-blur-none xl:dark:shadow-none xl:dark:bg-transparent'
        }
        dangerouslySetInnerHTML={{__html: description}}
      />
    </div>
  )

  return (
    <section {...props}>
      <div className={'container my-24 sm:36 md:my-48 typo'}>
        <div className={'bg-circular-pattern dark:bg-circular-pattern--dark'} />
        <div className={'bg-gradient dark:bg-gradient--dark'} />

        <div className={'relative'}>
          <h2 className={'mb-24 title'}>{t('timeline.title')}</h2>

          <div className={'timeline'}>
            {range(1, 7).map((it, i) => (
              <React.Fragment key={it}>
                {renderItem(
                  t(`timeline.items.${i}.name`),
                  t(`timeline.items.${i}.url`),
                  t(`timeline.items.${i}.title`),
                  t(`timeline.items.${i}.description`)
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
