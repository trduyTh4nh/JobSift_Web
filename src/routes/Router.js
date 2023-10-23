import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from '../Pages/Dashboard';
import MyProfile from '../Pages/MyProfile';
import MyCompany from '../Pages/MyCompany';
import ListPost from '../Pages/ListPost';
import Statistical from '../Pages/Statistical';
import AccountSettings from '../Pages/AccountSettings';




const Router = () => {
  return (

      <Routes>
        <Route path='/' element={<Navigate to="/dashboard" element={<Dashboard/>} />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/myProfile' element={<MyProfile/>}/>
        <Route path='/myCompany' element={<MyCompany/>}/>
        <Route path='/listPost' element={<ListPost/>}/>
        <Route path='/statistical' element={<Statistical/>}/>
        <Route path='/accountSettings' element={<AccountSettings/>}/>
      </Routes>

  )
}

export default Router