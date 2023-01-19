import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  productInBasket: [],
  pending: false,
  error: null,
}

export const postInBasket = createAsyncThunk(
  'postInBasket/fetch',
  async ({ name, image, price }, thunkAPI) => {
    //console.log(image)
    //console.log(price)
    // console.log(name)

    try {
      const res = await fetch('http://localhost:4000/baskets', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${
            thunkAPI.getState().authorizationSlice.token
          }`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image, price, name }),
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

export const getFromBasket = createAsyncThunk(
  'getFromBasket/fetch',
  async (data, thunkAPI) => {
    try {
      const res = await fetch('http://localhost:4000/baskets', {
        headers: {
          Authorization: `Bearer ${
            thunkAPI.getState().authorizationSlice.token
          }`,
        },
      })
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

export const deleteFromBasket = createAsyncThunk(
  'deleteFromBasket/fetch',
  async (data, thunkAPI) => {
    console.log(data)
    try {
      const res = await fetch(`http://localhost:4000/baskets/${data}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${
            thunkAPI.getState().authorizationSlice.token
          }`,
        },
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

const basketSlice = createSlice({
  name: 'basketProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postInBasket.pending, (state, action) => {
        state.pending = true
        state.error = false
      })
      .addCase(postInBasket.fulfilled, (state, action) => {
        state.pending = false
        state.error = false
        state.productInBasket.push(action.payload)
      })
      .addCase(postInBasket.rejected, (state, action) => {
        state.pending = false
        state.error = action.payload
      })
      .addCase(getFromBasket.pending, (state, action) => {
        state.pending = true
        state.error = false
      })
      .addCase(getFromBasket.fulfilled, (state, action) => {
        state.pending = false
        state.error = false
        state.productInBasket = action.payload
      })
      .addCase(getFromBasket.rejected, (state, action) => {
        state.pending = false
        state.error = action.payload
      })
      .addCase(deleteFromBasket.pending, (state, action) => {
        state.pending = true
        state.error = false
      })
      .addCase(deleteFromBasket.fulfilled, (state, action) => {
        state.pending = false
        state.error = false

        state.productInBasket = state.productInBasket.filter((item) => {
          if (item._id !== action.payload._id) {
            return true
          }
        })
      })
      .addCase(deleteFromBasket.rejected, (state, action) => {
        state.error = action.payload
        state.pending = false
      })
  },
})

export default basketSlice.reducer
