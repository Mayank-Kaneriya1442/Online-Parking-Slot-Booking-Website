import React from 'react'
import { useState } from 'react';

const Updateemail = () => {
    const [email, setEmail] = useState('')
    const [newemail, setNewemail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmail = async (e) => {
        e.preventDefault()
        const fetchemail = await fetch('http://localhost:5000/resetemail', {
            method: 'post',
            body: JSON.stringify({ email, newemail, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (fetchemail.ok) {
            alert("This is work properly")
            window.location.href = "/login"
        } else {
            let error = await fetchemail.json()
            alert(error.message)
        }
    }
    return (
        <>
            <form action="" onSubmit={changeEmail}>
                <input type="email" placeholder='Enter your old email' onChange={(e) => setEmail(e.target.value)} />
                <input type="email" placeholder='Enter your new email' onChange={(e) => setNewemail(e.target.value)} />
                <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Change Email</button>
            </form>

        </>
    )
}

export default Updateemail;