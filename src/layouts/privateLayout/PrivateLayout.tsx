import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet, useNavigate } from 'react-router-dom'
import { ExitIcon } from '@radix-ui/react-icons'

import './private-layout.scss'

import { axios } from '@/api/axios'
import { testToken } from '@/api/services'
import { Header } from '@/components/privateLayout/header/Header'
import { NAVBAR_LINKS } from '@/components/privateLayout/navbar/constants'
import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity, ButtonType } from '@/components/shared/button/types'
import { Card } from '@/components/shared/card/Card'
import { OverlayPanel } from '@/components/shared/overlayPanel/OverlayPanel'
import { AppSidebar } from '@/components/ui/AppSidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { BASE_URL } from '@/constants/server'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { ROUTE_PATH } from '@/router/constants'
import { initialize } from '@/store/userSlice'

export const PrivateLayout = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.user)
  const { t } = useTranslation()
  const path =
    NAVBAR_LINKS.find((item) => item.href === window.location.pathname)?.text ||
    'Dashboard'

  useEffect(() => {
    dispatch(initialize())

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
      <div className="flex md:flex-row ">
        <AppSidebar />
        <main className="main-container">
          <section className="section-container w-screen">
            <Header>
              <Button
                type={ButtonType.Button}
                icon={<ExitIcon className="icon" />}
                className="header-container__button shadow-none"
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
                    src={`${BASE_URL}/uploads/${user.profilePictureName}`}
                    className=" w-7 h-7 rounded-full mx-2"
                  />
                }>
                <Card title="hola" />
              </OverlayPanel>
              <SidebarTrigger className="sticky bg-transparent " />
            </Header>
            <h2 className="text-5xl md:text-6xl px-10 gradient-title pt-2 md:pt-0 text-center md:text-left w-full gradient-title">
              {t(path)}
            </h2>
            <Outlet />
          </section>
        </main>
      </div>
    </>
  )
}
