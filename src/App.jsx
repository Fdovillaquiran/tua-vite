import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateLayout from './layout/PrivateLayout';
import PublicLayout from './layout/PublicLayout';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import IndexAdmin from './pages/Admin/Index';
import Tasks from './pages/Admin/Tasks';
import Users from './pages/Admin/Users';
import Index from './pages/Index';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route path='' element={<Index />} />
        </Route>
        <Route path='/admin' element={<PrivateLayout />}>
          <Route path='' element={<IndexAdmin />} />
          <Route path='users' element={<Users />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='perfil' element={<Profile />} />
        </Route>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
