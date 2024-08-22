import { RouterProvider } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'

import { getRouter } from '@router'

import 'primereact/resources/themes/md-light-indigo/theme.css'

function App() {
  return (
    <PrimeReactProvider>
      <RouterProvider router={getRouter()}></RouterProvider>
    </PrimeReactProvider>
  )
}

export default App
