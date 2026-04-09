
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            setIsLoggedIn(true);
            // Optionally, you can use userEmail to fetch profile
            fetch('http://localhost:5000/showprofile')
                .then(response => response.json())
                .then(user => {
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

    if (!isLoggedIn) {
        return (
            <div className="profile-not-logged-in">
                <Navbar />
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h2>Please login to view your profile.</h2>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="profile-modern-bg">
                <div className="profile-modern-card">
                    <div className="profile-modern-avatar">
                        <img src={`https://ui-avatars.com/api/?name=${username || 'User'}&background=0D8ABC&color=fff&size=128`} alt="avatar" />
                    </div>
                    <h2 className="profile-modern-username">{username || 'User'}</h2>
                    <div className="profile-modern-details">
                        <div className="profile-modern-detail-item">
                            <span className="profile-modern-label">Email:</span>
                            <span className="profile-modern-value">{email}</span>
                            <Link style={{ textDecoration: 'none' }} to="/updateemail">
                                <button className="profile-modern-btn">Update Email</button>
                            </Link>
                        </div>
                        <div className="profile-modern-detail-item">
                            <span className="profile-modern-label">Username:</span>
                            <span className="profile-modern-value">{username}</span>
                            <Link style={{ textDecoration: 'none' }} to="/updateusername">
                                <button className="profile-modern-btn">Update Username</button>
                            </Link>
                        </div>
                        <div className="profile-modern-detail-item">
                            <span className="profile-modern-label">Password:</span>
                            <span className="profile-modern-value">••••••••</span>
                            <Link style={{ textDecoration: 'none' }} to="/updatepassword">
                                <button className="profile-modern-btn">Update Password</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;