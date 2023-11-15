import React from 'react'
import { useState, useEffect } from 'react';
import LineImg from '../assets/images/line.svg';
import GGMap from '../assets/images/ggmap.svg';
import IconBCT from '../assets/images/icon__cm.svg';

import LogoCompanyImg from '../assets/images/logo_company.svg';

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



  return (
    <div className='main__layout-mini-myCompany'>
      <div className="company__header">
        <div className="company__header-face">
          <img className='company__logo-main' src={Company.logo_comp} alt="" />
          <span className='company__name-comp'>{Company.name_comp}</span>
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

      <h3 className='title-status'>Show status for : </h3>

      <nav>
        <ul style={{ display: "flex", gap: 10, position: 'relative', zIndex: 0 }}>
          <li className='item-time'><Link to="./component1">All Time</Link></li>
        </ul>
      </nav>
      <Outlet />

      <h3>Company Information</h3>

      <div className="company__body">
        <div className="company__body-company-info">
          <div className="company__body-company-info-item">
            <img className='flexible-img' src={EmailImg} alt="" />
            <div className="company__body-company-info-content">
              <p>Email</p>
              <span>{Company.email_doanh_nghiep}</span>
            </div>
          </div>

          <div className="company__body-company-info-item">
            <img className='flexible-img' src={MapImg} alt="" />
            <div className="company__body-company-info-content">
              <p>Headquarters</p>
              <span>{Company.dia_chi}</span>
            </div>
          </div>

          <div className="company__body-company-info-item">
            <img className='flexible-img' src={MapImg} alt="" />
            <div className="company__body-company-info-content">
              <p>Coordinates</p>
              <span>{Company.toa_do}</span>
            </div>
          </div>
        </div>

        <div className="company__body-company-description">
          <span>Description</span>
          <p>{Company.mo_ta}</p>
        </div>
        <div className="company__body-ggMap">
          <iframe className='map-gg' src={enterprise?.cordiante || ''} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="company__footer">
        <img src={IconBCT} alt="" />
      </div>
    </div>
  )
}

export default MyCompany