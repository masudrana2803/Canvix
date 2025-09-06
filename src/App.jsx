import React from 'react'
import { createRoutesFromElements, Route } from 'react-router'
import { createBrowserRouter } from 'react-router'
import Home from './Pages/Home'
import LayoutOne from './Layouts/LayoutOne'

const App = () => {
  
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<LayoutOne/>} >
        <Route index element={<Home/>} />
    </Route>

  ))

  return (
    <>
      <LayoutOne/>
    </>
  )
}

export default App
