import { React } from 'react';
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'
import DropDownMenu from '../utils/DropdownMenu';

function Header() {

  const { isAuthenticated } = useSelector((state) => state.auth);


  return (
    <nav className= "bg-custom-green-3 border-b-4 p-2" >
      <div className= "container mx-auto flex justify-between items-center" >
        
        <NavLink to ="/">
          <img
            src = "/assets/Frags-Logo.png"
            alt= "Logo"
            className = "h-12 bg-cover" />
        </NavLink>
        
        <div className="hidden md:flex space-x-4">
          <NavLink to= "/" className= "text-white text-xl px-3  line-container" >Home</NavLink>
          <NavLink to= "/About" className= "text-white text-xl px-3  line-container" >About</NavLink>
          <NavLink to= "/ContactUs" className= "text-white text-xl px-3  line-container" >Contact Us</NavLink>
        </div>

        <div>
        {isAuthenticated? <div>
          <DropDownMenu />
          </div>
        : 
          <div>
            <NavLink to = "/Login" className= "bg-custom-green-1 text-custom-black px-4 py-2 rounded-full hover:text-white" >
              Login
            </NavLink>
            <NavLink to = "/Signup" className= "bg-custom-green-2 text-custom-black px-4 py-2 ml-6 rounded-full hover:text-white" >
              Sign Up
            </NavLink>
          </div>}

        </div>
      </div>
    </nav>
  )

}

export default Header
