import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postInBasket } from '../../features/basketSlice'
import styles from './Product.module.scss'

const Product = (props) => {
  const dispatch = useDispatch()
  const [state, setState] = useState([])

  const handleBuy = (name, image, price) => {
    setState({ name, image, price })
    dispatch(postInBasket({ name, image, price }))
  }

  const productsInBasket = useSelector(
    (state) => state.basketSlice.productInBasket
  )

  //console.log(productsInBasket)

  const haveOrNotProdInBask = productsInBasket.find(
    (item) => item.name === props.name
  )
  console.log(haveOrNotProdInBask)

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.name}>{props.name}</div>
        <img className={styles.images} src={props.imageSrc} alt="product" />
        <div className={styles.price}>{props.price}</div>

        <button
          className={styles.buy}
          disabled={haveOrNotProdInBask}
          onClick={() => {
            handleBuy(props.name, props.image, props.price)
          }}
        >
          Купить
        </button>
      </div>
    </div>
  )
}

export default Product
