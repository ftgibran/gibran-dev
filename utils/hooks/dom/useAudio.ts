import { useMountEffect } from '@utils/hooks/react/effect/useMountEffect'
import { useRef } from 'react'

export function useAudio(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useMountEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src)
    }
  })

  // eslint-disable-next-line react-hooks/refs
  return audioRef.current
}
