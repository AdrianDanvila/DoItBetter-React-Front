import { Outlet } from 'react-router-dom'

import { Header } from '@/components/publicLayout/header/Header'
import { NavBar } from '@/components/publicLayout/navbar/NavBar'
export const PrivateLayout = () => (
  <main className="main-container">
    <NavBar />
    <div className="section-container">
      <Header />
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  </main>
)
