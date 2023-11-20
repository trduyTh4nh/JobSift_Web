import React, { useEffect } from 'react';
import "./dashboard.css";
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../ipConfig';
import SingleCard from '../Components/reuseable/SingleCard';
import DivCard from '../Components/reuseable/Divcard';
import icon1Img from '../assets/images/icon1.svg';
import icon2Img from '../assets/images/icon2.svg';
import icon3Img from '../assets/images/icon3.svg';
import icon4Img from '../assets/images/icon4.svg';

import icon_div1 from '../assets/images/icon-div1.svg';
import icon_div2 from '../assets/images/icon-div2.svg';
import icon_div3 from '../assets/images/icon-div3.svg';
import icon_div4 from '../assets/images/icon-div4.svg';
import logoF from '../assets/images/logo_footer.svg';
import iconContact from '../assets/images/icon_contact.svg';
import iconMess from '../assets/images/icon_mess.svg';
import iconLocated from '../assets/images/icon_located.svg';
import iconCM from '../assets/images/icon__cm.svg';
import { useState } from 'react';
import axios from 'axios';

const card1Obj = {
  title: "Bài đăng",
  totalNumber: '07',
  icon: icon1Img,
};
const card2Obj = {
  title: "Ứng tuyển",
  totalNumber: '3,4K',
  icon: icon2Img,
};
const card3Obj = {
  title: "Đã duyệt",
  totalNumber: '09',
  icon: icon3Img,
};
const card4Obj = {
  title: "Kim cương",
  totalNumber: '499',
  icon: icon4Img,
};

const div1Obj = {
  title: "Quản lý đăng tin",
  icon: icon_div1,
}
const div2Obj = {
  title: "Quản lý xét duyệt",
  icon: icon_div2,
}
const div3Obj = {
  title: "Chat",
  icon: icon_div3,
}
const div4Obj = {
  title: "Quản lý công ty",
  icon: icon_div4,
}

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [dnStats, setDnStats] = useState({
    card1: {
      title: 'Bài đăng',
      totalNumber: 0,
      icon: icon1Img,
    },
    card2: {
      title: 'Ứng tuyển',
      totalNumber: 0,
      icon: icon2Img,
    },
    card3: {
      title: 'Đã duyệt',
      totalNumber: 0,
      icon: icon3Img,
    }
  })
  const navigation = useNavigate()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(!user.id_ntd){
      if(user.id_ad){
        navigation("/dashboardadmin")
      }
      return
    }
    axios.get(`http://${API_URL}:3001/enterprise/statistics/${user.id_dn}`).then(e => {
      console.log(e.data)
      setDnStats({
        card1: {
          title: 'Bài đăng',
          totalNumber: e.data.count,
          icon: icon1Img,
        },
        card2: {
          title: 'Ứng tuyển',
          totalNumber: e.data.count_dut,
          icon: icon2Img,
        },
        card3: {
          title: 'Đã duyệt',
          totalNumber: e.data.count_approval,
          icon: icon3Img,
        },
      })
    }).catch((e) => {
      alert('error: ' + e)
    })
  }, [])
  if(!user.id_ntd){
    return (
      <div className='main__layout-mini' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <h1>🤔</h1>
        <h1>Ôi...</h1>
        <p>Bạn không có quyền truy cập trang này, vui lòng đăng nhập hoặc đăng ký với quyền nhà tuyển dụng</p>
      </div>
    )
  }
  return (
    <div className='main__layout-mini'>
      <div className="identical__title">
        <span>Dashboard</span>
      </div>
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={dnStats.card1} />
          <SingleCard item={dnStats.card2} />
          <SingleCard item={dnStats.card3} />
          <Link to = './diamondDashboard'><SingleCard item={card4Obj} /></Link>
        </div>
      </div>
      <div className="identical__title">
        <span>Hành động</span>
      </div>
      <div className="dashboard__wrapper-div">
        <div className="dashboard__cards">
          {/* <button className='btn__div'>
            <DivCard item={div1Obj}/>
          </button>   */}
          <div class="container">
            <div class="child bounce">
              <DivCard item={div1Obj} />
            </div>
          </div>
          <div class="container">
            <div class="child bounce">
              <DivCard item={div2Obj} />
            </div>
          </div>
          <div class="container">
            <div class="child bounce">
              <DivCard item={div3Obj} />
            </div>
          </div>
          <div class="container">
            <div class="child bounce">
              <DivCard item={div4Obj} />
            </div>
          </div>

          {/* <DivCard item={div2Obj} />
          <DivCard item={div3Obj} />
          <DivCard item={div4Obj} /> */}
        </div>

      </div>
      
      <div className='dashboard__footer'>
        <div className="wrap_footer">
            <div className="left_footer">
                <img className='img__footer-logo' src={logoF} alt="" />
            </div>
            <div className="mid_footer">
              <div className='item__footer-info'>
                <span className='item__icon-footer'>
                  <i>
                    <img class='icon_footer' src={iconContact} alt="" />
                  </i>
                </span>
                <span className='item__text-footer'>094383643</span>
              </div>

              <div className='item__footer-info'>
                <span className='item__icon-footer'>
                  <i>
                    <img class='icon_footer' src={iconMess} alt="" />
                  </i>
                </span>
                <span className='item__text-footer'>steve@gmail.com</span>
              </div>

              <div className='item__footer-info'>
                <span className='item__icon-footer'>
                  <i>
                    <img class='icon_footer' src={iconLocated} alt="" />
                  </i>
                </span>
                <span className='item__text-footer'>828 Sư Vạn Hạnh,Q10</span>
              </div>
            
            </div>
            <div className="rigth_footer">
              <img className='icon__footer-cm' src={iconCM} alt="" />
            </div>
        </div>
      </div>


    </div>
  )
};

export default Dashboard