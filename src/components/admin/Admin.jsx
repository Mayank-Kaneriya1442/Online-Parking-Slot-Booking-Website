import React from 'react'
import { useState, useEffect } from 'react'
import './admin.css'

const Admin = () => {
    const [userdata, setUserdata] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/adminpanel')
            .then(response => response.json())
            .then(data => {
                setUserdata(data)
                console.log(data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <div className="table-container">
                <div className="table-item">
                    <h2>username</h2>
                    {
                        userdata.map(item => {
                            return (
                                <div className="username useritem" key={item.username}>{item.username}</div>
                            )
                        })
                    }
                </div>

                <div className="table-item">
                    <h2>email</h2>
                    {
                        userdata.map(item => {
                            return (
                                <div className="email useritem" key={item.username}>{item.email}</div>
                            )
                        })
                    }
                </div>

                <div className="table-item">
                    <h2>password</h2>
                    {
                        userdata.map(item => {
                            return (
                                <div className="password useritem" key={item.username}>{item.password}</div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Admin;