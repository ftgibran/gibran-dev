import { Box, BoxProps, ClientOnly, Span } from '@chakra-ui/react'
import { sleep } from '@utils/common/sleep'
import { Variants } from 'framer-motion'
import { forwardRef, useCallback, useRef, useState } from 'react'

import { ImageBox } from '@/components/misc/ImageBox'
import { MotionBox } from '@/components/misc/MotionBox'

const variants: Variants = {
  hidden: {
    x: '100%',
    y: '100%',
    opacity: 1,
    transition: { duration: 0.3, ease: 'linear' },
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: 'linear' },
  },
}

export const ButtonDontClick = forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const [kill, setKill] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    const openToasty = useCallback(async () => {
      setIsOpen(true)
      setKill(true)

      audioRef.current?.play()

      await sleep(3_000)

      setIsOpen(false)
    }, [])

    return (
      <ClientOnly>
        <Box
          ref={ref}
          pos={'relative'}
          userSelect={'none'}
          pointerEvents={'none'}
          overflow={'clip'}
          minW={'2xs'}
          minH={'2xs'}
          {...props}
        >
          <audio ref={audioRef} src={'/audios/toasty.mp3'} preload={'auto'} />

          {!kill && (
            <Box
              pos={'absolute'}
              right={0}
              bottom={0}
              pointerEvents={'auto'}
              cursor={'pointer'}
              onClick={openToasty}
            >
              <Span
                pos={'absolute'}
                top={1}
                insetX={0}
                textStyle={'label'}
                textAlign={'center'}
              >
                Don&#39;t Click
              </Span>

              <ImageBox
                src={'/images/home/dont-click.webp'}
                alt={"Don't Click"}
                maxW={24}
                width={'256'}
                height={'256'}
                loading={'eager'}
              />
            </Box>
          )}

          <MotionBox
            pos={'absolute'}
            bottom={0}
            right={0}
            overflow={'clip'}
            variants={variants}
            initial={'hidden'}
            animate={isOpen ? 'visible' : 'hidden'}
          >
            <ImageBox
              src={'/images/home/toasty.webp'}
              alt={'Toasty'}
              maxW={'2xs'}
              width={'2151'}
              height={'2374'}
            />
          </MotionBox>
        </Box>
      </ClientOnly>
    )
  },
)

ButtonDontClick.displayName = 'ButtonDontClick'
