import React from 'react'
import { Box  , Typography} from '@mui/material'

const Profile = ({account}) => {
  return (
    <>
        <Box onClick={handleClick}>
        <Typography style={{ color: 'black', fontWeight: 700 }}>{account}</Typography>
        </Box>
        <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default Profile