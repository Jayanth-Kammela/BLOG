import React, { useState } from 'react';
import { Toolbar, Typography, Box, Container, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, useMediaQuery, useTheme } from '@mui/material';
import { Menu, Brightness4, Brightness7, Settings, Info, ContactMail, Home } from '@mui/icons-material';
import HiveIcon from '@mui/icons-material/Hive';
import BlogCard from './Components/BlogCard'
import { CustomStyles } from './Styles/Styles';

const App = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const forScreenWidth = useMediaQuery(theme.breakpoints.down('md'));

  const forClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <Box>
        <Toolbar>
          {forScreenWidth ?
            <IconButton onClick={forClick} edge="start" >
              <Menu />
            </IconButton>
            :
            ''
          }
            <HiveIcon sx={{width:32,height:32,cursor:'pointer'}} /><Typography sx={{fontFamily: 'Montserrat',fontWeight:'800',cursor:'pointer',fontSize:'20px'}}>HEXA</Typography>
          <Box sx={{ flexGrow: 1 }} />
          {!forScreenWidth && (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ ...CustomStyles.navLink }}>Service</Typography>
              <Typography sx={{ ...CustomStyles.navLink }}>Blog</Typography>
              <Typography sx={{ ...CustomStyles.navLink }}>About</Typography>
            </Box>
          )}
          <Box sx={{ flexGrow: 1 }} />
          {/* <Box>
            <IconButton color="inherit">
              <Brightness4 />
            </IconButton>
          </Box> */}
          <Typography sx={{ ...CustomStyles.btnNav }}>Log in</Typography>
          <Typography sx={{ ...CustomStyles.btnNav }}>Contact</Typography>
        </Toolbar>
      </Box>
      {forScreenWidth &&
        <Drawer anchor="left" open={open} onClose={forClick} >
          <List sx={{ width: 280 }}>
            <ListItem>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Service" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ContactMail />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Drawer>
      }
      <BlogCard />
    </React.Fragment>
  )
}

export default App