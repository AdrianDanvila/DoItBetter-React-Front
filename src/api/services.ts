//Define here the needed function to call the backend

import axios from 'axios'

import { API_BASE_URL, API_URL, DEFAULT_HEADERS } from './constants'

import { User } from '@/types/interfaces'

export const registerUser = ({
  name,
  age,
  weight,
  height,
  email,
  password,
}: User) =>
  axios
    .post(
      API_URL.signupUser,
      {
        name,
        age,
        weight,
        height,
        email,
        password,
      },
      {
        headers: DEFAULT_HEADERS.headers,
      },
    )
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error.data
    })

export const loginUser = (email: string, password: string) =>
  axios
    .post(API_URL.UserInfo, { email, password })
    .then((respose) => {
      axios.defaults.headers.common = {
        Authorization: `Bearer ${respose.data.token}`,
      }
      return respose.status
    })
    .catch((error) => error.data)

export const getUser = () =>
  axios
    .get(API_URL.UserInfo)
    .then((response) => response.data)
    .catch((error) => error.data)

export const deleteRoutine = (id: number) => {
  axios
    .delete(API_BASE_URL.ROUTINE, {
      data: { id },
      headers: DEFAULT_HEADERS.headers,
    })
    .then((response) => response.data)
    .catch((error) => error.data)
}
