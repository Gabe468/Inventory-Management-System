import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
      <div className='item-list-item'>
        <h3>{item.title}</h3>
      </div>
    </Link>
  )
}

export default ListItem