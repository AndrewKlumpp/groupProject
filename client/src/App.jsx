import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Events from './views/Events'
//import Login from './views/Login'
import LoginContent from './components/LoginContent'

function App() {

  const [user, setUser] = useState(null);

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/events' element={<Events user={user}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<LoginContent setUser={setUser}/>}/>
      </Routes>
    </>
  )
}

export default App
