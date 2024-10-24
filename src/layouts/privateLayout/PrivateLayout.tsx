import { useEffect, useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { t } from 'i18next'
import { ExitIcon, RowsIcon } from '@radix-ui/react-icons'

import './private-layout.scss'

import { axios } from '@/api/axios'
import { testToken } from '@/api/services'
import { Header } from '@/components/privateLayout/header/Header'
import { NAVBAR_LINKS } from '@/components/privateLayout/navbar/constants'
import { NavBar } from '@/components/privateLayout/navbar/NavBar'
import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity } from '@/components/shared/button/types'
import { Card } from '@/components/shared/card/Card'
import { OverlayPanel } from '@/components/shared/overlayPanel/OverlayPanel'
import { AppSidebar } from '@/components/ui/AppSidebar'
import {
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { ROUTE_PATH } from '@/router/constants'
import { getRoutines } from '@/store/routinesSlice'
import { initialize } from '@/store/userSlice'

export const PrivateLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.user)
  const { toggleSidebar } = useSidebar()
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
    <>
      <div className="flex md:flex-row w-full">
        <AppSidebar />

        <main className="main-container">
          <section className="section-container w-screen">
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
              <SidebarTrigger className="sticky  bg-transparent " />
            </Header>
            <h2 className="text-5xl md:text-6xl px-10 gradient-title pt-2 md:pt-0 text-center md:text-left w-full gradient-title">
              {t(
                NAVBAR_LINKS.find(
                  (item) => item.href === window.location.pathname,
                )?.text || 'Dashboard',
              )}
            </h2>
            <Outlet />
          </section>
        </main>
      </div>
    </>
  )
}
