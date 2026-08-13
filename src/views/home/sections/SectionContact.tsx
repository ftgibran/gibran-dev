import { Card, Container, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { forwardRef } from 'react'

import { Section, SectionProps } from '@/components/layout/foundation/Section'
import { BackgroundContact } from '@/views/home/backgrounds/BackgroundContact'
import { FieldsetContactMe } from '@/views/home/components/FieldsetContactMe'
import { IconsCredit } from '@/views/home/components/IconsCredit'

// The easter egg is the only thing pulling framer-motion in, and it is wrapped
// in <ClientOnly> anyway, so it never had a server render to lose.
const ButtonDontClick = dynamic(
  () =>
    import('@/views/home/components/ButtonDontClick').then(
      (m) => m.ButtonDontClick,
    ),
  { ssr: false },
)

export const SectionContact = forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    return (
      <Section
        ref={ref}
        py={24}
        fillViewport={true}
        centerContent={true}
        {...props}
      >
        <BackgroundContact />

        <Container>
          <VStack>
            <Card.Root w={'full'} maxW={'md'} variant={'obsidian'}>
              <Card.Body>
                <FieldsetContactMe />
              </Card.Body>
            </Card.Root>
          </VStack>
        </Container>

        <IconsCredit pos={'absolute'} left={2} bottom={2} />

        <ButtonDontClick pos={'absolute'} right={0} bottom={0} />
      </Section>
    )
  },
)

SectionContact.displayName = 'SectionContact'
