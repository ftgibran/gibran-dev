import { Box, BoxProps } from '@chakra-ui/react'
import { Lazy } from '@utils/components/Lazy'
import { useCompositeProps } from '@utils/hooks/react/useCompositeProps'
import { forwardRef, useMemo, useState } from 'react'
import ReactPlayer, { type ReactPlayerProps } from 'react-player'
import { BaseReactPlayerProps, SourceProps } from 'react-player/base'

import { ErrorBoundary } from '@/components/misc/ErrorBoundary'

export const reactPlayerPropNames: Array<keyof BaseReactPlayerProps> = [
  'config',
  'url',
  'playing',
  'loop',
  'controls',
  'volume',
  'muted',
  'playbackRate',
  'width',
  'height',
  'style',
  'progressInterval',
  'playsinline',
  'playIcon',
  'previewTabIndex',
  'pip',
  'stopOnUnmount',
  'light',
  'fallback',
  'wrapper',
  'onReady',
  'onStart',
  'onPlay',
  'onPause',
  'onBuffer',
  'onBufferEnd',
  'onEnded',
  'onClickPreview',
  'onEnablePIP',
  'onDisablePIP',
  'onError',
  'onDuration',
  'onSeek',
  'onProgress',
]

export type ReactPlayerBoxProps = BoxProps &
  ReactPlayerProps & {
    videoUrl?: string | string[] | SourceProps[] | MediaStream
    placeholderImageUrl?: string
    isPlaying?: boolean
    isMuted?: boolean
    htmlWidth?: string | number
    htmlHeight?: string | number
  }

export const ReactPlayerBox = forwardRef<ReactPlayer, ReactPlayerBoxProps>(
  (props, ref) => {
    const {
      videoUrl,
      placeholderImageUrl,
      isPlaying,
      isMuted = true,
      htmlWidth = '100%',
      htmlHeight = '100%',
      ...rest
    } = props

    const [reactPlayerProps, boxProps] = useCompositeProps(
      rest,
      reactPlayerPropNames,
    )

    const [isLoading, setIsLoading] = useState(true)

    const hasVideo = useMemo(
      () => videoUrl !== undefined || props.url !== undefined,
      [props.url, videoUrl],
    )

    return (
      <Box
        pointerEvents={'none'}
        css={{ '& video': { objectFit: 'cover' } }}
        _after={{
          opacity: +isLoading,
          content: placeholderImageUrl ? '" "' : 'none',
          transitionProperty: 'common',
          transitionDuration: 'fast',
          pointerEvents: 'none',
          pos: 'absolute',
          inset: 0,
          bgImage: placeholderImageUrl,
          bgSize: 'contain',
          bgPos: 'center',
          bgRepeat: 'no-repeat',
        }}
        {...boxProps}
      >
        {hasVideo && (
          <Lazy>
            <ErrorBoundary>
              <ReactPlayer
                ref={ref}
                url={videoUrl}
                playing={isPlaying}
                muted={isMuted}
                volume={+!isMuted}
                controls={false}
                loop={true}
                width={htmlWidth}
                height={htmlHeight}
                onReady={() => setIsLoading(false)}
                fallback={placeholderImageUrl}
                playsinline={false}
                {...reactPlayerProps}
              />
            </ErrorBoundary>
          </Lazy>
        )}
      </Box>
    )
  },
)

ReactPlayerBox.displayName = 'ReactPlayerBox'
