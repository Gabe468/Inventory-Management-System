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
    <div>
      <div className='item-header'>
        <button onClick={deleteItem}>Delete</button>
      </div>
      <table style={{"border-spacing": "20px 10px"}} className='item-group' >
          <tr>
            <td className='item'>ID: </td>
            <td className='item'>{item?.id}</td>
          </tr>
          <tr>
            <td className='item'>Title:</td>
            <td className='item'>{item?.title}</td>
          </tr>
          <tr>
            <td className='item'>Description:</td>
            <td className='item'>{item?.description}</td>
          </tr>
          <tr>
            <td className='item'>SKU:</td>
            <td className='item'>{item?.sku}</td>
          </tr>
          <tr>
            <td className='item'>Count:</td>
            <td className='item'>{item?.count}</td>
          </tr>
    </table>
    </div>
  )
}

export default InventoryPage