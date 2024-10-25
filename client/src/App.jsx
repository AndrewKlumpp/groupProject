import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Events from './views/Events'
import Login from './views/Login'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/events' element={<Events/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
