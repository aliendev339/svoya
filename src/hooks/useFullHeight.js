import { useEffect, useState } from "react"

const useFullHeight = () => {
  const [height, setHeight] = useState(0)

  const getHeightInPx = (windowHeight) => `${windowHeight}px`

  const updateHeight = () => {
    const heightInPx = getHeightInPx(window.innerHeight)
    setHeight(heightInPx)
  }

  useEffect(() => {
    updateHeight()
    window.addEventListener('resize', () => updateHeight())

    return window.removeEventListener('resize', () => updateHeight())
  }, [height])

  return height
}

export default useFullHeight