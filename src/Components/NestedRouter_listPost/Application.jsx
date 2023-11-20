import React, { useEffect, useState } from 'react'
import jobPostings from '../../assets/dummy-data/jobPostings'
import CheckLine from '../../assets/images/check-line.svg';
import positionImg from '../../assets/images/company_hr.svg';
import categoryImg from '../../assets/images/job__posted.svg';
import lineMore from '../../assets/images/line_more.svg';
import { useParams, useRoutes } from 'react-router-dom';
import Router from '../../routes/Router';
import { API_URL } from '../../ipConfig';
import axios from 'axios';
const Application = () => {
  const params = useParams()
  const [listApply, setListApply] = useState([])
  useEffect(() => {
    axios.post(`http://${API_URL}:3001/application`, {
      "id_post": params.id
    }).then(e => {
      setListApply(e.data)
      console.log(e.data)
    }).catch(e => {
      alert(e)
      console.log(e)
    })
  }, [])
  const getTinhTrang = (status) => {
    switch(status){
      case 0:
        return "Đang chờ duyệt"
      case 1:
        return "Đã duyệt"
      default:
        return "Từ chối"
    }
  }
  const setStatus = (value, id) => {
    axios.post(`http://${API_URL}:3001/status`, {
      "status": value,
      "id_recruit": id
    }).then(e => {
      axios.post(`http://${API_URL}:3001/application`, {
      "id_post": params.id
    }).then(e => {
      setListApply(e.data)
      console.log(e.data)
    }).catch(e => {
      alert(e)
      console.log(e)
    })
    })
  }
  return (
    <div className='card__posted_main'>
      <h3>Đang hiển thị dữ liệu cho: </h3>
        <ul>
          {listApply.length > 0 ? listApply.map((job, index) => (
            <li key={index}>
              <div className='cart__posted'>
                <div className='cart__posted_top'>
                  <div className='cart__posted_top-pack'>
                    <img src={job.profile_picture} alt={`Logo công ty ${index + 1}`} />
                    <span>{job.full_name} đang ứng tuyển cho {job.tieu_de}</span>
                  </div>
                </div>
                <p>Thông tin bài đăng</p>
                <div className='cart__posted_body'>
                  <div className="profile__body-company-info">
                    <div className="profile__body-company-info-item">
                    <i style={{fontSize: '30px'}} class="ri-user-2-line"></i>
                      <div className="profile__body-company-info-content">
                        <p>Vị trí</p>
                        <span>{job.ten_vitri}</span>
                      </div>
                    </div>

                    <div className="profile__body-company-info-item">
                      <i style={{fontSize: '30px'}} class={job.status == 0 ? "ri-loader-line" : job.status == 1 ? "ri-check-line" : "ri-close-line"}></i>
                      <div className="profile__body-company-info-content">
                        <p>Tình trạng</p>
                        <span>{getTinhTrang(job.status)}</span>
                      </div>
                    </div>

                    <div className="profile__body-company-info-item">
                    <i style={{fontSize: '30px'}} class="ri-briefcase-4-line"></i>
                      <div className="profile__body-company-info-content">
                        <p>Lĩnh vực</p>
                        <span>{job.ten_loai}</span>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
                <button className='cart__posted_end'>
                      <p>Xem CV</p>
                      <img src={lineMore} alt="" />
                </button>
                <div className='cart__posted_end-gr-btn'>
                  <button onClick={() => setStatus(1, job.id_recruit)} className='cart__posted-btnApproveorDe'>
                    <p>Chấp nhận</p>
                  </button>
                  <button onClick={() => setStatus(2, job.id_recruit)} className='cart__posted-btnApproveorDe'>
                    <p>Từ chối</p>
                  </button>
                </div>
              </div>
            </li>
            )) : ''}
        </ul>
    </div>
  )
}

export default Application