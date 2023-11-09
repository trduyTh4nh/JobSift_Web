import React from 'react'
import GP from '../assets/images/GP.svg'
import AS from '../assets/images/AS.svg'
import Homepage1 from '../assets/images/img_home.svg'
const Home = () => {


  return (
    <div className='content_home'>
      
      <div className='titel_home'>     
        <h2 style={{fontSize: 80}}>Jobsift</h2>
        <a style={{fontSize: 40, fontWeight: '600'} }>Find jobs easier with JobSift</a>
        <div style={{display: 'flex',marginLeft:-50,paddingTop:10 }}>
          <button>
            <img src={GP} alt="" style={{height: 60, width: 300,}} />
          </button>
          <button>
            <img src={AS} alt="" style={{height: 60, width: 300,marginLeft:-80}} /> 
          </button>                     
        </div>
      </div>
      <img className='img_home img_home_second' src={Homepage1} alt=""/> 
    </div>
  )
}

export default Home