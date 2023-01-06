import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  pending: false,
  error: null,
}

export const fetchPostProducts = createAsyncThunk(
  'postProducts/fetch',
  async ({ name, image, price }, thunkAPI) => {
    const formData = new FormData()
    formData.append('name', name) // key and value должны точно совпадать
    formData.append('image', image)
    formData.append('price', price)

    try {
      const res = await fetch('http://localhost:4000/products', {
        method: 'POST',
        body: formData,
      })

      const json = await res.json()

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error)
      }
      return json
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const fetchGetProducts = createAsyncThunk(
  'getProducts/fetch',
  async (data, thunkAPI) => {
    try {
      const res = await fetch('http://localhost:4000/products')
      const products = await res.json()

      if (products.error) {
        return thunkAPI.rejectWithValue(products.error)
      }
      console.log(products)
      return products
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostProducts.pending, (state, action) => {
        state.pending = true
        state.error = false
      })
      .addCase(fetchPostProducts.fulfilled, (state, action) => {
        state.pending = false
        state.error = false
      })
      .addCase(fetchPostProducts.rejected, (state, action) => {
        state.pending = false
        state.error = action.payload
      })
      .addCase(fetchGetProducts.pending, (state, action) => {
        state.pending = true
        state.error = false
      })
      .addCase(fetchGetProducts.fulfilled, (state, action) => {
        state.pending = false
        state.error = false
        state.products = action.payload
      })
      .addCase(fetchGetProducts.rejected, (state, action) => {
        state.pending = false
        state.error = action.payload
      })
  },
})

export default productsSlice.reducer
