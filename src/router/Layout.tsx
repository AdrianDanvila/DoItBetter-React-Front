import { Outlet } from 'react-router-dom'

export const Layout = () => (
  <>
    <main>
      <div className="outlet-container">
        <Outlet />
      </div>
    </main>
  </>
)
