import { combineReducers, configureStore } from '@reduxjs/toolkit'

import providersSlice from './providersSlice.ts'

const rootReducer = combineReducers({
  providers: providersSlice,
})

export const index = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof index.getState>
export type AppDispatch = typeof index.dispatch
