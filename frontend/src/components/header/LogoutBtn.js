import React from 'react'
import { logout } from '../../Actions/authActions'
import { useDispatch } from 'react-redux'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout());
    // sessionStorage.removeItem('isAuthenticated');
  };
  
  return (
    <button
    className = ' text-red-600 text-2xl duration-200 '
    onClick = {logoutHandler}>
      Logout
    </button>
  )
}

export default LogoutBtn
