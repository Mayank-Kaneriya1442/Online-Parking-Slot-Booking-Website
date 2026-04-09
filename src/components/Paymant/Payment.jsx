import React from 'react'
import { Link } from 'react-router-dom'
import './payment.css'
import paypal from '../image/paypal.svg'
import applepay from '../image/applepay.svg'
import googlepay from '../image/googlepay.svg'


const Payment = () => {
    return (
        <div className='main-paytm'>
            <div className="modal">
                <form className="form">
                    <div className="payment--options">
                        <img src={paypal} alt="" />
                        <img src={applepay} alt="" />
                        <img src={googlepay} alt="" />
                    </div>
                    <div className="separator">
                        <hr className="line" />
                        <p>or pay using credit card</p>
                        <hr className="line" />
                    </div>
                    <div className="credit-card-info--form">
                        <div className="inputpay_container">
                            <label for="password_field" className="inputpay_label">Card holder full name</label>
                            <input id="password_field" className="inputpay_field" type="text" name="input-name" title="Inpit title" placeholder="Enter your full name" />
                        </div>
                        <div className="inputpay_container">
                            <label for="password_field" className="inputpay_label">Card Number</label>
                            <input id="password_field" className="inputpay_field" type="number" name="inputpay-name" title="Inpit title" placeholder="0000 0000 0000" />
                        </div>
                        <div className="inputpay_container">
                            <label for="password_field" className="inputpay_label">Expiry Date / CVV</label>
                            <div className="split">
                                <input id="password_field" className="inputpay_field" type="number" name="inputpay-name" title="Expiry Date" placeholder="01/23" />
                                <input id="password_field" className="inputpay_field" type="number" name="cvv" title="CVV" placeholder="CVV" />
                            </div>
                        </div>
                    </div>
                    <Link to='/Otp'>
                        <button className="purchase--btn">Checkout</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Payment