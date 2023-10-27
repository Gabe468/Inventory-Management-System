import React from 'react'
import { Link } from 'react-router-dom'
import GridLayout from "react-grid-layout"

const ListItem = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
      <GridLayout className="layout" cols={5} rowHeight={35} width={'1000'}>
      <div className='item-list-item' key="list" data-grid={{ x: 0, y: 0, w: 1, h: 1, static: true }}>
      <h3>{item?.id}</h3>
        </div>
        <div className='item-list-item' key="title" data-grid={{ x: 1, y: 0, w: 1, h: 1, static: true }}>
      <h3>{item?.title}</h3>
        </div>
        <div className='item-list-item' key="description" data-grid={{ x: 2, y: 0, w: 1, h: 1, static: true }}>
      <h3>{item?.description}</h3>
        </div>
        <div className='item-list-item' key="sku" data-grid={{ x: 3, y: 0, w: 1, h: 1, static: true }}>
      <h3>{item?.sku}</h3>
        </div>
        <div className='item-list-item' key="count" data-grid={{ x: 4, y: 0, w: 1, h: 1, static: true }}>
      <h3>{item?.count}</h3>
        </div>
      </GridLayout>
    </Link>
  )
}

export default ListItem