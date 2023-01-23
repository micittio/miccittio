import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs'
import TermConditions from './pages/TermConditions/TermConditions'
import Login from './pages/Login/Login'
import Privacity from './pages/Privacity/Privacity'
import Singup from './pages/SingUp/SingUp'
import Home from './pages/Home/Home'

export default function RoutesPage() {
  return (
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/noticePrivacy' element={<Privacity/>} />
        <Route path='/termsConditions' element={<TermConditions />} />
        <Route path='/signUp' element={<Singup />} />
        <Route path='/aboutUs' element={<AboutUs />} />
      </Routes>      
  )
}


