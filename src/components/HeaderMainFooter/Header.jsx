import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <>
      <div className={styles.main}>
        <div>Каталог</div>
        <div>Индивидуальная мебель</div>
        <div>Контакты</div>
        <div>
          <img className={styles.image} src="../../karto.png" alt="" />
        </div>
        <div>О компании</div>
        <div>+90 (222)-00-00 </div>
        <div>
          <button className={styles.basketButton}>
            <img className={styles.basket} src="../../basket.png" alt="" />
          </button>
        </div>
      </div>
      <hr className={styles.hr} />
    </>
  )
}

export default Header
