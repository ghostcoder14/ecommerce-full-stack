import { useState } from 'react'
import './App.css'

//All Components:
import  Header from "./component/Header/Header"
import Home from './component/Home/Home'
import {Box} from '@mui/material'



function App() {
  return (
    <>
      <Header />
      <Box style={{marginTop: "54px"}}>
      <Home />
      </Box>
    </>
  )
}

export default App
