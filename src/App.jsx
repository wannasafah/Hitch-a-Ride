import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Splash from './screen/Splash'
import Prelogin from './screen/Prelogin'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Splash/>}/>
        <Route path='/prelogin' element = {<Prelogin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
