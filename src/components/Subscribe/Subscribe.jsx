import React, { useState } from 'react';


// A component to hold all the styles. This avoids needing a separate CSS file.
const SubscriptionStyles = () => (
  <style>{`
    body {
        font-family: 'Inter', sans-serif;
        background-color: #f4f7f6;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        padding: 20px;
    }

    .App {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
    }

    .subscription-card {
        background-color: #ffffff;
        border-radius: 16px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        padding: 40px;
        max-width: 450px;
        width: 100%;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .subscription-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    }

    h1 {
        font-size: 28px;
        font-weight: 700;
        color: #1a202c;
        margin-bottom: 8px;
    }

    p {
        font-size: 16px;
        color: #718096;
        margin-bottom: 32px;
    }

    h3 {
        font-size: 18px;
        font-weight: 600;
        color: #2d3748;
        margin-bottom: 12px;
        text-align: left;
    }

    label {
         font-weight: 600;
         color: #2d3748;
         font-size: 18px;
         display: block;
         text-align: left;
         margin-bottom: 12px;
    }

    .form-group {
        margin-bottom: 24px;
    }

    select {
        width: 100%;
        padding: 12px 16px;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        background-color: #fdfdff;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        color: #2d3748;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23718096' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 16px center;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    select:focus {
        outline: none;
        border-color: #4a90e2;
        box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
    }

    .subscribe-btn {
        width: 100%;
        background: linear-gradient(90deg, #4a90e2, #50e3c2);
        color: white;
        font-size: 16px;
        font-weight: 600;
        padding: 14px 0;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        margin-top: 16px;
    }

    .subscribe-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    }

    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        z-index: 1000;
    }

    .popup-overlay.open {
        opacity: 1;
        visibility: visible;
    }

    .popup-content {
        background: white;
        padding: 40px;
        border-radius: 16px;
        text-align: center;
        transform: scale(0.9);
        transition: transform 0.3s ease;
        max-width: 400px;
        width: 90%;
    }

    .popup-overlay.open .popup-content {
        transform: scale(1);
    }

    .popup-icon {
        color: #50e3c2;
        font-size: 50px;
        line-height: 1;
    }

    .popup-content h2 {
        font-size: 24px;
        color: #1a202c;
        margin-top: 16px;
        margin-bottom: 8px;
    }

    .popup-content p {
        color: #718096;
        margin-bottom: 24px;
    }

    .popup-close-btn {
        background-color: #4a90e2;
        color: white;
        padding: 10px 24px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
    }
  `}</style>
);


// Popup Component for success message
const PaymentSuccessPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay open" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <div className="popup-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                <h2>Payment Successful!</h2>
                <p>Thank you for subscribing. Your benefits are now active.</p>
                <button className="popup-close-btn" onClick={onClose}>Done</button>
            </div>
        </div>
    );
};


// Main Subscription Form Component
const SubscriptionForm = () => {
    // State to manage the visibility of the popup
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Handler to show the popup
    const handleSubscribeClick = () => {
        setIsPopupOpen(true);
    };

    // Handler to close the popup
    const handleClosePopup = () => {
        setIsPopupOpen(false);
        window.location.href = '/home'; // Redirect to profile page after closing
    };

    return (
        <div className="subscription-card">
            <h1>Subscribe to our service</h1>
            <p>Enjoy exclusive benefits by subscribing!</p>
            
            <div className="form-group">
                <h3>Subscription Plans</h3>
                <select>
                    <option value="basic">Basic Plan - ₹1000/month</option>
                    <option value="premium">Premium Plan - ₹2000/month</option>
                    <option value="pro">Vip Plan - ₹3000/month</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="payment-method">Payment Method:</label>
                <select id="payment-method">
                    <option value="credit-card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                </select>
            </div>

            <button className="subscribe-btn" onClick={handleSubscribeClick} to="/Payment">Subscribe</button>

            <PaymentSuccessPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
    );
};

// Main App component to render the form
export default function App() {
  return (
    <div className="App">
      <SubscriptionStyles />
      <SubscriptionForm />
    </div>
  );
}
