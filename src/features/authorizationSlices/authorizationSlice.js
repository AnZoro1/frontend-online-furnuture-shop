import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('token'),
  error: null,
  signingUp: false,
  signingIn: false,
}

export const authSignUp = createAsyncThunk(
  'auth/signUp',
  async ({ login, password, email }, thunkAPI) => {
    try {
      const res = await fetch('http://localhost:4000/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        body: JSON.stringify({ login, password, email }),
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

export const authSignIn = createAsyncThunk(
  'auth/signIn',
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        body: JSON.stringify({ login, password }),
      })

      const token = await res.json()

      if (token.error) {
        return thunkAPI.rejectWithValue(token.error)
      }

      localStorage.setItem('token', token)

      return token
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const authorizationSlice = createSlice({
  name: 'authorizationSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignUp.pending, (state, action) => {
        state.signingUp = true
        state.error = false
      })
      .addCase(authSignUp.fulfilled, (state, action) => {
        state.signingUp = false
        state.error = false
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.error = action.payload
        state.signingUp = false
      })
      .addCase(authSignIn.pending, (state, action) => {
        state.signingIn = true
        state.error = null
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.token = action.payload
        state.signingIn = false
        state.error = null
      })
      .addCase(authSignIn.rejected, (state, action) => {
        state.error = action.payload
        state.signingIn = false
      })
  },
})

export default authorizationSlice.reducer
