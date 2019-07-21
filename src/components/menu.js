import React from "react"
import Layer from "./layer";

const Menu = ({ isActive }) => (
  <Layer>
    <div className={`${isActive ? "flex" : "hidden"} h-screen w-screen bg-gray-800 px-4 pt-24 flex-col justify-between items-start`}>
      Menu
    </div>
  </Layer>
)

export default Menu