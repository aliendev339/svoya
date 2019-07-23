import React from "react"

const Layer = ({ children, level = 0, image, hidden }) => {
  const levels = {
    0: 'z-0',
    1: 'z-10',
    2: 'z-20',
    5: 'z-50'
  }

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }

  return (
    <div
      className={`h-screen absolute inset-0 ${levels[level]} ${hidden ? "hidden" : ""}`}
      style={image ? backgroundStyle : {}}>
      { children }
    </div>
  )
}


export default Layer