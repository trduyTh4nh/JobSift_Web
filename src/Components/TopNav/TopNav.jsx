import React, { useEffect, useState } from 'react';
import iconClose from '../../assets/images/close-line.svg';
import lineMore from '../../assets/images/line.svg';

import './topNav.css'
import { Link, redirect, useRoutes } from 'react-router-dom';
import iconSearch from '../../assets/images/iconSearch.svg';
import iconNotifi from '../../assets/images/notifi.svg';

import Home from '../../Page/Home';
import Chat from '../../Page/Chat';
import Contact from '../../Page/Contact';
import AboutMe from '../../Page/AboutMe';


import axios, { formToJSON } from 'axios';
import { API_URL } from '../../ipConfig';


import { app, storage } from '../../firebase';

import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

import Popup from '../PopUpMoDal';

const TopNav = () => {
  const [modalPayment, setModal] = useState(false);

  const [modalLogin, setModalLogin] = useState(false)

  const [modalSignup, setModalSignup] = useState(false)

  const [dataPost, setDataPost] = useState({})

  const [showModal, setShowModal] = useState(false);

  const [checkUser, setCheckUser] = useState(true);

  const [isToggleToSignup, setIsToggleToSignup] = useState(true)

  const [logo, setLogo] = useState('')

  const [logoCurrent, setLogoCurrent] = useState()

  const [logofirebase, setLogoFirebase] = useState()

  const [userMain, setUserMain] = useState()

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [validState, setValidState] = useState({
    email: true,
    password: true,
    repassword: true,
    phone: true,
  })
  const [popupMessage, setPopupMessage] = useState('');

  const user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {status: false}

  const closePopup = () => {
    setPopupOpen(false);
    window.location.reload()
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [dataSignUp, setDataSignUp] = useState({})


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmitPost = async () => {
    if(dataPost.luong > dataPost.priceTo){
      alert('Tiền lương tối thiểu không thể lớn hơn tiền lương tối đa!')
      return
    }
    if(new Date(dataPost.deadline) < new Date()){
      alert('Ngày hết hạn phải sau ngày hiện tại')
      return
    }
    if(!dataPost.tieu_de || !dataPost.nganh_nghe || !dataPost.dia_chi || !dataPost.luong || !dataPost.priceTo || !dataPost.currency || !dataPost.position || !dataPost.deadline){
      alert('Vui lòng nhập đầy thông tin!')
      return;
    }
    const user = localStorage.getItem('user')
    console.log(user)
    const idUser = JSON.parse(user).id_ntd;

    try {
      const data = {
        ...dataPost,
        job_time: '08:00:00',
        id_user: idUser
      }
      console.log(data)
      const response = await axios.post(`http://${API_URL}:3001/addpost`, data, {
        headers: {
          "Content-Type": 'application/json'
        }
      });
      const dataNotif = await axios.post(`http://${API_URL}:3001/notify/post`, {
        "content": `${JSON.parse(user).name_dn} vừa mới đăng tải bài đăng: ${dataPost.tieu_de}`,
        "id_ntd": JSON.parse(user).id_ntd
      })
      const diamond = await axios.post('http://' + API_URL + ':3001' + '/diamond/' + JSON.parse(user).id_user)
      const res = await axios.post('http://' + API_URL + ':3001/diamond/set', {
        "id_user": JSON.parse(user).id_user,
        "diamond_count": diamond.data.diamond_count - 50
      })
      alert('Đăng tải thành công')
      setModal(false)
      setDataPost({})
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    
    
  }

  useEffect(() => {
    const userCurrent = localStorage.getItem('user')
    if (userCurrent !== null) {
      setCheckUser(false)
    }
  })

  
  const handleLogin = () => {
    axios.post(`http://${API_URL}:3001/loginntd`, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log('Commence đăng nhập')
        setModalLogin();
        setCheckUser(response.data.checkUser);
        setUserMain(response.data.user)

        console.log(response.data)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        setPopupMessage('Đăng nhập thành công!');
        setPopupOpen(true);
        window.location.reload();
      })
      .catch((error) => {
        if (error.response) {

          console.error('Server responded with error:', error.response.data);
          alert('Tài khoản mật khẩu không chính xác!, vui lòng đăng nhập lại!')
        } else if (error.request) {

          console.error('No response received from the server.');
        } else {

          console.error('Error setting up the request:', error.message);
        }
      });
  };


  const handleSignupAccount = async () => {

    if (logoCurrent) {
      const storageRef = ref(storage, `images_nha_tuyen_dung/${logoCurrent.name}`);

      const uploadTask = uploadBytesResumable(storageRef, logoCurrent);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          // eslint-disable-next-line default-case
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setDataSignUp({
              ...dataSignUp,
              imglogo_firebase: downloadURL
            })
            const FormDataSignup = {
              email: dataSignUp.email?.target?.value || '',
              emaildn: dataSignUp.emaildn?.target?.value || '',
              imglogo_firebase: downloadURL || '',
              nameCompany: dataSignUp.nameCompany?.target?.value || '',
              password: dataSignUp.password?.target?.value || '',
              phone: dataSignUp.phone?.target?.value || '',
              username: dataSignUp.username?.target?.value || '',
              address: dataSignUp.address?.target?.value || '',
              cordinate: dataSignUp.cordinate?.target?.value || '',
              description: dataSignUp.description?.target?.value || '',
            }

            axios.post(`http://${API_URL}:3001/signupntd`, FormDataSignup, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((result) => {
              setPopupMessage('Đăng kí thành công!');
              setPopupOpen(true);
              setModalSignup(false)

            }).catch((error) => {
              alert("Email của bạn hoặc của doanh nghiệp đã tồn tại")
              console.error(error)
            })

            console.log('File available at', downloadURL);
          });



        }
      );





    } else {
      console.log('No image selected');
    }

  }
  const [loaicv, setLoaicv] = useState([])
  const [vitri, setVitri] = useState([])
  const toggleModal = () => {
    setModal(!modalPayment)
    axios.post(`http://${API_URL}:3001/getallnn`).then(e => {
      setLoaicv(e.data)
      console.log(e.data)
      axios.post(`http://${API_URL}:3001/getallposition`).then(e => {
        setVitri(e.data.allPosition)
        console.log(e.data.allPosition)
      }).catch(e => {
        alert(e)
      }) 
    }).catch(e => {
      alert(e)
    })
    
  };
  useEffect(() => {
    console.log(loaicv)
  }, loaicv)

  const toggleSignup = () => {
    setModalSignup(!modalSignup)
  }

  const handleContainerClick = (event) => {
    if (event.target.classList.contains('popup-container')) {
      toggleModalLogin();
    }
  }

  const handleContainerClickSignup = (event) => {
    if (event.target.classList.contains('popup-container')) {
      toggleSignup()
    }
  }

  const toggleModalLogin = () => {
    setModalLogin(!modalLogin)
  }

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

  const handleImageChange = (event) => {

    const file = event.target.files[0]

    setLogoCurrent(file)

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setLogo(reader.result)

        setDataSignUp({
          ...dataSignUp,
          logo: logo
        })
      }

      reader.readAsDataURL(file)
    }
  }




  return (
    <>
      <div className="top__nav">
        <div className="top__nav-wrapper ">
          <div className="top__nav-left">
            <div className='wrap-option'>
              <a className='top__nav-link'>
                <Link to="home" >
                  Trang chủ
                </Link>
              </a>
            </div>

            {
              user.id_ntd ? (
            <div className='wrap-option'>
              <a className='top__nav-link'>
                <Link to="chat">
                  Chat
                </Link>
              </a>
            </div>
 ) : ''
}
            {
              user.id_ntd ? (
            <div className='wrap-option'>
              <a className='top__nav-link'>
                <Link to="contact">
                  Liên hệ
                </Link>
              </a>
            </div>
              ) : ''
            }
            

            <div className='wrap-option'>
              <a className='top__nav-link'>
                <Link to="aboutMe">
                  Về chúng tôi
                </Link>
              </a>
            </div>
          </div>

          <div className='left-component'>       
                {
                  user.id_ntd ? (
                    <div className='top__nav-right-2'>
                    <div className="nav-btn__post-job">
                    <button onClick={toggleModal} className='btn__post-job' >
                      <span className='text__btn__post'>Đăng tải</span>
                    </button>
                    </div>
                    </div>
                  ) : ''
                }
                
              
          
            {
              checkUser && (
                <div style={{
                  display: "flex",
                  gap: 20
                }}>
                  <div className='top__nav-right-2'>
                    <div className="nav-btn__post-job">
                      <button onClick={toggleModalLogin} className='btn__post-job' >
                        <span className='text__btn__post'>Đăng nhập</span>
                      </button>
                    </div>
                  </div>
                  <div className='top__nav-right-2'>
                    <div className="nav-btn__post-job">
                      <button onClick={toggleSignup} className='btn__post-job' >
                        <span className='text__btn__post'>Đăng kí</span>
                      </button>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={closePopup} message={popupMessage} />

      {modalSignup && (
        <div className='modalPayment'>
          <div className='overlay_payment'>
          </div>
          <div onClick={handleContainerClickSignup} className='popup-container'>


            <div className='modal_content_payment_top'>

              {
                isToggleToSignup ? (
                  <div className='left-wrap'>
                    <h1 style={{ marginBottom: 20 }}>Đăng kí</h1>
                    <div className='inputLogin'>
                      <label style={{ marginRight: 10, marginTop: 10 }} htmlFor="email">Email: </label>
                      <input
                        style={{border: validState.email ? 'none' : '2px rgb(255 139 139) solid'}}
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={(text) => {
                          setDataSignUp({
                            ...dataSignUp,
                            email: text
                          })
                        }}
                      />
                    </div>

                    <div className='inputLogin'>
                      <label style={{ marginRight: 10, marginTop: 10 }} htmlFor="username">User name: </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        onChange={(text) => {
                          setDataSignUp({
                            ...dataSignUp,
                            username: text
                          })
                        }}
                      />
                    </div>

                    <div className='inputLogin'>
                      <label style={{ marginRight: 10, marginTop: 10 }} htmlFor="phone">Số điện thoại: </label>
                      <input
                        style={{border: validState.phone ? 'none' : '2px rgb(255 139 139) solid'}}
                        type="text"
                        id="phone"
                        name="phone"
                        required
                        onChange={(text) => {
                          setDataSignUp({
                            ...dataSignUp,
                            phone: text
                          })
                        }}
                      />
                    </div>

                    <div className='inputLogin'>
                      <label style={{ marginRight: 10, marginTop: 10 }} htmlFor="password">Mật khẩu: </label>
                      <input
                        style={{border: validState.password ? 'none' : '2px rgb(255 139 139) solid'}}
                        type="password"
                        id="password"
                        name="password"
                        required
                        onChange={(text) => {
                          setDataSignUp({
                            ...dataSignUp,
                            password: text
                          })
                        }}

                      />
                    </div>

                    <div className='inputLogin'>
                      <label style={{ marginRight: 10, marginTop: 10 }} htmlFor="password">Nhập lại mật khẩu: </label>
                      <input
                        style={{border: validState.repassword ? 'none' : '2px rgb(255 139 139) solid'}}
                        type="password"
                        id="re-password"
                        name="password"
                        required
                        onChange={(text) => {
                          setDataSignUp({
                            ...dataSignUp,
                            repassword: text
                          })
                        }}
                      />
                    </div>
                    {
                      (!validState.email && !validState.password && !validState.repassword && !validState.phone) ? (
                        <p style={{fontWeight: 'bold', color: 'rgb(255 139 139)'}}>Vui lòng nhập đầy đủ thông tin!</p>
                      ) : ''
                    }
                    <div className='wrap-button'>
                      <button
                        className='btn-Login'
                        onClick={() => {
                          if(!dataSignUp.email || !dataSignUp.password || !dataSignUp.repassword || !dataSignUp.phone){
                            setValidState({
                              email: dataSignUp.email,
                              password: dataSignUp.password,
                              repassword: dataSignUp.repassword,
                              phone: dataSignUp.phone
                            })
                            
                          }
                          if(!dataSignUp.phone||dataSignUp.phone.target.value.length > 10 || dataSignUp.phone.target.value.length < 10){
                            setValidState({
                                ...validState,
                                phone: false
                            })
                            return
                          }
                          if(!dataSignUp.email||!dataSignUp.email.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
                            setValidState({
                              ...validState,
                              email: false
                            })
                            return
                          }
                          if(!dataSignUp.password||!dataSignUp.password.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)){
                            setValidState({
                              ...validState,
                              password: false
                            })
                            return
                          }
                          if (dataSignUp.password.target.value === dataSignUp.repassword.target.value) {
                            setIsToggleToSignup(false);
                          } else {
                            setValidState({
                              ...validState,
                              repassword: false
                            })
                          }
                        }}
                      >
                        Tiếp theo
                      </button>

                    </div>
                  </div>
                ) : (
                  <div className='wrap-company'>

                    <div className='wrapInpuCompany'>
                      <div className='inpuItem-cmp'>
                        <input type='text' onChange={(text) => {
                          setDataSignUp({
                            ...dataSignUp,
                            nameCompany: text
                          })
                        }} placeholder='Tên công ty'></input>
                      </div>
                      <div className='inpuItem-cmp'>
                        <input type='email' placeholder='Email'
                          onChange={(text) => {
                            setDataSignUp({
                              ...dataSignUp,
                              emaildn: text
                            })
                          }}></input>
                      </div>
                      <div className='wrapInputFile'>

                        <input type='file' className='inputFile' style={{
                          marginTop: 10
                        }} name={logo} onChange={handleImageChange} ></input>

                        <img src={logo} style={{
                          width: 50,
                          height: 50
                        }} alt="" />
                      </div>

                      <div className='inpuItem-cmp'>
                        <input
                          type='text' placeholder='Địa chỉ' onChange={(text) => {
                            setDataSignUp({
                              ...dataSignUp,
                              address: text
                            })
                          }}></input>
                      </div>

                      <div className='inpuItem-cmp'>
                        <input type='text' placeholder='Cordinate'
                          onChange={(text) => {
                            setDataSignUp({
                              ...dataSignUp,
                              cordinate: text
                            })
                          }}></input>
                      </div>

                      <div className='inpuItem-cmp desc-wrap'>
                        <textarea type='text' placeholder='Description'
                          onChange={(text) => {
                            setDataSignUp({
                              ...dataSignUp,
                              description: text
                            })
                          }}></textarea>
                      </div>
                    </div>

                    <div className='wrap-button-company'>
                      <button className='btn-Login' onClick={() => { setIsToggleToSignup(true) }} >Trở lại</button>
                      <button onClick={handleSignupAccount} className='btn-Login' >Đăng kí</button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      )}

      {modalLogin && (
        <div className='modalPayment'>
          <div className='overlay_payment'>
          </div>
          <div onClick={handleContainerClick} className='popup-container'>
            <div className='modal_content_payment_top'>

              <div className="login-container">

                <div className="modal-container">
                  <div className="modal-content">

                    <div style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%"
                    }}>
                      <h2>Đăng nhập</h2>
                      <span className="close-buttonLogin" onClick={toggleModalLogin}>
                        &times;
                      </span>
                    </div>

                    <div>
                        <div style={{
                          display: "flex",
                          gap: 20,
                          justifyContent: "space-evenly",
                          flexDirection: "column"
                        }} className="wrap-inputLogin">
                          <div className='inputLogin'>
                            <label style={{
                              marginRight: 10
                            }} htmlFor="email" >Email: </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className='inputLogin'>
                            <label style={{
                              marginRight: 10
                            }} htmlFor="password">Mật khẩu: </label>
                            <input
                              type="password"
                              id="password"
                              name="password"
                              value={formData.password}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className='wrap-btnLogin'>
                          <button className='btn-Login' onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      )}

      {modalPayment && (
        <div className='modalPayment'>
          <div onClick={toggleModal} className='overlay_payment'>
          </div>
          <div className='popup-container'>
            <div className='modal_content_payment_top'>
              <div className='flew'>
                <div className='title-popup'>
                  <span>Đăng bài</span>
                </div>
                <button onClick={toggleModal}>
                  <img src={iconClose} alt="" />
                </button>
              </div>
              <div className='post'>
                <div className='post_left'>
                  <div className='detail_post'>
                    <span>Tiêu đề *</span>
                    <input className='input-post' onChange={(text) => {
                      setDataPost({
                        ...dataPost,
                        tieu_de: text.target.value
                      })
                    }} type="text" placeholder='' />
                  </div>
                  <div className='detail_post'>
                    <span>Loại công việc *</span>
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
                    <span>Địa chỉ *</span>
                    <input className='input-post' type="text" placeholder='' onChange={(text) => {
                      setDataPost({
                        ...dataPost,
                        dia_chi: text.target.value
                      })
                    }} />
                  </div>
                  <div className='detail_post'>
                    <span>Mức lương *</span>
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
                      <input className='input-post' onChange={(text) => {
                        setDataPost({
                          ...dataPost,
                          currency: text.target.value
                        })
                      }} placeholder='Tiền tệ' />

                    </div>
                  </div>
                  <div className='detail_post'>
                    <span>Vị trí *</span>
                    <select onChange={(e) => {
                      setDataPost({
                        ...dataPost,
                        position: e.target.value
                      })
                    }}>
                      {
                        vitri.map((e) => (
                          <option value={e.id_vitri}>{e.ten_vitri}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className='detail_post'>
                    <span>Hạn nộp *</span>
                    <input className='input-post'
                      onChange={(text) => {
                        setDataPost({
                          ...dataPost,
                          deadline: text.target.value
                        })
                      }}
                      type="date" placeholder='' />
                  </div>
                  <div className='detail_post'>
                    <span>Ngành nghề *</span>
                    <select onChange={(e) => {
                      setDataPost({
                        ...dataPost,
                        nganh_nghe: e.target.value
                      })
                    }}>
                      {
                        loaicv.map((e) => 
                          (<option value={e.id_loai}>{e.ten_loai}</option>)
                        )
                      }
                    </select>
                  </div>
                </div>

                <div className='post_right'>
                  <div className='detail_post'>
                    <span>Kinh nghiệm yêu cầu</span>
                    <input className='input-post'
                      onChange={(text) => {
                        setDataPost({
                          ...dataPost,
                          kinh_nghiem_yeu_cau: text.target.value
                        })
                      }}
                      placeholder='' />
                  </div>
                  <div className='detail_post'>
                    <span>Miêu tả</span>
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
                  <p style={{marginTop: '10px'}}>(*): Bắt buộc</p>
                  <button className='post_modal' onClick={handleSubmitPost} >
                    <p>Đăng tải</p>
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