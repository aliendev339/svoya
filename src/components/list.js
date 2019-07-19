import React from "react"

const List = ({ items }) => (
  <ul>
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
)

export default List