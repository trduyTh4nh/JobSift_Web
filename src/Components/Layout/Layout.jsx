import React, { useState } from 'react'
import Router from '../../routes/Router'
import Sidebar from '../Sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'
import './layout.css';
import { useSpring, animated } from 'react-spring';

import 'remixicon/fonts/remixicon.css'


const Layout = () => {

  const [hide, setHide] = useState(true)
  const sidebarAnimation = useSpring({
    transform: hide ? 'translateX(0)' : 'translateX(-100%)',
    config: { duration: 300 },
  });

  const handleHideSideBar = () => {
    setHide(!hide)
  }

  return (
    <div className='layout'>
      {hide && (
        <animated.div style={sidebarAnimation}>
          <Sidebar   className={`testSidebar ${hide ? '' : 'hide'}`} style={sidebarAnimation} />
        </animated.div>
      )}
      <div className='wrap-body'>

        <div className='main__layout'>
          <TopNav />
        </div>
        <div onClick={handleHideSideBar} className='btnHide'>
          {hide ? (<i class="ri-arrow-left-line"></i>) : (<i class="ri-arrow-right-line"></i>)}
        </div>
        <div style={hide ? { marginLeft: 270 } : { marginLeft: 0 }} className='main__layout-1'>
          <Router />
        </div>

      </div>

    </div>
  )
}

export default Layout