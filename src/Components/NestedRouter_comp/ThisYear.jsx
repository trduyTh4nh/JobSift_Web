import React from 'react'
import icon1Img from '../../assets/images/icon1.svg';
import icon2Img from '../../assets/images/company_jobs.svg';
import icon3Img from '../../assets/images/company_hr.svg';
import icon4Img from '../../assets/images/company_appl.svg';
import SingleCard from '../reuseable/SingleCard';

const comp_card1_thisYear = {
  title: 'Followers',
  totalNumber: '139k',
  icon: icon1Img,
};
const comp_card2_thisYear = {
  title: 'Jobs',
  totalNumber: '291',
  icon: icon2Img,
};
const comp_card3_thisYear = {
  title: 'Position',
  totalNumber: 'HR Manager',
  icon: icon3Img,
};
const comp_card4_thisYear = {
  title: 'Application',
  totalNumber: '20k',
  icon: icon4Img,
};

const ThisYear = () => {
  return (
    <div className="dashboard__cards">
      <SingleCard item = {comp_card1_thisYear}/>
      <SingleCard item = {comp_card2_thisYear}/>
      <SingleCard item = {comp_card3_thisYear}/>
      <SingleCard item = {comp_card4_thisYear}/>
    </div>
  )
}

export default ThisYear

