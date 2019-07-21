import { useState } from "react"

const useToggle = (initialState = false) => {
  const [isActive, setIsActive] = useState(initialState)
  const toggle = () => {
    setIsActive(!isActive)
  }

  return [isActive, toggle]
}

export default useToggle