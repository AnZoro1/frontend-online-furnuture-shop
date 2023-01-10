import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostProducts } from '../../features/productsSlice'

const Admin = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState(null)
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()
  const error = useSelector((state) => state.productsSlice.error)


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
    <form action="" onSubmit={handleSubmit}>
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
  )
}

export default Admin
