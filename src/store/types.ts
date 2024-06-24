
import {  Provider } from '@customTypes/interfaces.ts'

interface ProviderDataTable extends DefaultState {
  data: Provider[]
}


export interface ProvidersState {
  actives: ProviderDataTable
  inactives: ProviderDataTable
}

export interface DefaultState {
  numPages: number
  currentPage: number
}

