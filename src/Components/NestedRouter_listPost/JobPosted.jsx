import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import jobPostings from '../../assets/dummy-data/jobPostings';
import CheckLine from '../../assets/images/check-line.svg';
import positionImg from '../../assets/images/user-2-line.svg';
import categoryImg from '../../assets/images/briefcase-4-line.svg';
import lineMore from '../../assets/images/line_more.svg';
import axios from 'axios';
import { API_URL } from '../../ipConfig';
const JobPosted = () => {

  const user = JSON.parse(localStorage.getItem('user') ? localStorage.getItem('user') : '1')

  const [jobs, setJobs] = useState([])
  useEffect(() => {
    if(user.id_ad){
      axios.get(`http://${API_URL}:3001/`).then(e => {
          setJobs(e.data)
          console.log(e.data)
      })
      return
    }
      axios.post(`http://${API_URL}:3001/post/${user.id_ntd}`).then(e => {
          setJobs(e.data)
          console.log(e.data)
      })
  }, [])
  return (
    <div className='card__posted_main'>
      <h3>Đang hiển thị dữ liệu cho: Đơn ứng tuyển</h3>
      <ul>
        {jobs.map((job) => (
          
          <li key={job.id}>
            <Link to={`/ListPost/PostDetail/${job.id_post}`} state={{ job }}>
              <div className='cart__posted'>
                <div className='cart__posted_top_wrapper'>
                  <div className='cart__posted_top'>
                    <div className='cart__posted_top-pack'>
                      <img width={64} src={job.logo_dn} alt='Logo công ty' style={{objectFit: 'cover'}} />
                      <span>{job.tieu_de}</span>
                    </div>
                    <button className='btn__posted_top-wrap'>Xoá bài đăng{'  >'}</button>
                  </div>
                  <div className='cart__posted_body'>
                    <div className="profile__body-company-info">
                      <div className="profile__body-company-info-item">
                        <img className='cart__posted_iconImg' src={positionImg} alt="" />
                        <div className="profile__body-company-info-content">
                          <p>Vị trí</p>
                          <span>{job.ten_vitri}</span>
                        </div>
                      </div>

                      <div className="profile__body-company-info-item">
                        <img className='cart__posted_iconImg' src={CheckLine} alt="" />
                        <div className="profile__body-company-info-content">
                          <p>Lượng đơn ứng tuyển</p>
                          <span>{0}</span>
                        </div>
                      </div>

                      <div className="profile__body-company-info-item">
                        <img className='cart__posted_iconImg' src={categoryImg} alt="" />
                        <div className="profile__body-company-info-content">
                          <p>Ngành nghề</p>
                          <span>{job.ten_loai}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {
                  user.id_ad ? (
                    <button className='cart__posted_end'>
                      <Link to={"jobPosted/reports/"+job.id_post} className='between'>
                        {/* <NavLink to = "application"> */}
                        Xem các lượt tố cáo
                        <img src={lineMore} alt="" />
                        {/* </NavLink> */}
                      </Link>
                    </button>
                  ) : (
                    <button className='cart__posted_end'>
                      <Link to={"application/"+job.id_post} className='between'>
                        {/* <NavLink to = "application"> */}
                        Xem các lượt ứng tuyển
                        <img src={lineMore} alt="" />
                        {/* </NavLink> */}
                      </Link>
                    </button>
                  )
                }
                

                {/* <button className='cart__posted_end'>
                  <Link to="./postDetail" className='between' >
                    Post detail
                    <img src={lineMore} alt="" />
                  </Link>
                </button> */}

              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobPosted