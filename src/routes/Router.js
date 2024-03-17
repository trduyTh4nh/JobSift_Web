import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from '../Page/Home';
import Chat from '../Page/Chat';
import Contact from '../Page/Contact';
import AboutMe from '../Page/AboutMe';

import Dashboard from '../Pages/Dashboard';
import MyProfile from '../Pages/MyProfile';
import MyCompany from '../Pages/MyCompany';
import ListPost from '../Pages/ListPost';
import Statistical from '../Pages/Statistical';
import AccountSettings from '../Pages/AccountSettings';
// import MyWallet from '../Pages/MyWallet';

// Dashboard nested Router
import DiamondDashboard from '../Components/reuseable/Company_Diamond';
import TransactionHistory from '../Components/reuseable/TransactionHistory';

// My Company nested Router
import AllTime from '../Components/NestedRouter_comp/AllTime';
import ThisMonth from '../Components/NestedRouter_comp/ThisMonth';
import ThisYear from '../Components/NestedRouter_comp/ThisYear';

// Account Setting nest Router
import TodayStatistical from '../Components/NestedRouter_statistical/Today';
import ThisWeekStatistical from '../Components/NestedRouter_statistical/ThisWeek';
import ThisMonthStatistical from '../Components/NestedRouter_statistical/ThisMonth';
import ThisYearStatistical from '../Components/NestedRouter_statistical/ThisYear';
import AllTimeStatistical from '../Components/NestedRouter_statistical/AllTime';

// List Post nested Router
import JobPosted from '../Components/NestedRouter_listPost/JobPosted';
import Application from '../Components/NestedRouter_listPost/Application';
import PostDetail from '../Components/NestedRouter_listPost/PostDetail';

import CompanybtnEdit from '../Components/NestedRouter_comp/CompanybtnEdit';

// admin
import DashboardAdmin from '../Page1/Dashboard';
import HomeAdmin from '../Page1/HomeAdmin';
import Manage from '../Page1/Manage';

// Account Setting nest Router
import TodayStatisticalAdmin from '../Components/NestedRouter_dashboard_admin/NganhNghe';
import ThisWeekStatisticalAdmin from '../Components/NestedRouter_dashboard_admin/ViTri';
import ThisMonthStatisticalAdmin from '../Components/NestedRouter_dashboard_admin/TaiChinh';
import ThisYearStatisticalAdmin from '../Components/NestedRouter_dashboard_admin/ThisYear';
import AllTimeStatisticalAdmin from '../Components/NestedRouter_dashboard_admin/AllTime';
import ReportDetail from '../Components/reuseableAdmin/ReportDetail';

// Payment

import Payment from '../PaymentKC/Payment'

const Router = () => {
  return (

    <Routes>
      <Route path='/' element={<Navigate to="/dashboard" element={<Dashboard />} />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/diamondDashboard' element={<DiamondDashboard />}>
      </Route>
      <Route path='/payment' element={<Payment></Payment>}></Route>
      <Route path='/dashboard/diamondDashboard/transactionHistory' element={<TransactionHistory />} />
      <Route path='/myProfile' element={<MyProfile />} />
      <Route path='/myProfile/companybtnEdit' element={<CompanybtnEdit />} />
      <Route path='/myCompany' element={<MyCompany />}>
        <Route index element={<AllTime />} />
        <Route path='component1' element={<AllTime />} />
        <Route path='component2' element={<ThisMonth />} />
        <Route path='component3' element={<ThisYear />} />
      </Route>
      <Route path='/myCompany/companybtnEdit' element={<CompanybtnEdit />} />
      <Route path='/listPost' element={<ListPost />}>
        <Route index element={<JobPosted />} />
        <Route path='jobPosted' element={<JobPosted />} />
        <Route path='jobPosted/application/:id' element={<Application />} />
        <Route path='application/:id' element={<Application />} />
      </Route>
      <Route path='/listPost/postDetail/:id' element={<PostDetail />} />
      <Route path='/statistical' element={<Statistical />}>
        <Route index element={<TodayStatistical />} />
        <Route path='todayStatistical' element={<TodayStatistical />} />
        <Route path='thisWeekStatistical' element={<ThisWeekStatistical />} />
        <Route path='thisMonthStatistical' element={<ThisMonthStatistical />} />
        <Route path='thisYearStatistical' element={<ThisYearStatistical />} />
        <Route path='allTimeStatistical' element={<AllTimeStatistical />} />
      </Route>
      <Route path='/accountSettings' element={<AccountSettings />} />
      {/* <Route path='/myWallet' element={<MyWallet />} /> */}
      <Route path='/dashboardadmin' element={<DashboardAdmin />}>
        <Route index element={<TodayStatisticalAdmin />} />
        <Route path='nganhngheStatistical' element={<TodayStatisticalAdmin />} />
        <Route path='vitriStatistical' element={<ThisWeekStatisticalAdmin />} />
        <Route path='taichinhStatistical' element={<ThisMonthStatisticalAdmin />} />
        <Route path='thisYearStatistical' element={<ThisYearStatisticalAdmin />} />
        <Route path='allTimeStatistical' element={<AllTimeStatisticalAdmin />} />
      </Route>
      <Route path='/homeAdmin' element={<HomeAdmin />} />
      <Route path='/manage' element={<Manage />}>
        <Route index element={<JobPosted />} />
        <Route path='jobPosted' element={<JobPosted />} />
        <Route path='jobPosted/reports/:id' element={<Application />} />
      </Route>
      <Route path='/manage/reportDetail/:id' element={<ReportDetail />} />
      <Route path='/manage/PostDetail/:id' element={<PostDetail />} />
      <Route path='home' element={<Home />} />
      <Route path='chat' element={<Chat />} />
      <Route path='contact' element={<Contact />} />
      <Route path='aboutMe' element={<AboutMe />} />
    </Routes>

  )
}

export default Router