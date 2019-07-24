import React from "react"
import { animated, useTransition } from "react-spring";

const Menu = ({ isOpen }) => {
  const transitions = useTransition(isOpen, null, {
    from: { transform: 'translateY(100%)' },
    enter: { transform: 'translateY(0%)' },
    leave: { transform: 'translateY(100%)' },
  })

  return transitions.map(({ item, props, key }) => (
      item && <animated.div key={key} className={`h-screen fixed inset-0 z-10`} style={props}>
      <nav className={`h-screen w-screen bg-gray-900 px-6 pt-48`}>
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
      </nav>
    </animated.div>
    )
  )
}

export default Menu