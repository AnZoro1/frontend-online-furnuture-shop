import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUsersFetch } from '../../features/usersSlice'
import styles from './Admin.module.scss'
const Users = (props) => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    console.log(id)
    dispatch(deleteUsersFetch(id))
  }
  return (
    <div className={styles.usersContent}>
      {' '}
      <div>Пользователь</div>
      {'Login - ' + props.users + ' - ' + 'ID - ' + props.id}
      <button onClick={() => handleDelete(props.id)}>х</button>
    </div>
  )
}

export default Users
