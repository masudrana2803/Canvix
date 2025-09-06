import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import LayoutOne from './Layouts/LayoutOne'
import HomePage from './Pages/HomePage'


const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
<Route path='/' element={LayoutOne}>
<Route index element={<HomePage/>} />
</Route>
  ))
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default App
