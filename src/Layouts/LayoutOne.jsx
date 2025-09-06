import React from 'react'
import Navbar from '../Pages/Navbar'
import HomePage from '../Pages/HomePage'
import { Outlet } from 'react-router'

const LayoutOne = () => {
  return (
    <>
      <Navbar/>
      <HomePage/>
      <Outlet/>
    </>
  )
}

export default LayoutOne
