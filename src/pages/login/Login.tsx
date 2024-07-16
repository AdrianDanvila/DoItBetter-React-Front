import { useTranslation } from 'react-i18next'

import './login.scss'

import { LoginForm } from '@/components/login/loginForm/LoginForm'
import { Header } from '@/components/privateLayout/header/Header'
import { Card } from '@/components/shared/card/Card'

export const Login = () => {
  const { t } = useTranslation()

  return (
    <section className="login-container">
      <Header></Header>
      <Card
        title={t('login.title')}
        className="login-container__form">
        <LoginForm></LoginForm>
      </Card>
    </section>
  )
}
