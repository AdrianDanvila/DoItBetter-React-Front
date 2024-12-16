import { createContext, RefObject, Suspense, useRef } from 'react'
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
        <Suspense fallback={<div>a</div>}>
          <RouterProvider router={getRouter()}></RouterProvider>
        </Suspense>
      </toastContext.Provider>
    </PrimeReactProvider>
  )
}

export default App
