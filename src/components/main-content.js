import React from "react"

import Layer from "./layer"
// import Nav from "./nav"
import Overlay from "./overlay"
import MenuButton from "./menu-button"

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
      <div className="h-screen w-screen flex flex-col justify-between items-start px-4 pt-4 pb-8">
        <div className="w-full flex justify-between items-start leading-none">
          <p className="font-bold">Logo</p>
          <MenuButton />
        </div>
        <div className="leading-snug">
          <h2 className="text-gray-100 text-xs">Interior</h2>
          <h1 className="text-3xl font-semibold">The Apartment</h1>
        </div>
      </div>
    </Layer>
    {/* <Layer>
      <Nav />
    </Layer> */}
  </section>
)

export default MainContent