import { configureStore } from '@reduxjs/toolkit'
import authorizationSlice from '../features/authorizationSlices/authorizationSlice'
import productsSlice from '../features/productsSlice'

export const store = configureStore({
  reducer: {
    authorizationSlice,
    productsSlice,
  },
})
