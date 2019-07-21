import React from "react"

const MenuButton = ({ toggle }) => (
  <button onClick={toggle} className="w-8 flex flex-col items-end">
    <span className="block w-full border-white border-t-2 pb-1"></span>
    <span className="block w-2/3 border-white border-b-2"></span>
  </button>
)

export default MenuButton