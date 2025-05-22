import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/root/Navbar'
import HomePage from './pages/Home'
import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'
import NotFoundPage from './pages/NotFound'
import DashboardPage from './pages/admin/Dashboard'



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
