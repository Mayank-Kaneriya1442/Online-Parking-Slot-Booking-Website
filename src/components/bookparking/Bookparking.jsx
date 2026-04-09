
import './Bookparking.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import React, { useState } from 'react';
import Footer from "../Footer/Footer.jsx"


function Bookparking({ onBooking }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [carNumber, setCarnumber] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = { email, name, phoneNumber, date, carNumber, time };

    try {
      const response = await fetch('http://localhost:5000/booking', {
        method: "post",
        body: JSON.stringify(bookingData),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.data.success) {
        console.log("Done");
      } else {
        console.log("Failed");

      }
    } catch (error) {
      console.log(error);
    }

    onBooking(bookingData);
    setName('');
    setPhoneNumber('');
    setDate('');
    setCarnumber('');
    setTime('');
  };

  return (
    <div>
    <div>
      <Navbar />
      <div className="bookparking-container">
        <h1><b>Book a Parking Slot</b></h1>
        <div className="booking-main-container">
          <form className="bookingform" onSubmit={handleSubmit}>
            <div>
              <label><b>Name:</b></label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" required />
            </div>
            <div>
              <label><b>Email:</b></label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Adress" required />
            </div>
            <div>
              <label><b>Slot Number:</b></label>
              <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter Slot Number" required />
            </div>
            <div>
              <label><b>Car number:</b></label>
              <input type="text" value={carNumber} pattern="^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$" title="Please enter a valid car number plate (e.g., GJ 05 AB 1234)" onChange={(e) => setCarnumber(e.target.value)} maxlength="10" placeholder='Enter Car Number' required />
            </div>
            <div>
              <label><b>Time:</b></label>
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </div>
            <div>
              <label><b>Date:</b></label>
              <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <button type="submit" className="btn_booking">Add Slot</button>
            <button><Link className='a' to="/Payment">Pay Now</Link></button>
          </form>
        </div>
      </div>
    </div>

                 <Footer />

    </div>

  );
}

export default Bookparking;