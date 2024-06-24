import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import axios from 'axios'
import { Theme } from '@radix-ui/themes'

import { index } from '@store'

import { BASE_URL } from '@constants/server.ts'

import '@styles/theme.scss'
import '@styles/main.scss'

import App from '@/App.tsx'

axios.defaults.baseURL = BASE_URL

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={index}>
    <Theme
      accentColor="red"
      grayColor="gray">
      <App />
    </Theme>
  </Provider>,
)
