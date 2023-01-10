import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFromBasket } from '../../features/basketSlice'
import styles from './Basket.module.scss'

const Basket = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFromBasket())
  }, [])

  const productInBasket = useSelector(
    (state) => state.basketSlice.productInBasket
  )
  console.log(productInBasket)
  return (
    <div className={styles.basket}>
      {productInBasket.map((item) => {
        return (
          <div className={styles.main}>
            <div className={styles.name}>{item.name}</div>
            <div>
              <img src={`http://localhost:4000/` + item.imageSrc} alt="" />
            </div>
            <div className={styles.price}>{item.price}</div>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Basket
