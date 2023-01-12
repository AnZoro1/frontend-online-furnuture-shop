import React, { useState } from 'react'
import Basket from '../Basket/Basket'
import styles from './Header.module.scss'

const Header = () => {
  const [basket, setBasket] = useState(false)
  const handleBasket = () => {
    setBasket(true)
  }
  const handleBasket2 = () => {
    setBasket(false)
  }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.one}>Каталог</div>
        <div className={styles.two}>Индивидуальная мебель</div>
        <div className={styles.three}>Контакты</div>
        <div className={styles.four}>
          <img className={styles.image} src="../../karto.png" alt="" />
        </div>
        <div className={styles.five}>О компании</div>
        <div className={styles.six}>+90 (222)-00-00 </div>
        <div>
          <button className={styles.basketButton} onClick={handleBasket}>
            <img className={styles.basket} src="../../basket.png" alt="" />
          </button>
        </div>
        {basket ? (
          <>
            <div className={styles.divForBasketAndButtonClose}>
              <Basket />{' '}
              <div className={styles.buttonBasketClose}>
                <button
                  className={styles.buttonBasketClose2}
                  onClick={handleBasket2}
                >
                  закрыть корзину
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <hr className={styles.hr} />
    </>
  )
}

export default Header
