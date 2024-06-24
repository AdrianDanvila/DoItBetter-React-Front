import { TABLE_DATA } from '@components/providers/constants.ts'

import {
  ConstantObjectData,
  ProvidersPayloadParams,
} from '@customTypes/interfaces.ts'

const modalReferences = ['businessName', 'province', 'sector']

export const DEFAULT_FETCH_PROVIDERS: ProvidersPayloadParams = {
  numPage: 0,
  isActive: true,
  searchTerm: '',
}
export const MODAL_TABLE_DATA: ConstantObjectData[] = TABLE_DATA.filter(
  ({ reference }) => modalReferences.includes(reference),
)
