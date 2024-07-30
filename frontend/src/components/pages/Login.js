import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Actions/authActions';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const { isAuthenticated,  loading, error } = useSelector((state) => state.auth);

        const dispatch = useDispatch();
        const navigate = useNavigate()

        const loginHandler = (e) => {
          e.preventDefault()
          dispatch(login(username, password))
        }

        useEffect(() => {
          if (isAuthenticated === true) {
            navigate('/')
          }
        }, [isAuthenticated])



  return (
    <div className = 'bg-gray-100 flex items-center justify-center min-h-screen'>
    <div className = 'bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
      <h2 className = 'text-2xl font-bold mb-6 text-center'>Login</h2>
      <form onSubmit={loginHandler}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className = 'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom-green-1 focus:border-custom-green-1 sm:text-sm'
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className = 'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
        <button type="submit" 
          className = 'w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-custom-green-3 hover:bg-custom-green-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          disabled={loading}
          >
          {loading ? 'Logging in...' : 'Login'} 
        </button>
      </form>
      {error && <p className = "text-red-500">{error}</p>}
      <Link 
        to ='/signup'
        className = 'text-black hover:text-blue-800'
      >Signup</Link>
    </div>
    </div>
  )
}

export default Login


