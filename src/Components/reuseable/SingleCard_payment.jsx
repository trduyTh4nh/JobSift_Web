import { React, useState } from 'react'
import LineImg from '../../assets/images/line.svg';
import CodeImg from '../../assets/images/code_payment.svg';
import iconClose from '../../assets/images/close-line.svg';
const SingleCard_payment = (props) => {
    const { category_payment, code_payment, nameuser } = props.item;

    // const [modalPayment, setModalPayment] = useState(false);
    // const toggleModal = () => {
    //     setModalPayment(!modalPayment)

    // };
   

    const [modalPaymentEdit, setModalPaymentEdit] = useState(false);
    const toggleModalEdit = () => {
        setModalPaymentEdit(!modalPaymentEdit)
    };
    if (modalPaymentEdit) {
        document.body.classList.add('active_modal')
      }
      else {
        document.body.classList.remove('active_modal')
      };



    // const openModalPayment = () => {
    //     setModalPayment(true);
    //     // setModalPaymentSuccess(false);
    // };

    // const openModalPaymentEdit = () => {
    //     setModalPayment(false);
    //     setModalPaymentEdit(true);
    // };

    return (
        <>
            <div className='Single__payment'>
                <span>Thông tin thanh toán</span>
                <div className='card_payment'>
                    <div className='card_payment_content'>
                        <div className='card_payment_title'>
                            <span>{category_payment}</span>
                            <p>{code_payment}</p>
                        </div>
                        <span>{nameuser}</span>
                    </div>
                    <div className='iconCode_payment'>
                        <img src={CodeImg} alt="" />
                    </div>
                </div>
                <button onClick={toggleModalEdit} className='payment_btnEdit2'>
                    Chỉnh sửa
                    <img src={LineImg} alt="" />
                </button>
            </div>

            {modalPaymentEdit && (
                <div className='modalPayment'>
                    <div onClick={toggleModalEdit} className='overlay_payment'></div>
                    <div className='modal_content_Editpayment_top'>
                        <div className='flew'>
                            <span>Chỉnh sửa thông tin thanh toán</span>
                            <button onClick={toggleModalEdit}>
                                <img src={iconClose} alt="" />
                            </button>
                        </div>
                        <div className='Single__payment'>
                            <span>Thông tin thanh toán</span>
                            <div className='card_payment'>
                                <div className='card_payment_content'>
                                    <div className='card_payment_title'>
                                        <span>{category_payment}</span>
                                        <p>{code_payment}</p>
                                    </div>
                                    <span>{nameuser}</span>
                                </div>
                                <div className='iconCode_payment'>
                                    <img src={CodeImg} alt="" />
                                </div>
                            </div>
                            <div style={{display: 'flex', gap: 10}}>
                                <button onClick={toggleModalEdit} className='payment_btnEdit1'>
                                    Huỷ
                                    <img src={LineImg} alt="" />
                                </button>
                                <button onClick={toggleModalEdit} className='payment_btnEdit2'>
                                    Liên kết thêm tài khoản PayPal
                                    <img src={LineImg} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SingleCard_payment