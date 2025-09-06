import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Pages/Home'
import { Outlet } from 'react-router'

const LayoutOne = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Outlet/>
    </>
  )
}

export default LayoutOne
