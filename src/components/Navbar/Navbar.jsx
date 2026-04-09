import React from "react";
import logo from "./logo.svg";
import { useState } from "react";
import "./Navbar.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const loggedUser = localStorage.getItem("userEmail");

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setIsLoggedIn(true);
      // Optionally, you can use userEmail to fetch profile
      fetch("http://localhost:5000/showprofile")
        .then((response) => response.json())
        .then((user) => {
          setEmail(user.email);
          setUsername(user.username);
          setPassword(user.password);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  function Logout() {
    localStorage.removeItem("userEmail");
    window.location.href = "/login";
  }

  function show() {
    document.querySelector("ul").style.top = "600px";
  }

  function hide() {
    document.querySelector("ul").style.top = "-600px";
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbarul">
        {/* <li> <Link className='lilink ' to="/profile">Profile</Link></li> */}
        <li>
          {" "}
          <Link className="lilink " to="/home">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link className="lilink" to="/Bookparking">
            Book Parking
          </Link>
        </li>
        <li>
          {" "}
          <Link className="lilink" to="/Yourbooking">
            Your Booking
          </Link>
        </li>
        <li>
          {" "}
          <Link className="lilink" to="/About">
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link className="lilink" to="/contactUs">
            Contact Us
          </Link>
        </li>
        <Link
          to="/profile"
          className="navbar-profile-icon"
          style={{ textDecoration: "none" }}
        >
          <svg
            viewBox="0 0 40 40"
            width="40"
            height="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#0D8ABC" />
            <circle cx="20" cy="15" r="7" fill="#fff" />
            <ellipse cx="20" cy="29" rx="11" ry="7" fill="#fff" />
            <ellipse cx="20" cy="29" rx="9" ry="5.5" fill="#e6f4fa" />
          </svg>
        </Link>
        <Link className="lilink" to="/Subscribe">
          <button className="Btn"></button>
        </Link>
        {loggedUser && loggedUser !== "" ? (
          <button onClick={Logout} className="logout">
            Logout
          </button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="logout">Login</button>
          </Link>
        )}
        <div onClick={hide} className="closebtn">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Menu / Close_LG">
                <path
                  id="Vector"
                  d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </ul>
      <div onClick={show} className="hamburger">
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Menu / Hamburger_MD">
              <path
                id="Vector"
                d="M5 17H19M5 12H19M5 7H19"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
