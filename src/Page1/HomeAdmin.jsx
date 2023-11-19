import React from 'react'
import layer1 from '../assets/images/Layer1.svg';
import layer2 from '../assets/images/Layer2.svg';
import layer3 from '../assets/images/Layer3.svg';
import Jobsift from '../assets/images/JobSift.svg';

const HomeAdmin = () => {
  return (
    <div className='main__layout-mini-statistical'>

      <div className='homeAdmin_top'>
        <img src={layer3} alt="" />
        <span>Xin Chào Admin</span>
      </div>

      <div className='div_homeAdmin_content'>
        <div className='homeAdmin_content'>
          <span className='content_title'>
            Nếu cần hỗ trợ kỹ thuật thì có thể thử những cách sau :
          </span>
          <div  className='content_text' >
          <ul style={{ listStyleType: 'circle' }}>
              <li>
                <p>• Truy cập hỏi thông qua Gmail : steveTran.aoi@gmail.com</p>
              </li>
              <li>
                <p>• Hoặc liên hệ qua số điện thoại : 0384572619</p>
              </li>
              <li>
                <p>• Hoặc vào trang trduyTh4nh/JobSift (github.com) để giải đáp thắc mắc</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='div_image'>
        <img className='single_iconLayer' src={layer1} alt="" />
        <img className='single_icon' src={Jobsift} alt="" />
        <img className='single_iconLayer' src={layer2} alt="" />
      </div>
    </div>
  )
}

export default HomeAdmin