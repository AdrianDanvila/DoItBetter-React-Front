import { AxiosRequestConfig } from 'axios'

export const API_BASE_URL = {
  AUTH: '/auth',
  USER: '/user',
  ROUTINE: '/routine',
  EXERCISE: '/exercise',
}

export const API_URL = {
  signupUser: `${API_BASE_URL.AUTH}/signup`,
  Login: `${API_BASE_URL.AUTH}/login`,
  me: `${API_BASE_URL.USER}/me`,
  publishedRoutines: `${API_BASE_URL.ROUTINE}/published`,
  testToken: `${API_BASE_URL.AUTH}/token`,
  uploadImage: `${API_BASE_URL.USER}/upload`,
  uploaRoutinedImage: `${API_BASE_URL.ROUTINE}/upload`,
}

export const DEFAULT_HEADERS: AxiosRequestConfig<string> = {
  headers: {
    'Content-Type': 'application/json',
  },
}
