import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Events from './views/Events'
//import Login from './views/Login'
import LoginContent from './components/LoginContent'
import Header from './components/Header'
import { useUser } from './context/UserContext';
import AddEvent from './views/AddEvent'
import Edit from './views/Edit'

function App() {

  const { user, setUser } = useUser();

  return (
    <>
        <Routes>
          <Route index element={<Home user={user}/>} />
          <Route path='/events' element={<Events user={user}/>}/>
          <Route path='/create/event' element={<AddEvent/>}/>
          <Route path='/update/event/:id' element={<Edit/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<LoginContent setUser={setUser}/>}/>
        </Routes>
      </>
  )
}

export default App
