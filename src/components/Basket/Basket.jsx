import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromBasket, getFromBasket } from '../../features/basketSlice'
import styles from './Basket.module.scss'

const Basket = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFromBasket())
  }, [])

  const handleId = (id) => {
    dispatch(deleteFromBasket(id))
  }

  const productInBasket = useSelector(
    (state) => state.basketSlice.productInBasket
  )
 

  if (productInBasket.length < 1) {
    return <div>Добавьте товар в корзину</div>
  }
  return (
    <div className={styles.basket}>
      {productInBasket.map((item) => {
        return (
          <div className={styles.main}>
            <div className={styles.nameAndButton}>
              {' '}
              <div className={styles.name}>{item.name}</div>{' '}
              <div>
                <button
                  className={styles.deleteProdFromBask}
                  onClick={() => handleId(item._id)}
                >
                  x
                </button>
              </div>
            </div>

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
