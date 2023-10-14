import React from 'react'

const TopNav = () => {
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        
        <div className="search__box">
          <input type="text" placeholder='search or type'/>
          <span><i>iconSeach</i></span>
        </div>
        <div className="top__nav-right">
          <span className='notification'><i>iconNotifi</i></span>

        </div>
      </div>
    </div>
  )
}

export default TopNav