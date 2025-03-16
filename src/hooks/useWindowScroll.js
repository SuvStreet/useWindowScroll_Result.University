import { useWindowEvent } from './useWindowEvent'

export function useWindowScroll() {
  return [scroll, scrollTo]
}
