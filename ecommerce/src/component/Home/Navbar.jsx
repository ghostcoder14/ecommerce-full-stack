import React from 'react';
import { Box , Typography } from '@mui/material';
import { navData } from '../../Constants/Data';
import { styled } from '@mui/system';

const Component = styled(Box)`
   display: flex;
   margin: 70px 210px 0 210px;
   justify-content: space-between;
   font-family: 'Poppins', sans-serif; 
   text-align: center;
`;

const Subheading = styled(Box)`
    background-color: #fff;
    width: 100%;
`;

const Text = styled(Typography)`
   font-size: 14px;
  font-weight: 550;
`;

function Navbar() {
  return (
     <Subheading>
       <Component>
        {navData.map(data => (
          <Box key={data.text}> 
            <img src={data.url} alt="nav" style={{width : 90}} />
            <Text>{data.text}</Text>
          </Box>
        ))}
      </Component>
     </Subheading>
  );
}

export default Navbar;
