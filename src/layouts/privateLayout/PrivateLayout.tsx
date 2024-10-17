import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ExitIcon, RowsIcon } from '@radix-ui/react-icons'

import './private-layout.scss'

import { axios } from '@/api/axios'
import { testToken } from '@/api/services'
import { Header } from '@/components/privateLayout/header/Header'
import { NavBar } from '@/components/privateLayout/navbar/NavBar'
import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity } from '@/components/shared/button/types'
import { Card } from '@/components/shared/card/Card'
import { OverlayPanel } from '@/components/shared/overlayPanel/OverlayPanel'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { ROUTE_PATH } from '@/router/constants'
import { getRoutines } from '@/store/routinesSlice'
import { initialize } from '@/store/userSlice'

export const PrivateLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.user)

  useEffect(() => {
    dispatch(initialize())
    dispatch(getRoutines())

    const asyncTestToken = async () => {
      if (!(await testToken())) {
        localStorage.removeItem('userToken')
        navigate(ROUTE_PATH.login)
      }
    }
    asyncTestToken()
  }, [dispatch, navigate])

  return (
    <main className="main-container">
      <NavBar
        isOpen={isNavOpen}
        onHide={() => setIsNavOpen(false)}
      />

      <section className="section-container">
        <Header>
          <Button
            icon={<ExitIcon className="icon" />}
            className="header-container__button"
            onClick={() => {
              localStorage.setItem('userToken', '0')
              axios.defaults.headers.common = {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`,
              }
              navigate(ROUTE_PATH.home)
            }}
            severity={ButtonSeverity.Primary}
          />

          <OverlayPanel
            activationComponent={
              <img
                src={`http://localhost:8081/uploads/${user.profilePictureName}`}
                className=" w-10 h-10 rounded-full mx-2"
              />
            }>
            <Card title="hola" />
          </OverlayPanel>
          <Button
            severity={ButtonSeverity.Primary}
            icon={<RowsIcon className="icon" />}
            className="header-container__button header-container__button__nav "
            onClick={() => setIsNavOpen(true)}
          />
        </Header>
        <Outlet />
      </section>
    </main>
  )
}
