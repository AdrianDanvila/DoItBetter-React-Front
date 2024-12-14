import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://doitbetter-spring-back.onrender.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

axiosInstance.interceptors.request.use()

export { axiosInstance as axios }
