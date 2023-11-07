import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import iconJPost from '../assets/images/job__posted.svg';
import iconPostAppl from '../assets/images/post__appl.svg';



import SingleCard from '../Components/reuseable/SingleCard';

const card1Obj = {
  title: "Jobs posted",
  totalNumber: '07',
  icon: iconJPost,
};
const card2Obj = {
  title: "Application",
  totalNumber: '43',
  icon: iconPostAppl,
};

const ListPost = () => {
  return (
    <div className='main__layout-mini-ListPost'>
      <div className="identical__title">
        <span>Manage Post</span>
      </div>
      <div className='listPost__statistical'>
        <nav>
          <ul>
            <li>
              <Link to="./jobPosted">
                <SingleCard item = {card1Obj}/>
              </Link>
            </li>
            <li>
              <Link to="./application">
                <SingleCard item = {card2Obj}/>
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
        
      </div>
      
      
      

    </div>
  )
}

export default ListPost