import React, {useState, useEffect} from 'react'

const InventoryPage = ({ match }) => {

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
    <div>
        <p>{item?.id}</p>
        <p>{item?.title}</p>
        <p>{item?.description}</p>
        <p>{item?.sku}</p>
        <p>{item?.count}</p>
    </div>
  )
}

export default InventoryPage