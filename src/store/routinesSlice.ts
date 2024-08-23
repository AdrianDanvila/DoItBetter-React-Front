import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Routine } from '@/types/interfaces'

export interface RoutinesState {
  ownRoutines: Routine[]
  published: Routine[]
}

const initialState: RoutinesState = {
  ownRoutines: [
    {
      id: 1,
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      description: 'c',
    },
    { id: 2, name: 'b', description: 'c' },
    { id: 3, name: 'c', description: 'c' },
    { id: 4, name: 'd', description: 'c' },
    { id: 5, name: 'e', description: 'c' },
    { id: 6, name: 'g', description: 'c' },
  ],
  published: [],
}

const routinesSlice = createSlice({
  name: 'routines',
  initialState,
  reducers: {
    addRoutine: (state, action: PayloadAction<Routine>) => {
      state.ownRoutines.push(action.payload)
    },
    deleteRoutine: (state, action: PayloadAction<Routine>) => {
      const filteredValues = state.ownRoutines.filter(
        (value) => value.id != action.payload?.id,
      )

      if (filteredValues.length === state.ownRoutines.length) {
        return
      }

      state.ownRoutines = filteredValues
    },
    editRoutine: (
      state,
      action: PayloadAction<{ index: number; newData: Routine }>,
    ) => {
      state.ownRoutines[action.payload.index] = action.payload.newData
    },
  },
})

export const { addRoutine, deleteRoutine, editRoutine } = routinesSlice.actions
export default routinesSlice.reducer
