import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authSignUp } from '../../features/authorizationSlices/authorizationSlice'

const SignUp = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const error = useSelector((state) => state.authorizationSlice.error)

  const handleSetLogin = (e) => {
    setLogin(e.target.value)
  }

  const handleSetPassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSetEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    dispatch(authSignUp({ login, password, email }))
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <form action="" onSubmit={handleSignUp}>
      <input
        type="text"
        value={login}
        placeholder="login..."
        onChange={handleSetLogin}
      />
      <br />
      <input
        type="password"
        value={password}
        placeholder="password..."
        onChange={handleSetPassword}
      />
      <br />
      <input type="text" value={email} placeholder='email...' onChange={handleSetEmail}/>
      <br />
      <button type="submit">registr</button>
    </form>
  )
}

export default SignUp
