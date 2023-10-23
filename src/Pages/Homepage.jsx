import React from 'react'
import './Homepage.css'
import GP from '../assets/images/GP.svg'
import AS from '../assets/images/AS.svg'
import Home from '../assets/images/Home.svg'
const Homepage = () => {
  return (
    <div className='content_home'>
      <div className='titel_home'>     
        <h2 style={{fontSize: 80}}>Jobsift</h2>
        <a style={{fontSize: 40, fontWeight: '600'} }>Find jobs easier with JobSift</a>
        <div style={{display: 'flex',marginLeft:-50,paddingTop:10 }}>
          <img src={GP} alt="" style={{height: 60, width: 300,}} />
          <img src={AS} alt="" style={{height: 60, width: 300,marginLeft:-80}} />                       
        </div>
      </div>
      <img src={Home} alt="" style={{height:870, width:700,marginLeft:400,marginTop:80}}/> 
    </div>
  )
}

export default Homepage