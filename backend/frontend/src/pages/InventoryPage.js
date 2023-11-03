import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1);
    };

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
        <button onClick={goBack}>back</button>
        <button onClick={deleteItem}>Delete</button>
      </div>
      <div className='item-group'>
      <h3 className='item'>ID: {item?.id}</h3>
      <h3 className='item'>Title:</h3>
      <h3 className='item'>{item?.title}</h3>
      <h3 className='item'>Description:</h3>
      <h3 className='item'>{item?.Description}</h3>
      <h3 className='item'>SKU:</h3>
      <h3 className='item'>{item?.sku}</h3>
      <h3 className='item'>Count:</h3>
      <h3 className='item'>{item?.count}</h3>
    </div>
    </div>
  )
}

export default InventoryPage