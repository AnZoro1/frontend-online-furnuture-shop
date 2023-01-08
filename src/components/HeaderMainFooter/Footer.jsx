import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.flex}>
        <div>
          <img className={styles.image} src="../../karto.png" alt="" />
        </div>
        <div className={styles.afterImage1block}>
          <div className={styles.one}>Каталог</div>
          <div className={styles.two}>О компании</div>
          <div className={styles.three}>Индивидуальная мебель</div>
          <div className={styles.four}>Партнерам дизайнерам</div>
        </div>
        <div className={styles.afterImage2block}>
          <div className={styles.one}>2D, 3D модели</div>
          <div className={styles.two}>Шоу-Румы </div>
          <div className={styles.three}>Дилерам</div>
          <div className={styles.four}>Контакты</div>
        </div>
        <div>
          <div className={styles.afterImage3block}>
            <img
              className={styles.facebook}
              src="../../icons8-facebook-новый-48.png"
              alt=""
            />{' '}
            <img
              className={styles.instagram}
              src="../../icons8-instagram-48.png"
              alt=""
            />{' '}
            <p className={styles.phoneNumber}>+90 (222)-00-00</p>
            <button className={styles.buttonConsultation}>
              Персональная консультация
            </button>
          </div>
        </div>
      </div>
      <div className={styles.final}>
        © 2010–2023 Интернет-магазин «Karto» — мебель
      </div>
    </div>
  )
}

export default Footer
