import React from 'react'
import styles from './Product.module.scss'

const Product = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.name}>{props.name}</div>
        <img className={styles.images} src={props.imageSrc} alt="product" />
        <div className={styles.price}>{props.price}</div>
        <button className={styles.buy}>Купить</button>
      </div>
    </div>
  )
}

export default Product
