import React, { useState } from 'react'
import iconActivity from '../../assets/images/statis_activity.svg';
import iconFinacial from '../../assets/images/statis_finacial.svg';
import iconJob from '../../assets/images/statis_job.svg';
import Chart from "react-apexcharts";

import SingleCardForStatis from '../reuseable/SingleCardForStatis';


const stastistical_card3_allTime = {
  title: 'Job recruitment',
  totalNumber: '35',
  icon: iconJob,
};
const stastistical_card1_allTime = {
  title: 'Application',
  totalNumber: '546',
  icon: iconActivity,
};
const stastistical_card2_allTime = {
  title: 'Finacial',
  totalNumber: '1260 dia',
  icon: iconFinacial,
};



const ThisMonth = () => {
  const [state , setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      }
    },
    series: [
      {
        name: "Job recruitment",
        data: [30, 42, 60, 70, 45, 55,, 32, 43, 23, 65, 34, 54]
      },
      {
        name: "Application",
        data: [364, 210, 215, 120, 101, 301, 324, 543, 234, 342, 543, 234]
      },
      {
        name: "Finacial",
        data: [420, 640, 688, 460, 560, 720, 545, 654, 345, 645, 435, 645]
      },
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
      <SingleCardForStatis item = {stastistical_card2_allTime}/>
      <SingleCardForStatis item = {stastistical_card3_allTime}/>

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

export default ThisMonth
