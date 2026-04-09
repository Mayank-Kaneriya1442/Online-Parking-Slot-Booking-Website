import "./App.css";
import Admin from "./components/admin/Admin.jsx";
import Home from "./components/Homepage/Homepage.jsx";
import Login from "./components/login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Aboutus from "./components/about/Aboutus.jsx";
import Country from "./components/Country/Country.jsx";
import Bookparking from "./components/bookparking/Bookparking.jsx";
import Profile from "./components/profile/Profile.jsx";
import Otp from "./components/Paymant/Otp.jsx";
import Yourbooking from "./components/Yourbooking/Yourbooking.jsx";
import Updateemail from "./components/updateemail/Updateemail.jsx";
import Updateusername from "./components/updateusername/Updateusername.jsx";
import Updatepassword from "./components/updatepassword/Updatepassword.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Subscribe from "./components/Subscribe/Subscribe.jsx";
import Payment from "./components/Paymant/Payment.jsx";
import React, { useState } from 'react';
import ContactUs from "./components/ContactUs/ContactUs.jsx";

function App() {

  const [bookings, setBookings] = useState([]);

  const handleBooking = (bookingData) => {
    setBookings([...bookings, bookingData]);
  };
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/updateemail" element={<Updateemail />} />
          <Route exact path="/updateusername" element={<Updateusername />} />
          <Route exact path="/updatepassword" element={<Updatepassword />} />
          <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/country" element={<Country />} />
          <Route exact path="/Bookparking" element={<Bookparking onBooking={handleBooking} />} />
          <Route exact path="/Otp" element={<Otp />} />
          <Route exact path="/Yourbooking" element={<Yourbooking bookings={bookings} />} />
          <Route exact path="/Subscribe" element={<Subscribe />} />
          <Route exact path="/Payment" element={<Payment />} />
          <Route exact path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;