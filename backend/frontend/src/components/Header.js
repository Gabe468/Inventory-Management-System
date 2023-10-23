import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='app-header'>
    <Link to={`/`}>
      <h1>Inventory Manager</h1>
    </Link>
    </div>
  )
}

export default Header