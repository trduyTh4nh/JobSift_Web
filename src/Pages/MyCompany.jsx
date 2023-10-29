import React from 'react'
import { useState } from 'react';
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

import EmailImg from '../assets/images/mail-line.svg';
import MapImg from '../assets/images/map-line.svg';

const Company = {
  logo_comp: LogoCompanyImg,
  email_doanh_nghiep: 'email@gmail.com',
  name_comp: 'Tập đoàn Công nghệ – Viễn thông Quân đội',
  dia_chi: 'Lô D26, Khu Đô Thị Mới, Cầu Giấy, Hà Nội, Việt Nam',
  toa_do: '21.0253178,105.7785518,16',
  mo_ta: 'Lorem ipsum dolor sit amet consectetur. Odio nullam elit feugiat vitae fermentum eget suspendisse id at. Donec imperdiet dui arcu ultrices condimentum tincidunt pellentesque suspendisse. Elit suspendisse purus tortor aliquam sit integer morbi neque nibh. Sed in sit in egestas massa ac neque. Sollicitudin at integer ipsum bibendum donec aliquet rhoncus commodo tellus. Praesent suspendisse diam faucibus consequat sit purus. In nibh vitae elit vestibulum eu amet. Proin scelerisque tristique tellus at metus.',
}

const MyCompany = () => {
  return (
    <div className='main__layout-mini-myCompany'>
      <div className="company__header">
        <div className="company__header-face">
          <img className='company__logo-main' src={Company.logo_comp} alt="" />
          <span className='company__name-comp'>{Company.name_comp}</span>
        </div>

        <button className='gr__btn'>
          <NavLink to = "companybtnEdit">
            Edit Company
            <img src={LineImg} alt="" />
          </NavLink>
        </button>
      </div>

      <h3>Show status for : </h3>

      <nav>
        <ul>
          <li><Link to="./component1">All Time</Link></li>
          <li><Link to="./component2">This Year</Link></li>
          <li><Link to="./component3">This Month</Link></li>
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
          <img src={GGMap} alt="" />
        </div>
      </div>
      <div className="company__footer">
        <img src={IconBCT} alt="" />
      </div>
    </div>  
  )
}

export default MyCompany