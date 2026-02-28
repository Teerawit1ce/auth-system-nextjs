"use client"

import React, {useState} from 'react'
import Navbar from '../components/Navbar'

function ResisterPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [error, seterror] = useState("");

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (password != confirmPassword) {
            seterror("Password do not match!")
            return;
        }

        if (!name || !email || !password || !confirmPassword) {
            seterror("Please complete all inputs!")
            return;
        }
    }

  return (
    <div>
      <Navbar />
      <div className='container mx-auto py-5'>
        <h3>Resister Page</h3>
        <hr className='my-3'/>
        <form action="">
            <input className='block bg-gray-300 p-2 my-2 rounded-md' type="text" placeholder='Enter your name'/>
            <input className='block bg-gray-300 p-2 my-2 rounded-md' type="email" placeholder='Enter your email'/>
            <input className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter your password'/>
            <input className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Confrim your password'/>
            <button type="submit" className='bg-green-500 p-2 rounded-md text-white'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default ResisterPage
