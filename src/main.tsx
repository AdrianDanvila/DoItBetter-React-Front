import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import axios from 'axios'

import { index } from '@store'

import { BASE_URL } from '@constants/server.ts'

import './i18n'

import { SidebarProvider } from './components/ui/sidebar'

import '@styles/main.scss'

import App from '@/App.tsx'

axios.defaults.baseURL = BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// eslint-disable-next-line no-constant-condition
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken')
    if (token != null) config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error),
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <SidebarProvider className="w-full h-full">
    <Provider store={index}>
      <App />
    </Provider>
  </SidebarProvider>,
)
