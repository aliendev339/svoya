import React from "react"

import Layer from "./layer"
import Nav from "./nav"

const MainContent = () => (
  <section>
    <Layer>
      <img
        src="./apartment-architecture-art-276724.jpg"
        alt="An apartment"
        className="object-cover h-full w-screen" />
    </Layer>
    <Layer>
      <div className="h-screen w-screen bg-black opacity-50" />
    </Layer>
    <Layer>
      <Nav />
    </Layer>
  </section>
)

export default MainContent