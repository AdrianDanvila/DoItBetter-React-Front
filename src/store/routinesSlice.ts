import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Routine } from '@/types/interfaces'

export interface RoutinesState {
  ownRoutines: Routine[]
  published: Routine[]
}

const initialState: RoutinesState = {
  ownRoutines: [],
  published: [],
}

const routinesSlice = createSlice({
  name: 'routines',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addRoutine: (state, action: PayloadAction<Routine>) => {
      const newRoutine: Routine = action.payload as Routine
      state.ownRoutines.push(newRoutine)
    },
  },
})

//xport { fetchProvidersByStatus }
export default routinesSlice.reducer
