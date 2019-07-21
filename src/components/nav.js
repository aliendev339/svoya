import React from "react"

const Nav = () => (
  <nav className="h-screen relative text-gray-400">
    <div className="p-4">Logo</div>
    <div className="absolute bottom-0 left-0 p-4">
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
    </div>
    <div className="absolute top-0 right-0 p-4 text-right">
      <ul>
        <li className="inline-block text-white font-semibold border-b-2 border-white">All Projects</li>
        <li>Architecture</li>
        <li>Industrial Design</li>
        <li>Interior</li>
      </ul>
    </div>
    <div className="absolute bottom-0 right-0 p-4 text-right">
      <ul>
        <li>Press</li>
        <li>About Studio</li>
        <li>Awards</li>
        <li>Contact</li>
      </ul>
    </div>
  </nav>
)

export default Nav