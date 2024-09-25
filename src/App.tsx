import { createContext, RefObject, useRef } from 'react'
import { RouterProvider } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'
import { Toast } from 'primereact/toast'

import { getRouter } from '@router'

import 'primereact/resources/themes/md-light-indigo/theme.css'
export const toastContext = createContext<RefObject<Toast> | null>(null)

function App() {
  const toast = useRef<Toast>(null)
  return (
    <PrimeReactProvider>
      <Toast ref={toast} />
      <toastContext.Provider value={toast}>
        <RouterProvider router={getRouter()}></RouterProvider>
      </toastContext.Provider>
    </PrimeReactProvider>
  )
}

export default App
