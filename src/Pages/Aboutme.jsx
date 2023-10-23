import React from 'react'
import './Aboutme.css'
import AB1 from '../assets/images/AB1.svg'
import AB2 from '../assets/images/AB2.svg'
import AB3 from '../assets/images/AB3.svg'

const Aboutme = () => {
  return (
    <div>
      <div className='titel_about' >
          <img src={AB1} alt="" style={{height: 300, width: 600,marginTop:60}} />
        <div className="class" style={{display:'block',marginLeft:100}}>
          <div>
            <img src={AB2} alt="" style={{height: 300, width: 600,}} />
          </div>
          <div style={{width:800,textAlign:'center'}}>
            <a style={{fontSize:50,paddingLeft:50,textAlign:'center'}}>They always say time changes things, but you actually have to change them yourself</a>
          </div>
        </div>
        <div>
          <img src={AB3} alt="" style={{height: 300, width: 600,marginTop:60}} />
        </div>
      </div>
      <div className='sty_text'>
        <div>
        <a>Tại Công ty JobSift, chúng tôi đặt ra sứ mệnh là thúc đẩy sự phát triển và cải thiện chất lượng cuộc sống thông qua các dự án và sản phẩm mà chúng tôi phát triển. Chúng tôi cam kết:</a>
        </div>
        <div>
        <a>Sáng tạo: Chúng tôi luôn tìm kiếm cách tiếp cận sáng tạo để giải quyết các thách thức phức tạp và đáp ứng nhu cầu của thị trường. Chất lượng: Chất lượng là trọng tâm của mọi hoạt động của chúng tôi.</a>
        </div>
        <a>Khách hàng: Khách hàng luôn đứng ở trung tâm của mọi quyết định của chúng tôi. Chúng tôi luôn lắng nghe và đáp ứng nhu cầu của khách hàng sử dụng.</a>
      </div>
    </div>
  )
}

export default Aboutme