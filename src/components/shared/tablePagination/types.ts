import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

import {
  ProductsPayloadParams,
  ProvidersPayloadParams,
  RequestsPayloadParams,
} from '@customTypes/interfaces.ts'

export type Action =
  // We need to add any type because of an error in the usePagination file
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | any
  | ActionCreatorWithPayload<
      number | ProvidersPayloadParams | RequestsPayloadParams | ProductsPayloadParams
    >
 

export interface TablePaginationProps {
  action: Action
  maxPages: number
  isActive?: boolean
  searchTerm?: string
  isPriced?: boolean
}
