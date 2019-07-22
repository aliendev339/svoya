import React from "react"

import Layer from "./layer"
import Overlay from "./overlay"
import MenuButton from "./menu-button"
import Menu from "./menu"

import useToggle from "../hooks/useToggle"

const MainContent = () => {
  const [isActive, toggle] = useToggle()

  return (
    <section>
      <Layer level={0}>
        <img
          src="./apartment-architecture-art-276724.jpg"
          alt="An apartment"
          className="object-cover h-full w-screen" />
      </Layer>
      <Layer level={1}>
        <Overlay />
      </Layer>
      <div>
        <div className="h-screen w-screen flex flex-col justify-between items-start px-6 pt-6 pb-8">
          <div className="w-full flex justify-between items-start leading-none z-50">
            <p className="font-bold">Logo</p>
            <MenuButton toggle={toggle} />
          </div>
          <div className="leading-snug z-10">
            <h2 className="text-gray-100 text-xs">Interior</h2>
            <h1 className="text-4xl font-semibold">The Apartment</h1>
          </div>
        </div>
      </div>
      <Menu isActive={isActive} />
    </section>
  )
}

export default MainContent