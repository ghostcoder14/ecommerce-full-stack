 import React from 'react'
 import { useState } from 'react';
 import {  Box, Typography , Button} from '@mui/material';
 import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 import { styled } from '@mui/system';
import Login from '../Login/Login';

   const Wrapper =styled(Box)`
    display: flex;
    cursor: pointer;
    margin-top: 0 3% 0 auto;
    & > button,& > p , & > div{
        margin-right: 30px;
        font-size: 14px;
        align-items: center;
    }
   `
    const Container =styled(Box)`
        display: flex;
       margin: 5px;
    `
   
   const LoginButton = styled(Button)`
   color: black;
   background-color: #fff;
   text-transform: none;
   padding: 5px 40px;
   border-radius: 2px;
   box-shadow: none;
   font-weight: 600;
   height: 32px;
 
   &:hover {
     background-color: #2874f0;
     color: white;
   }
 `;
 

 function CoustomButton() {

  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  }

  

   return (
    < Wrapper>
     < LoginButton  variant="contained" onClick={() => openDialog()} >Login</ LoginButton >
      <Typography style={{marginTop : 5 , width : 140 , color: 'black' , fontWeight:700 , fontSize: 15}}>Become a Seller</Typography>
      <Typography  style={{marginTop : 5 , width : 70 , color: 'black' , fontWeight:700 , fontSize: 15}}>More</Typography>

      <Container>
      <ShoppingCartIcon style={{color:'black' , marginBottom:6}}/>
        <Typography style={{color: 'black' , marginBottom:7 , fontWeight : 600 }}> Cart</Typography>
      </Container>
      <Login open={open} setOpen={setOpen}/>
    </ Wrapper>
   )
 }
 
 export default CoustomButton