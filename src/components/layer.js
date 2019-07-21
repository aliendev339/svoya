import React from "react"

const Layer = ({ children }) => (
  <div className={`h-screen absolute inset-0`}>
    { children }
  </div>
)

export default Layer