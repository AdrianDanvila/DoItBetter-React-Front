import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'localhost:8081',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

axiosInstance.interceptors.request.use()

export { axiosInstance as axios }
