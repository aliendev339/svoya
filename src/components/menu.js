import React from "react"
import Layer from "./layer";

const Menu = ({ isActive }) => (
  <Layer level={2}>
    <nav className={`${isActive ? "block" : "hidden"} h-screen w-screen bg-gray-800 px-6 pt-48`}>
      <ul className="text-3xl text-gray-400 pb-16 leading-relaxed">
        <li className="text-4xl text-white font-semibold">All Projects</li>
        <li>Architecture</li>
        <li>Industrial Design</li>
        <li>Interior</li>
      </ul>
      <ul className="leading-loose pb-8">
        <li>Press</li>
        <li>About Studio</li>
        <li>Awards</li>
        <li>Contact</li>
      </ul>
      <ul className="w-full flex justify-end">
        <li className="pr-4">F</li>
        <li className="pr-4">I</li>
        <li>T</li>
      </ul>
    </nav>
  </Layer>
)

export default Menu