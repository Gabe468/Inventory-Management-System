import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'

const InventoryListPage = () => {
    let [items, setInventory] = useState([])

    useEffect(() => {
      getInventory()
    }, [])
 
    let getInventory = async () => {
      let response = await fetch('/api/item/')
      let data = await response.json()
      setInventory(data)

    }

  return (
    <div className='item'>
      <div className="item-header">
                <h2 className="item-title">Inventory</h2>
                <p className="item-count">{items.length}</p>
                <h2 className="item-title"> Search</h2>
      </div>
        <div className='item-list'>
        {items.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}
        </div>
    </div>
  )
}

export default InventoryListPage