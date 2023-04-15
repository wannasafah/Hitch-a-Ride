import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Splash from './screen/Splash'
import Prelogin from './screen/Prelogin'
import Booking from './screen/Booking'
import AddJob from './screen/AddJob'
import Signup from './screen/Signup'
import Login from './screen/Login'
import Role from './screen/Role'
import PickUp from './screen/PickUp'
import DropOff from './screen/DropOff'
import ChooseDriver from './screen/ChooseDriver'

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
        <Route path='/pickup' element = {<PickUp/>}/>
        <Route path='/dropOff' element = {<DropOff/>}/>
        <Route path='/chooseDriver' element = {<ChooseDriver/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
