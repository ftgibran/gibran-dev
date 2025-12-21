import { BoxProps, Center, Separator } from '@chakra-ui/react'
import { range } from 'lodash'
import { FC } from 'react'

import { BackgroundCloud } from '@/views/home/backgrounds/BackgroundCloud'

export const BackgroundTimeline: FC<BoxProps> = (props) => {
  return (
    <Center pos={'absolute'} inset={0} {...props}>
      <Center
        pos={'absolute'}
        inset={0}
        zIndex={'hide'}
        flexFlow={'column'}
        overflow={'clip'}
        bg={'secondary.solid'}
        WebkitMaskImage={
          'linear-gradient(to bottom, transparent, black, black, transparent)'
        }
      >
        {range(0, 5).map((n) => (
          <BackgroundCloud
            key={n}
            w={{ base: '400%', sm: '300%', md: '200%', lg: '100%' }}
            my={'-20vh'}
            opacity={0.5}
          />
        ))}
      </Center>

      <Separator
        pos={'absolute'}
        insetY={0}
        size={'lg'}
        orientation={'vertical'}
        borderColor={'primary.50'}
        filter={'drop-shadow({shadows.glow})'}
      />
    </Center>
  )
}

BackgroundTimeline.displayName = 'BackgroundTimeline'
