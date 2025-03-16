import { useWindowScroll } from './hooks/useWindowScroll'

import './App.css'

export function Demo() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <div>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
      <button onClick={() => scrollTo({ x: 0 })}>Scroll to left</button>
      <button
        onClick={() =>
          scrollTo({
            x: document.documentElement.scrollWidth / 2 - window.innerWidth / 2,
            y:
              document.documentElement.scrollHeight / 2 -
              window.innerHeight / 2,
          })
        }
      >
        Scroll to center
      </button>
    </div>
  )
}
