import React from 'react'
import icon1Img from '../../assets/images/icon1.svg';
import icon2Img from '../../assets/images/company_jobs.svg';
import icon3Img from '../../assets/images/company_hr.svg';
import icon4Img from '../../assets/images/company_appl.svg';

// import icon1Img from '../../assets/images/icon1.svg';

// import SingleCard from '../Components/reuseable/SingleCard';
import SingleCard from '../reuseable/SingleCard';

const comp_card1_allTime = {
  title: 'Followers',
  totalNumber: '239k',
  icon: icon1Img,
};
const comp_card2_allTime = {
  title: 'Jobs',
  totalNumber: '391',
  icon: icon2Img,
};
const comp_card3_allTime = {
  title: 'Position',
  totalNumber: 'HR Manager',
  icon: icon3Img,
};
const comp_card4_allTime = {
  title: 'Application',
  totalNumber: '31k',
  icon: icon4Img,
};


const AllTime = () => {
  return (
    <div className="dashboard__cards">
      <SingleCard item = {comp_card1_allTime}/>
      <SingleCard item = {comp_card2_allTime}/>
      <SingleCard item = {comp_card3_allTime}/>
      <SingleCard item = {comp_card4_allTime}/>
    </div>

  )
}

export default AllTime
// const AllTime = (props) => {
//   const {title_comp, totalNumber_comp, icon_comp} = props.item;
  
//   return (
//     <div className="single__card">
//             <div className="card__content">
//               <h4>{title_comp}</h4>
//               <span>{totalNumber_comp}</span>
//             </div>

//             <span className='card__icon'>
//               <i>
//                 <img class='icon-card' src={icon_comp} alt="" />
//               </i>
//             </span>
//           </div>
//   )
// }

// export default AllTime
