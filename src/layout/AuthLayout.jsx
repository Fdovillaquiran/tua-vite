import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import ImageLogo from '../components/ImageLogo';

const AuthLayout = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8'>
      <div className='w-full flex items-start'>
        <Link to='/'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-orange-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
        </Link>
      </div>
      <div className='max-w-md w-full'>
        <ImageLogo />
        <Outlet />  
      </div>
    </div>
  )
}

export default AuthLayout