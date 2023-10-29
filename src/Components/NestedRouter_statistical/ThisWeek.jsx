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



const ThisWeek = () => {
  const [state , setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      }
    },
    series: [
      {
        name: "Job recruitment",
        data: [3, 6, 10, 7, 4, 5,]
      },
      {
        name: "Application",
        data: [111, 71, 91, 81, 101, 91]
      },
      {
        name: "Finacial",
        data: [200, 440, 100, 360, 160, 320]
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

export default ThisWeek
