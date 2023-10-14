import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from '../Pages/Dashboard'
import AccountSettings from '../Pages/AccountSettings'
import Home from '../Pages/Home'
import Manage from '../Pages/Manage'
import Statistical from '../Pages/Statistical'
const Router = () => {
  return (

      <Routes>
        <Route path='/' element={<Navigate to="/dashboard" element={<Dashboard/>} />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/statistical' element={<Statistical/>}/>
        <Route path='/manage' element={<Manage/>}/>
        <Route path='/accountSettings' element={<AccountSettings/>}/>
      </Routes>

  )
}

export default Router