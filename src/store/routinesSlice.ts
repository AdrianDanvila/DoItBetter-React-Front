/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { uploaRoutinedImage } from '@/api/services'
// eslint-disable-next-line no-duplicate-imports
import {
  addRoutineExercise,
  createNewRoutine,
  deleteRoutineByid,
  deleteRoutineExercise,
  getAllPublishedRoutines,
  getRoutineExercises,
  getUserRoutines,
  toggleRoutinePublished,
} from '@/api/services'
import { isUndefined } from '@/helpers'
import { Exercise, Routine, RoutineExercise } from '@/types/interfaces'

export interface RoutinesState {
  ownRoutines: Routine[]
  published: Routine[]
}

export const getRoutines = createAsyncThunk(
  'routine/getRoutines',
  async (_routineData, { rejectWithValue }) => {
    try {
      const response = await getUserRoutines()

      // Si no hay error, retornamos los datos como éxito
      return response // Si es exitoso, devolvemos la respuesta
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.message) // Si falla, devolvemos el error
    }
  },
)

export const getPublishedRoutines = createAsyncThunk(
  'routine/getPublishedRoutines',
  async (_routineData, { rejectWithValue }) => {
    try {
      const response = await getAllPublishedRoutines()
      return response
    } catch (error: any) {
      return rejectWithValue(error.message) // Si falla, devolvemos el error
    }
  },
)

export const deleteRoutine = createAsyncThunk(
  'routine/deleteRoutines',
  async (routine: Routine, { rejectWithValue }) => {
    try {
      const response = await deleteRoutineByid(routine.id)

      // Si no hay error, retornamos los datos como éxito
      if (response) return routine // Si es exitoso, devolvemos la respuesta
    } catch (error: any) {
      return rejectWithValue(error.message) // Si falla, devolvemos el error
    }
  },
)

export const createRoutine = createAsyncThunk(
  'routine/createRoutine',
  async (routineData: Routine, { rejectWithValue }) => {
    try {
      const response = await createNewRoutine(routineData)

      //TODO extraer a su archivo

      // Si no hay error, retornamos los datos como éxito
      return response // Si es exitoso, devolvemos la respuesta
    } catch (error: any) {
      return rejectWithValue(error.message) // Si falla, devolvemos el error
    }
  },
)

export const uploadRoutineImageAction = createAsyncThunk(
  'routine/uploadRoutineImageAction',
  async (_routineData: { file: FormData; id: number }, { rejectWithValue }) => {
    try {
      const response = await uploaRoutinedImage(
        _routineData.file,
        _routineData.id,
      )

      // Si no hay error, retornamos los datos como éxito
      return response // Si es exitoso, devolvemos la respuesta
    } catch (error: any) {
      return rejectWithValue(error.message) // Si falla, devolvemos el error
    }
  },
)

export const addExercise = createAsyncThunk(
  'routine/addExercise',
  async (
    requestData: {
      routineId: number
      exerciseData: RoutineExercise
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await addRoutineExercise(
        requestData.routineId,
        requestData.exerciseData,
      )

      //TODO extraer a su archivo

      // Si no hay error, retornamos los datos como éxito
      return { requestData, response } // Si es exitoso, devolvemos la respuesta
    } catch (error: any) {
      return rejectWithValue(error.message) // Si falla, devolvemos el error
    }
  },
)

export const deleteExercise = createAsyncThunk(
  'routine/delete',
  async (
    requestData: {
      routineId: number
      exerciseData: RoutineExercise
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await deleteRoutineExercise(
        requestData.routineId,
        requestData.exerciseData,
      )

      //TODO extraer a su archivo

      // Si no hay error, retornamos los datos como éxito
      return { requestData, response } // Si es exitoso, devolvemos la respuesta
    } catch (error: any) {
      return rejectWithValue(error.message) // Si falla, devolvemos el error
    }
  },
)

export const getExercises = createAsyncThunk(
  'routine/getExercises',
  async (routineId: number, { rejectWithValue }) => {
    try {
      const response = await getRoutineExercises(routineId)

      return { routineId, response } // Si es exitoso, devolvemos la respuesta
    } catch (error: any) {
      return rejectWithValue(error.message) // Si falla, devolvemos el error
    }
  },
)

export const togglePublishedRoutine = createAsyncThunk(
  'routine/togglePublishedRoutine',
  async (routineId: number, { rejectWithValue }) => {
    try {
      const response = await toggleRoutinePublished(routineId)

      return { routineId, response } // Si es exitoso, devolvemos la respuesta
    } catch (error: any) {
      return rejectWithValue(error.message) // Si falla, devolvemos el error
    }
  },
)

const initialState: RoutinesState = {
  ownRoutines: [
    {
      id: 1,
      name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      description: 'c',
      exercises: [
        {
          id: 1,
          name: 'aa',
          photo: 'a',
          description: 'aa',
          sets: 0,
          weight: 0,
          reps: 0,
        },
      ],
      user_id: 0,
      user_name: null,
    },
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
    editRoutine: (
      state,
      action: PayloadAction<{ index: number; newData: Routine }>,
    ) => {
      state.ownRoutines[action.payload.index] = action.payload.newData
    },
    addExercise2: (
      state,
      action: PayloadAction<{ id: number; exercise: Exercise }>,
    ) => {
      state.ownRoutines
        .find((routine) => routine.id === action.payload.id)
        ?.exercises?.push(action.payload.exercise)
    },
    editExercise: (
      state,
      action: PayloadAction<{ index: number; newData: Routine }>,
    ) => {
      state.ownRoutines[action.payload.index] = action.payload.newData
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createRoutine.fulfilled, (state, action) => {
      state.ownRoutines.push(action.payload.data)
      // Añadir la rutina creada
    })
    builder.addCase(getRoutines.fulfilled, (state, action) => {
      state.ownRoutines = action.payload.data
      // Añadir la rutina creada
    })
    builder.addCase(deleteRoutine.fulfilled, (state, action) => {
      const filteredValues = state.ownRoutines.filter(
        (value) => value.id != action.payload?.id,
      )

      if (filteredValues.length === state.ownRoutines.length) {
        return
      }

      state.ownRoutines = filteredValues
    })
    builder.addCase(getExercises.fulfilled, (state, action) => {
      const tempRoutine =
        state.published.find((x) => x.id === action.payload.routineId) ||
        state.ownRoutines.find((x) => x.id === action.payload.routineId)

      if (tempRoutine) {
        tempRoutine.exercises = action.payload.response.data
      }
      console.log('paso')
    })

    builder.addCase(uploadRoutineImageAction.fulfilled, (state, action) => {
      const tempRoutine = state.ownRoutines.find(
        (x) => x.id === action.payload.data.id,
      )

      if (tempRoutine) {
        tempRoutine.routinePictureName = action.payload.data.routinePictureName
        tempRoutine.routinePicturePath = action.payload.data.routinePicturePath
      }
    })
    builder.addCase(addExercise.fulfilled, (state, action) => {
      const tempRoutine = state.ownRoutines.find(
        (x) => x.id === action.payload.requestData.routineId,
      )
      if (tempRoutine) {
        tempRoutine.exercises = action.payload.response.data
      }
    })
    builder.addCase(deleteExercise.fulfilled, (state, action) => {
      const tempRoutine = state.ownRoutines.find(
        (x) => x.id === action.payload.requestData.routineId,
      )
      if (tempRoutine) {
        tempRoutine.exercises = action.payload.response.data
      }
    })

    builder.addCase(togglePublishedRoutine.fulfilled, (state, action) => {
      const tempRoutine = state.ownRoutines.find(
        (x) => x.id === action.payload.routineId,
      )
      if (tempRoutine) {
        tempRoutine.published = !tempRoutine.published
      }
    })
    builder.addCase(getPublishedRoutines.fulfilled, (state, action) => {
      state.published = action.payload.data
      // Añadir la rutina creada
    })
  },
})

export const { addRoutine, editRoutine, addExercise2, editExercise } =
  routinesSlice.actions
export default routinesSlice.reducer
