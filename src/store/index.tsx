import { combineReducers, configureStore } from '@reduxjs/toolkit'

import routinesSlice from './routinesSlice.ts'
import userSlice from './userSlice.ts'

const rootReducer = combineReducers({
  routines: routinesSlice,
  user: userSlice,
})

export const index = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof index.getState>
export type AppDispatch = typeof index.dispatch
