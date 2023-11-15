import React from 'react'
import LineImg from '../../assets/images/line.svg';
import EmailImg from '../../assets/images/mail-line.svg';
import MapImg from '../../assets/images/map-line.svg';
import IconBCT from '../../assets/images/icon__cm.svg';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL } from '../../ipConfig';
import axios from 'axios';
const SingleProfile = (props) => {

  const { id, fullname, username, password, email_user, email_doanh_nghiep, avt_user, logo, name_comp, dia_chi, toa_do, mo_ta } = props.item;

  const [textFullName, setTextFullName] = useState(`${fullname}`)

  const handleChangeTextFullName = (text) => {
    setTextFullName(text.target.value)
  }

  const [textUserName, setTextUserName] = useState(`${username}`)

  const handleChangeTextUserName = (text) => {
    setTextUserName(text.target.value)
  }

  const [textPassword, setTextPassword] = useState(`${password}`)

  const handleChangeTextPassword = (text) => {
    setTextPassword(text.target.value)
  }

  const [textEmail, setTextEmail] = useState(`${email_user}`)

  const handleChangeTextEmail = (text) => {
    setTextEmail(text.target.value)
  }

  

  const [enterprise, setEnterprise] = useState()



  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {

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
    <div className='main__layout-mini-myProfile1'>

      <div className="profile__header-face">
        <div className="profile__header-avt">
          <img className='flexible-img-avt ' src={avt_user} alt="" />
          <span className="flexible-text">{user ? user.full_name : ""}</span>
        </div>
      </div>
      <h3>Thông tin cá nhân</h3>
      <div className="profile__body-face">
        <div className="profile__body-info-user">
          <span>Họ và tên</span>
          <input disabled type="text" value={user ? user.full_name : ""} onChange={handleChangeTextFullName} placeholder='Full name' />
        </div>

        <div className="profile__body-info-user">
          <span>User</span>
          <input disabled type="text" value={user ? user.full_name : ""} onChange={handleChangeTextUserName} placeholder='User name' />
        </div>

        <div className="profile__body-info-user">
          <span>Email</span>
          <input disabled type="text" value={user ? user.email : ""} onChange={handleChangeTextEmail} placeholder='Email' />
        </div>

      </div>

      <h3>Công ty</h3>

      <div className="profile__body-company">
        <div className="profile__body-company-hearder">
          <div className="profile__body-company-title">
            <img className='flexible-img-logo' src={enterprise ? enterprise.logo_dn : ''} alt="" />
            <h1 className='flexible-text'>{enterprise ? enterprise.name_dn : ''}</h1>
          </div>

          <div className="profile__body-company-btnEdit">
            <NavLink to="companybtnEdit" className='profile__btn-edit'>
              <p>Edit</p>
              <img src={LineImg} alt="" />
            </NavLink>
          </div>
        </div>

        <div className="profile__body-company-info">
          <div className="profile__body-company-info-item">
            <img className='flexible-img' src={EmailImg} alt="" />
            <div className="profile__body-company-info-content">
              <p>Email</p>
              <span>{enterprise ? enterprise.email_dn : ''}</span>
            </div>
          </div>

          <div className="profile__body-company-info-item">
            <img className='flexible-img' src={MapImg} alt="" />
            <div className="profile__body-company-info-content">
              <p>Headquarters</p>
              <span>{enterprise ? enterprise.address : ''}</span>
            </div>
          </div>

        </div>

        <div className="profile__body-company-description">
          <span>Description</span>
          <p>{enterprise ? enterprise.description : ''}</p>
        </div>
      </div>

      <div className="profile__footer">
        <img src={IconBCT} alt="" />
      </div>

    </div>
  )
}

export default SingleProfile