import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  pending: false,
  error: null,
}

export const getUsersFetch = createAsyncThunk(
  'getUsers/fetch',
  async (data, thunkAPI) => {
    try {
      const products = await fetch('http://localhost:4000/users', {
        headers: {
          Authorization: `Bearer ${
            thunkAPI.getState().authorizationSlice.token
          }`,
        },
      })

      const json = await products.json()

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error)
      }

      return json
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deleteUsersFetch = createAsyncThunk(
  'deleteUsers/fetch',
  async (data, thunkAPI) => {
    try {
      const users = await fetch(`http://localhost:4000/users/${data}`, {
        method: 'DELETE',
      })

      const json = await users.json()

      if (users.ok) {
        console.log('product remove successfully')
      }

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error)
      }
      return thunkAPI.fulfillWithValue(json)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersFetch.pending, (state, action) => {
        state.pending = true
        state.error = false
      })
      .addCase(getUsersFetch.fulfilled, (state, action) => {
        state.pending = false
        state.error = false
        state.users = action.payload
      })
      .addCase(getUsersFetch.rejected, (state, action) => {
        state.pending = false
        state.error = action.payload
      })
      .addCase(deleteUsersFetch.pending, (state, action) => {
        state.pending = true
        state.error = false
      })
      .addCase(deleteUsersFetch.fulfilled, (state, action) => {
        state.pending = false
        state.error = false
        state.users = state.users.filter((item) => {
          if (item._id !== action.payload._id) {
            console.log(item._id + ' ' + '111')
            console.log(action.payload._id + ' ' + '222')
            return true
          }
        })
      })
      .addCase(deleteUsersFetch.rejected, (state, action) => {
        state.pending = false
        state.error = action.payload
      })
  },
})

export default usersSlice.reducer
