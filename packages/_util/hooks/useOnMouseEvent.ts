import { RefObject, useEffect, useRef } from 'react'

type Types = 'mouseenter' | 'mouseleave'

export function useOnMouseEvent<T extends HTMLElement>(
  node: RefObject<T | undefined>,
  handle: undefined | ((e: MouseEvent, type: Types) => void)
) {
  const handleRef = useRef<undefined | ((e: MouseEvent, type: Types) => void)>(handle)
  useEffect(() => {
    handleRef.current = handle
  }, [handle])

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      if (handleRef.current) {
        handleRef.current(e, 'mouseenter')
      }
    }
    const handleMouseLeave = (e: MouseEvent) => {
      if (handleRef.current) {
        handleRef.current(e, 'mouseleave')
      }
    }

    node.current?.addEventListener('mouseenter', handleMouseEnter)
    node.current?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      node.current?.removeEventListener('mouseenter', handleMouseEnter)
      node.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [node])
}