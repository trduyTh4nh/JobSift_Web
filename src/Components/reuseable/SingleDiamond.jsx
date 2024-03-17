import React, { useState } from 'react'
import iconDiamond from '../../assets/images/icon_diamond.svg';
import iconClose from '../../assets/images/close-line.svg';
import SingleCard_payment from './SingleCard_payment';


const payment = {
    category_payment: 'PayPal',
    code_payment: 123443211234,
    nameuser: 'HUYNH VU ANH TUAN',
}

const SingleDiamond = (props) => {
    const { diamond_op, cost_op } = props.item;

    const [modalPayment, setModalPayment] = useState(false);
    const toggleModal = () => {
        setModalPayment(!modalPayment)

    };

    if (modalPayment) {
        document.body.classList.add('active_modal')
    }
    else {
        document.body.classList.remove('active_modal')
    }

    const [modalPaymentSuccess, setModalPaymentSuccess] = useState(false);
    const toggleModalSuccess = () => {
        setModalPaymentSuccess(!modalPaymentSuccess)
    };


    const paymentMethod = () => {

    }

    const openModalPayment = () => {
        setModalPayment(true);
        // setModalPaymentSuccess(false);
      };
    
      const openModalPaymentSuccess = () => {
        setModalPayment(false);
        setModalPaymentSuccess(true);
      };

    return (
        <>
            <div className='Single__diamond'>
                <div className='diamond__left'>
                    <img src={iconDiamond} alt="" />
                    <span>{diamond_op}</span>
                </div>
                <div className='diamond__right'>
                    <div className='cost__gr'>
                        <span>{cost_op}</span>
                        <span>VND</span>
                    </div>
                    <button onClick={openModalPayment}>Mua ngay</button>
                </div>
            </div>
            {modalPayment && (
                <>
                    <div className='modalPayment'>
                        <div onClick={toggleModal} className='overlay_payment'></div>
                        <div className='modal_content_payment'>
                            <div className='flew'>
                                <span>Mua hàng</span>
                                <button className='btn_close' onClick={toggleModal}>
                                    <img src={iconClose} alt="" />
                                </button>
                            </div>
                            <div className='modal_content_payment_2' >
                                <div className='diamond__left-temp'>
                                    <img src={iconDiamond} alt="" />
                                    <span>{diamond_op}</span>
                                </div>
                                <div className='cost__gr_div'>
                                    <span>{cost_op}</span>
                                    <span>VND</span>
                                </div>
                                <a className='close_modal' href='/payment' onClick={paymentMethod} >Thanh toán</a>
                            </div>
                            <div className='border_left'>
                                <SingleCard_payment item={payment} />
                            </div>

                        </div>


                    </div>


                </>
            )}
            {modalPaymentSuccess && (
                    <div className='modalPaymentSuccess'>
                        <div onClick={toggleModalSuccess} className='overlay_paymentSuccsess'></div>
                        <div className='modal_content_paymentSuccsess'>
                            <div className='top_popup'>
                                <span>Thanh toán thành công</span>
                                <button className='btn_close' onClick={toggleModalSuccess}>
                                    <img src={iconClose} alt="" />
                                </button>
                            </div>
                            <div className='modal_content_paymentSuccess2' >
                                <div className='diamond__left-temp'>
                                    <img src={iconDiamond} alt="" />
                                    <span>{diamond_op}</span>
                                </div>
                                <div className='cost__gr_div'>
                                    <span>{cost_op}</span>
                                    <span>VND</span>
                                </div>
                                <button className='close_modal' onClick={toggleModalSuccess}>Done</button>
                            </div>
                        </div>
                </div>
            )}
        </>
    )
}

export default SingleDiamond