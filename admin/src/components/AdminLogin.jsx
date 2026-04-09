import React, { useState } from 'react';
import './AdminLogin.css';


function AdminLogin({ setIsAuth }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('http://localhost:5000/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (data.success) {
                localStorage.setItem('admin-auth', 'true');
                setIsAuth(true);
            } else {
                setError(data.message || 'Invalid email or password');
            }
        } catch (err) {
            setError('Server error');
        }
        setLoading(false);
    };

    return (
        <form className="admin-login-card" onSubmit={handleSubmit}>
            <div className="admin-login-title">Admin Login</div>
            {error && <div className="admin-login-error">{error}</div>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="admin-login-input"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="admin-login-input"
            />
            <button type="submit" className="admin-login-btn" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    );
}

export default AdminLogin;
