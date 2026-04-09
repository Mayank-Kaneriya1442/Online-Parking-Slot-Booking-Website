import React from "react";
import "./contactus.css";
import { useState } from "react";
// import { useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx"
import Footer from "../Footer/Footer.jsx"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      website: "",
      message: "",
    });
  };

  return (
<div>
  <Navbar/>
    <div className="contact-page">
      {/* Hero Section */}
      <div className="hero">
        <h1>Contact Us</h1>
        <p>We are here for you</p>
      </div>

      {/* Office Cards */}
      <section className="offices">
        <h2>We Are Here For You</h2>
        <p>Please fill out the form or reach us at our offices below.</p>

        <div className="office-grid">
          <div className="office-card">
            <h3>Registered Office</h3>
            <p>📍 Tulsip Complex, Opposite VS Hospital, Surat, India</p>
            <p>📞 +91 9876543210</p>
            <p>📧 park+@gmail.com</p>
          </div>

          <div className="office-card">
            <h3>UK Office</h3>
            <p>📍 12 The Parkway, London, UK</p>
            <p>📞 +44 7123456789</p>
            <p>📧 park+@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </section>

                  <Footer />

    </div>
</div>
  );
};

export default ContactUs;
