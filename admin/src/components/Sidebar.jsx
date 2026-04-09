import React from 'react';
import './Sidebar.css';
import { FaUsers, FaCar, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ onNavigate }) => (
    <div className="sidebar">
        <div className="sidebar-header">Car Parking Admin</div>
        <ul className="sidebar-list">
            <li onClick={() => onNavigate('users')}><FaUsers className="sidebar-icon" /> Users</li>
            <li onClick={() => onNavigate('bookings')}><FaCar className="sidebar-icon" /> Bookings</li>
            <li onClick={() => onNavigate('logout')}><FaSignOutAlt className="sidebar-icon" /> Logout</li>
        </ul>
    </div>
);

export default Sidebar;
