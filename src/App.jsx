import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'
import Report from './pages/Report'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/report' element={<Report />}></Route>
      </Routes>
    </>
  )
}

export default App
