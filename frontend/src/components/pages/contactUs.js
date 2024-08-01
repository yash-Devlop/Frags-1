import React from 'react'
import { Link } from 'react-router-dom';

function contactUs() {
  return (
    <div className = 'min-h-screen bg-white'>

      <div className = 'py-5 px-5'><p className = 'text-8xl px-8 py-10 w-1/2 rounded font-mono'><b>As you have browse through this whole website that actually is not so big</b></p></div>
      <div className = 'py-5 px-5'>
        <p className = 'text-4xl px-4 py-10 w-1/2 text-8xl rounded font-mono '>
          <b>This is just a simple E-commerce project and need a lot of changes and more features, Login to unlock new features</b>
        </p>
      </div>
      <div className = 'px-5 py-5'>
      <div className = ' w-full bg-black rounded px-5 flex justify-center'>
      <p className = ' text-4xl py-5 text-white font-mono'>Still you can check my socials</p>
      </div>
      </div>

      <div className = 'flex items-center pb-5 flex justify-center '>
        <Link to = 'https://www.linkedin.com/in/yash-gupta-1468a51b2/' className='px-6 text-2xl text-blue-500 hover:text-blue-400' target="_blank">
          <img
            src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhrhJEQ383QCvlpQSf660zZnDpxchlHDyLA&s'
            alt = 'Linkedin'
            className = 'h-64 object-cover'
          />
        </Link>
        <Link to = 'https://github.com/yash-Devlop' className='px-6 text-2xl text-blue-500 hover:text-blue-400' target="_blank">
        <img
            src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdZlszhihSfJBfoXkpJtOvDk9p_sskS4rSQ&s'
            alt = 'GitHub'
            className = 'h-64 object-cover'
          />
        </Link>
      </div>
      
    </div>
  )
}

export default contactUs
