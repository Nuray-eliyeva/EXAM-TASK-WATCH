import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Companents/Footer'
import Navbar from '../Companents/Navbar'

function Layout() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout