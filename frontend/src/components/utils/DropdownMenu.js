import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoutBtn from '../header/LogoutBtn';
import { FaUserCircle, FaSignOutAlt, FaWpforms  } from 'react-icons/fa';

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);


    const { user } = useSelector((state) => state.auth)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left z-10">
      <div>
        <button
          type="button"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleMenu}
        >
          <FaUserCircle size='40' className = 'text-white hover:text-gray-200' />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-64 h-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <div className = 'flex items-center h-16 hover:bg-gray-100'>
          <FaUserCircle size= '30' className="text-gray-700 ml-3" />
            <p
              className="text-gray-700 flex justify-center block px-4 py-2 hover:bg-gray-100 text-2xl"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Hi, {user.user}
            </p>
            </div>
            <div className = 'flex items-center hover:bg-gray-100 h-16 '>
            <FaWpforms size='30' className= 'ml-3' />
            <Link
              to="/productForm"
              className="text-gray-700 flex justify-center block px-4 py-2 text-2xl"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              Sell products
            </Link>
            </div>
            <div
              className="flex text-xl hover:bg-gray-100 h-16 "
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              <div className = 'flex items-center '>
              <FaSignOutAlt size= '30' className = 'text-red-600 mr-2 ml-5 ' />
              <LogoutBtn />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
