import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import AdminLogin from './components/AdminLogin';
import ManageUsers from './components/ManageUsers';
import ManageBookings from './components/ManageBookings';


function App() {
  const [page, setPage] = useState('users');
  const [isAuth, setIsAuth] = useState(() => localStorage.getItem('admin-auth') === 'true');

  // Always check auth on mount
  React.useEffect(() => {
    if (localStorage.getItem('admin-auth') !== 'true') {
      setIsAuth(false);
    }
  }, []);

  const handleNavigate = (p) => {
    if (p === 'logout') {
      setIsAuth(false);
      localStorage.removeItem('admin-auth');
    } else {
      setPage(p);
    }
  };

  if (!isAuth) return <AdminLogin setIsAuth={setIsAuth} />;

  return (
    <div className="admin-app">
      <Sidebar onNavigate={handleNavigate} />
      <div className="main-content">
        {page === 'users' && <ManageUsers />}
        {page === 'bookings' && <ManageBookings />}
      </div>
    </div>
  );
}

export default App;
