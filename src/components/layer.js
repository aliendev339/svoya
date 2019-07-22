import React from "react"

const Layer = ({ children, level = 0 }) => {
  const levels = {
    0: 'z-0',
    1: 'z-10',
    2: 'z-20',
    5: 'z-50'
  }
  return (
    <div className={`h-screen absolute inset-0 ${levels[level]}`}>
      { children }
    </div>
  )
}


export default Layer