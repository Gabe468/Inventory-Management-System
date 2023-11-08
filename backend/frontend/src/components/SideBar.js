import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import React from 'react'
import DarkToggle from './DarkToggle';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';

function SideBar() {
  return (
    <div style={{ display: "flex", height: "100vh"}}>
      <Sidebar width="200px" className="app">
        <Menu>
          <Link to="/">
          <MenuItem rootStyles={{
            backgroundColor: '#94cbffc5',
        }}>
            <h2>Inventory Manager</h2>
          </MenuItem>
          </Link>
          <MenuItem icon={<InfoIcon />}> About </MenuItem>
          <MenuItem icon={<PersonIcon />}> User </MenuItem>
          <MenuItem icon={<InventoryIcon />}> Inventory </MenuItem>
          <MenuItem icon={<SettingsIcon />}> Settings </MenuItem>
          <MenuItem ><DarkToggle/ ></MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar