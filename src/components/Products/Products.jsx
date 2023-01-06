import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetProducts } from '../../features/productsSlice'
import Product from './Product'
const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGetProducts())
  }, [])

  const productsState = useSelector((state) => state.productsSlice.products)

  return (
    <div>
      {productsState.map((item) => {
        return <Product imageSrc={`http://localhost:4000/` + item.imageSrc} />
      })}
    </div>
  )
}

export default Products
