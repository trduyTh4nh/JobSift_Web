import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { RiBriefcase4Line } from 'react-icons/ri';
import { RiFlag2Line } from 'react-icons/ri';
import iconJPost from '../assets/images/job__posted.svg';
import iconPostAppl from '../assets/images/post__appl.svg';


import SingleCard from '../Components/reuseableAdmin/SingleCard';
const card1Obj = {
  title: "Jobs posted",
  totalNumber: '07',

};
const card2Obj = {
  title: "Report",
  totalNumber: '43',
};

const Manage = () => {
  return (
    <div className='main__layout-mini-ListPost2'>
      <div className="identical__title">
        <span>Manage Post</span>
      </div>
      <div className='listPost__statistical'>
        <nav>
          <ul>
            <li>
              <Link to="./jobPosted">
                <SingleCard item={card1Obj} />
              </Link>
            </li>
            <li>

              <SingleCard item={card2Obj} />

            </li>
          </ul>
        </nav>
        <Outlet />

      </div>




    </div>
  )
}

export default Manage