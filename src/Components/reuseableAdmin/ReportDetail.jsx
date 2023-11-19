import React from 'react';
import jobPostings from '../../assets/dummy-data/jobPostings';
import ListReportData from '../../assets/dummy-data/ListReportData';
import { useLocation } from 'react-router-dom';
import CheckLine from '../../assets/images/check-line.svg';
import positionImg from '../../assets/images/company_hr.svg';
import categoryImg from '../../assets/images/job__posted.svg';
import iconPostAppl from '../../assets/images/post__appl.svg';
import lineMore from '../../assets/images/line_more.svg';
import MapImg from '../../assets/images/map-line.svg';
import Salary from '../../assets/images/money.svg';
import Position2 from '../../assets/images/position2.svg';
import Category2 from '../../assets/images/category2.svg';

const ReportDetail = (item) => {
    const { state } = useLocation();
    const { job } = state || {};

    // const postId = item.params.id;
    // const {  }
    // console.log(postId)

    //const job = jobPostings.find((job) => job.id === postId);

    if (!job) {
        return <div>Bài đăng không tồn tại</div>;
    }

    return (

        <div className='main__layout-mini-ListPost'>
            <div className="identical__title">
                <span>Post detail for : </span>
                <span>{job.title}</span>
            </div>
            <div className='post__detail'>
                <div className='post__detail_top'>
                    <div className='top_flex'>
                        <img src={job.logo} alt="" />
                        <span>{job.title}</span>
                    </div>
                    <button className='btn__posted_top-wrap'>
                        Delete Post
                        <img src={lineMore} alt="" />
                    </button>
                </div>

                <div className='cart__posted_body'>
                    <div className="profile__body-company-info__post_detail">
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

                <div className='post__detail_top'>
                    <div className='flex_report'>
                        <span>{job.report}</span>
                        <span>Reports</span>
                    </div>

                    <button className='btn__posted_top-wrap'>
                        Hide Reports
                        <img src={lineMore} alt="" />
                    </button>
                </div>

                <div className='list_report'>
                    <ul>
                        {ListReportData.map((job, index) => (
                            <li key={index}>
                                <div className='cart__posted_report'>
                                    <div className='cart__posted_left'>
                                        <div className='cart__posted_top-pack'>
                                            <img src={job.icon} alt={`avt user ${index + 1}`} />
                                            <span>{job.nameuser}</span>
                                        </div>
                                        <div className="profile__body-info-user">
                                            <span>Email</span>
                                            <input type="text" value={job.email} placeholder='' />
                                        </div>
                                    </div>
                                    <div className='cart_posted_right'>
                                        <div className="profile__body-company-info-content">
                                            <p>{job.date}</p>
                                            <span>{job.reason}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>



        </div>
    );
};


export default ReportDetail