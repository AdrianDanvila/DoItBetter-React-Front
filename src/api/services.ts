//Define here the needed function to call the backend

import axios from 'axios'

import { API_BASE_URL, API_URL, DEFAULT_HEADERS } from './constants'

import { Routine, User } from '@/types/interfaces'
/**
 *
 * @param user
 * @description Register an user in the Api.
 * @returns
 */
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

/**
 *
 * @param email
 * @param password
 * @description Login a user by email and password
 * @returns The token that authorize the user to make api calls
 */
export const loginUser = ({ email, password }: User) =>
  axios
    .post(
      API_URL.Login,
      { email, password },
      {
        headers: DEFAULT_HEADERS.headers,
      },
    )
    .then((response) => {
      const token = response.data.data.token
      const user = response.data.data.user
      localStorage.setItem('userToken', token)
      localStorage.setItem('user', user)
      axios.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
      }
      return response.data
    })
    .catch((error) => {
      const response = error.response
      return response
    })

/**
 *
 * @description Api call that gets user info
 * @returns
 */
export const getUser = () =>
  axios
    .get(API_URL.UserInfo)
    .then((response) => response.data)
    .catch((error) => error.data)

/**
 *
 * @param id
 * @description Api call that deletes a routine in the API
 */
export const deleteRoutine = (id: number) => {
  axios
    .delete(API_BASE_URL.ROUTINE, {
      data: { id },
      headers: DEFAULT_HEADERS.headers,
    })
    .then((response) => response.data)
    .catch((error) => error.data)
}

export const createRoutine = ({ name, description, published }: Routine) =>
  axios
    .post(
      API_BASE_URL.ROUTINE,
      {
        name,
        description,
        published,
      },
      {
        headers: DEFAULT_HEADERS.headers,
      },
    )
    .then((response) => response.data)
    .catch((error) => error.data)

export const getAllPublishedRoutines = () =>
  axios
    .get(API_URL.publishedRoutines)
    .then((response) => response.data)
    .catch((error) => error.data)
