import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import iconJPost from '../assets/images/job__posted.svg';
import iconPostAppl from '../assets/images/post__appl.svg';
import { API_URL } from '../ipConfig';


import SingleCard from '../Components/reuseable/SingleCard';
import axios from 'axios';

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
  const [dnStats, setDnStats] = useState({
    card1: {
      title: "Bài đăng",
      totalNumber: '0',
      icon: iconJPost,
    },
    card2: {
      title: "Đơn ứng tuyển",
      totalNumber: '0',
      icon: iconPostAppl,
    }
  })
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    axios.get(`http://${API_URL}:3001/enterprise/statistics/${user.id_dn}`).then(e => {
      console.log(e.data)
      setDnStats({
        card1: {
          title: "Bài đăng",
          totalNumber: e.data.count,
          icon: iconJPost,
        },
        card2: {
          title: "Đơn ứng tuyển",
          totalNumber: e.data.count_dut,
          icon: iconPostAppl,
        }
      })
    }).catch((e) => {
      alert('error: ' + e)
    })
  }, [])
  return (
    <div className='main__layout-mini-ListPost2' style={{padding: '97px 40px 15px 40px'}}>
      <div className="identical__title">
        <span>Quản lý đơn bài đăng và đơn ứng tuyển</span>
      </div>
      <div className='listPost__statistical'>
        <nav>
          <ul>
            <li>
              <Link to="./jobPosted">
                <SingleCard item = {dnStats.card1}/>
              </Link>
            </li>
            <li>
              <Link to="./application">
                <SingleCard item = {dnStats.card2}/>
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