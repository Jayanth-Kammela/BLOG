import React, { useState } from 'react';
import { Toolbar, Typography, Box, Container, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, useMediaQuery, useTheme } from '@mui/material';
import { Menu, Brightness4, Brightness7, Settings, Info, ContactMail, Home } from '@mui/icons-material';

const App = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const forScreenWidth = useMediaQuery(theme.breakpoints.down('md'));

  const forClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Toolbar>
          {forScreenWidth ? 
            <IconButton color="inherit" onClick={forClick} edge="start" sx={{ mr: 2 }} >
              <Menu />
            </IconButton>
           :
            <Box sx={{ mr: 2 }} />
          }
          <Typography component="div">
          <Home />HEXA
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {!forScreenWidth && (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box sx={{ mx: 2 }}>
                <Typography variant="subtitle1" component="div">
                  <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Service</a>
                </Typography>
              </Box>
              <Box sx={{ mx: 2 }}>
                <Typography variant="subtitle1" component="div">
                  <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</a>
                </Typography>
              </Box>
              <Box sx={{ mx: 2 }}>
                <Typography variant="subtitle1" component="div">
                  <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
                </Typography>
              </Box>
            </Box>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton color="inherit">
              <Brightness4 />
            </IconButton>
          </Box>
          <Box sx={{ mx: 1 }}>
            <Typography variant="subtitle1" component="div">
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Log in</a>
            </Typography>
          </Box>
          <Box sx={{ mx: 1 }}>
            <Typography variant="subtitle1" component="div">
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
            </Typography>
          </Box>
        </Toolbar>
      </Container>
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
                <Info/>
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
    </React.Fragment>
  );
}

export default App;