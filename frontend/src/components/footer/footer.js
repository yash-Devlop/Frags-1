import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t-4 text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-white">Frags</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet consectetur dolor in elementum.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul>
              <li className="mb-2"><Link to="#" className="hover:underline">About Us</Link></li>
              <li className="mb-2"><Link to="#" className="hover:underline">Services</Link></li>
              <li className="mb-2"><Link to="#" className="hover:underline">Contact</Link></li>
              <li className="mb-2"><Link to="#" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-300 hover:text-white">
                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C1.267 0 0 1.268 0 2.83v18.34C0 22.732 1.268 24 2.83 24h10.84v-9.294h-3.127v-3.615h3.127v-2.672c0-3.1 1.892-4.785 4.659-4.785 1.325 0 2.464.098 2.797.142v3.24h-1.918c-1.504 0-1.795.716-1.795 1.765v2.31h3.587l-.468 3.615h-3.12V24h6.116c1.563 0 2.83-1.268 2.83-2.83V2.83C24 1.268 22.732 0 21.175 0z"/>
                </svg>
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white">
                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.917 4.917 0 0 0-8.384 4.482A13.94 13.94 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.228-.616v.062a4.914 4.914 0 0 0 3.946 4.814 4.936 4.936 0 0 1-2.224.084 4.919 4.919 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.921 13.921 0 0 0 7.548 2.213c9.142 0 14.307-7.721 14.307-14.426 0-.22-.005-.438-.014-.653A10.292 10.292 0 0 0 24 4.557z"/>
                </svg>
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white">
                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.31 3.608 1.285.975.975 1.223 2.241 1.285 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.31 2.633-1.285 3.608-.975.975-2.241 1.223-3.608 1.285-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.31-3.608-1.285-.975-.975-1.223-2.241-1.285-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.31-2.633 1.285-3.608.975-.975 2.241-1.223 3.608-1.285C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.333.015 7.052.072 5.771.129 4.51.325 3.355.812 2.21 1.299 1.299 2.21.812 3.355.325 4.51.129 5.771.072 7.052.015 8.333 0 8.741 0 12s.015 3.667.072 4.948c.057 1.281.253 2.542.74 3.697.487 1.145 1.398 2.056 2.543 2.543 1.145.487 2.416.683 3.697.74 1.281.057 1.689.072 4.948.072s3.667-.015 4.948-.072c1.281-.057 2.542-.253 3.697-.74 1.145-.487 2.056-1.398 2.543-2.543.487-1.145.683-2.416.74-3.697.057-1.281.072-1.689.072-4.948s-.015-3.667-.072-4.948c-.057-1.281-.253-2.542-.74-3.697-.487-1.145-1.398-2.056-2.543-2.543C18.542.253 17.281.057 16 .072 14.719.015 14.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z"/>
                </svg>
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white">
                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M23.994 4.569c-.882.392-1.832.656-2.828.775a4.924 4.924 0 0 0 2.163-2.718 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.935 13.935 0 0 1 1.671 3.149 4.92 4.92 0 0 0 3.158 9.725a4.903 4.903 0 0 1-2.229-.616v.062a4.914 4.914 0 0 0 3.946 4.814 4.93 4.93 0 0 1-2.222.085 4.922 4.922 0 0 0 4.588 3.418 9.87 9.87 0 0 1-6.102 2.104c-.397 0-.79-.023-1.175-.067a13.935 13.935 0 0 0 7.548 2.213c9.142 0 14.307-7.721 14.307-14.426 0-.22-.005-.438-.014-.654a10.299 10.299 0 0 0 2.517-2.617z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
