import React from 'react'
import { Link } from 'react-router-dom'
const ListItem = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
        <h3>{item.id} {item.title}</h3>
    </Link>
  )
}

export default ListItem