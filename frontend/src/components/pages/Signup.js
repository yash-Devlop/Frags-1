import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Signup() {

  const apiUrl = process.env.REACT_APP_API_URL;

        const [email, setEmail] = useState('')
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [message, setMessage] = useState('')

        const navigate = useNavigate()
      
        const signinHandler = async (e) => {
            e.preventDefault()
            try {
                const response = await fetch(`${apiUrl}/signup`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, username, password })
            });
                const data = await response.json();
            if(data === 'signedUp'){
                navigate('/')
            }
            else{
                setMessage(data)
            }
                
        } catch (error) {
                console.log('error: ', error)
                setMessage('An error occured durring sign up')
        }
    }
        


  return (
    <div className = 'bg-gray-100 flex items-center justify-center min-h-screen'>
    <div className = 'bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
      <h2 className = 'text-2xl font-bold mb-6 text-center'>Signup</h2>
      <form onSubmit={signinHandler}>
      <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className = 'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className = 'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className = 'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
        <button type="submit" 
          className = 'w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-custom-green-3 hover:bg-custom-green-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Sign in
        </button>
      </form>
      <div className = 'flex'>
      <p>Already have one?</p><Link to = '/Login' className = 'ml-2 text-blue-400 hover:text-blue-700'>Login</Link>
      </div>
      <p className = 'text-red-500'>{message}</p>
    </div>
    </div>
  )
}

export default Signup
