import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from './Pages/Add'
import Admin from './Pages/Admin'
import Home from './Pages/Home'
import Layout from './Layout/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} path='/'>
          <Route element={<Home />} path='/'></Route>
          <Route element={<Admin />} path='/admin'></Route>
          <Route element={<Add />} path='/add'></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App