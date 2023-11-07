import React from 'react'
import icon1Img from '../../assets/images/icon1.svg';
import icon2Img from '../../assets/images/company_jobs.svg';
import icon3Img from '../../assets/images/company_hr.svg';
import icon4Img from '../../assets/images/company_appl.svg';
import SingleCard from '../reuseable/SingleCard';

const comp_card1_thisMonth = {
  title: 'Followers',
  totalNumber: '100k',
  icon: icon1Img,
};
const comp_card2_thisMonth = {
  title: 'Jobs',
  totalNumber: '100',
  icon: icon2Img,
};
const comp_card3_thisMonth = {
  title: 'Position',
  totalNumber: 'HR Manager',
  icon: icon3Img,
};
const comp_card4_thisMonth = {
  title: 'Application',
  totalNumber: '11k',
  icon: icon4Img,
};

const ThisMonth = () => {
  return (
    <div className="dashboard__cards">
      <SingleCard item = {comp_card1_thisMonth}/>
      <SingleCard item = {comp_card2_thisMonth}/>
      <SingleCard item = {comp_card3_thisMonth}/>
      <SingleCard item = {comp_card4_thisMonth}/>
    </div>
  )
}

export default ThisMonth
