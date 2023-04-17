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
import Great from './screen/Great'
import PickUp from './screen/PickUp'
import DropOff from './screen/DropOff'
import ChooseDriver from './screen/ChooseDriver'
import ChatDriver from './screen/ChatDriver'
import Notification from './screen/Notification'
import ChatPassenger from './screen/ChatPassenger'

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
        <Route path='/greatjob' element = {<Great/>}/>
        <Route path='/pickup' element = {<PickUp/>}/>
        <Route path='/dropOff' element = {<DropOff/>}/>
        <Route path='/chooseDriver' element = {<ChooseDriver/>}/>
        <Route path='/chatDriver' element = {<ChatDriver/>}/>
        <Route path='/notification' element = {<Notification/>}/>
        <Route path='/chatPassenger' element = {<ChatPassenger/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
