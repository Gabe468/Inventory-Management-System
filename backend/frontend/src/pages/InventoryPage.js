import React, {useState, useEffect} from 'react'

const InventoryPage = ({ match, history }) => {

    let itemId = match.params.id
    let [item , setItem] = useState(null)

    useEffect(() => {
      getItem()
    }, [itemId])

    let getItem = async () => {
        let response = await fetch(`/api/item/${itemId}/`)
        let data = await response.json()
        setItem(data)
    }

    let deleteItem = async ()=>{
      fetch('/api/item/${itemId}/delete/',{
        method: 'DELETE',
        'headers':{
            'Content-Type': 'application/json'
        }
      })
      history.push('/')
    }

  return (
    <div className='item'>
      <div className='item-header'>
        <button onClick={deleteItem}>Delete</button>
      </div>
      <h3>{item?.id}{item?.title}{item?.description}{item?.sku}{item?.count}</h3>
    </div>
  )
}

export default InventoryPage