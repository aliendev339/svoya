import React from "react"

import Layer from "./layer"
// import Nav from "./nav"
import Overlay from "./overlay"

const MainContent = () => (
  <section>
    <Layer>
      <img
        src="./apartment-architecture-art-276724.jpg"
        alt="An apartment"
        className="object-cover h-full w-screen" />
    </Layer>
    <Layer>
      <Overlay />
    </Layer>
    <Layer>
      <Nav />
    </Layer>
    {/* <Layer>
      <Nav />
    </Layer> */}
  </section>
)

export default MainContent