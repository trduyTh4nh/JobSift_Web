import React, { useState } from 'react';
import iconClose from '../../assets/images/close-line.svg';
import lineMore from '../../assets/images/line.svg';

import './topNav.css'
import { Link } from 'react-router-dom';
import iconSearch from '../../assets/images/iconSearch.svg';
import iconNotifi from '../../assets/images/notifi.svg';

import Home from '../../Page/Home';
import Chat from '../../Page/Chat';
import Contact from '../../Page/Contact';
import AboutMe from '../../Page/AboutMe';



const TopNav = () => {

  const [modalPayment, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modalPayment)
  };
  if (modalPayment) {
    document.body.classList.add('active_modal')
  }
  else {
    document.body.classList.remove('active_modal')
  };

  var win = window;
  const topNav = document.getElementsByClassName('top__nav-wrapper')



  win.addEventListener('scroll', function (event) {
    // Xử lý sự kiện cuộn ở đây

    if (win.scrollY > 40) {
      topNav[0].classList.add('top__nav-wrapper-blur')
    }
    else {
      topNav[0].classList.remove('top__nav-wrapper-blur')

    }

  });


  return (
    <>
      <div className="top__nav">

        <div className="top__nav-wrapper ">

          <div className="top__nav-left">
            <div className='wrap-option'>
              <a className='top__nav-link'>
                <Link to="home" >
                  <Home />
                </Link>
              </a>
            </div>


            <div className='wrap-option'>
              <a className='top__nav-link'>
                <Link to="chat">
                  <Chat />
                </Link>
              </a>
            </div>


            <div className='wrap-option'>
              <a className='top__nav-link'>
                <Link to="contact">
                  <Contact />
                </Link>
              </a>
            </div>

            <div className='wrap-option'>
              <a className='top__nav-link'>
                <Link to="aboutMe">
                  <AboutMe />
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
                <button onClick={toggleModal} className='btn__post-job' >
                  <span className='text__btn__post'>Post a job</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
      {modalPayment && (
        <div className='modalPayment'>
          <div onClick={toggleModal} className='overlay_payment'></div>
          <div className='modal_content_payment_top'>
            <div className='flew'>
              <span>Post</span>
              <button onClick={toggleModal}>
                <img src={iconClose} alt="" />
              </button>
            </div>
            <div className='post'>
              <div className='post_left'>
                <div className='detail_post'>
                  <span>Title</span>
                  <input type="text" placeholder='title post' />
                </div>
                <div className='detail_post'>
                  <span>category</span>
                  <select id="num">
                    <option value="1">category 1</option>
                    <option value="2">category 2</option>
                    <option value="3">category 4</option>
                    <option value="4">category 4</option>
                  </select>
                </div>
                <div className='detail_post'>
                  <span>Address</span>
                  <input type="text" placeholder='address' />
                </div>
                <div className='detail_post'>
                  <span>Salary</span>
                  <div className='flex_post'>
                    <span>VND</span>
                    <input type="number" placeholder='0' />
                    <span>-</span>
                    <input type="number" placeholder='0' />
                  </div>
                </div>
                <div className='detail_post'>
                  <span>Position</span>
                  <input type="text" placeholder='position' />
                </div>
                <div className='detail_post'>
                  <span>Application Deadline</span>
                  <input type="date" placeholder='Choose' />
                </div>
              </div>

              <div className='post_right'>
                <div className='detail_post'>
                    <span>Description</span>
                    <input type="text" placeholder='description' />
                </div>
                <button className='post_modal' onClick={toggleModal} >
                  Post
                  <img src={lineMore} alt="" />
                </button>
              </div>
            </div>
            

          </div>
        </div>
      )}
    </>
  )
}

export default TopNav