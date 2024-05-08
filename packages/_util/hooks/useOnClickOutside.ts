import { RefObject, useEffect, useRef } from 'react'

export function useOnClickOutside<T extends HTMLElement>(
  node: RefObject<T | undefined>,
  handle: undefined | (() => void)
) {
  const handleRef = useRef<undefined | (() => void)>(handle)
  useEffect(() => {
    handleRef.current = handle
  }, [handle])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (node.current?.contains(e.target as Node) ?? false) {
        return
      }

      if (handleRef.current) {
        handleRef.current()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [node])
}