import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header';

const PrivateLayout = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-1/6 bg-gray-700'>
        <Sidebar />
      </div>
      <div className='w-full flex flex-col'>
        <Header />
        <div className='h-screen flex justify-center items-center'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default PrivateLayout