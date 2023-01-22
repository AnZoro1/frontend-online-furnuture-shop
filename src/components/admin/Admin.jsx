import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteFetchProducts,
  fetchGetProducts,
  fetchPostProducts,
} from '../../features/productsSlice'
import { getUsersFetch } from '../../features/usersSlice'
import styles from './Admin.module.scss'
import AdminContent from './AdminContent'
import Users from './Users'

const Admin = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState(null)
  const [price, setPrice] = useState('')
  const [countProd, setCountProd] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGetProducts())
    dispatch(getUsersFetch())
  }, [])

  const error = useSelector((state) => state.productsSlice.error)
  const products = useSelector((state) => state.productsSlice.products)
  const error2 = useSelector((state) => state.usersSlice.error)
  const users = useSelector((state) => state.usersSlice.users)

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }
  const handleImage = (e) => {
    setImage(e.target.files[0])
  }

  const handleCountProd = (e) => {
    setCountProd(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchPostProducts({ name, image, price, countProd }))
  }

  if (error) {
    return <div>{error}</div>
  }
  if (error2) {
    return <div>{error2}</div>
  }

  return (
    <div className={styles.main}>
      <div className={styles.text}>
        Админка! <br /> Для добавления новой продукции в приложение, введите
        имя, выберите файл и укажите цену. <br /> Продукция автоматически
        отправится на бэкенд, оттуда вернется и отрендерится в приложении! Кроме
        того, вы можете добавлять и удалять продукты проекта, а также удалять
        пользователей! <br /> Здесь вы видите список всех продуктов и
        пользователей.
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
        <input
          type="text"
          placeholder="countProd..."
          value={countProd}
          onChange={handleCountProd}
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
              countProd={item.countProd}
              id={item._id}
            />
          )
        })}
      </div>
      <div className={styles.users}>
        {users.map((item) => {
          return <Users users={item.login} id={item._id} />
        })}
      </div>
    </div>
  )
}

export default Admin
