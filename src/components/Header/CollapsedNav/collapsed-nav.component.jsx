import React, { useState } from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import { MdMenu } from 'react-icons/md'

const CollapsedNav = ({ aboutRef, projectsRef, scrollToRef }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = ref => {
    if (ref) {
      scrollToRef(ref);
    }
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenu}
      >
        <MdMenu />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
      >
        <MenuItem onClick={() => handleClose(aboutRef)}>About</MenuItem>
        <MenuItem onClick={() => handleClose(projectsRef)}>Projects</MenuItem>
      </Menu>
    </>
  );
};

export default CollapsedNav;
