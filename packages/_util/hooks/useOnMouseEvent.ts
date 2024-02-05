import { RefObject, useEffect, useRef } from 'react'

type Types = 'mouseenter' | 'mouseleave'

export function useOnMouseEvent<T extends HTMLElement>(
  node: RefObject<T | undefined>,
  handler: undefined | ((e: MouseEvent, type: Types) => void)
) {
  const handlerRef = useRef<undefined | ((e: MouseEvent, type: Types) => void)>(handler)
  useEffect(() => {
    handlerRef.current = handler
  }, [handler])

  useEffect(() => {
    const handlerMouseEnter = (e: MouseEvent) => {
      if (handlerRef.current) {
        handlerRef.current(e, 'mouseenter')
      }
    }
    const handlerMouseLeave = (e: MouseEvent) => {
      if (handlerRef.current) {
        handlerRef.current(e, 'mouseleave')
      }
    }

    node.current?.addEventListener('mouseenter', handlerMouseEnter)
    node.current?.addEventListener('mouseleave', handlerMouseLeave)

    return () => {
      node.current?.removeEventListener('mouseenter', handlerMouseEnter)
      node.current?.removeEventListener('mouseleave', handlerMouseLeave)
    }
  }, [node])
}