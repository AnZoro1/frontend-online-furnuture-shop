import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetProducts } from '../../features/productsSlice'
import Product from './Product'
import styles from './Products.module.scss'

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGetProducts())
  }, [])

  const productsState = useSelector((state) => state.productsSlice.products)
  console.log(productsState)

  return (
    <>
      <div className={styles.main}>
        {productsState.map((item) => {
          return (
            <Product
              name={item.name}
              imageSrc={`http://localhost:4000/` + item.imageSrc}
              price={item.price}
              image={item.imageSrc}
              id={item._id}
              countProd={item.countProd}
             
            />
          )
        })}
      </div>
      <hr className={styles.hr2} />
    </>
  )
}

export default Products
