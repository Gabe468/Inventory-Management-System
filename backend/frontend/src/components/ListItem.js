import React from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


const ListItem = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
      <TableCell>{item?.id}</TableCell>
      <TableCell>{item?.title}</TableCell>
      <TableCell>{item?.description}</TableCell>
      <TableCell>{item?.sku}</TableCell>
      <TableCell>{item?.count}</TableCell>
    </Link>
  )
}

export default ListItem