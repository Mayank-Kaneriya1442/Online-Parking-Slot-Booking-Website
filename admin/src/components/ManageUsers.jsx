
import React, { useState, useEffect } from 'react';
import './ManageUsers.css';

function ManageUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [editId, setEditId] = useState(null);
    const [form, setForm] = useState({ username: '', email: '', password: '', phoneNumber: '' });

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const res = await fetch('http://localhost:5000/admin/users');
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                setError('Failed to fetch users');
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);

    const handleEdit = (user) => {
        setEditId(user._id);
        setForm({
            username: user.username || '',
            email: user.email || '',
            password: user.password || '',
            phoneNumber: user.phoneNumber || ''
        });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const res = await fetch(`http://localhost:5000/admin/users/${editId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (data.success) {
                setUsers(users.map(u => u._id === editId ? { ...u, ...form } : u));
                setEditId(null);
            } else {
                setError(data.message || 'Failed to update user');
            }
        } catch (err) {
            setError('Failed to update user');
        }
    };

    if (loading) return <div className="manage-users">Loading users...</div>;
    if (error) return <div className="manage-users">{error}</div>;

    return (
        <div className="manage-users">
            <h2>Manage Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            {editId === user._id ? (
                                <>
                                    <td><input name="username" value={form.username} onChange={handleChange} /></td>
                                    <td><input name="email" value={form.email} onChange={handleChange} /></td>
                                    <td><input name="password" value={form.password} onChange={handleChange} /></td>
                                    <td><button onClick={handleSave}>Save</button></td>
                                </>
                            ) : (
                                <>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>********</td>
                                    <td><button onClick={() => handleEdit(user)}>Edit</button></td>
                                    
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ManageUsers;
