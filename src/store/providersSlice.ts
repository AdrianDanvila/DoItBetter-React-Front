//import axios from 'axios'
import {
 // AsyncThunk,
 // createAsyncThunk,
  createSlice,
//  PayloadAction,
} from '@reduxjs/toolkit'

/*
import { API_URL, DEFAULT_HEADERS } from '@api/constants.ts'

import {
  AsyncThunkConfig,
  ProvidersPayloadParams,
} from '@customTypes/interfaces.ts'
*/
import { ProvidersState } from './types.ts'

/*const fetchProvidersByStatus: AsyncThunk<
  ProvidersPayloadAction,
  ProvidersPayloadParams,
  AsyncThunkConfig
> = createAsyncThunk(
  'providers/fetchByStatus',
  async ({ numPage, isActive, searchTerm }: ProvidersPayloadParams) => {
    const params = {
      offset: numPage,
      active: isActive ? 1 : 0,
      businessName: searchTerm,
    }
    const response = await axios.get(API_URL.providers.list, {
      headers: DEFAULT_HEADERS.headers,
      params,
    })
    return { data: response.data, isActive }
  },
)*/

const initialState: ProvidersState = {
  actives: { data: [], numPages: 1, currentPage: 0 },
  inactives: { data: [], numPages: 1, currentPage: 0 },
}

const providersSlice = createSlice({
  name: 'providers',
  initialState,
  reducers: {},

  /*extraReducers: (builder) => {
    builder.addCase(
      fetchProvidersByStatus.fulfilled,
      (state, action: PayloadAction<ProvidersPayloadAction>) => {
     
      },
    )
  },*/
})

//xport { fetchProvidersByStatus }
export default providersSlice.reducer
