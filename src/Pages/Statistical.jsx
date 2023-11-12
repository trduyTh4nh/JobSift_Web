import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Statistical = () => {
  return (
    <div className='main__layout-mini-statistical'>
      <div className="identical__title">
        <span>Manage Statistical</span>
      </div>

      <h3>Show status for : </h3>

      <div>
        <ul className='statical__date'>
          <li><Link to="./todayStatistical">Today</Link></li>
          <li><Link to="./thisWeekStatistical">This Week</Link></li>
          <li><Link to="./thisMonthStatistical">This Month</Link></li>
          <li><Link to="./thisYearStatistical">This Year</Link></li>
          <li><Link to="./allTimeStatistical">All Time</Link></li>
        </ul>
      </div>
      <Outlet/>

    </div>
  )
}

export default Statistical