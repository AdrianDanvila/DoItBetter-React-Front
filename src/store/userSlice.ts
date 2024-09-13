import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { loginUser as loginApiUser } from '@/api/services'
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

const initialState: userSate = {
  user: {
    email: '',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // Añadir la rutina creada
      console.log(action.payload.data.user)
      state.user = action.payload.data.user
    })
  },
})

//export const { a } = userSlice.actions
export default userSlice.reducer
