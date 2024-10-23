import { Outlet } from 'react-router-dom'

import './public-layout.scss'

export const PublicLayout = () => (
  <main className="w-screen">
    <div className="outlet-container w-screen">
      <Outlet />
    </div>
  </main>
)
