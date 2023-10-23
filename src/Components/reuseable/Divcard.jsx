import React from 'react'


const DivCard = (props) => {
    const {title, icon} = props.item;
  return (
    <div className="div__card">
            <div className="div__content">
              <h4>{title}</h4>
            </div>

            <span className='div__icon'>
              <i>
                <img class='icon-div-card' src={icon} alt="" />
              </i>
            </span>
          </div>
  )
}

export default DivCard