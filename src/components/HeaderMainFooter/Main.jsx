import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Products from '../Products/Products'
import styles from './Main.module.scss'

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Products />
      <Footer />
    </div>
  )
}

export default Main
