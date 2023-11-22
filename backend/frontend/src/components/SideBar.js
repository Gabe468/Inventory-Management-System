import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react'
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import AuthContext from '../context/AuthContext';

function SideBar() {
  let{user, logoutUser} = useContext(AuthContext)
  return (
    <div style={{ display: "flex", height: "100vh"}}>
      <Sidebar width="200px" className="app">
      <Menu
        menuItemStyles={{
          button: {
            '&:hover': {
               backgroundColor: "#335B8C !important",
               color: "white !important",
               borderRadius: "8px !important",
               fontWeight: "bold !important",
            }
         }
        }}
        >
          <Link to="/">
          <h1 className='sidebar-header'>
            Inventory Management
          </h1>
          </Link>
          <MenuItem icon={<InfoIcon />}> About </MenuItem>
          <MenuItem icon={<PersonIcon />}> {user && user.username} </MenuItem>
          <Link to="/">
          <MenuItem icon={<InventoryIcon />}> Inventory </MenuItem>
          </Link>
          <MenuItem icon={<SettingsIcon />}> Settings </MenuItem>
          {user ? (
          <MenuItem onClick={logoutUser} > Logout </MenuItem>
          ):(
            null
          )}
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar