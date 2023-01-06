import React from 'react'
import styles from './Product.module.scss'

const Product = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className="name">{props.name}</div>
        <img className={styles.images} src={props.imageSrc} alt="product" />
        <div className="price">{props.price}</div>
      </div>
    </div>
  )
}

export default Product
