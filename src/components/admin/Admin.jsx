import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteFetchProducts,
  fetchGetProducts,
  fetchPostProducts,
} from '../../features/productsSlice'
import styles from './Admin.module.scss'
import AdminContent from './AdminContent'

const Admin = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState(null)
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()
  const error = useSelector((state) => state.productsSlice.error)
  const products = useSelector((state) => state.productsSlice.products)

  useEffect(() => {
    dispatch(fetchGetProducts())
  }, [])

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }
  const handleImage = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchPostProducts({ name, image, price }))
  }

  

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className={styles.main}>
      <div className={styles.text}>
        Добро пожаловать админ! <br /> Для добавления новой продукции в
        приложение, введите имя, выберите файл и укажите цену. <br /> Продукция
        автоматически отправится на бэкенд, оттуда вернется и отрендерится в
        приложении!
      </div>{' '}
      <form className={styles.form} action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name..."
          value={name}
          onChange={handleName}
        />
        <br />
        <input type="file" name="file" onChange={handleImage} />
        <br />
        <input
          type="text"
          placeholder="price..."
          value={price}
          onChange={handlePrice}
        />
        <br />
        <button>Отправить</button>
      </form>
      <div className={styles.content}>
        {products.map((item) => {
          return (
            <AdminContent
              name={item.name}
              price={item.price}
              image={item.imageSrc}
              id={item._id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Admin
