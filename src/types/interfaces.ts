import type { Dispatch } from 'redux'

//set here the needed types for the entire app

export interface RegisteredUser extends User {
  isTrainer: boolean
  routines: Routine[]
}

export interface User {
  id?: number
  name?: string
  age?: number
  email: string
  password?: string
  profilePictureName?: string
  weight?: number
  height?: number
}

export interface Routine {
  id: number
  name: string
  description: string
  routinePicturePath?: string
  routinePictureName?: string
  exercises?: Exercise[]
  comments?: Comment[]
  record?: []
  published?: boolean
  user_id: number
  user_name: null
}

export interface Comment {
  id: number
  content: string
  user_id: number
  user_name: string
}

export interface Exercise {
  id: number
  name: string
  description: string
  exercise: {
    id: number
    name: string
    photo: string
    description: string
    video: string
  }
  sets: number
  weight: number
  reps: number
}

export interface RoutineExercise {
  id: number
  sets: number
  weight: number
  reps: number
}

export interface BreakPoints {
  tablet: number
  desktop: number
}

export interface ConstantObjectData {
  [key: string]: string
}

//This interface is need to be created in the project to manage AsyncThunks due to an issue that not allow to import the type AsyncThunkConfig from his library
export interface AsyncThunkConfig {
  state?: unknown
  dispatch?: Dispatch
  extra?: unknown
  rejectValue?: unknown
  serializedErrorType?: unknown
  pendingMeta?: unknown
  fulfilledMeta?: unknown
  rejectedMeta?: unknown
}
