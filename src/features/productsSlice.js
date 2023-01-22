import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  pending: false,
  error: null,
}

export const fetchPostProducts = createAsyncThunk(
  'postProducts/fetch',
  async ({ name, image, price /*, countProd */ }, thunkAPI) => {
    const formData = new FormData()
    formData.append('name', name) // key and value должны точно совпадать
    formData.append('image', image)
    formData.append('price', price)
    //  formData.append('countProd', countProd)

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

      return products
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deleteFetchProducts = createAsyncThunk(
  'deleteProduct7fetch',
  async (data, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/products/${data}`, {
        method: 'DELETE',
      })
      const products = await res.json()

      if (res.ok) {
        console.log('product remove successfully')
      }

      if (products.error) {
        return thunkAPI.rejectWithValue(products.error)
      }
      return thunkAPI.fulfillWithValue(products)
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
        state.products.push(action.payload)
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
      .addCase(deleteFetchProducts.pending, (state, action) => {
        state.pending = true
        state.error = false
      })
      .addCase(deleteFetchProducts.fulfilled, (state, action) => {
        state.pending = false
        state.error = false
        state.products = state.products.filter((item) => {
          if (item._id !== action.payload._id) {
            return true
          }
        })
      })
      .addCase(deleteFetchProducts.rejected, (state, action) => {
        state.pending = false
        state.error = false
        state.error = action.payload
      })
  },
})

export default productsSlice.reducer
