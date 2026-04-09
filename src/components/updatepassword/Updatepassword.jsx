import React from 'react'
import { useState } from 'react'

const Updatepassword = () => {
    const [email, setEmail] = useState('')
    const [oldpassword, setOldpassword] = useState('')
    const [newpassword, setnewPassword] = useState('')

    const changePassword = async (e) => {
        e.preventDefault()
        const fetchpassword = await fetch('http://localhost:5000/resetpassword', {
            method: 'post',
            body: JSON.stringify({ email, oldpassword, newpassword }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (fetchpassword.ok) {
            alert('The password are changed successfully')
            window.location.href = '/login'
        } else {
            const error = await fetchpassword.json()
            alert(error.message)
        }
    }
    return (
        <>
            <form action="" onSubmit={changePassword}>
                <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Enter your old password' onChange={(e) => setOldpassword(e.target.value)} />
                <input type="password" placeholder='Enter your new password' onChange={(e) => setnewPassword(e.target.value)} />
                <button type='submit'>Change Email</button>
            </form>
        </>
    )
}

export default Updatepassword