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
                <div className="item-title">
                  <h2>Inventory</h2>
                  <h3 style = {{color:'gray'}}>{items.length}</h3>
                </div>
                <h2 className="last-item-title"> Search</h2>
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