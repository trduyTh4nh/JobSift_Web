import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import SingleCard from '../reuseableAdmin/SingleCard';
import "remixicon/fonts/remixicon.css";
import { RiBriefcase4Line } from 'react-icons/ri';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { RiAdvertisementLine } from 'react-icons/ri';
import { RiFlag2Line } from 'react-icons/ri';
import Chart from "react-apexcharts";
const card1Obj = {
  title: "Vị trí 1",
  totalNumber: '07',
};
const card2Obj = {
  title: "Vị trí 2",
  totalNumber: '3,4K',
};
const card3Obj = {
  title: "Vị trí 3",
  totalNumber: '09',
};
const card4Obj = {
  title: "Vị trí 4",
  totalNumber: '499',
};


const ThisWeek = () => {
  // const [state , setState] = useState({
  //   options: {
  //     chart: {
  //       id: "basic-bar"
  //     },
  //     xaxis: {
  //       categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  //     }
  //   },
  //   series: [
  //     {
  //       name: "Job recruitment",
  //       data: [3, 6, 10, 7, 4, 5,]
  //     },
  //     {
  //       name: "Application",
  //       data: [111, 71, 91, 81, 101, 91]
  //     },
  //     {
  //       name: "Finacial",
  //       data: [200, 440, 100, 360, 160, 320]
  //     },
  //     // {
  //     //   name: "Report",
  //     //   data: [39, 20, 45, 30, 59, 30, 90, 101, 200]
  //     // },
  //   ]
  // })
  const [state , setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
      }
    },
    series: [
      {
        name: "Lượt đăng tuyển",
        data: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5]
      },
      {
        name: "Lượt ứng tuyển",
        data: [5, 10, 13, 17, 20, 24, 27, 30, 36, 45, 49, 55, 60, 65, 65, 67, 70, 70, 71, 80, 87, 89, 90, 91]
      },
      // {
      //   name: "Report",
      //   data: [39, 20, 45, 30, 59, 30, 90, 101, 200]
      // },
    ]
  })
  return ( 
    <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={card1Obj} />
          <SingleCard item={card2Obj} />
          <SingleCard item={card3Obj} />
          <Link to = './diamondDashboard'><SingleCard item={card4Obj} /></Link>
        </div>
        <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="800"
            />
          </div>
      </div>
    
  )
}

export default ThisWeek
