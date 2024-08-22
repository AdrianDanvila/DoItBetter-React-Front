import { combineReducers, configureStore } from '@reduxjs/toolkit'

import routinesSlice from './routinesSlice.ts'

const rootReducer = combineReducers({
  routines: routinesSlice,
})

export const index = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof index.getState>
export type AppDispatch = typeof index.dispatch
