import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import { authSignIn } from '../../features/authorizationSlices/authorizationSlice'
import styles from './SignIn.module.scss'
import SignUp from './SignUp'

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
    <div className={styles.main}>
      <header>
        <div className={styles.containerCircle}>
          <div className={styles.circle}></div>
        </div>
      </header>
      <main>
        <div className={styles.profileDiv}>
          <img className={styles.imageProfile} src="mebelProfile.jpg" alt="" />
        </div>
        <div className={styles.textAndButton}>
          {' '}
          <div className={styles.text}>
            Магазин открыт только для зарегистрированных пользователей. Если вы
            зарегистрированы, введите в форме логин и пароль. Если вы все еще не
            зарегистрированы, вы можете сделать это здесь...
          </div>{' '}
          <div className={styles.buttonDiv}>
            <Link className={styles.link} to="/auth">
              Зарегистрироваться
            </Link>
          </div>
        </div>
        <div className={styles.formDiv}>
          <form action="" onSubmit={handleSignIn}>
            <input
              className={styles.input1}
              type="text"
              value={login}
              placeholder="login"
              onChange={handleLogin}
            />
            <br />
            <input
              className={styles.input1}
              type="password"
              value={password}
              placeholder="password"
              onChange={handlePassword}
            />
            <br />
            <button className={styles.buttonAuth} type="submit">
              auth
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default SignIn
