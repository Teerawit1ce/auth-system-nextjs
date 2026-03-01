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

        try {

            const res = await fetch("http://localhost:3000/api/register", {
              method: "POST",
              headers: {
                "content-Type": "application/json"
              },
              body: JSON.stringify({
                name, email, password
              })
            })

            if (res.ok) {
              const form = e.target as HTMLFormElement;
              seterror("");
              form.reset();
            } else {
              console.log("User registeration failed.")
            }

        } catch(error) {
          console.log("Error during reistertion: ", error);
        }
    }

  return (
    <div>
      <Navbar />
      <div className='container mx-auto py-5'>
        <h3>Resister Page</h3>
        <hr className='my-3'/>
        <form onSubmit={handleSubmit}>

            {error && (
              <div className='bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                {error}
              </div>
            )}

            <input onChange={(e) => setName(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="text" placeholder='Enter your name'/>
            <input onChange={(e) => setEmail(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="email" placeholder='Enter your email'/>
            <input onChange={(e) => setpassword(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter your password'/>
            <input onChange={(e) => setconfirmPassword(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Confrim your password'/>
            <button type="submit" className='bg-green-500 p-2 rounded-md text-white'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default ResisterPage
