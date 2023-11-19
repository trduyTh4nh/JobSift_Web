import React from 'react'
import GP from '../assets/images/GP.svg'
import AS from '../assets/images/AS.svg'
import Homepage1 from '../assets/images/home_img.png'
import Homepage2 from '../assets/images/hp.png'
import '.././App.css'
const Home = () => {


  return (
    <div className='content_home'>

      <div className='titel_home'>
        <h2 className='title_home' style={{ fontSize: 80 }}>Jobsift</h2>
        <p className='descHome'  style={{ fontSize: 40, fontWeight: '600' }}>Tìm việc dễ dàng hơn với JobSift</p>
        <div style={{ display: 'flex', marginLeft: -50, paddingTop: 10 }}>
          <button>
            <img src={GP} alt="" style={{ height: 60, width: 300, }} />
          </button>
          <button>
            <img src={AS} alt="" style={{ height: 60, width: 300, marginLeft: -80 }} />
          </button>
        </div>
      </div>
      <div className='img_home_second' style={{display: 'flex', flexDirection: 'row-reverse', gap: '0px'}}>
        <img style={{marginBottom: '50px'}} className='' src={Homepage1} alt="" />
        <img style={{position: 'relative', zIndex: 0,marginBottom: '-100px', marginRight: '-150px'}} className='' src={Homepage2} alt="" />
      </div>
    </div>
  )
}

export default Home