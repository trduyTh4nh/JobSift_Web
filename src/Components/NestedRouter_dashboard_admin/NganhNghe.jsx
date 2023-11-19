import React, { useState } from 'react'
// import iconActivity from '../../assets/images/statis_activity.svg';
// import iconFinacial from '../../assets/images/statis_finacial.svg';
// import iconJob from '../../assets/images/statis_job.svg';
// import Chart from "react-apexcharts";

// import SingleCardForStatis from '../reuseableAdmin/SingleCardForStatis';

// import "./src/Pages/dashboard.css";

import { Link } from 'react-router-dom';

import SingleCard from '../reuseableAdmin/SingleCard';
import "remixicon/fonts/remixicon.css";
import { RiBriefcase4Line } from 'react-icons/ri';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { RiAdvertisementLine } from 'react-icons/ri';
import { RiFlag2Line } from 'react-icons/ri';
import Chart from "react-apexcharts";
const card1Obj = {
  title: "Nghề 1",
  totalNumber: '07',
};
const card2Obj = {
  title: "Nghề 2",
  totalNumber: '3,4K',
};
const card3Obj = {
  title: "Nghề 3",
  totalNumber: '09',
};
const card4Obj = {
  title: "Nghè 4",
  totalNumber: '499',
};

// const stastistical_card3_allTime = {
//   title: 'Revenue',
//   totalNumber: '5',
//   icon: iconJob,
// };
// const stastistical_card1_allTime = {
//   title: 'Revenue',
//   totalNumber: '91',
//   icon: iconActivity,
// };
// const stastistical_card2_allTime = {
//   title: 'Finacial',
//   totalNumber: '210 dia',
//   icon: iconFinacial,
// };
// const stastistical_card4_allTime = {
//   title: 'Finacial',
//   totalNumber: '210 dia',
//   icon: iconFinacial,
// };



const Today = () => {
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
  // const [state , setState] = useState({
  //   options: {
  //     chart: {
  //       id: "basic-bar"
  //     },
  //     xaxis: {
  //       categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  //     }
  //   },
  //   series: [
  //     {
  //       name: "Job recruitment",
  //       data: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5]
  //     },
  //     {
  //       name: "Application",
  //       data: [5, 10, 13, 17, 20, 24, 27, 30, 36, 45, 49, 55, 60, 65, 65, 67, 70, 70, 71, 80, 87, 89, 90, 91]
  //     },
  //     {
  //       name: "Finacial",
  //       data: [0, 0, 0, 0, 0, 0, 0, 40, 80, 80, 80, 80, 80, 160, 160, 160, 210, 210, 210, 210, 210, 210, 210 ,210]
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
        <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="800"
            />
          </div>
      </div>


    // <div>
    //   <div className='stastistical__cards'>
    //   <SingleCardForStatis item = {stastistical_card1_allTime}/>
    //   <SingleCardForStatis item = {stastistical_card2_allTime}/>
    //   <SingleCardForStatis item = {stastistical_card3_allTime}/>
    //   <SingleCardForStatis item = {stastistical_card4_allTime}/>
    // </div>
    // {/* <div className="mixed-chart">
    //         <Chart
    //           options={state.options}
    //           series={state.series}
    //           type="line"
    //           width="800"
    //         />
    //       </div> */}
    // </div>
    
  )
}

export default Today