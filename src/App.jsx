import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Splash from './screen/Splash'
import Prelogin from './screen/Prelogin'
import Booking from './screen/Booking'
import AddJob from './screen/AddJob'
import Signup from './screen/Signup'
import Login from './screen/Login'
import Role from './screen/Role'
import Profile from './screen/Profile'
import Cancelbook from './screen/Cancelbook'
import Feedback from './screen/Feedback'
import Thank from './screen/Thank'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Splash/>}/>
        <Route path='/prelogin' element = {<Prelogin/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/booking' element = {<Booking/>}/>
        <Route path='/addJob' element = {<AddJob/>}/>
        <Route path='/role' element = {<Role/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/cancelbooking' element = {<Cancelbook/>}/>
        <Route path='/feedback' element = {<Feedback/>}/>
        <Route path='/thankyou' element = {<Thank/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
