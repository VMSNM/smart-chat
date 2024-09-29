import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import FloatingShape from './layout/FloatingShape'
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const { authUser } = useAuthContext();
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <div className='min-h-screen bg-gradient-to-br
      from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden pt-4 pb-4'
      >
        <FloatingShape color="bg-cyan-300" size="w-64 h-64" top="-5%" left="10%" delay={2} />
        <FloatingShape color="bg-green-100" size="w-48 h-48" top="70%" left="60%" delay={5} />
        <FloatingShape color="bg-violet-300" size="w-32 h-32" top="40%" left="-10%" delay={0} />
        <FloatingShape color={'bg-green-200'} size="w-56 h-56" top="-5%" left="80%" delay={3.5} />

        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'} />} />
          <Route path='/login' element={authUser ? <Navigate to={'/'} /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to={'/'} /> : <Signup />} />
        </Routes>
        <Toaster />
      </div>
    </ThemeProvider>
  )
}

export default App;


{/* <div className='p-4 h-screen flex items-center justify-center'> */}