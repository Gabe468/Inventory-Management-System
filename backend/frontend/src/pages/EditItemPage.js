import React, {useState, useEffect} from 'react'

const EditItemPage = ({ match, history }) => {
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

    let updateItem = async () => {
      fetch(`/api/item/${itemId}/update/`,{
        method: "PUT",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
    }

    let handleSumbit = () => {
      updateItem()
      history.push('/')
    }

  return (
    <div className='app-body'>
    <div className='item-header'>
        <button onClick={handleSumbit}>Update</button>
    </div>
    <div className='item-group'>
      <h1 className='item'>ID:</h1>
      <h1 className='item'>{item?.id}</h1>
      <h1 className='item'>Title:</h1>
      <input className='item' onChange={(e) => {setItem({...item, 'title': e.target.value})}} value={item?.title}></input>
      <h3 className='item'>Description:</h3>
      <textarea className='item' onChange={(e) => {setItem({...item, 'description': e.target.value})}} value={item?.description}></textarea>
      <h3 className='item'>SKU:</h3>
      <input className='item' onChange={(e) => {setItem({...item, 'sku': e.target.value})}} value={item?.sku}></input>
      <h3 className='item'>Count:</h3>
      <input className='item' onChange={(e) => {setItem({...item, 'count': e.target.value})}} value={item?.count}></input>
    </div>
    </div>
  )
}

export default EditItemPage