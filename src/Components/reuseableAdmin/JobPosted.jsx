import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import jobPostings from '../../assets/dummy-data/jobPostings';
import CheckLine from '../../assets/images/check-line.svg';
import positionImg from '../../assets/images/company_hr.svg';
import categoryImg from '../../assets/images/job__posted.svg';
import lineMore from '../../assets/images/line_more.svg';
const JobPosted = () => {
  return (
    <div className='card__posted_main'>
      <h3>Show data for : Job Posted</h3>
      <ul>
        {jobPostings.map((job) => (

          <li key={job.id}>
            <Link to={`/manage/PostDetail/${job.id}`} state={{ job }}>
              <div className='cart__posted'>
                <div className='cart__posted_top'>
                  <div className='cart__posted_top-pack'>
                    <img src={job.logo} alt='Logo công ty' />
                    <span>{job.title}</span>
                  </div>
                  <button className='btn__posted_top-wrap'>
                    <span>Delete Post</span>
                    <i class="ri-arrow-right-s-line"></i>
                  </button>

                </div>
                <div className='cart__posted_body'>
                  <div className="profile__body-company-info">
                    <div className="profile__body-company-info-item">
                      <img className='cart__posted_iconImg' src={positionImg} alt="" />
                      <div className="profile__body-company-info-content">
                        <p>Position</p>
                        <span>{job.position}</span>
                      </div>
                    </div>

                    <div className="profile__body-company-info-item">
                      <img className='cart__posted_iconImg' src={CheckLine} alt="" />
                      <div className="profile__body-company-info-content">
                        <p>Application</p>
                        <span>{job.applicants}</span>
                      </div>
                    </div>

                    <div className="profile__body-company-info-item">
                      <img className='cart__posted_iconImg' src={categoryImg} alt="" />
                      <div className="profile__body-company-info-content">
                        <p>Category</p>
                        <span>{job.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex_div'>
                  <div className='flex'>
                    <span>{job.report}</span>
                    <span>Report</span>
                  </div>
                  <Link to={`/manage/reportDetail/${job.id}`} state={{ job }}>
                    <button className='btn__posted_top-wrap'>
                      <span>See report</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                  </Link>
                </div>
                {/* <button className='cart__posted_end'>
                  <Link to="application" className='between'>
                    <span className='color'>See Application</span> 
                    <i class="ri-arrow-right-s-line"></i>
                  </Link>
                </button> */}

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