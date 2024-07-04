import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Fragment } from 'react'

function Home() {
  return (
    <>
       <Fragment>
       <Navbar />
       <Banner />
       </Fragment>
    </>
  )
}

export default Home