import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import SingleCard from '../../Components/reuseableAdmin/SingleCard';
import "remixicon/fonts/remixicon.css";

const card1Obj = {
  title: "Doanh thu",
  totalNumber: '07',
};
const card2Obj = {
  title: "Đăng tuyển",
  totalNumber: '3,4K',
};
const card3Obj = {
  title: "Đã duyệt",
  totalNumber: '09',
};
const card4Obj = {
  title: "Kim cương",
  totalNumber: '499',
};

const ThisYear = () => {
  // const [state , setState] = useState({
  //   options: {
  //     chart: {
  //       id: "basic-bar"
  //     },
  //     xaxis: {
  //       categories: [2018, 2019, 2020, 2021, 2022, 2023]
  //     }
  //   },
  //   series: [
  //     {
  //       name: "Job recruitment",
  //       data: [90, 120, 220, 320, 200, 390,]
  //     },
  //     {
  //       name: "Application",
  //       data: [300, 390, 400, 394, 234, 474]
  //     },
  //     {
  //       name: "Finacial",
  //       data: [1292, 1440, 900, 790, 560, 828]
  //     },
  //     // {
  //     //   name: "Report",
  //     //   data: [39, 20, 45, 30, 59, 30, 90, 101, 200]
  //     // },
  //   ]
  // })
  return ( 
    <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={card1Obj} />
          <SingleCard item={card2Obj} />
          <SingleCard item={card3Obj} />
          <Link to = './diamondDashboard'><SingleCard item={card4Obj} /></Link>
        </div>
      </div>
    
  )
}

export default ThisYear
