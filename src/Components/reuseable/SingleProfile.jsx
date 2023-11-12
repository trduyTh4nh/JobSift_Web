import React from 'react'
import LineImg from '../../assets/images/line.svg';
import EmailImg from '../../assets/images/mail-line.svg';
import MapImg from '../../assets/images/map-line.svg';
import IconBCT from '../../assets/images/icon__cm.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

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


  return (
    <div className='main__layout-mini-myProfile1'>

      <div className="profile__header-face">
        <div className="profile__header-avt">
          <img className='flexible-img-avt ' src={avt_user} alt="" />
          <span className="flexible-text">{fullname}</span>
        </div>  
      </div>
      <h3>Thông tin cá nhân</h3>
      <div className="profile__body-face">
        <div className="profile__body-info-user">
          <span>Họ và tên</span>
          <input disabled type="text" onChange={handleChangeTextFullName} value={textFullName} placeholder='Full name' />
        </div>

        <div className="profile__body-info-user">
          <span>User</span>
          <input disabled type="text" onChange={handleChangeTextUserName} value={textUserName} placeholder='User name' />
        </div>

        <div className="profile__body-info-user">
          <span>Mật khẩu</span>
          <input disabled type="password" onChange={handleChangeTextPassword} value={textPassword} placeholder='Password' />
        </div>

        <div className="profile__body-info-user">
          <span>Email</span>
          <input disabled type="text" onChange={handleChangeTextEmail} value={textEmail} placeholder='Email' />
        </div>

      </div>

      <h3>Công ty</h3>

      <div className="profile__body-company">
        <div className="profile__body-company-hearder">
          <div className="profile__body-company-title">
            <img className='flexible-img-logo' src={logo} alt="" />
            <h1 className='flexible-text'>{name_comp}</h1>
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
              <span>{email_doanh_nghiep}</span>
            </div>
          </div>

          <div className="profile__body-company-info-item">
            <img className='flexible-img' src={MapImg} alt="" />
            <div className="profile__body-company-info-content">
              <p>Headquarters</p>
              <span>{dia_chi}</span>
            </div>
          </div>

          <div className="profile__body-company-info-item">
            <img className='flexible-img' src={MapImg} alt="" />
            <div className="profile__body-company-info-content">
              <p>Coordinates</p>
              <span>{toa_do}</span>
            </div>
          </div>
        </div>

        <div className="profile__body-company-description">
          <span>Description</span>
          <p>{mo_ta}</p>
        </div>
      </div>

      <div className="profile__footer">
        <img src={IconBCT} alt="" />
      </div>

    </div>
  )
}

export default SingleProfile