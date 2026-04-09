import React, { useState } from 'react'

const Updateusername = () => {
    const [email, setEmail] = useState('')
    const [newusername, setNewusername] = useState('')
    const [password, setPassword] = useState('')

    const changeUsername = async (e) => {
        e.preventDefault()
        const fetchusername = await fetch('http://localhost:5000/resetusername', {
            method: 'post',
            body: JSON.stringify({ email, newusername, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (fetchusername.ok) {
            alert('The username are changed successfully')
            window.location.href = '/login'
        } else {
            const error = await fetchusername.json()
            alert(error.message)
        }
    }
    return (
        <>
            <form action="" onSubmit={changeUsername}>
                <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Enter your new username' onChange={(e) => setNewusername(e.target.value)} />
                <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Change Email</button>
            </form>
        </>
    )
}

export default Updateusername;