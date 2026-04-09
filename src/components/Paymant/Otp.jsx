import './Otp.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Otp() {
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isOtpRequested, setIsOtpRequested] = useState(false);

  const requestOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOtp(otp);
    alert(`Your OTP is: ${otp}`);
    setIsOtpRequested(true);
  };

  const verifyOtp = () => {
    if (otp === String(generatedOtp)) {
      alert('OTP Verified Successfully!');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1 className='otph1'>OTP Verification</h1>
      {!isOtpRequested ? (
        <div>
          <button onClick={requestOtp}>Request OTP</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button className="bbt" onClick={verifyOtp}><Link className='a'  to="/Yourbooking">Verify OTP</Link></button>
          <button className="bbt" onClick={() => setIsOtpRequested(false)}>Resend OTP</button>
          
        </div>
      )}
    </div>
  );
}

export default Otp;
