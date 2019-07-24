import { useState } from "react"

const useOnOff = (isInitiallyOn = false) => {
  const [isOn, setIsOn] = useState(isInitiallyOn)

  const setOn = () => setIsOn(true)
  const setOff = () => setIsOn(false)

  return [
    isOn,
    setOn,
    setOff,
  ]
}

export default useOnOff