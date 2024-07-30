import React from 'react'
import { Link } from 'react-router-dom';

function contactUs() {
  return (
    <div className = 'min-h-screen bg-white'>

      <div className = 'py-5 px-5'><p className = 'text-4xl px-4 py-10 w-full bg-custom-green-1 rounded font-mono'><b>As you have browse through this whole website that actually is not so big</b></p></div>
      <div className = 'py-5 px-5 '>
        <p className = 'text-4xl px-4 py-10 w-full bg-custom-green-1 rounded font-mono'>
          <b>This is just a simple E-commerce project and need a lot of changes and more features, Login to unlock new features</b>
        </p>
      </div>
      <div className = 'px-5 py-5'>
      <div className = ' w-full bg-custom-green-1 rounded px-5'>
      <p className = ' text-4xl py-5 font-mono'>Still you can check my socials</p>
      </div>
      </div>

      <div className = 'flex items-center pb-5 '>
        <Link to = 'https://www.linkedin.com/in/yash-gupta-1468a51b2/' className='px-6 text-2xl text-blue-500 hover:text-blue-400' target="_blank">
          <img
            src = 'https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png'
            alt = 'Linkedin'
            className = 'h-64 object-cover'
          />
        </Link>
        <Link to = 'https://github.com/yash-Devlop' className='px-6 text-2xl text-blue-500 hover:text-blue-400' target="_blank">
        <img
            src = 'https://pngimg.com/d/github_PNG23.png'
            alt = 'Linkedin'
            className = 'h-64 object-cover'
          />
        </Link>
      </div>
      
    </div>
  )
}

export default contactUs
