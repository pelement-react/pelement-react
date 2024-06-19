import { RefObject, useEffect, useRef } from 'react'

export function useOnClickOutside<T extends HTMLElement>(
  nodes: Array<RefObject<T | undefined>>,
  handle: undefined | (() => void)
) {
  const handleRef = useRef<undefined | (() => void)>(handle)
  useEffect(() => {
    handleRef.current = handle
  }, [handle])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].current?.contains(e.target as Node) ?? false) {
          return
        }
      }

      if (handleRef.current) {
        handleRef.current()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [nodes])
}