import { RouterProvider } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'

import { getRouter } from '@router'

function App() {
  return (
    <PrimeReactProvider>
      <RouterProvider router={getRouter()}></RouterProvider>
    </PrimeReactProvider>
  )
}

export default App
