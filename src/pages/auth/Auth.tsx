import { useEffect } from 'react'

import logo from '@assets/logo.png'

import './auth.scss'

import { autoAuth } from '@/api/services'
import { LoginForm } from '@/components/auth/loginForm/LoginForm'
import { RegisterForm } from '@/components/auth/registerForm/RegisterForm'
import { Header } from '@/components/privateLayout/header/Header'
import { ROUTE_PATH } from '@/router/constants'

export const Auth = () => {
  useEffect(() => {
    const autoAuth2 = async () => {
      await autoAuth()
    }
    autoAuth2()
  }, [])
  return (
    <section className="auth-container">
      <Header />
      <section className="auth-container__form">
        <img
          className="h-20 m-10"
          src={logo}
        />
        {window.location.pathname.includes(ROUTE_PATH.login) && <LoginForm />}
        {window.location.pathname.includes(ROUTE_PATH.register) && (
          <RegisterForm />
        )}
      </section>
    </section>
  )
}
