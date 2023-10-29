import React from 'react'
import AccountImg from '../assets/images/Image-60.svg';
import LogoCompanyImg from '../assets/images/logo_company.svg';
import SingleProfile from '../Components/reuseable/SingleProfile';

const Profile1 = 
  {
    id: '1',
    fullname:'Huynh Tuan',
    username: 'tuanrin0209',
    password: '789456123',
    email_user: 'tuanrin0209@gmail.com',
    email_doanh_nghiep: 'email@gmail.com',
    avt_user: AccountImg,
    logo: LogoCompanyImg,
    name_comp: 'Công Ty Sài Gòn Xưa',
    dia_chi: 'Lô D26, Khu Đô Thị Mới, Cầu Giấy, Hà Nội, Việt Nam',
    toa_do: '21.0253178,105.7785518,16',
    mo_ta: 'Lorem ipsum dolor sit amet consectetur. Odio nullam elit feugiat vitae fermentum eget suspendisse id at. Donec imperdiet dui arcu ultrices condimentum tincidunt pellentesque suspendisse. Elit suspendisse purus tortor aliquam sit integer morbi neque nibh. Sed in sit in egestas massa ac neque. Sollicitudin at integer ipsum bibendum donec aliquet rhoncus commodo tellus. Praesent suspendisse diam faucibus consequat sit purus. In nibh vitae elit vestibulum eu amet. Proin scelerisque tristique tellus at metus.',
  }

const AccountSettings = () => {
  return (
    <div className='main__layout-mini-myProfile'>
      <SingleProfile item = {Profile1}/>
    </div>
  )
}

export default AccountSettings