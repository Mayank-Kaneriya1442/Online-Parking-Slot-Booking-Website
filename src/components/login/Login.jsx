import React from 'react'
import './login.css'
import { useState } from "react"
import { Link } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const Logindata = async (e) => {
        e.preventDefault();
        const data = await fetch(
            'http://localhost:5000/login', {
            method: "post",
            body: JSON.stringify({ username, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (data.ok) {
            alert("Email and Username are verified")
            localStorage.setItem("userEmail", email);
            window.location.href = "/home"
        } else {
            const error = await data.json();
            alert(error.message)
        }
    }

    return (
        <body className='body'>
            <div className="logincontainer">
                <form onSubmit={Logindata}>
                    <h1>Log In</h1>
                    <div className="inputclass">
                        <p>username</p>
                        <input type="text" className='input' placeholder='username' onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="inputclass">
                        <p>email</p>
                        <input type="email" className='input' placeholder='Example@gmail.com' onChange={(e) => setemail(e.target.value)} required />
                    </div>
                    <div className="inputclass">
                        <p>password</p>
                        <input type="password" className='input' placeholder='**********' onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type='submit'>Submit</button>
                    <div className="have-account">
                        <p>Don't have an account?</p>
                        <Link to="/Signup">Sign Up</Link>
                    </div>
                </form>
            </div>
        </body>
    )
}

export default Login;