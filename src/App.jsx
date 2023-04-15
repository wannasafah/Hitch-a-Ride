import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Splash from './screen/Splash'
import Prelogin from './screen/Prelogin'
import Login from './screen/login'
import Signup from './screen/signup'
import Booking from './screen/Booking'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Splash/>}/>
        <Route path='/prelogin' element = {<Prelogin/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/booking' element = {<Booking/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
