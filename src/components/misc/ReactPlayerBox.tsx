import { Box, BoxProps } from '@chakra-ui/react'
import { useIsPageLoaded } from '@utils/hooks/dom/useIsPageLoaded'
import { useCompositeProps } from '@utils/hooks/react/useCompositeProps'
import { forwardRef, useMemo, useState } from 'react'
import { BaseReactPlayerProps, SourceProps } from 'react-player/base'
// Only local .webm is ever played here, so the file player alone is enough.
// The default entry point bundles every provider adapter (YouTube, Vimeo,
// Twitch and a dozen more) for nothing.
import ReactPlayer, { type FilePlayerProps } from 'react-player/file'

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
  FilePlayerProps & {
    videoUrl?: string | string[] | SourceProps[] | MediaStream
    placeholderImageUrl?: string
    posterUrl?: string
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
      posterUrl,
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

    // The hero background is on screen from the first frame, so left to itself
    // its 870 KB compete with the LCP image for bandwidth. Waiting for `load`
    // to mount the player keeps it off the critical path; the poster stands in.
    const isPageLoaded = useIsPageLoaded()

    // `playing` is what actually triggers the download, given the preload="none"
    // below, and every caller already gates it on the viewport.
    const shouldPlay = isPlaying ?? reactPlayerProps.playing ?? false

    // preload="none" is the whole point: once mounted, the <video> gives the
    // wrapper its height without fetching a byte until play() is called.
    // `controls` marks the one player a user operates; the rest are decorative
    // backgrounds and should be invisible to a reader.
    const fileConfig = useMemo(
      () => ({
        attributes: {
          preload: 'none',
          poster: posterUrl,
          disablePictureInPicture: true,
          'aria-hidden': reactPlayerProps.controls ? undefined : true,
        },
      }),
      [posterUrl, reactPlayerProps.controls],
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
        {/* Holds the frame while the player is still out of the tree, since a
            zero-height wrapper would also starve the viewport observers that
            decide when to play. */}
        {hasVideo && !isPageLoaded && posterUrl && (
          <Box
            aria-hidden
            pos={'absolute'}
            inset={0}
            bgImage={`url(${posterUrl})`}
            bgSize={'cover'}
            bgPos={'center'}
            bgRepeat={'no-repeat'}
          />
        )}

        {/* Kept out of the server render: react-player's own markup does not
            hydrate cleanly, and it has no business being in the HTML anyway. */}
        {hasVideo && isPageLoaded && (
          <ErrorBoundary>
            <ReactPlayer
              ref={ref}
              url={videoUrl}
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
              playing={shouldPlay}
              config={{ ...fileConfig, ...reactPlayerProps.config }}
            />
          </ErrorBoundary>
        )}
      </Box>
    )
  },
)

ReactPlayerBox.displayName = 'ReactPlayerBox'
