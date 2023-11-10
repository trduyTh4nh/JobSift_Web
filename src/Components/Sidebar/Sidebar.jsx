import React from 'react'
import { NavLink } from 'react-router-dom';
import navLinks from '../../assets/dummy-data/navLinks';
import "./sidebar.css"
import { Link } from 'react-router-dom';
import profileImg from '../../assets/images/Image-60.svg';
import logoutImg from '../../assets/images/logout.svg';
import line from '../../assets/images/line.svg';
import logo from '../../assets/icon/JS.svg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">

        <img src={logo} className='logoMain'></img>

      </div>
      <div className="profile">
        <Link to='/accountSettings'>
          <img className='image-user' src={profileImg} alt='avt' />
        </Link>
        <span>Steve </span>
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

        <div className="sidebar__bottom">
          <span><i><img className='logout-icon' src={logoutImg} alt="" /></i>Logout</span>
        </div>
      </div>


    </div>
  )
}

export default Sidebar