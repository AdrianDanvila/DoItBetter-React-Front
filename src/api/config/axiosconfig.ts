import axios from 'axios'

// Configuración global de Axios
axios.defaults.baseURL = import.meta.env.REACT_APP_API_URL // Usa la URL base desde las variables de entorno o una URL por defecto
axios.defaults.headers.post['Content-Type'] = 'application/json' // Configura el tipo de contenido para solicitudes POST
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*' // Permite solicitudes desde cualquier origen

// Interceptor de solicitudes
axios.interceptors.request.use(
  (config) => {
    // Agregar el token de autorización a los encabezados si existe en el localStorage
    const token = localStorage.getItem('userToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config // Devuelve la configuración de la solicitud modificada
  },
  (error) => Promise.reject(error), // Devuelve el error de la solicitud si ocurre
)
