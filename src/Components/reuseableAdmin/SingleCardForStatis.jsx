import React from 'react'

const SingleCardForStatis = (props) => {
    const {title, totalNumber, icon} = props.item;
  return (
    <div className="single__card_statis">
            <div className="card__content_statis">
              <h4>{title}</h4>
              <span>{totalNumber}</span>
            </div>

            <span className='card__icon_statis'>
              <i>
                <img class='icon-card_statis' src={icon} alt="" />
              </i>
            </span>
          </div>
  )
}
export default SingleCardForStatis
