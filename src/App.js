import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import Admin from './components/admin/Admin'
import SignIn from './components/authorization/SignIn'
import SignUp from './components/authorization/SignUp'
import Main from './components/HeaderMainFooter/Main'

function App() {
  const token = useSelector((state) => state.authorizationSlice.token)
  

  if (!token) {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products" element={<Admin />} />
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/auth" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
