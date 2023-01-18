import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFetchProducts } from '../../features/productsSlice'
import styles from './Admin.module.scss'

const AdminContent = (props) => {
  const dispatch = useDispatch()

  const handleDeleteProduct = (id) => {
    dispatch(deleteFetchProducts(id))
  }
  return (
    <div>
      <div>{props.name}</div>
      <div>
        {' '}
        <img
          className={styles.image}
          src={`http://localhost:4000/` + props.image}
          alt=""
        />
      </div>
      <div>{props.price}</div>
      <button onClick={() => handleDeleteProduct(props.id)}>x</button>
    </div>
  )
}

export default AdminContent
