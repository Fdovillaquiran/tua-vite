import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main className='flex h-full overflow-y-scroll items-center justify-center'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout