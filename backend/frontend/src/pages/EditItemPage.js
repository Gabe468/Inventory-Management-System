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

  return (
    <div className='item-group'>
      <h3 className='item'>ID: {item?.id}</h3>
      <h3 className='item'>Title:</h3>
      <input className='item' onChange={(e) => {setItem({...item, 'title': e.target.value})}} defaultValue={item?.title}></input>
      <h3 className='item'>Description:</h3>
      <textarea className='item' onChange={(e) => {setItem({...item, 'description': e.target.value})}} defaultValue={item?.description}></textarea>
      <h3 className='item'>SKU:</h3>
      <input className='item' onChange={(e) => {setItem({...item, 'sku': e.target.value})}} defaultValue={item?.sku}></input>
      <h3 className='item'>Count:</h3>
      <input className='item' onChange={(e) => {setItem({...item, 'count': e.target.value})}} defaultValue={item?.count}></input>
    </div>
  )
}

export default EditItemPage