import { Container, IconButton, Stack, VStack } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { LuChevronsDown } from 'react-icons/lu'

import { Section, SectionProps } from '@/components/layout/foundation/Section'
import { BackgroundHero } from '@/views/home/backgrounds/BackgroundHero'
import { FieldsetContactMe } from '@/views/home/components/FieldsetContactMe'
import { HeroIntro } from '@/views/home/components/HeroIntro'

export const SectionHero = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    return (
      <Section
        ref={ref}
        py={24}
        fillViewport={true}
        centerContent={true}
        {...props}
      >
        <BackgroundHero />

        <Container>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            align={'center'}
            justifyContent={'center'}
            gap={24}
          >
            <HeroIntro flex={1} maxW={'md'} />

            <FieldsetContactMe maxW={'md'} flex={1} />
          </Stack>
        </Container>

        <VStack pos={'absolute'} insetX={0} bottom={2}>
          <IconButton
            aria-label={'Scroll down'}
            size={'lg'}
            variant={'plain'}
            _icon={{ boxSize: 12 }}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
              })
            }}
          >
            <LuChevronsDown />
          </IconButton>
        </VStack>
      </Section>
    )
  },
)

SectionHero.displayName = 'SectionHero'
