import React from "react"

import Layer from "./layer"
import MenuButton from "./menu-button"
import Menu from "./menu"

import useOnOff from "../hooks/use-on-off"
import useFullHeight from "../hooks/use-full-height"

const MainContent = () => {
  const [isMenuOpen, openMenu, closeMenu] = useOnOff()
  const height = useFullHeight()

  return (
    <section>
      <Layer image="./apartment-architecture-art-276724.jpg" />
      <Layer hidden image="./apartment-clean-condominium-279719.jpg" />
      <div style={{ height }}>
        <div className="h-full w-screen flex flex-col justify-between items-start px-6 pt-6 pb-8">
          <div className="w-full flex justify-between items-start leading-none z-50">
            <p className="font-bold">Logo</p>
            <MenuButton toggle={isMenuOpen ? closeMenu : openMenu} />
          </div>
          <div className="leading-snug z-10">
            <h2 className="text-gray-100 text-xs">Interior</h2>
            <h1 className="text-4xl font-semibold">The Apartment</h1>
          </div>
        </div>
      </div>
      <Menu isOpen={isMenuOpen} />
    </section>
  )
}

export default MainContent