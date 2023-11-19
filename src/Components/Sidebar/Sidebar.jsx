import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import navLinks from '../../assets/dummy-data/navLinks';
import "./sidebar.css"
import { Link } from 'react-router-dom';
import profileImg from '../../assets/images/Image-60.svg';
import logoutImg from '../../assets/images/logout.svg';
import line from '../../assets/images/line.svg';
import logo from '../../assets/icon/JS.svg'

const Sidebar = () => {
  const navigate = useNavigate()
   const user = JSON.parse(localStorage.getItem('user'))

   console.log(user)
   const handleLogOut = () => {
    if(window.confirm("Bạn có chắc là muốn đăng xuất?")){
      localStorage.removeItem('user')
      navigate('/home')
      window.location.reload()
    }
   }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={logo} className='logoMain'>
        </img>

      </div>
      <div className="profile">
        <Link to='/accountSettings'>
          <img className='image-user' src={user ? user.profile_picture ? user.profile_picture : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png'} alt='avt' />
        </Link>
        <span>{user ? user.full_name : "Chưa đăng nhập"}</span>
      </div>
      <div className='box-wrap'>
        <div className='menu'>
          <ul className='nav__list'>
            {
              navLinks.map((item, index) => (
                <li className='nav__item' key={index}>
                  <NavLink to={item.path} className={navClass =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"}>
                    <span>
                      <i>
                        <img className='icon-sidebar' src={item.icon} alt="" />
                      </i>
                    </span>
                    <p>{item.display}</p>
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>

        <div onClick={handleLogOut} className="sidebar__bottom">
          <span><i><img className='logout-icon' src={logoutImg} alt="" /></i>Đăng xuất</span>
        </div>
      </div>


    </div>
  )
}

export default Sidebar