import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  )
}

export default App
