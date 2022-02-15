import React from 'react';
import { Link } from 'react-router-dom';
import ImageLogoWhite from './ImageLogoWhite';

const Sidebar = () => {
  return (
    <div className='h-full flex flex-col items-center'>
      <div className='bg-orange-500 m-2'>
        <ImageLogoWhite />
      </div>
      <div className='h-full flex flex-col justify-between text-white'>
        <div className=''>
          <Link to={'/admin'}>
            <div className='flex items-center p-4 hover:text-orange-500 '>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              <h2 className='px-2'>Home</h2>
            </div>
          </Link>
          <Link to={'/admin/tasks'}>
            <div className='flex items-center p-4 hover:text-orange-500'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
              <h2 className='px-2'>Tasks</h2>
            </div>
          </Link> 
          <Link to={'/admin/users'}>
            <div className='flex items-center p-4 hover:text-orange-500'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <h2 className='px-2'>Users</h2>
            </div>
          </Link>
        </div>
        <div className='p-4 hover:text-orange-500'>
              <Link to={'/admin/perfil'}>
                <div className='flex items-center'> 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <h2 className='px-2'>Settings</h2>
                </div>
              </Link> 
        </div>
      </div>
    </div>   
  )
}

/* const Rutese = ({rute, icon, name}) => {
  return(
    <div>
      <Link to={rute}>
        <div className='flex items-center p-4 hover:text-orange-500 '>
          {icon}
          <h2 className='px-2'>{name}</h2>
        </div>
      </Link> 

    </div>
  )
} */

export default Sidebar