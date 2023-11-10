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

import ArrowDropDownFillIcon from 'remixicon-react/ArrowDropDownFillIcon'

import IconMoney from 'remixicon-react/MoneyDollarCircleFillIcon'
import ArrowLeft from 'remixicon-react/ArrowLeftCircleFillIcon'

import axios from 'axios';
import { API_URL } from '../../ipConfig';

const TopNav = () => {

  const [modalPayment, setModal] = useState(false);

  const [dataPost, setDataPost] = useState({})


  const handleSubmitPost = async () => {
    try {
      setDataPost({
        ...dataPost,
        job_time: '08:00:00'
      });
      const response = await axios.post(`http://192.168.116.1:3001/addpost`, dataPost, {
        headers: {
          "Content-Type": 'application/json'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }


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
                  Home
                </Link>
              </a>
            </div>


            <div className='wrap-option'>
              <a className='top__nav-link'>
                <Link to="chat">
                  Chat
                </Link>
              </a>
            </div>


            <div className='wrap-option'>
              <a className='top__nav-link'>
                <Link to="contact">
                  Contact
                </Link>
              </a>
            </div>

            <div className='wrap-option'>
              <a className='top__nav-link'>
                <Link to="aboutMe">
                  About Us
                </Link>
              </a>
            </div>


          </div>

          <div className='left-component'>
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
          <div onClick={toggleModal} className='overlay_payment'>


          </div>
          <div className='popup-container'>
            <div className='modal_content_payment_top'>
              <div className='flew'>
                <div className='title-popup'>
                  <span>Post</span>
                </div>
                <button onClick={toggleModal}>
                  <img src={iconClose} alt="" />
                </button>
              </div>
              <div className='post'>
                <div className='post_left'>
                  <div className='detail_post'>
                    <span>Title</span>
                    <input className='input-post' onChange={(text) => {
                      setDataPost({
                        ...dataPost,
                        tieu_de: text.target.value
                      })
                    }} type="text" placeholder='' />
                  </div>
                  <div className='detail_post'>
                    <span>Category</span>
                    <select id="num" onChange={(text) => {
                      setDataPost({
                        ...dataPost,
                        job_category: text.target.value
                      })
                    }}>
                      <option value="Part-time">Part-time</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>
                  <div className='detail_post'>
                    <span>Address</span>
                    <input className='input-post' type="text" placeholder='' onChange={(text) => {
                      setDataPost({
                        ...dataPost,
                        dia_chi: text.target.value
                      })
                    }} />
                  </div>
                  <div className='detail_post'>
                    <span>Salary</span>
                    <div className='flex_post'>
                      <input className='input-post' onChange={(text) => {
                        setDataPost({
                          ...dataPost,
                          luong: text.target.value
                        })
                      }} type="number" placeholder='' />
                      <span>-</span>
                      <input className='input-post' onChange={(text) => {
                        setDataPost({
                          ...dataPost,
                          priceTo: text.target.value
                        })
                      }} type="number" placeholder='' />
                      <span>VND</span>

                    </div>
                  </div>
                  <div className='detail_post'>
                    <span>Position</span>
                    <input className='input-post' onChange={(text) => {
                      setDataPost({
                        ...dataPost,
                        position: text.target.value
                      })
                    }} type="text" placeholder='' />
                  </div>
                  <div className='detail_post'>
                    <span>Application Deadline</span>
                    <input className='input-post'
                      onChange={(text) => {
                        setDataPost({
                          ...dataPost,
                          deadline: text.target.value
                        })
                      }}
                      type="date" placeholder='' />
                  </div>
                </div>

                <div className='post_right'>
                  <div className='detail_post'>
                    <span>Description</span>
                    <input className='input-post descriptionInput'
                      style={{ height: '200px', verticalAlign: 'text-top' }}
                      onChange={(text) => {
                        setDataPost({
                          ...dataPost,
                          note: text.target.value
                        })
                      }}
                      type="text" placeholder='' />
                  </div>
                  <button className='post_modal' onClick={handleSubmitPost} >
                    <p>Post</p>
                    <img src={lineMore} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TopNav