import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SingleDiamond from './SingleDiamond';
import SingleCard_payment from './SingleCard_payment';

import iconDiamond from '../../assets/images/icon_diamond.svg';
import LineImg from '../../assets/images/line.svg';
import axios from 'axios';
import { API_URL } from '../../ipConfig';

const diamond = {
    diamond: 543,
}
const payment = {
    category_payment: 'PayPal',
    code_payment: 123443211234,
    nameuser: 'HUYNH VU ANH TUAN',
}
const diamondOption1 = {
    diamond_op: 100,
    cost_op: 99000,
}
const diamondOption2 = {
    diamond_op: 500,
    cost_op: 499000,
}
const diamondOption3 = {
    diamond_op: 1000,
    cost_op: 999000,
}



const Company_Diamond = () => {

    const [currentDiamond, setCurrentDiamond] = useState()

   useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    axios.post('http://' + API_URL + ':3001' + '/diamond/' + user.id_user)
    .then(e => {
        setCurrentDiamond(e.data.diamond_count)
    })
    .catch((error) => {
        console.log("Lỗi here: " + error)
    })
   }, [])
    
  

    return (
        <div className='main__layout-mini-Diamond'>
            <div className='diamond__header'>
                <div className='diamond__header-left'>
                    <img src={iconDiamond} alt="" />
                    <div className='diamond__header-div'>
                        <span>{currentDiamond}</span>
                        <span>Kim cương</span>
                    </div>
                </div>
                <button className='gr__btn_diamond'>
                    <NavLink to="transactionHistory">
                        Xem lịch sử giao dịch
                        <img src={LineImg} alt="" />
                    </NavLink>
                </button>

            </div>

            <div className='diamond__body_gr'>
                <div className='diamond__body_left'>
                    <SingleDiamond item = {diamondOption1}/>
                    <SingleDiamond item = {diamondOption2}/>
                    <SingleDiamond item = {diamondOption3}/>
                </div>
                <div className='diamond__body_right'>
                    <SingleCard_payment item = {payment}/>
                </div>
            </div>
            
        </div>
    )
}

export default Company_Diamond