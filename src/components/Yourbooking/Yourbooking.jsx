
import Navbar from '../Navbar/Navbar'
import React, { useEffect } from 'react';
import './Yourbooking.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Yourbooking() {
  const [bookings, setBookings] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:5000/showSlots');
      const user = await response.json();
      setBookings(user.slots || []);
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
      setBookings([]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div className="yourbookingbody">
          <h2 className="yourbookingh2">Booked Slots Details</h2>
          <table className="man" >
            <thead>
              <tr>
                <th>Email</th>
                <th>Car Number</th>
                <th>Slot</th>
                <th>Parking Book date/Time</th>
                <th>Parking Hour</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {bookings && bookings.length > 0 ? (
                bookings.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.email}</td>
                    <td>{item.carNumber}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    { <td>
                      <button><Link className='a' to="/Payment">Pay Now</Link></button>
                    </td> }
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>No bookings found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Yourbooking;