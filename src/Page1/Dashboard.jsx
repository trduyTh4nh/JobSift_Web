import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import layer1 from '../assets/images/Layer1.svg';
import layer2 from '../assets/images/Layer2.svg';
import Jobsift from '../assets/images/JobSift.svg';


const Dashboard = () => {
  return (
    <div className='main__layout-mini-statistical'>
      <div className="identical__title">
        <span>Dashboard</span>
      </div>
      <h3>Show status for : </h3>
      <nav>
        <ul>
          <li><Link to="./nganhngheStatistical">Ngành nghề</Link></li>
          <li><Link to="./vitriStatistical">Vị trí</Link></li>
          <li><Link to="./taichinhStatistical">Tài chính</Link></li>
        </ul>
      </nav>
      <Outlet/>

      <div className='div_image'>
        <img className='single_iconLayer' src={layer1} alt="" />
        <img className='single_icon' src={Jobsift} alt="" />
        <img className='single_iconLayer' src={layer2} alt="" />
      </div>
    </div>
  )
}

export default Dashboard
