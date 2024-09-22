import React, { useState } from 'react'
import {AppBar, Box, Toolbar, Typography,Drawer} from '@mui/material'
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import {Link} from 'react-router-dom';
import '../../styles/HeaderStyles.css';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen,setMobileOpen] = useState(false)
  //handle menu click
  const handleDrawerToggle = ( ) =>{
  
  setMobileOpen(!mobileOpen);
  }
  //menu drawer
  
  const drawer =(
  
    <Box onClick = {handleDrawerToggle} sx={{textAlign:"center"}}>
        <Typography
        color={"#f73378"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <RestaurantOutlinedIcon/>
        My Restaurant
      </Typography>
      <ul className="mobile-navigation">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/menu'}>Menu</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        

      </ul>

    </Box>
  );
  return (
  <>
   <Box>
     <AppBar component={"nav"} sx={{bgcolor:"black"}}>
     <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
           
            edge="start"
            sx={
              {
                mr: 2,
                display:{xs:"block",sm:"none"}
              }
             
            }
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
    
      <Typography color={"#f73378"} variant="h6" component={"div"} sx={{flexGrow:1}}>
        <RestaurantOutlinedIcon/>
        My Restaurant</Typography>
    
     <Box sx={{display:{xs:"none",sm:"block"}}}>
      <ul className="navigation-menu">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/menu'}>Menu</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        

      </ul>
     </Box>
     </Toolbar>
     </AppBar>
      <Box componet="nav">
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:"block",sm:"none"},
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "240px",
        },}} >
             {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar/>
      </Box>
   </Box>
   
       
  </>
  )
}

export default Header