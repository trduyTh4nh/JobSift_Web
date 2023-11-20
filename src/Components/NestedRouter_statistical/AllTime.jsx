import React, { useState } from 'react'
import iconActivity from '../../assets/images/post__appl.svg';
import iconJob from '../../assets/images/statis_job.svg';
import Chart from "react-apexcharts";

import SingleCardForStatis from '../reuseable/SingleCardForStatis';


const stastistical_card3_allTime = {
  title: 'Bài đăng',
  totalNumber: '35',
  icon: iconJob,
};
const stastistical_card1_allTime = {
  title: 'Lượt ứng tuyển',
  totalNumber: '546',
  icon: iconActivity,
};




const AllTime = () => {
  const [state , setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Bài đăng', 'Đơn ứng tuyển', 'Tài chính']
      }
    },
    series: [
      {
        name: "",
        data: [1923, 4423, 9243]
      },
      // {
      //   name: "Application",
      //   data: [2432]
      // },
      // {
      //   name: "Finacial",
      //   data: [9243]
      // },
      
      // {
      //   name: "Report",
      //   data: [39, 20, 45, 30, 59, 30, 90, 101, 200]
      // },
    ]
  })
  return ( 
    <div>
      <div className='stastistical__cards'>
      <SingleCardForStatis item = {stastistical_card1_allTime}/>
      <SingleCardForStatis item = {stastistical_card3_allTime}/>

    </div>
    <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="800"
            />
          </div>
    </div>
    
  )
}

export default AllTime