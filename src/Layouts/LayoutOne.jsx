import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Pages/Home'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const LayoutOne = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
      <Outlet/>
    </>
  )
}

export default LayoutOne
