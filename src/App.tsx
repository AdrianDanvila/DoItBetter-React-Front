import { createContext, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'

import { getRouter } from '@router'

import 'primereact/resources/themes/md-light-indigo/theme.css'

import { aContext } from './constants'

function App() {
  const [userInfo, setUserInfo] = useState('hola')
  return (
    <PrimeReactProvider>
      <aContext.Provider value={userInfo}>
        <RouterProvider router={getRouter()}></RouterProvider>
      </aContext.Provider>
    </PrimeReactProvider>
  )
}

export default App
