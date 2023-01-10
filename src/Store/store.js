import { configureStore } from '@reduxjs/toolkit'
import authorizationSlice from '../features/authorizationSlices/authorizationSlice'
import basketSlice from '../features/basketSlice'
import productsSlice from '../features/productsSlice'

export const store = configureStore({
  reducer: {
    authorizationSlice,
    productsSlice,
    basketSlice,
  },
})
