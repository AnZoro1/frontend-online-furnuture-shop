import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authSignIn } from '../../features/authorizationSlices/authorizationSlice'

const SignIn = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const error = useSelector((state) => state.authorizationSlice.error)

  const handleLogin = (e) => {
    setLogin(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    dispatch(authSignIn({ login, password }))
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <form action="" onSubmit={handleSignIn}>
      <input
        type="text"
        value={login}
        placeholder="login"
        onChange={handleLogin}
      />
      <br />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={handlePassword}
      />
      <br />
      <button type="submit">auth</button>
    </form>
  )
}

export default SignIn
