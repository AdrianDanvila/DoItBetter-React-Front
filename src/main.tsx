import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import axios from 'axios'

import { index } from '@store'

import { BASE_URL } from '@constants/server.ts'

import './i18n'

import '@styles/main.scss'

import App from '@/App.tsx'

axios.defaults.baseURL = BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={index}>
    <App />
  </Provider>,
)
