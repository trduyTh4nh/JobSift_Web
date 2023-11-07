import React from 'react'
import LogoCompanyImg from '../../assets/images/logo_company.svg';

const Company = {
  logo_comp: LogoCompanyImg,
  email_doanh_nghiep: 'email@gmail.com',
  name_comp: 'Tập đoàn Công nghệ – Viễn thông Quân đội',
  dia_chi: 'Lô D26, Khu Đô Thị Mới, Cầu Giấy, Hà Nội, Việt Nam',
  toa_do: '21.0253178,105.7785518,16',
  mo_ta: 'Lorem ipsum dolor sit amet consectetur. Odio nullam elit feugiat vitae fermentum eget suspendisse id at. Donec imperdiet dui arcu ultrices condimentum tincidunt pellentesque suspendisse. Elit suspendisse purus tortor aliquam sit integer morbi neque nibh. Sed in sit in egestas massa ac neque. Sollicitudin at integer ipsum bibendum donec aliquet rhoncus commodo tellus. Praesent suspendisse diam faucibus consequat sit purus. In nibh vitae elit vestibulum eu amet. Proin scelerisque tristique tellus at metus.',
}

const CompanybtnEdit = () => {
  return (
    <div className='main__layout-mini-myCompany'>
      <div className="company__header">
        <div className="company__header-face">
          <img className='company__logo-main' src={Company.logo_comp} alt="" />
          <span className='company__name-comp'>{Company.name_comp}</span>
        </div>
        <div className="profile__header-btn">
          <button className='profile__btn-cancel'>Cancel</button>
          <button className='profile__btn-save'>Save</button>
        </div>
        
      </div>

      <h3>Basic Information</h3>

      <div className="company__body-face">
        <div className="company__body-info-user">
          <span>Name</span>
          <input type="text" value={Company.name_comp} placeholder='Full name' />
        </div>

        <div className="company__body-info-user1">
          <span>Logo</span>
          <input type="file" placeholder='' />
          <div className='imgLogo-into'></div>
        </div>
      
        <div className="company__body-info-user">
          <span>Address</span>
          <input type="ptext" value={Company.dia_chi} placeholder='Full name' />
        </div>

        <div className="company__body-info-user">
          <span>Email</span>
          <input type="text" value={Company.email_doanh_nghiep} placeholder='Full name' />
        </div>

      </div>

      <div className='company__body-description'>
        <span>Description</span>
        <div className='bg__description'>
          <p>{Company.mo_ta}</p>
        </div>
      </div>
    </div>
  )
}

export default CompanybtnEdit