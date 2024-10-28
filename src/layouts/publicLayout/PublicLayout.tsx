import { Outlet } from 'react-router-dom'

import './public-layout.scss'

export const PublicLayout = () => (
  <div className="outlet-container w-screen">
    <Outlet />
  </div>
)
