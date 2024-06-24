import { RouterProvider } from 'react-router-dom'

import { getRouter } from '@router'

function App() {
  return (
    <>
      <RouterProvider router={getRouter()}></RouterProvider>
    </>
  )
}

export default App
