import { AxiosRequestConfig } from 'axios'

export const API_BASE_URL = {
  AUTH: '/auth',
  USER: '/user',
  ROUTINE: '/routine',
}

export const API_URL = {
  signupUser: `${API_BASE_URL.AUTH}/signup`,
  Login: `${API_BASE_URL.AUTH}/login`,
  UserInfo: `${API_BASE_URL.USER}/me`,
}

export const DEFAULT_HEADERS: AxiosRequestConfig<string> = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}
