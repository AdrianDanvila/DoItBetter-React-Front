import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import axios from 'axios'
import { PrimeReactProvider } from 'primereact/api'

import { index } from '@store'

import { BASE_URL } from '@constants/server.ts'

import './i18n'

import '@styles/main.scss'

import App from '@/App.tsx'

axios.defaults.baseURL = BASE_URL

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider>
    <Provider store={index}>
      <App />
    </Provider>
    ,
  </PrimeReactProvider>,
)
