import React from 'react'
import { useState, useEffect } from 'react';
import LineImg from '../assets/images/line.svg';
import GGMap from '../assets/images/ggmap.svg';
import IconBCT from '../assets/images/icon__cm.svg';

import LogoCompanyImg from '../assets/images/logo_company.svg';
import icon1Img from '../assets/images/icon1.svg';
import icon2Img from '../assets/images/company_jobs.svg';
import icon3Img from '../assets/images/company_hr.svg';
import icon4Img from '../assets/images/company_appl.svg';
import SingleCard from '../Components/reuseable/SingleCard';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import AllTime from '../Components/NestedRouter_comp/AllTime';
// import ThisMonth from '../Components/NestedRouter_comp/ThisMonth';
// import ThisYear from '../Components/NestedRouter_comp/ThisYear';

import { API_URL } from '../ipConfig';
import axios from 'axios';

import EmailImg from '../assets/images/mail-line.svg';
import MapImg from '../assets/images/map-line.svg';

const Company = {
  logo_comp: LogoCompanyImg,
  email_doanh_nghiep: 'email@gmail.com',
  name_comp: 'Tập đoàn Công nghệ – Viễn thông Quân đội',
  dia_chi: 'Lô D26, Khu Đô Thị Mới, Cầu Giấy, Hà Nội, Việt Nam',
  toa_do: '21.0253178,105.7785518,16',
  mo_ta: 'Lorem ipsum dolor sit amet consectetur. Odio nullam elit feugiat vitae fermentum eget suspendisse id at. Donec imperdiet dui arcu ultrices condimentum tincidunt pellentesque suspendisse',
}

const MyCompany = () => {
  const [enterprise, setEnterprise] = useState()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user !== null) {
      axios.post(`http://${API_URL}:3001/getdnofntd/${user.id_dn}`)
        .then((respone) => {
          setEnterprise(respone.data.enterprise)
          console.log(respone.data.enterprise)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])

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
  const [dnStats, setDnStats] = useState()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    axios.get(`http://${API_URL}:3001/enterprise/statistics/${user.id_dn}`).then(e => {
      console.log(e.data)
      setDnStats({
        card1: {
          title: 'Bài đăng',
          totalNumber: e.data.count,
          icon: icon2Img,
        },
        card2: {
          title: 'Người theo dõi',
          totalNumber: e.data.count_fl,
          icon: icon1Img,
        },
        card3: {
          title: 'Đơn ứng tuyển',
          totalNumber: e.data.count_dut,
          icon: icon1Img,
        }
      })
    }).catch((e) => {
      alert('error: ' + e)
    })
  }, [])

  return (
    <div className='main__layout-mini-myCompany'>
      <div className="company__header">
        <div className="company__header-face">
          <img className='company__logo-main' src={enterprise ? enterprise.logo_dn : ''} alt="" />
          <span className='company__name-comp'>{enterprise ? enterprise.name_dn : ''}</span>
        </div>

        <NavLink to="companybtnEdit">
          <button style={{
            padding: 20
          }} className='gr__btn'>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p>Edit Company</p>
              <img src={LineImg} alt="" />
            </div>
          </button>
        </NavLink>
      </div>

      <h3 className='title-status'>Hiển thị thông tin cho: </h3>

      <nav>
        <ul style={{ display: "flex", gap: 10, position: 'relative', zIndex: 0 }}>
          <li className='item-time'><Link to="./component1">All Time</Link></li>
        </ul>
      </nav>
      {
        dnStats ? (
          <div className="dashboard__cards">
            <SingleCard item = {dnStats.card1}/>
            <SingleCard item = {dnStats.card2}/>
            <SingleCard item = {dnStats.card3}/>
          </div>
        ) : ''
      }
      

      <h3>Thông tin doanh nghiệp</h3>

      <div className="company__body">
        <div className="company__body-company-info">
          <div className="company__body-company-info-item">
            <img className='flexible-img' src={EmailImg} alt="" />
            <div className="company__body-company-info-content">
              <p>Email</p>
              <span>{enterprise ? enterprise.email_dn : ''}</span>
            </div>
          </div>

          <div className="company__body-company-info-item">
            <img className='flexible-img' src={MapImg} alt="" />
            <div className="company__body-company-info-content">
              <p>Trụ sở</p>
              <span>{enterprise ? enterprise.address : ''}</span>
            </div>
          </div>
        </div>

        <div className="company__body-company-description">
          <span>Miêu tả</span>
          <p>{enterprise ? enterprise.description == 'undefined' ? 'Không có miêu tả' : enterprise.description : ''}</p>
        </div>
        <div className="company__body-ggMap">
          <iframe height={100} className='map-gg' src={enterprise?.cordiante || ''} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="company__footer">
        <img src={IconBCT} alt="" />
      </div>
    </div>
  )
}

export default MyCompany