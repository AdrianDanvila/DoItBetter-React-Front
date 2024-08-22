import { Outlet } from 'react-router-dom'

import './public-layout.scss'

export const PublicLayout = () => (
  <main>
    <div className="outlet-container">
      <Outlet />
    </div>
  </main>
)
