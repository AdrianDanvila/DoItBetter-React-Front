import { startTransition, Suspense, useEffect } from 'react'

import logo from '@assets/logo.png'

import './auth.scss'

import { autoAuth } from '@/api/services'
import { LoginForm } from '@/components/auth/loginForm/LoginForm'
import { RegisterForm } from '@/components/auth/registerForm/RegisterForm'
import { Header } from '@/components/privateLayout/header/Header'
import { ROUTE_PATH } from '@/router/constants'

const Auth = () => {
  useEffect(() => {
    const autoAuth2 = async () => {
      try {
        await autoAuth()

        // If autoAuth updates state or context, wrap it in startTransition
        startTransition(() => {
          // Example: Update user state or context here
        })
      } catch (error) {
        /* empty */
      }
    }

    autoAuth2()
  }, [])
  return (
    <Suspense fallback={<div>loading</div>}>
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
    </Suspense>
  )
}

export default Auth
