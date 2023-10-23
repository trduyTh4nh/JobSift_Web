import React from 'react'
import LineImg from '../../assets/images/line.svg';
import EmailImg from '../../assets/images/mail-line.svg';
import MapImg from '../../assets/images/map-line.svg';
import IconBCT from '../../assets/images/icon__cm.svg';

const SingleProfile = (props) => {
  const { id, fullname, username, password, email_user, email_doanh_nghiep,avt_user, logo, name_comp, dia_chi, toa_do, mo_ta } = props.item;
  return (
    <div className='main__layout-mini-myProfile1'>

      <div className="profile__header-face">
        <div className="profile__header-avt">
          <img className='flexible-img-avt ' src={avt_user} alt="" />
          <span className="flexible-text">{fullname}</span>
        </div>
        <div className="profile__header-btn">
          <button className='profile__btn-cancel'>Cancel</button>
          <button className='profile__btn-save'>Save</button>
        </div>
      </div>
      <h3>Personal Information</h3>
      <div className="profile__body-face">
        <div className="profile__body-info-user">
          <span>Full name</span>
          <input type="text" value={fullname} placeholder='Full name' />
        </div>

        <div className="profile__body-info-user">
          <span>Username</span>
          <input type="text" value={username} placeholder='Full name' />
        </div>

        <div className="profile__body-info-user">
          <span>Password</span>
          <input type="password" value={password} placeholder='Full name' />
        </div>

        <div className="profile__body-info-user">
          <span>Email</span>
          <input type="text" value={email_user} placeholder='Full name' />
        </div>
        
      </div>

      <h3>Company</h3>

      <div className="profile__body-company">
        <div className="profile__body-company-hearder">
          <div className="profile__body-company-title">
            <img className='flexible-img-logo' src={logo} alt="" />
            <span className='flexible-text'>{name_comp}</span>
          </div>
          
          <div className="profile__body-company-btnEdit">
            <button className='profile__btn-edit'>
              Edit
              <img src={LineImg} alt="" />
            </button>
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