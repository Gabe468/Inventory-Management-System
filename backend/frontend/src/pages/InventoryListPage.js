import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'

const InventoryListPage = () => {
    let [items, setInventory] = useState([])

    useEffect(()=>{
      getInventory()
    }, [])
 
    let getInventory = async () => {
      let response = await fetch('http://127.0.0.1:8000/api/item/')
      let data = await response.json()
      setInventory(data)

    }

  return (
    <div>
        <div className='inventory-list'>
              {items.map((item, index) => (
                <ListItem key={index} item={item} />
            ))}
        </div>
    </div>
  )
}

export default InventoryListPage