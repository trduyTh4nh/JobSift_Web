import React from 'react'
import './topNav.css'
import { Link } from 'react-router-dom';
import iconSearch from '../../assets/images/iconSearch.svg';
import iconNotifi from '../../assets/images/notifi.svg';

import Home from '../../Page/Home';
import Chat from '../../Page/Chat';
import Contact from '../../Page/Contact';
import AboutMe from '../../Page/AboutMe';

const TopNav = () => {

  var win = window;
  const topNav = document.getElementsByClassName('top__nav-wrapper')
  


  win.addEventListener('scroll', function (event) {
    // Xử lý sự kiện cuộn ở đây

    if (win.scrollY > 40) {
        topNav[0].classList.add('top__nav-wrapper-blur')
    }
    else{
      topNav[0].classList.remove('top__nav-wrapper-blur')

    }
    
  });


  return (
    <div className="top__nav">

      <div className="top__nav-wrapper ">

        <div className="top__nav-left">
          <div className='wrap-option'>
            <a className='top__nav-link'>
              <Link to = "home" >
                <Home/>
              </Link>
            </a>
          </div>


          <div className='wrap-option'>
            <a className='top__nav-link'>
              <Link to = "chat">
                <Chat/>
              </Link>
            </a>
          </div>


          <div className='wrap-option'>
            <a className='top__nav-link'>
              <Link to = "contact">
                <Contact/>
              </Link>
            </a>
          </div>

          <div className='wrap-option'>
            <a className='top__nav-link'>
              <Link to = "aboutMe">
                <AboutMe/>
              </Link>
            </a>
          </div>


        </div>

        <div className='left-component'>
          <div className="search__box">

            <div className='edit__seach__box'>
              <input className='seach__input' type="text" placeholder='Search or type' />
              <button>
                <span><i><img className='icon__search' src={iconSearch} alt="" /></i></span>
              </button>
            </div>

          </div>
          <div className="top__nav-right">

            <span className='notification'>
              <i><img className='icon__notifi' src={iconNotifi} alt="" /></i>
              <span className='badge'></span>
            </span>

          </div>
          <div className='top__nav-right-2'>

            <div className="nav-btn__post-job">
              <button className='btn__post-job'>
                <span className='text__btn__post'>Post a job</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default TopNav