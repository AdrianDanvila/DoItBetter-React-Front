import type { Dispatch } from 'redux'

//set here the needed types for the entire app

export interface RegisteredUser extends User {
  id: number
  isTrainer: boolean
  routines: Routine[]
}

export interface User {
  name: string
  age: number
  email: string
  password: string
  weight: number
  height: number
}

export interface Routine {
  id: number
  name: string
  description: string
  exercises?: Exercise[]
  record?: []
  published?: boolean
}

export interface Exercise {
  id: number
  name: string
  photo: string
  description: string
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
