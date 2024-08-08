import { React } from 'react';
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'
import DropDownMenu from '../utils/DropdownMenu';

function Header() {

  const { isAuthenticated } = useSelector((state) => state.auth);


  return (
    <nav className= " border-b-4 border-gray-400 p-2" >
      <div className= "container mx-auto flex justify-between items-center" >
        
        <NavLink to ="/">
          <img
            src = "/assets/Frags-Logo.png"
            alt= "Logo"
            className = "h-12 bg-cover" />
        </NavLink>
        
        <div className="hidden md:flex space-x-4">
          <NavLink to= "/" className= "text-black text-xl font-mono px-3  line-container" >Home</NavLink>
          <NavLink to= "/About" className= "text-black text-xl font-mono px-3  line-container" >About</NavLink>
          <NavLink to= "/ContactUs" className= "text-black text-xl font-mono px-3  line-container" >Contact Us</NavLink>
        </div>

        <div>
        {isAuthenticated? <div>
          <DropDownMenu />
          </div>
        : 
          <div>
            <NavLink to = "/Login" className= "bg-black text-white border border-black px-4 mx-4 py-2cd  font-mono transition-colors rounded-full hover:bg-white hover:text-black" >
              Login
            </NavLink>
            <NavLink to = "/Signup" className= "bg-black text-white border border-black px-4 mx-4 py-2 font-mono transition-colors rounded-full hover:bg-white hover:text-black" >
              Sign Up
            </NavLink>
            
          </div>}

        </div>
      </div>
    </nav>
  )

}

export default Header
