import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EllipsisVerticalIcon from '@heroicons/react/24/solid/EllipsisVerticalIcon';
import SvgIcon from '@mui/material/SvgIcon';

const CustomIconButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton edge="end" onClick={handleClick}>
        <SvgIcon>
            <EllipsisVerticalIcon />
        </SvgIcon>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Ansehen</MenuItem>
        <MenuItem onClick={handleClose}>Gelesen</MenuItem>
        <MenuItem onClick={handleClose}>Ungelesen</MenuItem>
      </Menu>
    </div>
  );
};

export default CustomIconButton;
