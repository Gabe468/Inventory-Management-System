import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { Link } from 'react-router-dom'

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
        <Table size="small">
          <TableHead>
            <TableRow className='table-header'>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Count</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
        {items.map((item) => (
                    <TableRow className='item-table'>
                    <TableCell >{item?.id}</TableCell>
                    <TableCell >{item?.title}</TableCell>
                    <TableCell >{item?.description}</TableCell>
                    <TableCell >{item?.sku}</TableCell>
                    <TableCell >{item?.count}</TableCell>
                    <TableCell >
                    <button className='view'>view</button>
                    <button className='edit'>edit</button>
                    <button className='remove'>remove</button>
                    </TableCell>
                    </TableRow>
                ))}
        </TableBody>
        </Table>
        </div>
    </div>
  )
}

export default InventoryListPage