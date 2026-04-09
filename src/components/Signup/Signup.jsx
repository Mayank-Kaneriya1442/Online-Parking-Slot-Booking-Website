import React, { useState, useEffect } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

import Loading from './Loading';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [serverStatus, setServerStatus] = useState('loading');

    useEffect(() => {
        const checkServerStatus = async () => {
            try {
                const response = await fetch('http://localhost:5000/health');
                if (response.ok) {
                    setServerStatus('up');
                } else {
                    setServerStatus('down');
                }
            } catch (error) {
                setServerStatus('down');
            }
        };

        checkServerStatus();

        const intervalId = setInterval(checkServerStatus, 5000); // Check every 5 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    const Register = async (e) => {
        e.preventDefault();
        if (serverStatus !== 'up') {
            alert("Server is currently unavailable. Please try again later.");
            return;
        }

        try {
            let result = await fetch('http://localhost:5000/register', {
                method: "post",
                body: JSON.stringify({ username, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (result.ok) {
                alert("Your registration was successfully completed");
                window.location.href = '/login';
            } else {
                const error = await result.json();
                alert(error.message);
            }
        } catch (error) {
            alert("Server is currently unavailable. Please try again later.");
        }
    };

    if (serverStatus === 'loading') {
        return <div>Loading...</div>;
    }

    if (serverStatus === 'down') {
        return <div><Loading /></div>;
    }

    return (
        <div className='body'>
            <div className="logincontainer">
                <form onSubmit={Register}>
                    <h1>Sign Up</h1>
                    <div className="inputclass">
                        <p>username</p>
                        <input type="text" className='input' placeholder='Username' onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="inputclass">
                        <p>Email</p>
                        <input type="email" className='input' placeholder='Example@gmail.com' onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="inputclass">
                        <p>Password</p>
                        <input type="password" className='input' id='password' autoComplete='divyesh' placeholder='**********' onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="inputclass">
                        <p>Confirm password</p>
                        <input type="password" className='input' id='confirmpassword' autoComplete='divyesh' placeholder='**********' required />
                    </div>
                    <button type='submit'>Submit</button>
                    <div className="have-account">
                        <p>Already have an account?</p>
                        <Link to="/Login">Log In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;