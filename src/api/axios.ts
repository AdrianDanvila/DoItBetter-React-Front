import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://',
})

axiosInstance.interceptors.request.use(
  (config) => {
    config.auth = {
      username: 'foo',
      password: 'bar',
    }
    return config
  },
  (error) => Promise.reject(error),
)

export { axiosInstance as axios }
