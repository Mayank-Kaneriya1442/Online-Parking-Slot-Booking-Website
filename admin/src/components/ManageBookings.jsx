
import React, { useEffect, useState } from 'react';
import './ManageBookings.css';

function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:5000/admin/bookings');
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        setError('Failed to fetch bookings');
      }
      setLoading(false);
    };
    fetchBookings();
  }, []);

  if (loading) return <div className="manage-bookings">Loading bookings...</div>;
  if (error) return <div className="manage-bookings">{error}</div>;

  return (
    <div className="manage-bookings">
      <h2>All Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            
            <th>Car Number</th>
            <th>Date</th>
            <th>Time</th>
            <th>slot</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b._id}>
              <td>{b.email}</td>
              <td>{b.carNumber}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td>{b.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageBookings;
