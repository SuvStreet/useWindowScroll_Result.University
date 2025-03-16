import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useWindowScroll() {
  const [scroll, setScroll] = useState({ x: window.scrollX, y: window.scrollY })

  const scrollTo = ({ x = window.scrollX, y = window.scrollY }) => {
    window.scrollBy({
      top: y - window.scrollY,
      left: x - window.scrollX,
      behavior: 'smooth',
    })
  }

  useWindowEvent('scroll', () => {
    setScroll({ x: window.scrollX, y: window.scrollY })
  })

  return [scroll, scrollTo]
}
