import React from 'react';
import transactionHistory from '../../assets/dummy-data/transactionHistory';
import DiamondImg from '../../assets/images/icon_diamond.svg';

const TransactionHistory = () => {
    return (
        <div className='main__layout-mini-transactionHistory'>
            <h1>Lịch sử giao dịch</h1>
            <ul>
                {transactionHistory.map((transaction, index) => (
                    <li key={index}>
                        <div className='cart__posted_transaction'>
                            <div className='cart__posted_transaction_title'>
                                <span>{transaction.transactionReason}</span>
                            </div>
                            <div class="profile__body-company-info">
                                <div class="profile__body-company-info_item_transaction">
                                    <img src={DiamondImg} alt="" />
                                    <div className="company__body-company-info-content">
                                        <p>Lượng kim cương</p>
                                        <span>{transaction.amountOfDiamond}</span>
                                    </div>
                                </div>
                                <div className="company__body-company-info-content">
                                    <p>Lượng tiền đã chi tiêu</p>
                                    <span>{transaction.moneySpent}</span>
                                </div>
                                <div className="company__body-company-info-content">
                                    <p>Phương thức thanh toán</p>
                                    <span>{transaction.paymentMethod}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TransactionHistory