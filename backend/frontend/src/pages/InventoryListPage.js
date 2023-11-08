import React, {useState, useEffect} from 'react'
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

const InventoryListPage = ({ match, history }) => {
    let itemId = match.params.id
    let [items, setInventory] = useState([])

    useEffect(() => {
      getInventory()
    }, [])
 
    let getInventory = async () => {
      let response = await fetch('/api/item/')
      let data = await response.json()
      setInventory(data)

    }

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));


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
    <div className="item-header">
      <div className="item-title">
        <h2>Inventory</h2>
        <h3 style = {{color:'gray'}}>{items.length}</h3>
      </div>
      <Link to="/item/new">
      <h2 className="last-item-title">Create</h2>
      </Link>
    </div>
        <div className='item-list'>
        <Table stickyHeader size='small' >
          
          <TableHead>
            <TableRow size="big" className='table-header'>
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
                    <StyledTableRow className='item-table'>
                    <TableCell >{item?.id}</TableCell>
                    <TableCell >{item?.title}</TableCell>
                    <TableCell >{item?.description}</TableCell>
                    <TableCell >{item?.sku}</TableCell>
                    <TableCell >{item?.count}</TableCell>
                    <TableCell >
                    <Link to={`/item/${item.id}`} className='view'>
                    <VisibilityIcon></VisibilityIcon>
                    </Link>
                    <Link to={`/item/${item.id}/edit`} className='edit'>
                    <EditIcon></EditIcon>
                    </Link>
                    <div className='remove'>
                    <DeleteIcon onClick={deleteItem}></DeleteIcon>
                    </div>
                    </TableCell>
                    </StyledTableRow>
                ))}
        </TableBody>
        </Table>
        </div>
    </div>
  )
}

export default InventoryListPage