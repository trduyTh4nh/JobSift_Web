import React from 'react';
import { NavLink } from 'react-router-dom';

import iconDiamond from '../../assets/images/icon_diamond.svg';
import LineImg from '../../assets/images/line.svg';

const diamond = {
    diamond: 543,
    number_payment: 123434563645,
    username: 'Huynh Vu Anh Tuan'
}
const diamondOption1 = {
    diamond_op: 100,
    money_op: 99000,
}
const diamondOption2 = {
    diamond_op: 500,
    money_op: 499000,
}
const diamondOption3 = {
    diamond_op: 1000,
    money_op: 999000,
}


const Company_Diamond = () => {
    return (
        <div className='main__layout-mini-Diamond'>
            <div className='diamond__header'>
                <div className='diamond__header-left'>
                    <img src={iconDiamond} alt="" />
                    <div className='diamond__header-div'>
                        <span>{diamond.diamond}</span>
                        <span>diamond</span>
                    </div>
                </div>
                <button className='gr__btn_diamond'>
                    <NavLink to="companybtnEdit">
                        See transaction history
                        <img src={LineImg} alt="" />
                    </NavLink>
                </button>

            </div>
        </div>
    )
}

export default Company_Diamond