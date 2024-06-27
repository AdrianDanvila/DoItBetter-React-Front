import { Outlet } from 'react-router-dom'

export const PublicLayout = () => (
  <>
    <main>
      <div className="outlet-container">
        <Outlet />
      </div>
    </main>
  </>
)
