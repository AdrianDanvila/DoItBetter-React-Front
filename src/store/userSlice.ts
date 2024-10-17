import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getUserInfo, loginUser as loginApiUser } from '@/api/services'
import { User } from '@/types/interfaces'

export interface userSate {
  user: User
}

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userData: User, { rejectWithValue }) => {
    try {
      const response = await loginApiUser(userData)

      return response // Si es exitoso, devolvemos la respuesta
    } catch (error) {
      return rejectWithValue(error.message) // Si falla, devolvemos el error
    }
  },
)

export const getUserInfoAction = createAsyncThunk(
  'user/getUserInfo',
  async (_userData, { rejectWithValue }) => {
    try {
      const response = await getUserInfo()
      return response // Si es exitoso, devolvemos la respuesta
    } catch (error) {
      return rejectWithValue(error.message) // Si falla, devolvemos el error
    }
  },
)

const initialState: userSate = {
  user: {
    email: '',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initialize: (state) => {
      const userData = sessionStorage.getItem('userInfo')
      if (userData) {
        state.user = JSON.parse(userData)
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const userData = action.payload.data.user
      sessionStorage.setItem('userInfo', JSON.stringify(userData))
      state.user = userData
    })
    builder.addCase(getUserInfoAction.fulfilled, (state, action) => {
      const userData = action.payload.data
      state.user = userData
    })
  },
})

export const { initialize } = userSlice.actions
export default userSlice.reducer
