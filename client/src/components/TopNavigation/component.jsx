import React from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const TopNavigation = ({ handleDrawerClose, handleDrawerOpen, open, pageName })  => {
  return (
    <Box>
      <AppBar position="static" color="primary">
      <Toolbar variant="dense" sx={{ backgroundColor: 'white', color: 'black'  }}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={open ? handleDrawerClose : handleDrawerOpen }>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          {pageName}
        </Typography>
      </Toolbar>
      </AppBar>
    </ Box>
  );
}

export default TopNavigation;
