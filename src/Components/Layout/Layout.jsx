import React from 'react'
import Router from '../../routes/Router'
import Sidebar from '../Sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'
import './layout.css';

const Layout = () => {
  return (
    <div className='layout'>
      <Sidebar  />
      <div className='wrap-body'>

        <div className='main__layout'>
          <TopNav />
        </div>

        <div className='main__layout-1'>
          <Router />
        </div>
        
      </div>

    </div>
  )
}

export default Layout