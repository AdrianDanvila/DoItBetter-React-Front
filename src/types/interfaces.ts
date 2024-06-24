import type { Dispatch } from 'redux'
//set here the needed types for the entire app

export interface Provider {
  id: number
  businessName: string
  cif: string
  address: string
  province: string
  contact: string
  phoneNumber: string
  email: string
  sector: string
  active: boolean
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

export interface PayloadParams {
  numPage: number
}

export interface RequestsPayloadParams extends PayloadParams {}

export interface ProvidersPayloadParams extends PayloadParams {
  isActive: boolean
  searchTerm?: string
}

export interface ProductsPayloadParams extends PayloadParams {
  isPriced: boolean
}
