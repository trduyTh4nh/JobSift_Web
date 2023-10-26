import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from '../Pages/Dashboard';
import MyProfile from '../Pages/MyProfile';
import MyCompany from '../Pages/MyCompany';
import ListPost from '../Pages/ListPost';
import Statistical from '../Pages/Statistical';
import AccountSettings from '../Pages/AccountSettings';
import MyWallet from '../Pages/MyWallet';

import AllTime from '../Components/NestedRouter_comp/AllTime';
import ThisMonth from '../Components/NestedRouter_comp/ThisMonth';
import ThisYear from '../Components/NestedRouter_comp/ThisYear';

import CompanybtnEdit from '../Components/NestedRouter_comp/CompanybtnEdit';




const Router = () => {
  return (

    <Routes>
      <Route path='/' element={<Navigate to="/dashboard" element={<Dashboard />} />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/myProfile' element={<MyProfile />} />
      <Route path='/myCompany' element={<MyCompany />}>

        <Route index element={<AllTime />} />
        <Route path='component1' element={<AllTime />} />
        <Route path='component2' element={<ThisMonth />} />
        <Route path='component3' element={<ThisYear />} />
      </Route>
      <Route path='/myCompany/companybtnEdit' element={<CompanybtnEdit/>}/>
      <Route path='/listPost' element={<ListPost />} />
      <Route path='/statistical' element={<Statistical />} />
      <Route path='/accountSettings' element={<AccountSettings />} />
      <Route path='/myWallet' element={<MyWallet />} />
    </Routes>

  )
}

export default Router