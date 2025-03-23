import { useCallback, useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useWindowScroll() {
  const [scroll, setScroll] = useState({ x: window.scrollX, y: window.scrollY })

  const scrollTo = useCallback(({ x = window.scrollX, y = window.scrollY }) => {
    if (typeof window === 'undefined') return

    window.scrollBy({
      top: y - window.scrollY,
      left: x - window.scrollX,
      behavior: 'smooth',
    })
  }, [])

  useWindowEvent('scroll', () => {
    setScroll({ x: window.scrollX, y: window.scrollY })
  })

  return [scroll, scrollTo]
}
