'use client'
import { isEnum } from '@utils/common/isEnum'
import {
  type ChildrenWithContext,
  useChildrenWithContext,
} from '@utils/hooks/react/useChildrenWithContext'
import { findElementByName } from '@utils/react/findElementByName'
import { getValidElements } from '@utils/react/getValidElements'
import { mapValues } from 'lodash'
import {
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from 'react'
import React from 'react'

export type ChildrenSlots<K extends string> = ChildrenWithContext<
  SlotContext<K>
>

export type SlotContext<K extends string = string> = {
  [key in K]: ComponentSlot<any>
}

export type ComponentSlot<P extends object = PropsWithChildren> =
  FunctionComponent<P>

export const createChildSlot = <
  P extends PropsWithChildren = PropsWithChildren,
>(
  name: string,
) => {
  const Child: ComponentSlot<P> = (props) => <>{props.children}</>

  Child.displayName = name

  return Child
}

/**
 * Convert children into slots. Used to represent children as different identifiers.
 *
 * Example:
 * You have to create modal component that contains `header` `body`, and `footer` parts.
 *
 * So, you may create and apply those slots:
 *
 * ```tsx
 * const Modal = ({children}) => {
 *   const slot = useComponentSlots(children, ['Header', 'Body', 'Footer'])
 *
 *   return (
 *     <ModalContainer>
 *       <DivForHeader>
 *         { slot.Header }
 *       </DivForHeader>
 *
 *       <DivForBody>
 *         { slot.Body }
 *       </DivForBody>
 *
 *       <DivForFooter>
 *         { slot.Footer }
 *       </DivForFooter>
 *     </ModalContainer>
 *   )
 * }
 * ```
 *
 * As a result, you can now invoke your modal component like this:
 *
 * ```tsx
 * () => {
 *   return (
 *     <Modal>
 *       {(Slot) => (
 *         <>
 *           <Slot.Header>
 *             Your header part
 *           </Slot.Header>
 *
 *           <Slot.Body>
 *             Your body part
 *           </Slot.Body>
 *
 *           <Slot.Footer>
 *             Your footer part
 *           </Slot.Footer>
 *         </>
 *       )}
 *     </Modal>
 *   )
 * }
 * ```
 */
export function useComponentSlots<C extends SlotContext>(
  children: ChildrenWithContext<C>,
  contextOrKeys: C | Record<string, keyof C> | ReadonlyArray<keyof C>,
) {
  const context = useMemo(() => {
    if (contextOrKeys instanceof Array || isEnum(contextOrKeys)) {
      const keys = Object.values(contextOrKeys) as string[]

      return keys.reduce(
        (prev, key) => ({
          ...prev,
          [key]: createChildSlot(`Slot${key}`),
        }),
        {} as C,
      )
    }

    return contextOrKeys
  }, [contextOrKeys])

  const childrenWithContext = useChildrenWithContext<C>(children, context)

  return useMemo(() => {
    const elements = getValidElements(childrenWithContext)

    return mapValues(context, ({ displayName }) => {
      return displayName ? findElementByName(elements, displayName) : undefined
    }) as Record<keyof C, ReactElement<any, any>>
  }, [childrenWithContext, context])
}
