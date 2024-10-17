//Define here the needed function to call the backend

import axios from 'axios'

import { API_BASE_URL, API_URL, DEFAULT_HEADERS } from './constants'

import { ROUTE_PATH } from '@/router/constants'
import { Routine, RoutineExercise, User } from '@/types/interfaces'

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
      localStorage.setItem('userToken', token)
      return response.data
    })
    .catch((error) => {
      const response = error.response
      return response
    })

export const getUserInfo = () =>
  axios
    .get(API_URL.me, {
      headers: DEFAULT_HEADERS.headers,
    })
    .then((response) => response.data)
    .catch((error) => {
      const response = error.response
      return response
    })

export const logout = () => {
  localStorage.removeItem('userToken')
  sessionStorage.removeItem('userinfo')
  axios.defaults.headers.common['Authorization'] =
    `Bearer ${localStorage.getItem('userToken')}`

  axios.defaults.headers.common = {
    Authorization: `Bearer ${localStorage.getItem('userToken')}`,
  }
  window.location.href = ROUTE_PATH.home
}

export const uploadImage = (file: FormData, id: number | undefined) =>
  axios
    .post(`${API_URL.uploadImage}/${id}`, file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response.data)
    .catch((error) => error.data)

export const uploaRoutinedImage = (file: FormData, id: number) =>
  axios
    .post(`${API_URL.uploaRoutinedImage}/${id}`, file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response.data)
    .catch((error) => error.data)

//
export const getRoutinesByUserId = (userId: number) =>
  axios
    .get(`${API_BASE_URL.ROUTINE}`, {
      params: {
        userId,
      },
    })
    .then((response) => response.data)
    .catch((error) => error.data)

export const getUserRoutines = () =>
  axios
    .get(`${API_BASE_URL.ROUTINE}/me`)
    .then((response) => response.data)
    .catch((error) => error.data)

export const deleteRoutineByid = (id: number) =>
  axios
    .delete(`${API_BASE_URL.ROUTINE}/${id}`)
    .then((response) => response.data)
    .catch((error) => error.data)

export const copyRoutineById = (id: number) =>
  axios
    .post(`${API_BASE_URL.ROUTINE}/copy/${id}`)
    .then((response) => response.data)
    .catch((error) => error.data)

export const createNewRoutine = ({
  name,
  description,
  published = false,
}: Routine) =>
  axios
    .post(API_BASE_URL.ROUTINE, {
      name,
      description,
      published,
    })
    .then((response) => response.data)
    .catch((error) => error.data)

export const addRoutineExercise = (
  routineId: number,
  { id, reps, sets, weight }: RoutineExercise,
) =>
  axios
    .post(`${API_BASE_URL.ROUTINE}/${routineId}/exercises`, {
      id,
      reps,
      sets,
      weight,
    })
    .then((response) => response.data)
    .catch((error) => error.data)

export const deleteRoutineExercise = (
  routineId: number,
  { id, reps, sets, weight }: RoutineExercise,
) =>
  axios
    .delete(`${API_BASE_URL.ROUTINE}/${routineId}/exercises`, {
      data: {
        id,
        reps,
        sets,
        weight,
      },
    })
    .then((response) => response.data)
    .catch((error) => error.data)

export const getRoutineExercises = (routineId: number) =>
  axios
    .get(`${API_BASE_URL.ROUTINE}/${routineId}/exercises`)
    .then((response) => response.data)
    .catch((error) => error.data)

export const toggleRoutinePublished = (routineId: number) =>
  axios
    .post(`${API_BASE_URL.ROUTINE}/${routineId}`)
    .then((response) => response.data)
    .catch((error) => error.data)

export const getAllPublishedRoutines = () =>
  axios
    .get(API_URL.publishedRoutines)
    .then((response) => response.data)
    .catch((error) => error.data)

//
export const testToken = () =>
  axios
    .get(API_URL.testToken, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('userToken') },
    })
    .then(() => true)
    .catch(() => false)

export const autoAuth = async () => {
  if (await testToken().then((data) => data)) {
    axios.defaults.headers.common['Authorization'] =
      `Bearer ${localStorage.getItem('userToken')}`
    window.location.href = ROUTE_PATH.main
  } else {
    localStorage.removeItem('userToken')
  }
}

// eslint-disable-next-line no-confusing-arrow
export const autoAuth2 = async () =>
  (await testToken().then((data) => data))
    ? () => {
        axios.defaults.headers.common['Authorization'] =
          `Bearer ${localStorage.getItem('userToken')}`
        window.location.href = ROUTE_PATH.main
      }
    : localStorage.removeItem('userToken')

export const apiErrorHandler = (error: number) => {
  switch (error) {
    case 403:
      window.location.href = ROUTE_PATH.login
      break

    default:
      break
  }
}
