import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'

const InventoryPage = ({ match, history }) => {

    let itemId = match.params.id
    let [item , setItem] = useState(null)
    let {authTokens, logoutUser} = useContext(AuthContext)

    useEffect(() => {
      getItem()
    }, [itemId])

    let getItem = async () => {
      if (itemId === 'new') return

        let response = await fetch(`/api/item/${itemId}/`, {
          method:'GET',
          headers:{
              'Content-Type':'application/json',
              'Authorization':'Bearer ' + String(authTokens.access)
          }
      })

        let data = await response.json()
        setItem(data)

        if(response.status === 200){
          setItem(data)
      }else if(response.statusText === 'Unauthorized'){
          logoutUser()
      }
    }

    let createItem = async () => {
      fetch(`/api/item/create/`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'Authorization':'Bearer ' + String(authTokens.access)
        },
        body: JSON.stringify(item)
      })
      history.push('/')
    }

      let deleteItem = async ()=>{
        fetch(`/api/item/${itemId}/delete/`,{
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
        {itemId !== "new" ? (
          <button onClick={deleteItem}>Delete</button>
        ): (
          <button onClick={createItem}>Done</button>
        )}
      </div>
      {itemId !== "new" ? (
        <table style={{"border-spacing": "20px 10px"}} className='item-group' >
          <tr>
            <td className='item'>Created By: </td>
            <td className='item'>{item?.user}</td>
          </tr>
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
        ): (
          <div className='item-group'>
          <h1 className='item'>Title:</h1>
          <input className='item' onChange={(e) => {setItem({...item, 'title': e.target.value})}} value={item?.title}></input>
          <h3 className='item'>Description:</h3>
          <textarea className='item' onChange={(e) => {setItem({...item, 'description': e.target.value})}} value={item?.description}></textarea>
          <h3 className='item'>SKU:</h3>
          <input className='item' onChange={(e) => {setItem({...item, 'sku': e.target.value})}} value={item?.sku}></input>
          <h3 className='item'>Count:</h3>
          <input className='item' onChange={(e) => {setItem({...item, 'count': e.target.value})}} value={item?.count}></input>
        </div>
        )}
    </div>
  )
}

export default InventoryPage