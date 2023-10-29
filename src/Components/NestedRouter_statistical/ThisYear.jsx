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



const ThisYear = () => {
  const [state , setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022, 2023]
      }
    },
    series: [
      {
        name: "Job recruitment",
        data: [90, 120, 220, 320, 200, 390,]
      },
      {
        name: "Application",
        data: [300, 390, 400, 394, 234, 474]
      },
      {
        name: "Finacial",
        data: [1292, 1440, 900, 790, 560, 828]
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

export default ThisYear
